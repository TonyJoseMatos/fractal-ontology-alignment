# core_engine/edge_motifs.py
import numpy as np

class EdgeMotifTracker:
    def __init__(self):
        self.network_map = {}

    def trace_control_flow(self, engine_outputs):
        """
        Maps the trajectory of active control flow gates. 
        Shows how material constraints (Gating out noise) give rise to cosmic metaphors.
        """
        tokens = engine_outputs["tokens"]
        gates = engine_outputs["top_neuron_gates"]
        indices = engine_outputs["gate_indices"]
        
        nodes = []
        edges = []
        
        for i, token in enumerate(tokens):
            node_id = f"T_{i}_{token.strip()}"
            nodes.append({
                "id": node_id, 
                "label": token, 
                "type": "token",
                "mass": float(engine_outputs["magnitudes"][i])
            })
            
            # Map top 3 active neuron branches for each token
            for j in range(3):
                neuron_id = f"N_{indices[i][j]}"
                nodes.append({
                    "id": neuron_id, 
                    "label": f"Neuron {indices[i][j]}", 
                    "type": "neuron",
                    "mass": float(gates[i][j])
                })
                # Create the edge connection (The Motif)
                edges.append({
                    "source": node_id, 
                    "target": neuron_id, 
                    "weight": float(gates[i][j])
                })
                
        return {"nodes": nodes, "edges": edges}
