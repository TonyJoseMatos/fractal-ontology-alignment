// Append this fetch logic directly to your existing button event listener in dashboard/app.js
document.getElementById('synthesizeBtn').addEventListener('click', async () => {
    const axisA = document.getElementById('axisA').value;
    const axisB = document.getElementById('axisB').value;
    const output = document.getElementById('terminalOutput');
    
    try {
        // Attempt to ping Tony's live webhook server
        const response = await fetch('http://localhost:8000/v1/vessel/align', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ material_axis: axisA, eschaton_axis: axisB })
        });
        
        if (response.ok) {
            const data = await response.json();
            output.innerHTML = `> Live Metaphor Synthesized:<br><span class='neon-glow'>"${data.metaphor}"</span>`;
            // Re-render graph using the live server's tracked edge motifs
            renderSimulationGraph(data.graph); 
        } else {
            throw new Error("Local server offline. Defaulting to native offline vessel memory.");
        }
    } catch (err) {
        // Safe Fallback: Keeps the UI working perfectly even on a static GitHub page!
        output.innerHTML = `> Static Mode Active.<br><span class='sys-msg'>> ${err.message}</span>`;
        executeOntologicalTransition(); 
    }
});
