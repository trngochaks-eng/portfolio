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
      ENG: "Led a three-person structural Revit team while directly developing and managing the model from concept design through construction documentation. Coordinated structural updates with architectural and MEP consultants and issued phased construction packages for site works.",
      VIE: "Quản lý team Revit kết cấu 3 người, đồng thời trực tiếp dựng và quản lý mô hình từ TKYT đến TKTC. Phối hợp với kiến trúc, MEP để cập nhật thiết kế kết cấu và phát hành hồ sơ thi công theo từng giai đoạn, hạng mục ngoài công trường.",
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
      ENG: "Led the structural BIM team and represented the structural design consultant in BIM meetings with the client and other consultants. Contributed to developing the BIM Execution Plan and resolved coordination issues during basic design delivery.",
      VIE: "Quản lý team BIM kết cấu và đại diện đơn vị tư vấn thiết kế kết cấu tham gia họp BIM với Chủ đầu tư cùng các đơn vị tư vấn. Tham gia xây dựng BEP và giải quyết các vướng mắc phối hợp trong quá trình triển khai TKCS.",
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
      ENG: "Led the structural Revit team while directly developing and managing the model through construction documentation. Maintained coordinated structural documentation produced directly from Revit.",
      VIE: "Quản lý team Revit kết cấu, đồng thời trực tiếp dựng và quản lý mô hình đến giai đoạn TKTC. Kiểm soát hồ sơ kết cấu được phối hợp và trích xuất trực tiếp từ Revit.",
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
      ENG: "Led the structural Revit team while directly developing and managing the basic design model. Established a consistent BIM structure for coordinated structural design delivery.",
      VIE: "Quản lý team Revit kết cấu, đồng thời trực tiếp dựng và quản lý mô hình ở giai đoạn TKCS. Thiết lập cấu trúc BIM nhất quán để phối hợp và triển khai thiết kế kết cấu.",
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
      ENG: "Led the structural Revit team from basic through technical design. Set up the project Revit templates and families, supported the team on modeling and implementation issues, and kept LOD 300–350 delivery consistent across the project.",
      VIE: "Quản lý team Revit kết cấu từ giai đoạn TKCS đến TKKT. Trực tiếp xây dựng template, family của dự án, hỗ trợ team giải quyết vướng mắc về mô hình và triển khai, bảo đảm LOD 300–350 nhất quán.",
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
      ENG: "Directly developed the structural Revit models from CAD drawings throughout the basic and technical design stages. The project was organized into three Revit files: a 4K kindergarten model, a 10K primary school model, and a federated model combining both buildings into the complete Wellspring School development.",
      VIE: "Trực tiếp dựng mô hình Revit kết cấu từ hồ sơ CAD xuyên suốt giai đoạn TKCS đến TKKT. Dự án được tổ chức thành 3 file Revit: mô hình Trường Mầm non 4K, mô hình Trường Tiểu học 10K và file tổng hợp liên kết hai mô hình thành một khối Trường Wellspring hoàn chỉnh.",
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

export const projects: ProjectItem[] = rawProjects.map((project) => ({
  ...project,
  captions: captionsById[project.id],
}));

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}
