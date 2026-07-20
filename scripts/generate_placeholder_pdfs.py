"""
Generates clearly-labelled placeholder PDFs for the Downloads page
(CV, Research Statement, Publication List) so the site has working
download links out of the box. Replace the generated files in
public/documents/ with your real, verified documents before publishing.

Run with: python3 scripts/generate_placeholder_pdfs.py
"""
import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib import colors

OUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'public', 'documents')
os.makedirs(OUT_DIR, exist_ok=True)

styles = getSampleStyleSheet()
navy = colors.HexColor('#0A1F2C')
emerald = colors.HexColor('#0E6E4E')

title_style = ParagraphStyle('TitleStyle', parent=styles['Title'], textColor=navy, fontSize=22, spaceAfter=4)
subtitle_style = ParagraphStyle('SubtitleStyle', parent=styles['Normal'], textColor=emerald, fontSize=12, spaceAfter=18)
notice_style = ParagraphStyle('Notice', parent=styles['Normal'], textColor=colors.HexColor('#96733E'),
                               backColor=colors.HexColor('#FBF6EE'), borderPadding=10, fontSize=10, spaceAfter=18, leading=14)
h2 = ParagraphStyle('H2', parent=styles['Heading2'], textColor=navy, spaceBefore=14, spaceAfter=6)
body = ParagraphStyle('Body', parent=styles['Normal'], fontSize=10.5, leading=15)


def build(filename, doc_title, notice_text, sections):
    path = os.path.join(OUT_DIR, filename)
    doc = SimpleDocTemplate(path, pagesize=letter, topMargin=0.9 * inch, bottomMargin=0.9 * inch,
                             leftMargin=0.9 * inch, rightMargin=0.9 * inch)
    story = [
        Paragraph('Dr. Kiran Bijapur, MRSC', title_style),
        Paragraph(doc_title, subtitle_style),
        Paragraph(notice_text, notice_style),
    ]
    for heading, items in sections:
        story.append(Paragraph(heading, h2))
        if isinstance(items, str):
            story.append(Paragraph(items, body))
        else:
            story.append(ListFlowable([ListItem(Paragraph(i, body)) for i in items], bulletType='bullet', start='circle'))
        story.append(Spacer(1, 4))
    doc.build(story)
    print('Wrote', path)


NOTICE = ('PLACEHOLDER DOCUMENT — this file was auto-generated as a starting template. '
          'Replace it with your real, verified document before publishing the site.')

build(
    'Dr-Kiran-Bijapur-CV.pdf',
    'Curriculum Vitae (Placeholder)',
    NOTICE,
    [
        ('Current Position', 'Researcher & Program Manager, Department of Science and Technology (DST), Government of India.'),
        ('Education', ['Ph.D., Materials Chemistry — CHRIST (Deemed to be University), Bengaluru',
                       'Add prior degrees, institutions and years here.']),
        ('Research Interests', 'Green hydrogen, electrocatalysis (HER/OER), biomass-derived nanomaterials, '
                                'carbon nanostructures, sustainable materials chemistry, thermal management and nanofluids.'),
        ('Professional Membership', 'Member, Royal Society of Chemistry (MRSC).'),
        ('Publications, Patents & Awards', 'See the Publications, Patents and Awards pages of this website for '
                                            'detailed, regularly-updated listings.'),
    ],
)

build(
    'Dr-Kiran-Bijapur-Research-Statement.pdf',
    'Research Statement (Placeholder)',
    NOTICE,
    [
        ('Research Vision', 'To develop advanced functional materials and electrocatalytic technologies that '
                             'accelerate the global transition toward green hydrogen, clean energy, and a '
                             'sustainable circular economy.'),
        ('Past Work', 'Summarise doctoral research on biomass-derived carbon nanomaterials and nanofluid '
                       'thermophysics here.'),
        ('Current Work', 'Summarise ongoing electrocatalyst research for seawater electrolysis and DST '
                          'programme-management contributions here.'),
        ('Future Directions', 'Outline planned research directions, target collaborations, and funding goals here.'),
    ],
)

build(
    'Dr-Kiran-Bijapur-Publication-List.pdf',
    'Full Publication List (Placeholder)',
    NOTICE,
    [
        ('Journal Articles', ['Add full citation, journal, year and DOI for each publication.',
                               'Repeat for every peer-reviewed article.']),
        ('Conference Papers', 'Add conference paper citations here.'),
        ('Patents', 'Add patent titles and application/grant numbers here, or refer to the Patents page.'),
    ],
)
