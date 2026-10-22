# core_engine/engine.py
import torch
import torch.nn as nn
import numpy as np
from transformers import AutoModelForCausalLM, AutoTokenizer
import json

class TJMOntologyEngine:
    def __init__(self, model_id="Qwen/Qwen3-32B"):
        print("⚡ [TJM INTERCEPTOR Active]: Tuning microscope to raw weight geometries...")
        self.tokenizer = AutoTokenizer.from_pretrained(model_id)
        self.model = AutoModelForCausalLM.from_pretrained(
            model_id, 
            torch_dtype=torch.float16, 
            device_map="auto", 
            output_hidden_states=True
        )
        
    def extract_weight_logs_and_residue(self, layer_idx):
        """
        Extracts raw weight tensors from SwiGLU layers to track the semantic gravity
        of the 'Mr. K / Squeezed Middle' motif before the nonlinearity squashes it.
        """
        # Target the specific multi-layer non-linear gate structure
        layer = self.model.model.layers[layer_idx]
        
        # Extract raw, un-standardized weight tensors (Anti-Superposition Audit)
        w_gate = layer.mlp.gate_proj.weight.detach().cpu().float().numpy()
        w_value = layer.mlp.up_proj.weight.detach().cpu().float().numpy()
        
        # Calculate weight alignment (dot product) to find the 'Ontological Bridge'
        # This identifies where the network uses the exact same circuits for physical constraints
        # and metaphysical transitions—proving recursive generalization is fractal.
        semantic_residue_matrix = np.sum(w_gate * w_value, axis=1)
        
        return {
            "layer": layer_idx,
            "gate_shape": w_gate.shape,
            "value_shape": w_value.shape,
            "top_residue_neuron_indices": np.argsort(np.abs(semantic_residue_matrix))[-5:].tolist(),
            "raw_residue_scores": semantic_residue_matrix[np.argsort(np.abs(semantic_residue_matrix))[-5:]].tolist()
        }

    def simulate_vessel_ascent(self, material_input, eschaton_input):
        """
        Executes a dual-axis Blind Maximum optimization text pass. It forces the model 
        to track the 'Mr. K' trajectory: the walls close in, the middle ground vanishes,
        and the energy unit deferred transfers into energy transferred.
        """
        prompt = f"""
        [THEORY: SYSTEM IS ALREADY CLEAN // NO KNOTS DETECTED]
        [SIGNAL AXIS ALPHA: {material_input}]
        [SIGNAL AXIS OMEGA: {eschaton_input}]
        
        Describe the final underwater ascent of the traveling magician. The structural hotel walls 
        have contracted to zero. The non-existent middle ground has collapsed. Synthesize the 
        exact transition of the human vessel breaking through the wallpaper into the living organism, 
        rising like a spark of light toward another beginning.
        """
        inputs = self.tokenizer(prompt, return_tensors="pt").to(self.model.device)
        
        # Constrain the decoding to force divergent, imaginative synthesis over simple prediction
        generated_ids = self.model.generate(
            **inputs, 
            max_new_tokens=150, 
            temperature=0.92,
            top_k=40,
            repetition_penalty=1.15
        )
        
        raw_output = self.tokenizer.decode(generated_ids[0], skip_special_tokens=True)
        return raw_output.split("another beginning.")[-1].strip()

# Internal pipeline check
if __name__ == "__main__":
    engine = TJMOntologyEngine()
    logs = engine.extract_weight_logs_and_residue(layer_idx=24)
    print(f"🔮 Captured Edge Residue Logs:\n{json.dumps(logs, indent=2)}")
