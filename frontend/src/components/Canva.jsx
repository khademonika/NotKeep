import { Eraser, Pen, Redo2, Trash2, Undo2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CANVAS_COLORS = ["#1E1E1E", "#8A8880", "#B23B3B", "#3B6FB2", "#3B8F5C"];
const STROKE_WIDTHS = [2, 4, 7];

function Canva() {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const [tool, setTool] = useState("pen");
  const [color, setColor] = useState(CANVAS_COLORS[0]);
  const [strokeWidth, setStrokeWidth] = useState(STROKE_WIDTHS[1]);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL();
    setHistory([data]);
    setHistoryIndex(0);
  }, []);

  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: ((clientX - rect.left) / rect.width) * canvas.width,
      y: ((clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const startDraw = (e) => {
    isDrawing.current = true;
    const ctx = canvasRef.current.getContext("2d");
    const { x, y } = getPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e) => {
    if (!isDrawing.current) return;
    const ctx = canvasRef.current.getContext("2d");
    const { x, y } = getPos(e);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = tool === "eraser" ? "#FFFFFF" : color;
    ctx.lineWidth = tool === "eraser" ? strokeWidth * 3 : strokeWidth;
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const endDraw = () => {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    const canvas = canvasRef.current;
    const data = canvas.toDataURL();
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(data);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const restore = (index) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new window.Image();
    img.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    };
    img.src = history[index];
  };

  const undo = () => {
    if (historyIndex <= 0) return;
    const newIndex = historyIndex - 1;
    setHistoryIndex(newIndex);
    restore(newIndex);
  };

  const redo = () => {
    if (historyIndex >= history.length - 1) return;
    const newIndex = historyIndex + 1;
    setHistoryIndex(newIndex);
    restore(newIndex);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const data = canvas.toDataURL();
    const newHistory = [...history.slice(0, historyIndex + 1), data];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  return (
    <div className="mt-6">
      <p className="mb-2 text-[12.5px] font-semibold uppercase tracking-wide text-[#9A988F]">
        Sketch &amp; Diagram
      </p>
      <div className="mb-3 flex flex-wrap items-center gap-2 rounded-xl border border-[#E5E5E5] bg-white p-2">
        <button
          onClick={() => setTool("pen")}
          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 ${
            tool === "pen" ? "bg-[#1E1E1E] text-[#FAF8F5]" : "text-[#4A4A47] hover:bg-[#F5F3EE]"
          }`}
        >
          <Pen className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => setTool("eraser")}
          className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors duration-150 ${
            tool === "eraser" ? "bg-[#1E1E1E] text-[#FAF8F5]" : "text-[#4A4A47] hover:bg-[#F5F3EE]"
          }`}
        >
          <Eraser className="h-3.5 w-3.5" />
        </button>

        <div className="mx-1 h-5 w-px bg-[#E5E5E5]" />

        {CANVAS_COLORS.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className={`h-6 w-6 rounded-full border-2 ${
              color === c ? "border-[#1E1E1E]" : "border-transparent"
            }`}
            style={{ backgroundColor: c }}
          />
        ))}

        <div className="mx-1 h-5 w-px bg-[#E5E5E5]" />

        {STROKE_WIDTHS.map((w) => (
          <button
            key={w}
            onClick={() => setStrokeWidth(w)}
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${
              strokeWidth === w ? "bg-[#F5F3EE]" : "hover:bg-[#F5F3EE]"
            }`}
          >
            <span
              className="rounded-full bg-[#1E1E1E]"
              style={{ width: w + 2, height: w + 2 }}
            />
          </button>
        ))}

        <div className="mx-1 h-5 w-px bg-[#E5E5E5]" />

        <button
          onClick={undo}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#4A4A47] hover:bg-[#F5F3EE]"
        >
          <Undo2 className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={redo}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#4A4A47] hover:bg-[#F5F3EE]"
        >
          <Redo2 className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={clearCanvas}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-[#B23B3B] hover:bg-[#FBEAEA]"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-[#E5E5E5] bg-white p-2">
        <canvas
          ref={canvasRef}
          width={640}
          height={320}
          className="touch-none rounded-xl bg-white"
          style={{ cursor: tool === "eraser" ? "cell" : "crosshair", minWidth: 640 }}
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />
      </div>
    </div>
  );
}


export default Canva
