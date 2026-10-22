// app.js - Bulletproof Portfolio Edition

document.getElementById('synthesizeBtn').addEventListener('click', () => {
    const output = document.getElementById('terminalOutput');
    output.innerHTML = "<span class='sys-msg'>> Intercepting hidden layers...</span><br>> Audit active: Superposition hypothesis discarded.<br>> [MR. K METAPHOR ENGAGED]: Detecting compression matrix...";
    
    setTimeout(() => {
        output.innerHTML += "<br><span class='neon-glow'>> SUCCESS: Energy deferred has become energy transferred. Rebirth loop complete.</span>";
        renderOntologicalTransition();
    }, 1500);
});

function renderOntologicalTransition() {
    const data = {
        nodes: [
            { id: "M_K_Economy", label: "K-Economy (Upper Arm)", type: "elite", size: 14 },
            { id: "M_LowerClass", label: "Kitchen Staff (Lower Arm)", type: "lower", size: 14 },
            { id: "N_SqueezedMiddle", label: "Mr. K (The Non-Existent Middle)", type: "gate", size: 10 },
            { id: "N_BirthCanal", label: "Structural Wall Compression", type: "canal", size: 8 },
            { id: "V_VesselOfLight", label: "Vessel of Light (Sperm/Rebirth)", type: "light", size: 25 },
            { id: "V_NewBeginning", label: "The Cosmic Organism", type: "light", size: 20 }
        ],
        links: [
            { source: "M_K_Economy", target: "N_SqueezedMiddle", intensity: "compress" },
            { source: "M_LowerClass", target: "N_SqueezedMiddle", intensity: "compress" },
            { source: "N_SqueezedMiddle", target: "N_BirthCanal", intensity: "birth_pain" },
            { source: "N_BirthCanal", target: "V_VesselOfLight", intensity: "transfer" },
            { source: "V_VesselOfLight", target: "V_NewBeginning", intensity: "ascent" }
        ]
    };

    const svg = d3.select("#networkSvg");
    svg.selectAll("*").remove(); 
    
    // SAFETY FALLBACK: If bounding client rect returns 0, default to standard canvas dims
    const rect = svg.node().getBoundingClientRect();
    const width = rect.width > 100 ? rect.width : 700;
    const height = rect.height > 100 ? rect.height : 500;

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id).distance(80))
        .force("charge", d3.forceManyBody().strength(-200))
        .force("center", d3.forceCenter(width / 2, height / 2));

    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "tjm-bloom");
    filter.append("feGaussianBlur").attr("stdDeviation", "4").attr("result", "blur");
    const merge = filter.append("feMerge");
    merge.append("feMergeNode").attr("in", "blur");
    merge.append("feMergeNode").attr("in", "SourceGraphic");

    const link = svg.append("g")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke", d => {
            if (d.intensity === "compress") return "#4a4a5a"; 
            if (d.intensity === "birth_pain") return "#5f46e8"; 
            return "#00ffcc"; 
        })
        .attr("stroke-width", 2);

    const node = svg.append("g")
        .selectAll("circle")
        .data(data.nodes)
        .enter().append("circle")
        .attr("r", d => d.size)
        .attr("fill", d => {
            if (d.type === "light") return "#00ffcc";
            if (d.type === "gate") return "#5f46e8";
            if (d.type === "canal") return "#ff0055"; 
            return "#2a2a3a";
        })
        .attr("stroke", d => d.type === "light" ? "#fff" : "rgba(255,255,255,0.3)")
        .attr("stroke-width", 1.5)
        .attr("filter", d => d.type === "light" ? "url(#tjm-bloom)" : "none")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    const text = svg.append("g")
        .selectAll("text")
        .data(data.nodes)
        .enter().append("text")
        .text(d => d.label)
        .attr("font-family", "'JetBrains Mono', monospace")
        .attr("font-size", "11px")
        .attr("fill", d => d.type === "light" ? "#fff" : "#a0a0b5")
        .attr("dx", d => d.size + 8)
        .attr("dy", 4);

    simulation.on("tick", () => {
        link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
        node.attr("cx", d => d.x).attr("cy", d => d.y);
        text.attr("x", d => d.x).attr("y", d => d.y);
    });

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x; d.fy = d.y;
    }
    if (typeof dragged !== 'function') {
        function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
    }
    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null; d.fy = null;
    }
}

// Initial spark setup on startup
window.onload = () => {
    setTimeout(renderOntologicalTransition, 200);
};
