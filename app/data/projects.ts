export type Language = "ENG" | "VIE";

export type LocalizedText = {
  ENG: string;
  VIE: string;
};

export type ProjectItem = {
  id: string;
  title: LocalizedText;
  location: LocalizedText;
  role: LocalizedText;
  type: LocalizedText;
  period: LocalizedText;
  scale?: LocalizedText;
  stage?: LocalizedText;
  lod?: string;
  description: LocalizedText;
  highlights: {
    ENG: string[];
    VIE: string[];
  };
  tools: string[];
  images: string[];
  captions?: LocalizedText[];
  story?: {
    challenge: LocalizedText;
    approach: { ENG: string[]; VIE: string[] };
    result: { ENG: string[]; VIE: string[] };
  };
};

const THU_THIEM_LOCATION: LocalizedText = {
  ENG: "Functional Area No. 6, Thu Thiem New Urban Area, Thu Duc City, Ho Chi Minh City",
  VIE: "Khu chức năng số 6, Khu đô thị mới Thủ Thiêm, Thành phố Thủ Đức, TP.HCM",
};

const rawProjects: ProjectItem[] = [
  {
    id: "project3",
    title: {
      ENG: "High-Rise Residential Development – Lot 6.8",
      VIE: "Chung cư Cao tầng Lô 6-8",
    },
    location: THU_THIEM_LOCATION,
    role: {
      ENG: "Structural BIM Lead",
      VIE: "Trưởng nhóm BIM Kết cấu",
    },
    type: {
      ENG: "Structural BIM Coordination and Delivery",
      VIE: "Quản lý và triển khai BIM kết cấu",
    },
    period: { ENG: "2025 – Present", VIE: "2025 – Nay" },
    scale: {
      ENG: "153,811.8 m² · 3 basements + 25 stories",
      VIE: "153.811,8 m² · 3 tầng hầm + 25 tầng nổi",
    },
    stage: {
      ENG: "Construction Documentation (TKTC)",
      VIE: "Thiết kế bản vẽ thi công (TKTC)",
    },
    lod: "LOD 350",
    description: {
      ENG: "Led a three-person structural Revit team and owned the BIM standards and issue approval from concept design through construction documentation.",
      VIE: "Dẫn dắt team Revit kết cấu 3 người, chịu trách nhiệm tiêu chuẩn BIM và chốt phát hành từ TKYT đến TKTC.",
    },
    highlights: {
      ENG: [
        "Led a three-person structural Revit team and directly developed the LOD 350 model",
        "Produced plans, sections, details, schedules, and pile coordinates directly from Revit",
        "Issued documentation in phased construction packages for site works",
        "Split the project into two linked models and one federated model to keep Revit performance and data extraction efficient",
        "Reviewed and coordinated clashes in Navisworks across structure–structure, structure–architecture, and structure–MEP",
        "Owned the project templates, families, BEP naming conventions, and revision control before every issue",
        "Organised the sheet set by group and sub-group (cover, general notes, foundations and piles, columns and walls, floor plans) so every issued sheet is traceable to the model",
      ],
      VIE: [
        "Quản lý team Revit kết cấu 3 người và trực tiếp triển khai mô hình LOD 350",
        "Trích xuất trực tiếp từ Revit toàn bộ mặt bằng, mặt cắt, chi tiết, bảng thống kê và tọa độ cọc",
        "Phát hành hồ sơ theo từng giai đoạn, hạng mục thi công ngoài công trường",
        "Chia dự án thành 2 file mô hình liên kết và 1 file tổng hợp để giữ hiệu suất Revit và thuận tiện trích xuất dữ liệu",
        "Rà soát và phối hợp xử lý va chạm trên Navisworks (KC–KC, KC–KT, KC–MEP)",
        "Trực tiếp quyết định template, family, quy tắc đặt tên theo BEP và kiểm soát revision trước mỗi lần phát hành",
        "Tổ chức bộ bản vẽ theo nhóm và nhóm phụ (bìa, ghi chú chung, móng cọc, cột vách, mặt bằng) để mọi sheet phát hành đều truy xuất được về mô hình",
      ],
    },
    tools: ["ETABS", "SAFE", "Revit", "AutoCAD", "Navisworks", "TNH Tool"],
    images: [
      "/projects/project3/6.8_ZZ.png",
      "/projects/project3/6.8_1.png",
      "/projects/project3/6.8_2.png",
      "/projects/project3/6.8_sheet_1.png",
      "/projects/project3/6.8_sheet_2.png",
    ],
  },
  {
    id: "project4",
    title: {
      ENG: "High-Rise Residential Development – Lot 6.7",
      VIE: "Chung cư Cao tầng Lô 6-7",
    },
    location: THU_THIEM_LOCATION,
    role: {
      ENG: "Structural BIM Lead / BIM Coordinator",
      VIE: "Trưởng nhóm BIM Kết cấu / Điều phối BIM",
    },
    type: {
      ENG: "Structural BIM Coordination and Management",
      VIE: "Điều phối và quản lý BIM kết cấu",
    },
    period: { ENG: "2026 – Present", VIE: "2026 – Nay" },
    scale: {
      ENG: "175,000 m² · 3 basements + 25 stories",
      VIE: "175.000 m² · 3 tầng hầm + 25 tầng nổi",
    },
    stage: {
      ENG: "Basic Design (TKCS)",
      VIE: "Thiết kế cơ sở (TKCS)",
    },
    lod: "LOD 300",
    description: {
      ENG: "Represented the structural consultant in BIM coordination with the client and other consultants during basic design.",
      VIE: "Đại diện tư vấn kết cấu trong phối hợp BIM với chủ đầu tư và các đơn vị tư vấn ở giai đoạn TKCS.",
    },
    highlights: {
      ENG: [
        "Led the structural Revit team and directly developed the LOD 300 model",
        "Represented the structural consultant in BIM meetings with the client and design consultants, contributing to the BEP and resolving coordination issues",
        "Split the project into three linked models and one federated model for documentation and data extraction",
        "Exported IFC models for submission and cross-discipline coordination",
        "Owned the project templates, families, BEP naming conventions, and revision control",
      ],
      VIE: [
        "Quản lý team Revit kết cấu và trực tiếp triển khai mô hình LOD 300",
        "Đại diện tư vấn kết cấu họp BIM với Chủ đầu tư, các đơn vị tư vấn; đóng góp xây dựng BEP và giải quyết vướng mắc phối hợp",
        "Chia dự án thành 3 file mô hình liên kết và 1 file tổng hợp",
        "Xuất mô hình IFC để nộp hồ sơ và phối hợp giữa các bộ môn",
        "Trực tiếp quyết định template, family, quy tắc đặt tên theo BEP và kiểm soát revision",
      ],
    },
    tools: ["ETABS", "SAFE", "Revit", "AutoCAD", "Navisworks", "TNH Tool"],
    images: [
      "/projects/project4/6.7_ZZ.png",
      "/projects/project4/6.7_1.png",
      "/projects/project4/6.7_2.png",
      "/projects/project4/6.7_3.png",
    ],
  },
  {
    id: "project5",
    title: {
      ENG: "Residential Development – Lot C2",
      VIE: "Chung cư Thấp tầng C2",
    },
    location: THU_THIEM_LOCATION,
    role: {
      ENG: "Structural BIM Lead",
      VIE: "Trưởng nhóm BIM Kết cấu",
    },
    type: {
      ENG: "Structural BIM Coordination and Delivery",
      VIE: "Quản lý và triển khai BIM kết cấu",
    },
    period: { ENG: "2025 – Present", VIE: "2025 – Nay" },
    scale: {
      ENG: "60,000 m² · 3 basements + 9 stories",
      VIE: "60.000 m² · 3 tầng hầm + 9 tầng nổi",
    },
    stage: {
      ENG: "Construction Documentation (TKTC)",
      VIE: "Thiết kế bản vẽ thi công (TKTC)",
    },
    lod: "LOD 350",
    description: {
      ENG: "Led the structural Revit team and issued construction documentation directly from the model.",
      VIE: "Dẫn dắt team Revit kết cấu và phát hành hồ sơ thi công trực tiếp từ mô hình.",
    },
    highlights: {
      ENG: [
        "Led the structural Revit team and directly developed the LOD 350 model",
        "Issued coordinated construction documentation directly from Revit",
        "Used two linked models and one federated model for documentation and data extraction",
        "Owned the project templates, families, naming conventions, and revision control under the BEP",
        "Coordinated structural updates with architectural and MEP consultants",
      ],
      VIE: [
        "Quản lý team Revit kết cấu và trực tiếp triển khai mô hình LOD 350",
        "Phát hành hồ sơ thi công được phối hợp và trích xuất trực tiếp từ Revit",
        "Sử dụng 2 file mô hình liên kết và 1 file tổng hợp để tăng hiệu suất",
        "Trực tiếp quyết định template, family, quy tắc đặt tên và kiểm soát revision theo BEP",
        "Phối hợp cập nhật thiết kế kết cấu với kiến trúc và MEP",
      ],
    },
    tools: ["ETABS", "SAFE", "Revit", "AutoCAD", "Navisworks", "TNH Tool"],
    images: [
      "/projects/project5/C2_ZZ.png",
      "/projects/project5/C2_1.png",
      "/projects/project5/C2_2.png",
    ],
  },
  {
    id: "project6",
    title: {
      ENG: "Residential Development – Lot C3",
      VIE: "Chung cư Thấp tầng C3",
    },
    location: THU_THIEM_LOCATION,
    role: {
      ENG: "Structural BIM Lead",
      VIE: "Trưởng nhóm BIM Kết cấu",
    },
    type: {
      ENG: "Structural BIM Coordination and Delivery",
      VIE: "Quản lý và triển khai BIM kết cấu",
    },
    period: { ENG: "2026 – Present", VIE: "2026 – Nay" },
    scale: {
      ENG: "80,000 m² · 3 basements + 9 stories",
      VIE: "80.000 m² · 3 tầng hầm + 9 tầng nổi",
    },
    stage: {
      ENG: "Basic Design (TKCS)",
      VIE: "Thiết kế cơ sở (TKCS)",
    },
    lod: "LOD 300",
    description: {
      ENG: "Led the structural Revit team and set up a consistent BIM structure for basic design.",
      VIE: "Dẫn dắt team Revit kết cấu và thiết lập cấu trúc BIM nhất quán cho giai đoạn TKCS.",
    },
    highlights: {
      ENG: [
        "Led the structural Revit team and directly developed the LOD 300 model",
        "Used two linked models and one federated model for documentation and data extraction",
        "Owned the project templates, families, naming conventions, and revision control under the BEP",
        "Coordinated structural design updates with architectural and MEP consultants",
        "Maintained model and drawing consistency during basic design delivery",
      ],
      VIE: [
        "Quản lý team Revit kết cấu và trực tiếp triển khai mô hình LOD 300",
        "Sử dụng 2 file mô hình liên kết và 1 file tổng hợp để tăng hiệu suất",
        "Trực tiếp quyết định template, family, quy tắc đặt tên và kiểm soát revision theo BEP",
        "Phối hợp cập nhật thiết kế kết cấu với kiến trúc và MEP",
        "Duy trì sự đồng bộ giữa mô hình và bản vẽ trong giai đoạn TKCS",
      ],
    },
    tools: ["ETABS", "SAFE", "Revit", "AutoCAD", "Navisworks", "TNH Tool"],
    images: [
      "/projects/project6/C3_ZZ.png",
      "/projects/project6/C3_1.png",
      "/projects/project6/C3_2.png",
    ],
  },
  {
    id: "project7",
    title: {
      ENG: "My Xuan B1 Social Housing Project – Conac Garden",
      VIE: "Dự án Nhà ở Xã hội Mỹ Xuân B1 – Conac Garden",
    },
    location: {
      ENG: "Phu My Ward, Ho Chi Minh City",
      VIE: "Phường Phú Mỹ, TP.HCM",
    },
    role: {
      ENG: "Structural Revit Team Lead",
      VIE: "Trưởng nhóm Revit Kết cấu",
    },
    type: {
      ENG: "Structural Revit Team Leadership and BIM Standards",
      VIE: "Quản lý team Revit và tiêu chuẩn BIM kết cấu",
    },
    period: { ENG: "2026", VIE: "2026" },
    scale: {
      ENG: "32,694.7 m² · 1 basement + 19 stories",
      VIE: "32.694,7 m² · 1 tầng hầm + 19 tầng nổi",
    },
    stage: {
      ENG: "Basic Design to Technical Design (TKCS–TKKT)",
      VIE: "Thiết kế cơ sở đến Thiết kế kỹ thuật (TKCS–TKKT)",
    },
    lod: "LOD 300–350",
    description: {
      ENG: "Led the structural Revit team and set the templates and families the whole team worked from.",
      VIE: "Dẫn dắt team Revit kết cấu và xây dựng template, family dùng chung cho cả team.",
    },
    highlights: {
      ENG: [
        "Led the structural Revit team through basic and technical design",
        "Authored and maintained the Revit templates and project families used by the whole team",
        "Supported the team and resolved modeling and implementation issues",
        "Guided consistent LOD 300–350 delivery from basic through technical design",
      ],
      VIE: [
        "Quản lý team Revit kết cấu từ giai đoạn TKCS đến TKKT",
        "Trực tiếp xây dựng, duy trì Revit template và family để cả team áp dụng thống nhất",
        "Hỗ trợ team, giải đáp các vướng mắc về mô hình và triển khai",
        "Định hướng triển khai nhất quán từ LOD 300 đến LOD 350 trong giai đoạn TKCS–TKKT",
      ],
    },
    tools: ["Revit", "AutoCAD", "TNH Tool"],
    images: [
      "/projects/project7/MX_1.png",
      "/projects/project7/MX_2.png",
      "/projects/project7/MX_3.png",
    ],
  },
  {
    id: "project8",
    title: {
      ENG: "WELLSPRING School Project (H9)",
      VIE: "Trường học WELLSPRING (H9)",
    },
    location: {
      ENG: "H9, Area A – Nam Thanh Pho New Urban Area – Tan Phong Ward, District 7, Ho Chi Minh City",
      VIE: "H9 thuộc khu A - Khu đô thị mới Nam Thành Phố - Phường Tân Phong, quận 7, TP.HCM",
    },
    role: {
      ENG: "Structural Revit Modeler",
      VIE: "Kỹ sư Triển khai Mô hình Revit Kết cấu",
    },
    type: {
      ENG: "CAD-to-BIM Structural Modeling",
      VIE: "Dựng mô hình BIM kết cấu từ hồ sơ CAD",
    },
    period: { ENG: "2025", VIE: "2025" },
    scale: {
      ENG: "28,721 m² · 1 basement + 4 stories",
      VIE: "28.721 m² · 1 tầng hầm + 4 tầng nổi",
    },
    stage: {
      ENG: "Basic Design to Technical Design (TKCS–TKKT)",
      VIE: "Thiết kế cơ sở đến Thiết kế kỹ thuật (TKCS–TKKT)",
    },
    lod: "LOD 300–350",
    description: {
      ENG: "Modelled two school buildings from CAD drawings and combined them into one federated structural model.",
      VIE: "Dựng mô hình kết cấu hai công trình trường học từ hồ sơ CAD và ghép thành một mô hình tổng hợp.",
    },
    highlights: {
      ENG: [
        "Directly developed the structural Revit models from CAD drawings",
        "Delivered the structural models from basic through technical design",
        "Organized the project into three Revit files for efficient model management",
        "Developed separate models for the 4K kindergarten and 10K primary school",
        "Created a federated model combining both buildings into the complete Wellspring School development",
      ],
      VIE: [
        "Trực tiếp dựng mô hình Revit kết cấu từ hồ sơ CAD",
        "Triển khai mô hình xuyên suốt từ giai đoạn TKCS đến TKKT",
        "Tổ chức dự án thành 3 file Revit để quản lý mô hình hiệu quả",
        "Xây dựng riêng mô hình Trường Mầm non 4K và Trường Tiểu học 10K",
        "Tạo file tổng hợp liên kết hai mô hình thành một khối Trường Wellspring hoàn chỉnh",
      ],
    },
    tools: ["Revit", "AutoCAD", "TNH Tool"],
    images: [
      "/projects/project8/Combie H9_1.png",
      "/projects/project8/Combie H9_2.png",
      "/projects/project8/Combie H9_3.png",
      "/projects/project8/Combie H9_4.png",
      "/projects/project8/Mam non 4K-H9_1.png",
      "/projects/project8/Mam non 4K-H9_2.png",
      "/projects/project8/Tieu hoc 10K_1.png",
      "/projects/project8/Tieu hoc 10K_2.png",
      "/projects/project8/Tieu hoc 10K_3.png",
    ],
  },
  {
    id: "project2",
    title: {
      ENG: "Thanh Hoa Primary School",
      VIE: "Trường Tiểu học Thạnh Hòa",
    },
    location: {
      ENG: "Ben Luc District, Long An Province, Vietnam",
      VIE: "Huyện Bến Lức, tỉnh Long An, Việt Nam",
    },
    role: {
      ENG: "Structural Design & BIM Engineer",
      VIE: "Kỹ sư Thiết kế Kết cấu & BIM",
    },
    type: {
      ENG: "Structural Analysis, Design and BIM Delivery",
      VIE: "Tính toán, thiết kế và triển khai BIM kết cấu",
    },
    period: { ENG: "2024", VIE: "2024" },
    stage: {
      ENG: "Construction completed",
      VIE: "Đã hoàn thành thi công",
    },
    lod: "LOD 350",
    description: {
      ENG: "Carried the structure from analysis to model: performed structural analysis and design in ETABS and SAFE, then built the coordinated LOD 350 Revit model including reinforcement, and issued construction drawings and rebar schedules directly from the model through project completion.",
      VIE: "Thực hiện xuyên suốt từ tính toán đến mô hình: phân tích, thiết kế kết cấu bằng ETABS và SAFE, sau đó dựng mô hình Revit LOD 350 bao gồm cốt thép, và phát hành bản vẽ thi công, bảng thống kê thép trực tiếp từ mô hình đến khi công trình hoàn thành.",
    },
    highlights: {
      ENG: [
        "Performed structural analysis and design using ETABS and SAFE",
        "Converted approved structural calculations into a coordinated LOD 350 Revit model and construction documentation",
        "Modelled reinforcement for the frame and foundations in Revit",
        "Issued beam plans, foundation plans and footing details, and rebar bending schedules directly from the model",
        "Participated in coordination meetings with the client and other design consultants to update calculations and drawings",
        "Supported structural design coordination through construction completion",
      ],
      VIE: [
        "Trực tiếp phân tích và tính toán kết cấu bằng ETABS, SAFE",
        "Triển khai kết quả tính toán thành mô hình Revit LOD 350 và hồ sơ thi công đồng bộ",
        "Dựng cốt thép khung và móng trong Revit",
        "Phát hành mặt bằng dầm, mặt bằng móng, chi tiết móng và bảng thống kê thép trực tiếp từ mô hình",
        "Họp phối hợp với Chủ đầu tư và các đơn vị tư vấn để cập nhật tính toán, bản vẽ",
        "Theo sát thiết kế kết cấu đến khi công trình hoàn thành thi công",
      ],
    },
    tools: ["ETABS", "SAFE", "Revit", "AutoCAD"],
    images: Array.from({ length: 7 }, (_, index) =>
      `/projects/project2/model${index + 1}.png`
    ),
  },
];

const captionsById: Record<string, LocalizedText[]> = {
  project3: [
    { ENG: "Federated structural model: piles, podium and residential towers", VIE: "Mô hình kết cấu tổng hợp: cọc, khối đế và các tòa tháp căn hộ" },
    { ENG: "Podium levels and pile foundation", VIE: "Các tầng khối đế và hệ móng cọc" },
    { ENG: "Residential towers with structural elements colour-coded by type", VIE: "Các tòa tháp căn hộ, cấu kiện phân màu theo loại" },
    { ENG: "Issued sheet set organised by group in the Project Browser", VIE: "Bộ bản vẽ phát hành tổ chức theo nhóm trong Project Browser" },
    { ENG: "Typical structural floor plan sheet, divided into zones", VIE: "Sheet mặt bằng kết cấu điển hình, chia theo zone" },
  ],
  project4: [
    { ENG: "Federated structural model: curved tower complex on pile foundation", VIE: "Mô hình kết cấu tổng hợp: cụm tháp cong trên hệ móng cọc" },
    { ENG: "Basement slab and pile layout", VIE: "Mặt bằng sàn hầm và bố trí cọc" },
    { ENG: "Podium levels with columns and walls colour-coded", VIE: "Các tầng khối đế, cột và vách phân màu" },
    { ENG: "Tower blocks and core walls above the podium", VIE: "Các khối tháp và lõi vách phía trên khối đế" },
  ],
  project5: [
    { ENG: "Federated model: two residential blocks over a shared basement and pile foundation", VIE: "Mô hình tổng hợp: hai khối căn hộ trên tầng hầm và hệ móng cọc dùng chung" },
    { ENG: "Basement and podium structure with piles", VIE: "Kết cấu tầng hầm, khối đế và cọc" },
    { ENG: "Superstructure model with elements colour-coded by type", VIE: "Mô hình kết cấu phần thân, cấu kiện phân màu theo loại" },
  ],
  project6: [
    { ENG: "Federated model: three residential blocks over a shared basement and pile foundation", VIE: "Mô hình tổng hợp: ba khối căn hộ trên tầng hầm và hệ móng cọc dùng chung" },
    { ENG: "Basement structure and pile layout", VIE: "Kết cấu tầng hầm và bố trí cọc" },
    { ENG: "Superstructure model of the three blocks", VIE: "Mô hình kết cấu phần thân của ba khối nhà" },
  ],
  project7: [
    { ENG: "Structural model of the 19-storey building on pile foundation", VIE: "Mô hình kết cấu tòa nhà 19 tầng trên hệ móng cọc" },
    { ENG: "Podium transfer structure and tower frame", VIE: "Kết cấu chuyển ở khối đế và khung tòa tháp" },
    { ENG: "Frame, core walls and slabs at upper floors", VIE: "Khung, lõi vách và sàn các tầng trên" },
  ],
  project8: [
    { ENG: "Structural plan view in the combined H9 model", VIE: "Mặt bằng kết cấu trong mô hình tổng hợp H9" },
    { ENG: "Combined H9 model: 3D view, kindergarten and primary school", VIE: "Mô hình tổng hợp H9: góc nhìn 3D, trường mầm non và tiểu học" },
    { ENG: "Combined H9 model: second 3D view", VIE: "Mô hình tổng hợp H9: góc nhìn 3D thứ hai" },
    { ENG: "Combined H9 model: third 3D view", VIE: "Mô hình tổng hợp H9: góc nhìn 3D thứ ba" },
    { ENG: "4K kindergarten model: 3D view", VIE: "Mô hình Trường Mầm non 4K: góc nhìn 3D" },
    { ENG: "4K kindergarten model: structure and pile foundation", VIE: "Mô hình Trường Mầm non 4K: kết cấu và móng cọc" },
    { ENG: "10K primary school model: 3D view", VIE: "Mô hình Trường Tiểu học 10K: góc nhìn 3D" },
    { ENG: "10K primary school model: second view", VIE: "Mô hình Trường Tiểu học 10K: góc nhìn thứ hai" },
    { ENG: "10K primary school model: third view", VIE: "Mô hình Trường Tiểu học 10K: góc nhìn thứ ba" },
  ],
  project2: [
    { ENG: "Structural 3D model: roof framing, frame and pile foundation", VIE: "Mô hình kết cấu 3D: khung mái, khung chịu lực và móng cọc" },
    { ENG: "Structural 3D model: side view", VIE: "Mô hình kết cấu 3D: góc nhìn bên" },
    { ENG: "Structural 3D model: aerial view", VIE: "Mô hình kết cấu 3D: góc nhìn từ trên" },
    { ENG: "Reinforcement model of frame and foundations", VIE: "Mô hình cốt thép của khung và móng" },
    { ENG: "Floor beam plan sheet issued from Revit", VIE: "Sheet mặt bằng dầm sàn phát hành từ Revit" },
    { ENG: "Foundation plan and footing details sheet", VIE: "Sheet mặt bằng móng và chi tiết móng" },
    { ENG: "Reinforcement bending schedule", VIE: "Bảng thống kê thép" },
  ],
};

const storyById: Record<string, NonNullable<ProjectItem["story"]>> = {
  project5: {
    challenge: { ENG: "Architectural and MEP designs kept changing, construction documentation had to be issued urgently, and several projects were running in parallel.", VIE: "Kiến trúc và MEP liên tục thay đổi, hồ sơ thi công phải phát hành gấp và nhiều dự án chạy song song." },
    approach: {
      ENG: [
        "Applied the Lot 6.8 BIM standards (templates, naming rules and model split) so the team could start immediately",
        "Used TNH Tool to speed up repetitive construction documentation"
      ],
      VIE: [
        "Áp dụng chuẩn BIM của Lô 6.8 (template, quy tắc đặt tên, cách chia model) để team bắt tay ngay",
        "Dùng TNH Tool để tăng tốc phần hồ sơ thi công lặp lại"
      ],
    },
    result: {
      ENG: [
        "Fast start thanks to standards that were already in place",
        "Construction documentation taken directly from the model"
      ],
      VIE: [
        "Triển khai nhanh nhờ chuẩn đã có sẵn",
        "Hồ sơ thi công lấy trực tiếp từ mô hình"
      ],
    },
  },
  project6: {
    challenge: { ENG: "Architectural and MEP designs kept changing while several projects were running in parallel.", VIE: "Kiến trúc và MEP liên tục thay đổi trong khi nhiều dự án chạy song song." },
    approach: {
      ENG: [
        "Applied the Lot 6.8 BIM standards (templates, naming rules and model split) from day one",
        "Updated the model after each coordination round with architecture and MEP"
      ],
      VIE: [
        "Áp dụng chuẩn BIM của Lô 6.8 (template, quy tắc đặt tên, cách chia model) ngay từ đầu",
        "Cập nhật mô hình sau mỗi đợt phối hợp với kiến trúc và MEP"
      ],
    },
    result: {
      ENG: [
        "Fast start thanks to standards that were already in place",
        "Model and drawings kept consistent during basic design"
      ],
      VIE: [
        "Triển khai nhanh nhờ chuẩn đã có sẵn",
        "Model và bản vẽ nhất quán trong giai đoạn TKCS"
      ],
    },
  },
  project8: {
    challenge: { ENG: "Two buildings on one campus, a 4K kindergarten and a 10K primary school, had to be managed separately yet assembled into a single complete model.", VIE: "Hai công trình trong cùng một khu, Trường Mầm non 4K và Trường Tiểu học 10K, cần quản lý riêng nhưng vẫn phải ghép thành một mô hình hoàn chỉnh." },
    approach: {
      ENG: [
        "Split the project into three Revit files: kindergarten, primary school and a federated model",
        "Modelled each building independently, then linked both into the federated model",
        "Checked the CAD drawings against each other before modelling",
        "Used TNH Tool to convert CAD data into Revit elements"
      ],
      VIE: [
        "Tách dự án thành 3 file Revit: mầm non, tiểu học và file tổng hợp",
        "Dựng từng công trình độc lập rồi liên kết vào mô hình tổng hợp",
        "Đối chiếu hồ sơ CAD với nhau trước khi dựng",
        "Dùng TNH Tool chuyển dữ liệu CAD thành cấu kiện Revit"
      ],
    },
    result: {
      ENG: [
        "Basic to technical design models completed on schedule and handed over as planned",
        "Models matched the CAD drawings",
      ],
      VIE: [
        "Hoàn thành mô hình TKCS–TKKT đúng tiến độ, bàn giao đúng kế hoạch",
        "Mô hình khớp với hồ sơ CAD",
      ],
    },
  },
  project3: {
    challenge: { ENG: "Architectural and MEP designs changed continuously while structural documentation had to be issued in urgent phases for site works.", VIE: "Kiến trúc và MEP liên tục thay đổi trong khi hồ sơ kết cấu phải phát hành gấp theo từng đợt phục vụ thi công ngoài công trường." },
    approach: {
      ENG: [
        "Split the model into two linked files and one federated file so Revit stayed responsive on a 153,811.8 m² project",
        "Set the templates, families and BEP naming rules for the whole team",
        "Organised the sheet set by group and sub-group so every issued sheet traces back to the model",
        "Automated repetitive documentation work with in-house TNH Tool commands",
        "Held regular coordination meetings and clash reviews with architecture and MEP"
      ],
      VIE: [
        "Chia model thành 2 file liên kết và 1 file tổng hợp để Revit chạy ổn định trên dự án 153.811,8 m²",
        "Thiết lập template, family và quy tắc đặt tên theo BEP cho cả team",
        "Tổ chức bộ bản vẽ theo nhóm và nhóm phụ để mọi sheet phát hành đều truy xuất được về mô hình",
        "Tự động hóa công việc hồ sơ lặp lại bằng các lệnh TNH Tool tự phát triển",
        "Họp phối hợp và rà soát clash định kỳ với kiến trúc và MEP"
      ],
    },
    result: {
      ENG: [
        "Documentation issued on schedule, phase by phase",
        "Plans, sections, schedules and pile coordinates taken directly from the model",
        "A lighter model that runs more smoothly for the team",
        "Documentation accepted by the client and consultants"
      ],
      VIE: [
        "Phát hành hồ sơ đúng tiến độ theo từng đợt",
        "Mặt bằng, mặt cắt, bảng thống kê và tọa độ cọc lấy trực tiếp từ mô hình",
        "Model gọn hơn, team làm việc mượt hơn",
        "Hồ sơ được chủ đầu tư và các đơn vị tư vấn chấp thuận"
      ],
    },
  },
  project4: {
    challenge: { ENG: "The design kept changing throughout basic design, and the structural model had to follow every change.", VIE: "Thiết kế liên tục thay đổi trong suốt giai đoạn TKCS, mô hình kết cấu phải bám theo từng thay đổi." },
    approach: {
      ENG: [
        "Represented the structural consultant in BIM meetings with the client and other consultants",
        "Contributed to the BIM Execution Plan (BEP)",
        "Split the project into three linked models and one federated model",
        "Resolved cross-discipline conflicts between structure, architecture and MEP",
        "Exported IFC models for submission and coordination"
      ],
      VIE: [
        "Đại diện tư vấn kết cấu tham gia họp BIM với chủ đầu tư và các đơn vị tư vấn",
        "Đóng góp xây dựng BIM Execution Plan (BEP)",
        "Chia dự án thành 3 file mô hình liên kết và 1 file tổng hợp",
        "Giải quyết xung đột liên bộ môn giữa kết cấu, kiến trúc và MEP",
        "Xuất mô hình IFC để nộp hồ sơ và phối hợp"
      ],
    },
    result: {
      ENG: [
        "BEP agreed with the client",
        "IFC and model submissions delivered on time",
        "Conflicts reduced before moving into the next design stage"
      ],
      VIE: [
        "BEP được chủ đầu tư thống nhất",
        "Nộp IFC và mô hình đúng hạn",
        "Giảm xung đột trước khi sang giai đoạn thiết kế tiếp theo"
      ],
    },
  },
  project7: {
    challenge: { ENG: "The team did not yet model in a unified way, ran into Revit technical issues, and the schedule was tight.", VIE: "Team chưa thống nhất cách dựng model, gặp vướng mắc kỹ thuật Revit và tiến độ triển khai gấp." },
    approach: {
      ENG: [
        "Authored the Revit templates and project families used by the whole team",
        "Supported the team and resolved modelling and implementation issues",
        "Guided consistent LOD 300–350 delivery from basic to technical design"
      ],
      VIE: [
        "Trực tiếp xây dựng Revit template và family dự án cho cả team",
        "Hỗ trợ team, giải đáp vướng mắc về mô hình và triển khai",
        "Định hướng triển khai nhất quán LOD 300–350 từ TKCS đến TKKT"
      ],
    },
    result: {
      ENG: [
        "The whole team worked from shared templates and families",
        "Basic to technical design completed on schedule",
        "Team members worked more independently"
      ],
      VIE: [
        "Cả team dùng chung template và family",
        "Hoàn thành TKCS–TKKT đúng tiến độ",
        "Các thành viên làm việc độc lập tốt hơn"
      ],
    },
  },
};

export const projects: ProjectItem[] = rawProjects.map((project) => ({
  ...project,
  captions: captionsById[project.id],
  story: storyById[project.id],
}));

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
