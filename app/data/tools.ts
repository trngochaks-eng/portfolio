import type { LocalizedText } from "./projects";

export type ToolGroup = {
  title: LocalizedText;
  description: LocalizedText;
  examples: LocalizedText;
};

export type ToolProduct = {
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
  points: { ENG: string[]; VIE: string[] };
};

export const toolStats = [
  { value: "40+", label: { ENG: "Revit commands", VIE: "Lệnh Revit" } },
  { value: "2024+", label: { ENG: "Revit versions", VIE: "Phiên bản Revit" } },
  {
    value: "6",
    label: { ENG: "Projects delivered with it", VIE: "Dự án đã áp dụng" },
  },
] as const;

export const toolGroups: ToolGroup[] = [
  {
    title: { ENG: "Auto Dimensioning", VIE: "Dim tự động" },
    description: {
      ENG: "Dimension columns, walls, foundations and piles to the grid system, and grid strings including skewed grids.",
      VIE: "Tự động dim cột, vách, móng, cọc theo hệ Grid và dim chuỗi lưới trục, kể cả trục nghiêng.",
    },
    examples: {
      ENG: "Column dim · Grid dim · Foundation/Pile dim",
      VIE: "Dim cột · Dim lưới trục · Dim móng/cọc",
    },
  },
  {
    title: { ENG: "Naming & Element Control", VIE: "Đặt tên & quản lý cấu kiện" },
    description: {
      ENG: "Rule-based naming for beams, columns, walls, foundations and piles; split beams and columns by level; batch find & replace with preview and undo.",
      VIE: "Đặt tên dầm, cột, vách, móng, cọc theo quy tắc; cắt dầm, cột/vách theo Level; tìm và thay thế hàng loạt có preview và Undo.",
    },
    examples: {
      ENG: "Beam naming · Level split · Find & Replace",
      VIE: "Đặt tên dầm · Cắt theo Level · Find & Replace",
    },
  },
  {
    title: { ENG: "CAD-to-BIM", VIE: "Từ CAD sang BIM" },
    description: {
      ENG: "Create piles, columns and walls from CAD links, and update slab openings from the coordinated CAD file.",
      VIE: "Tạo cọc, cột, vách từ CAD Link và cập nhật lỗ mở sàn từ file CAD phối hợp.",
    },
    examples: {
      ENG: "Piles from CAD · Columns/Walls from CAD · Slab openings",
      VIE: "Cọc từ CAD · Cột/Vách từ CAD · Lỗ mở sàn",
    },
  },
  {
    title: { ENG: "Sheets & Documentation", VIE: "Hồ sơ & Sheet" },
    description: {
      ENG: "Batch create, number, duplicate and print sheets; two-way schedule sync between Revit and Excel.",
      VIE: "Tạo, đánh số, nhân bản và in sheet hàng loạt; đồng bộ Schedule hai chiều giữa Revit và Excel.",
    },
    examples: {
      ENG: "Create/Duplicate/Print Sheets · Excel Sync",
      VIE: "Create/Duplicate/Print Sheets · Đồng bộ Excel",
    },
  },
  {
    title: { ENG: "QA/QC & Clash", VIE: "QA/QC & Va chạm" },
    description: {
      ENG: "Detect unjoined intersecting elements, batch join/unjoin, check element offset against the grid, and align pile tops and column offsets to the slab above.",
      VIE: "Phát hiện cấu kiện giao nhau chưa Join, Join/Unjoin hàng loạt, kiểm tra độ lệch so với Grid và cân cốt cọc, cột/vách theo đài và sàn.",
    },
    examples: {
      ENG: "Clash · Auto Join · Check Model · Level alignment",
      VIE: "Va chạm · Auto Join · Check Model · Cân cốt",
    },
  },
  {
    title: { ENG: "Coordinates & Formwork", VIE: "Tọa độ & Cốp pha" },
    description: {
      ENG: "Write pile X/Y coordinates to shared parameters, draw site boundaries from VN2000 coordinates, and model lean concrete and formwork.",
      VIE: "Ghi tọa độ X/Y cọc vào shared parameter, vẽ ranh đất từ tọa độ VN2000, tạo bê tông lót và cốp pha.",
    },
    examples: {
      ENG: "Pile coordinates · VN2000 boundary · Formwork",
      VIE: "Tọa độ cọc · Ranh đất VN2000 · Cốp pha",
    },
  },
];

export const toolProducts: ToolProduct[] = [
  {
    name: "TNH Rebar",
    tagline: {
      ENG: "Beam reinforcement from Excel",
      VIE: "Thép dầm điều khiển từ Excel",
    },
    description: {
      ENG: "Revit add-in with an Excel bridge for beam reinforcement. Scan beams in Revit, review and edit the reinforcement in Excel, then draw the bars back into the model.",
      VIE: "Add-in Revit kết hợp cầu nối Excel cho thép dầm. Quét dầm trong Revit, rà soát và chỉnh thép trên Excel rồi vẽ ngược lại vào mô hình.",
    },
    points: {
      ENG: [
        "Revit and Excel talk to each other through a named-pipe connection",
        "Beam geometry, supports and grid names exported automatically",
        "Single-click bar drawing from the Excel sheet",
      ],
      VIE: [
        "Revit và Excel trao đổi dữ liệu qua kết nối named pipe",
        "Tự xuất kích thước dầm, gối và tên trục",
        "Vẽ thép một lần bấm từ bảng Excel",
      ],
    },
  },
  {
    name: "TNH MCP",
    tagline: {
      ENG: "Revit connected to AI assistants",
      VIE: "Kết nối Revit với trợ lý AI",
    },
    description: {
      ENG: "A Model Context Protocol server that lets AI assistants query and operate the active Revit project through a controlled tool set.",
      VIE: "MCP server cho phép trợ lý AI truy vấn và thao tác dự án Revit đang mở thông qua bộ công cụ được kiểm soát.",
    },
    points: {
      ENG: [
        "Works with Claude Desktop, Codex and Gemini CLI",
        "Write operations require a full preview and explicit confirmation",
        "Acts only on the active Revit document",
      ],
      VIE: [
        "Hoạt động với Claude Desktop, Codex và Gemini CLI",
        "Mọi lệnh ghi đều phải xem trước và xác nhận rõ ràng",
        "Chỉ thao tác trên tài liệu Revit đang hoạt động",
      ],
    },
  },
];

export const toolPanels = [
  { src: "/tools/panel-create.png", width: 270, height: 92, title: { ENG: "Model Creation: slab openings from CAD, hatch patterns", VIE: "Tạo mô hình: lỗ mở sàn từ CAD, mẫu Hatch" } },
  { src: "/tools/panel-adjust.png", width: 236, height: 97, title: { ENG: "Adjustment: Auto Join, change family type, pile-to-cap alignment", VIE: "Hiệu chỉnh: Auto Join, đổi Family Type, cân cốt cọc theo đài" } },
  { src: "/tools/panel-naming.png", width: 338, height: 97, title: { ENG: "Dimensions & Naming: foundation/pile, column/wall naming, annotation alignment", VIE: "Kích thước & Định danh: đặt tên móng/cọc, cột/vách, căn chỉnh annotation" } },
  { src: "/tools/panel-view.png", width: 236, height: 94, title: { ENG: "Views: text case, filter cleanup, 2D beam edges", VIE: "Khung nhìn: đổi kiểu chữ, dọn filter, biên dầm 2D" } },
  { src: "/tools/panel-docs.png", width: 640, height: 98, wide: true, title: { ENG: "Documentation & Data: schedule alignment, find & replace, Excel import/export and sync, print sheets, floor notes", VIE: "Hồ sơ & Dữ liệu: căn cột schedule, tìm và thay thế, nhập/xuất và đồng bộ Excel, in sheet, ghi chú sàn" } },
] as { src: string; width: number; height: number; wide?: boolean; title: LocalizedText }[];
