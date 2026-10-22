// app.js - Refined Aesthetic Edition for GIGADREAM OS 

document.getElementById('synthesizeBtn').addEventListener('click', () => {
    const output = document.getElementById('terminalOutput');
    const metaphorBox = document.getElementById('metaphorOutput');
    const inputA = document.getElementById('axisA').value;
    const inputB = document.getElementById('axisB').value;
    
    output.innerHTML = "<span class='sys-msg'>> Intercepting layer 24 weights...</span><br>> Compiling recursive generalization offshoots...<br>> Constricting middle ground to zero...";
    metaphorBox.classList.add('loading-pulse');
    
    setTimeout(() => {
        output.innerHTML += "<br><span class='neon-glow'>> SUCCESS: Vessel alignment vector established.</span>";
        metaphorBox.classList.remove('loading-pulse');
        
        // Dynamically alter output based on user inputs to show real updates
        metaphorBox.innerHTML = `The structural configuration of the system processing <strong>"${inputA}"</strong> compresses completely. The network rejects superposition; instead, the active circuits route this compression fractally into the framework of <strong>"${inputB}"</strong>. Like the traveling magician breaking through the structural hotel wallpaper into the living organism, the human vessel is compressed through existential labor, transforming deferred energy into an underwater vertical ascent toward another beginning.`;
        
        renderOntologicalTransition();
    }, 1200);
});

function renderOntologicalTransition() {
    const data = {
        nodes: [
            { id: "M_K_Economy", label: "Upper Arm Target", type: "elite", size: 14 },
            { id: "M_LowerClass", label: "Lower Arm Target", type: "lower", size: 14 },
            { id: "N_SqueezedMiddle", label: "Mr. K [The Erased Middle]", type: "gate", size: 11 },
            { id: "N_BirthCanal", label: "Compression Canal", type: "canal", size: 9 },
            { id: "V_VesselOfLight", label: "Vessel of Light [Spark]", type: "light", size: 26 },
            { id: "V_NewBeginning", label: "The Cosmic Rebirth", type: "light", size: 18 }
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
    
    const rect = svg.node().getBoundingClientRect();
    const width = rect.width > 100 ? rect.width : 800;
    const height = rect.height > 100 ? rect.height : 600;

    const simulation = d3.forceSimulation(data.nodes)
        .force("link", d3.forceLink(data.links).id(d => d.id).distance(110))
        .force("charge", d3.forceManyBody().strength(-350))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("quantum_gravity", d3.forceY(d => {
            if (d.type === "light") return height / 3.8;
            if (d.type === "gate" || d.type === "canal") return height / 2;
            return (2.8 * height) / 4;
        }).strength(0.35));

    const defs = svg.append("defs");
    
    // Cyber neon bloom filter
    const filter = defs.append("filter").attr("id", "tjm-bloom-filter");
    filter.append("feGaussianBlur").attr("stdDeviation", "5").attr("result", "blur");
    const merge = filter.append("feMerge");
    merge.append("feMergeNode").attr("in", "blur");
    merge.append("feMergeNode").attr("in", "SourceGraphic");

    const link = svg.append("g")
        .selectAll("line")
        .data(data.links)
        .enter().append("line")
        .attr("stroke", d => {
            if (d.intensity === "compress") return "#2c2c3d"; 
            if (d.intensity === "birth_pain") return "#6346e9"; 
            return "#00ffcc"; 
        })
        .attr("stroke-opacity", 0.8)
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", d => d.intensity === "ascent" ? "4,4" : "none");

    const node = svg.append("g")
        .selectAll("circle")
        .data(data.nodes)
        .enter().append("circle")
        .attr("r", d => d.size)
        .attr("fill", d => {
            if (d.type === "light") return "#00ffcc";
            if (d.type === "gate") return "#6346e9";
            if (d.type === "canal") return "#ff0055"; 
            return "#0f0f16";
        })
        .attr("stroke", d => {
            if (d.type === "light") return "#fff";
            if (d.type === "gate") return "rgba(142, 114, 255, 0.4)";
            return "rgba(255, 255, 255, 0.08)";
        })
        .attr("stroke-width", d => d.type === "light" ? 3 : 1.5)
        .attr("filter", d => d.type === "light" ? "url(#tjm-bloom-filter)" : "none")
        .call(d3.drag()
            .on("start", (event, d) => {
                if (!event.active) simulation.alphaTarget(0.3).restart();
                d.fx = d.x; d.fy = d.y;
            })
            .on("drag", (event, d) => {
                d.fx = event.x; d.fy = event.y;
            })
            .on("end", (event, d) => {
                if (!event.active) simulation.alphaTarget(0);
                d.fx = null; d.fy = null;
            }));

    const text = svg.append("g")
        .selectAll("text")
        .data(data.nodes)
        .enter().append("text")
        .text(d => d.label)
        .attr("font-family", "'JetBrains Mono', monospace")
        .attr("font-size", "10px")
        .attr("letter-spacing", "1px")
        .attr("fill", d => d.type === "light" ? "#fff" : "#7c7c93")
        .attr("dx", d => d.size + 10)
        .attr("dy", 4);

    simulation.on("tick", () => {
        link.attr("x1", d => d.source.x).attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x).attr("y2", d => d.target.y);
        node.attr("cx", d => d.x).attr("cy", d => d.y);
        text.attr("x", d => d.x).attr("y", d => d.y);
    });
}

// Ensure execution triggers correctly across both mobile and layout resizes
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(renderOntologicalTransition, 300);
});
window.addEventListener('resize', renderOntologicalTransition);
