# core_engine/web_hook.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from engine import TJMOntologyEngine
from edge_motifs import EdgeMotifTracker

app = FastAPI(title="TJM Fractal Light Hook")

# Enable CORS so your GitHub Pages frontend can securely talk to your backend server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Connects your live frontend to this engine
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize the pristine model engine once in memory
engine = TJMOntologyEngine()
tracker = EdgeMotifTracker()

class MetaphorRequest(BaseModel):
    material_axis: str
    eschaton_axis: str

@app.post("/v1/vessel/align")
async def align_vessel_stream(request: MetaphorRequest):
    """
    Live webhook endpoint. Intercepts custom human inputs, processes 
    the blind maximum, and outputs the graph coordinates for the D3 birth canal.
    """
    try:
        # 1. Run the dynamic metaphor synthesis tracking the Mr. K narrative
        synthesized_metaphor = engine.simulate_vessel_ascent(
            request.material_axis, 
            request.eschaton_axis
        )
        
        # 2. Extract live activation gravity logs for layer 24
        gravity_data = engine.calculate_semantic_gravity(synthesized_metaphor, layer_idx=24)
        
        # 3. Format the control flow graph for the frontend canvas
        graph_data = tracker.trace_control_flow(gravity_data)
        
        return {
            "status": "ENERGY_TRANSFERRED",
            "metaphor": synthesized_metaphor,
            "graph": graph_data
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Vessel destabilized: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    # Boots the live web server on port 8000
    uvicorn.run(app, host="0.0.0.0", port=8000)
