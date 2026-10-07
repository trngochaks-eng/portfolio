from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "Tran-Ngoc-Ha_BIM-Coordinator_CV.pdf"
FONT_DIR = ROOT / "app" / "fonts"
AVATAR = ROOT / "public" / "avatarTNH.jpg"

pdfmetrics.registerFont(TTFont("Roboto", str(FONT_DIR / "Roboto-Regular.ttf")))
pdfmetrics.registerFont(TTFont("Roboto-Medium", str(FONT_DIR / "Roboto-Medium.ttf")))
pdfmetrics.registerFont(TTFont("Roboto-Bold", str(FONT_DIR / "Roboto-Bold.ttf")))

PAGE_W, PAGE_H = A4
LEFT_W = 196
MARGIN = 26
RIGHT_X = LEFT_W + 22
RIGHT_W = PAGE_W - RIGHT_X - 26
INK = HexColor("#1f1f1f")
MUTED = HexColor("#9f9f9f")
ACCENT = HexColor("#98684f")
PANEL = HexColor("#f4f4f4")


def wrap(text, font, size, width):
    words = text.split()
    lines, current = [], ""
    for word in words:
        trial = word if not current else f"{current} {word}"
        if pdfmetrics.stringWidth(trial, font, size) <= width:
            current = trial
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_wrapped(c, text, x, y, width, font="Roboto", size=8.3, leading=11, color=INK):
    c.setFont(font, size)
    c.setFillColor(color)
    for line in wrap(text, font, size, width):
        c.drawString(x, y, line)
        y -= leading
    return y


def heading(c, text, x, y, size=12.5):
    c.setFillColor(INK)
    c.setFont("Roboto-Bold", size)
    c.drawString(x, y, text)
    return y - 18


def bullets(c, items, x, y, width, size=8.1, leading=10.5, gap=2):
    for item in items:
        lines = wrap(item, "Roboto", size, width - 10)
        c.setFont("Roboto", size)
        c.setFillColor(INK)
        c.drawString(x, y, "•")
        for line in lines:
            c.drawString(x + 9, y, line)
            y -= leading
        y -= gap
    return y


def experience(c, company, dates, role, items, y):
    c.setFillColor(INK)
    c.setFont("Roboto-Bold", 10)
    company_lines = wrap(company, "Roboto-Bold", 10, RIGHT_W - 78)
    for line in company_lines:
        c.drawString(RIGHT_X, y, line)
        y -= 13
    c.setFillColor(MUTED)
    c.setFont("Roboto", 9)
    c.drawRightString(PAGE_W - 26, y + 13, dates)
    c.setFillColor(INK)
    c.setFont("Roboto-Medium", 9.5)
    c.drawString(RIGHT_X, y, role)
    y -= 16
    return bullets(c, items, RIGHT_X + 3, y, RIGHT_W - 3, size=8.8, leading=11.5, gap=2.2) - 13


def main():
    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setTitle("TRẦN NGỌC HÀ - BIM Engineer | Structural BIM Lead")
    c.setAuthor("Trần Ngọc Hà")
    c.setFillColor(PANEL)
    c.rect(0, 0, LEFT_W, PAGE_H, stroke=0, fill=1)

    # Portrait, cropped to a professional 4:5 frame.
    with Image.open(AVATAR) as img:
        w, h = img.size
        target = 4 / 5
        if w / h > target:
            nw = int(h * target)
            left = (w - nw) // 2
            img = img.crop((left, 0, left + nw, h))
        else:
            nh = int(w / target)
            top = max(0, (h - nh) // 2)
            img = img.crop((0, top, w, top + nh))
        tmp = ROOT / "tmp_cv_portrait.png"
        img.save(tmp)
    c.drawImage(ImageReader(str(tmp)), 36, PAGE_H - 185, width=124, height=155, mask="auto")
    tmp.unlink(missing_ok=True)

    x = 26
    y = PAGE_H - 216
    y = heading(c, "THÔNG TIN CÁ NHÂN", x, y)
    for line in [
        "trngocha.ks@gmail.com",
        "0964577730",
        "TP. Hồ Chí Minh",
        "tran-ngoc-ha-portfolio.vercel.app",
    ]:
        y = draw_wrapped(c, line, x, y, LEFT_W - 45, size=9, leading=12.5) - 3

    y -= 8
    y = heading(c, "HỌC VẤN", x, y)
    y = draw_wrapped(c, "Đại học Kiến trúc TP. Hồ Chí Minh", x, y, LEFT_W - 45, "Roboto-Bold", 9, 12)
    y = draw_wrapped(c, "Chuyên ngành: Kỹ thuật xây dựng", x, y - 1, LEFT_W - 45, "Roboto-Medium", 8.7, 12)
    y = draw_wrapped(c, "GPA: 3.07", x, y - 1, LEFT_W - 45, "Roboto-Medium", 8.7, 12)

    y -= 11
    y = heading(c, "PHẦN MỀM", x, y)
    y = bullets(c, ["Revit", "Navisworks", "AutoCAD", "ETABS", "SAFE"], x + 3, y, LEFT_W - 48, size=8.8, leading=11)

    y -= 6
    y = heading(c, "NĂNG LỰC CỐT LÕI", x, y)
    y = bullets(c, [
        "Dẫn dắt team BIM kết cấu",
        "Điều phối BIM",
        "Quản lý mô hình Revit",
        "Quy trình và tiêu chuẩn BIM",
        "QA/QC mô hình và hồ sơ",
    ], x + 3, y, LEFT_W - 42, size=8.5, leading=11)

    y = PAGE_H - 42
    c.setFillColor(INK)
    c.setFont("Roboto-Bold", 24)
    c.drawString(RIGHT_X, y, "TRẦN NGỌC HÀ")
    y -= 24
    c.setFillColor(ACCENT)
    c.setFont("Roboto-Bold", 13.5)
    c.drawString(RIGHT_X, y, "BIM Engineer | Structural BIM Lead")
    y -= 24
    y = heading(c, "TÓM TẮT CHUYÊN MÔN", RIGHT_X, y, 10.8)
    summary = (
        "BIM Engineer | Structural BIM Lead với 3 năm kinh nghiệm triển khai BIM kết cấu. "
        "Có kinh nghiệm dẫn dắt team Revit, chuẩn hóa quy trình BIM, quản lý mô hình theo BEP, "
        "phối hợp đa bộ môn và kiểm soát chất lượng hồ sơ phát hành. Định hướng phát triển thành "
        "BIM Coordinator, tiến tới BIM Manager, tập trung vào quản lý thông tin, tiêu chuẩn hóa "
        "quy trình và nâng cao hiệu quả triển khai dự án."
    )
    y = draw_wrapped(c, summary, RIGHT_X, y, RIGHT_W, size=9.5, leading=13)

    y -= 15
    y = heading(c, "KINH NGHIỆM LÀM VIỆC", RIGHT_X, y, 12.5)
    y = experience(c, "Công ty TNHH Thiết kế Xây dựng Pháp Duyên", "9/2025 - Nay",
                   "BIM Engineer | Structural BIM Lead", [
        "Dẫn dắt triển khai BIM kết cấu và quản lý team Revit.",
        "Chuẩn hóa quy trình BIM; quản lý mô hình theo BEP và kiểm soát hồ sơ phát hành.",
        "Phối hợp Kiến trúc - MEP; xây dựng Revit template và family phục vụ triển khai.",
        "Dự án: Lô 6.8, Lô 6.7, C2, C3 và Nhà ở xã hội Mỹ Xuân B1 - Conac Garden.",
    ], y)
    y = experience(c, "Công ty TNHH Tư vấn Đầu tư Thiết kế và Dịch vụ Dự án Thục Trang Anh (TTAD)",
                   "3/2025 - 9/2025", "Kỹ sư Kết cấu", [
        "Thiết kế và thẩm tra kết cấu giai đoạn TKCS - TKKT.",
        "Kiểm soát phối hợp mô hình và hồ sơ giữa Revit, ETABS, SAFE và AutoCAD.",
        "Chuẩn hóa đầu vào - đầu ra phục vụ triển khai BIM kết cấu.",
    ], y)
    y = experience(c, "Công ty TNHH Tư vấn Thiết kế Xây dựng Việt Long Sài Gòn",
                   "9/2023 - 3/2025", "Kỹ sư Thiết kế Kết cấu & BIM", [
        "Trực tiếp tính toán ETABS/SAFE và triển khai mô hình Revit LOD 350.",
        "Phối hợp Chủ đầu tư, Kiến trúc - MEP để cập nhật tính toán, mô hình và bản vẽ.",
        "Trích xuất hồ sơ kỹ thuật trực tiếp từ mô hình BIM.",
        "Dự án: Sở Chỉ huy Quân sự Huyện Tuy Phong và Trường Tiểu học Thạnh Hòa.",
    ], y)

    y = heading(c, "VAI TRÒ DỰ ÁN TIÊU BIỂU", RIGHT_X, y, 11.5)
    y = bullets(c, [
        "Lô 6.8 - Structural BIM Lead - TKYT đến TKTC, LOD 350.",
        "Lô 6.7 - Structural BIM Lead / BIM Coordination - TKCS, LOD 300.",
        "C2 và C3 - Structural BIM Lead - TKCS đến TKTC, LOD 300-350.",
        "Mỹ Xuân B1 - Structural Revit Team Lead - TKCS đến TKKT.",
        "Tuy Phong và Thạnh Hòa - Structural Design & BIM Engineer - LOD 350.",
    ], RIGHT_X + 3, y, RIGHT_W - 3, size=8.7, leading=11.3, gap=2)

    c.save()


if __name__ == "__main__":
    main()
