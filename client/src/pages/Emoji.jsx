// Emoji.jsx
import React, { useEffect, useState } from "react";

export default function Emoji() {
  const [icons, setIcons] = useState([]);
  const [selected, setSelected] = useState(new Set());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // OpenMoji JSON public
    fetch("https://openmoji.org/data/json/emoji.json")
      .then((r) => r.json())
      .then((data) => {
        // data contient des objets, on mappe sur les infos utiles
        const list = data.map((e) => ({
          slug: e.slug,
          unicode: e.hexcode.toLowerCase(), // ex: "1f600"
          svgUrl: `https://openmoji.org/data/color/svg/${e.hexcode}.svg`,
          emoji: e.emoji
        }));
        setIcons(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  function toggleSelect(url) {
    setSelected((prev) => {
      const copy = new Set(prev);
      if (copy.has(url)) copy.delete(url);
      else copy.add(url);
      return copy;
    });
  }

  function downloadJson() {
    const arr = Array.from(selected);
    const blob = new Blob([JSON.stringify(arr, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "selected-icons.json";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  if (loading) return <div>Chargement...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Galerie d'icônes</h1>

      <div style={{ marginBottom: 12 }}>
        <button onClick={downloadJson} disabled={selected.size === 0}>
          Télécharger sélection ({selected.size})
        </button>
        <button
          onClick={() => setSelected(new Set())}
          style={{ marginLeft: 8 }}
          disabled={selected.size === 0}
        >
          Tout désélectionner
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          gap: 12
        }}
      >
        {icons.map((ic) => (
          <div
            key={ic.svgUrl}
            onClick={() => toggleSelect(ic.svgUrl)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? toggleSelect(ic.svgUrl) : null)}
            style={{
              border: selected.has(ic.svgUrl) ? "3px solid #2563eb" : "1px solid #ddd",
              borderRadius: 8,
              padding: 8,
              textAlign: "center",
              cursor: "pointer",
              userSelect: "none",
              background: "#fff"
            }}
          >
            <img
              src={ic.svgUrl}
              alt={ic.slug}
              style={{ width: 48, height: 48, objectFit: "contain" }}
              onError={(e) => {
                // fallback to unicode char
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent && !parent.querySelector(".emoji-fallback")) {
                  const span = document.createElement("div");
                  span.className = "emoji-fallback";
                  span.style.fontSize = "28px";
                  span.textContent = ic.emoji || "�";
                  parent.appendChild(span);
                }
              }}
            />
            <div style={{ fontSize: 11, marginTop: 6 }}>{ic.slug}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
