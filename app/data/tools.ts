import type { LocalizedText } from "./projects";

export type ToolGroup = {
  title: LocalizedText;
  description: LocalizedText;
};

export type ToolProduct = {
  name: string;
  tagline: LocalizedText;
  description: LocalizedText;
};

export const toolStats = [
  { value: "40+", label: { ENG: "Revit commands", VIE: "Lệnh Revit" } },
  { value: "2024+", label: { ENG: "Revit versions", VIE: "Phiên bản Revit" } },
  { value: "6", label: { ENG: "Projects used on", VIE: "Dự án đã áp dụng" } },
] as const;

export const toolGroups: ToolGroup[] = [
  {
    title: { ENG: "Auto Dimensioning", VIE: "Dim tự động" },
    description: {
      ENG: "Dimension columns, walls, foundations and piles to the grid system, and grid strings including skewed grids.",
      VIE: "Tự động dim cột, vách, móng, cọc theo hệ Grid và dim chuỗi lưới trục, kể cả trục nghiêng.",
    },
  },
  {
    title: { ENG: "Naming & Element Control", VIE: "Đặt tên & quản lý cấu kiện" },
    description: {
      ENG: "Rule-based naming for beams, columns, walls, foundations and piles; split beams and columns by level; batch find & replace with preview and undo.",
      VIE: "Đặt tên dầm, cột, vách, móng, cọc theo quy tắc; cắt dầm, cột/vách theo Level; tìm và thay thế hàng loạt có preview và Undo.",
    },
  },
  {
    title: { ENG: "CAD-to-BIM", VIE: "Từ CAD sang BIM" },
    description: {
      ENG: "Create piles, columns and walls from CAD links, and update slab openings from the coordinated CAD file.",
      VIE: "Tạo cọc, cột, vách từ CAD Link và cập nhật lỗ mở sàn từ file CAD phối hợp.",
    },
  },
  {
    title: { ENG: "Sheets & Documentation", VIE: "Hồ sơ & Sheet" },
    description: {
      ENG: "Batch create, number, duplicate and print sheets; two-way schedule sync between Revit and Excel.",
      VIE: "Tạo, đánh số, nhân bản và in sheet hàng loạt; đồng bộ Schedule hai chiều giữa Revit và Excel.",
    },
  },
  {
    title: { ENG: "QA/QC & Clash", VIE: "QA/QC & Va chạm" },
    description: {
      ENG: "Detect unjoined intersecting elements, batch join/unjoin, check element offset against the grid, and align pile tops and column offsets to the slab above.",
      VIE: "Phát hiện cấu kiện giao nhau chưa Join, Join/Unjoin hàng loạt, kiểm tra độ lệch so với Grid và cân cốt cọc, cột/vách theo đài và sàn.",
    },
  },
  {
    title: { ENG: "Coordinates & Formwork", VIE: "Tọa độ & Cốp pha" },
    description: {
      ENG: "Write pile X/Y coordinates to shared parameters, draw site boundaries from VN2000 coordinates, and model lean concrete and formwork.",
      VIE: "Ghi tọa độ X/Y cọc vào shared parameter, vẽ ranh đất từ tọa độ VN2000, tạo bê tông lót và cốp pha.",
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
      ENG: "Scan beams in Revit, review and edit the reinforcement in Excel, then draw the bars back into the model.",
      VIE: "Quét dầm trong Revit, rà soát và chỉnh thép trên Excel rồi vẽ ngược lại vào mô hình.",
    },
  },
  {
    name: "TNH MCP",
    tagline: {
      ENG: "Revit connected to AI assistants",
      VIE: "Kết nối Revit với trợ lý AI",
    },
    description: {
      ENG: "Lets AI assistants query and operate the active Revit project through a controlled tool set; every write needs a preview and explicit confirmation.",
      VIE: "Cho phép trợ lý AI truy vấn và thao tác dự án Revit đang mở qua bộ công cụ được kiểm soát; mọi lệnh ghi đều phải xem trước và xác nhận.",
    },
  },
];
