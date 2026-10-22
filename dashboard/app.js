// dashboard/app.js - Compiled for TJM Portfolio Deployment

document.getElementById('synthesizeBtn').addEventListener('click', () => {
    const output = document.getElementById('terminalOutput');
    output.innerHTML = "<span class='sys-msg'>> Intercepting hidden layers...</span><br>> Audit active: Superposition hypothesis discarded.<br>> [MR. K METAPHOR ENGAGED]: Detecting compression matrix...";
    
    // Simulate the computational shift through the layers
    setTimeout(() => {
        output.innerHTML += "<br><span class='neon-glow'>> SUCCESS: Energy deferred has become energy transferred. Rebirth loop complete.</span>";
        renderOntologicalTransition();
    }, 1500);
});

function renderOntologicalTransition() {
    // The exact structural map of our conversation: material trap mutating into cosmic release
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
    svg.selectAll("*").remove(); // Purge prior frame
    
    const width = svg.node().getBoundingClientRect().width;
    const height = svg.node().getBoundingClientRect().height;

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id).distance(100))
        .force("charge", d3.forceManyBody().strength(-250))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("quantum_gravity", d3.forceY(d => {
            if (d.type === "light") return height / 4;
            if (d.type === "gate" || d.type === "canal") return height / 2;
            return (3 * height) / 4;
        }).strength(0.3));

    // High-frequency neon bloom filters
    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "tjm-bloom");
    filter.append("feGaussianBlur").attr("stdDeviation", "5").attr("result", "blur");
    const merge = filter.append("feMerge");
    merge.append("feMergeNode").attr("in", "blur");
    merge.append("feMergeNode").attr("in", "SourceGraphic");

    const link = svg.append("g")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke", d => {
            if (d.intensity === "compress") return "#3a3a4c"; 
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
            return "#1a1a26";
        })
        .attr("stroke", d => d.type === "light" ? "#fff" : "rgba(255,255,255,0.1)")
        .attr("stroke-width", d => d.type === "light" ? 3 : 1)
        .attr("filter", d => d.type === "light" ? "url(#tjm-bloom)" : "none");

    const text = svg.append("g")
        .selectAll("text")
        .data(data.nodes)
        .enter().append("text")
        .text(d => d.label)
        .attr("font-family", "'JetBrains Mono', monospace")
        .attr("font-size", "10px")
        .attr("fill", d => d.type === "light" ? "#fff" : "#8a8a9d")
        .attr("dx", d => d.size + 6)
        .attr("dy", 4);

    simulation.on("tick", () => {
        link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
        node.attr("cx", d => d.x).attr("cy", d => d.y);
        text.attr("x", d => d.x).attr("y", d => d.y);
    });
}

// Spark on execution boot
renderOntologicalTransition();
