const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/webview-CZd6PrpL.js","assets/core-D8n9Wfto.js","assets/event-BTCPJux0.js","assets/window-DR7R9fyd.js","assets/dist-js-DMhqZ8pp.js","assets/path-DESb_8ZM.js","assets/dist-js-UCi8EyMo.js","assets/sdk-DRMZQJE7.js","assets/error-D9MtuG9s.js","assets/dist-js-jY0DqCR8.js"])))=>i.map(i=>d[i]);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/* Montserrat (2026-07-18, the gardener's ask): the first BUNDLED
   typeface — every other face in the leaf's-dress chooser is a system
   family, but Montserrat is not, so it is SELF-HOSTED (never a CDN —
   independence is by construction, §6). Two subsets of the variable
   font: latin, and latin-ext for the accented letters a writer here
   needs (Māori macrons ā ē ī ō ū live in latin-ext). One file per
   subset covers regular through bold via the weight axis. OFL-licensed;
   the licence rides beside the files in public/fonts/OFL.txt. */
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url(/fonts/montserrat-latin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400 700;
  font-display: swap;
  src: url(/fonts/montserrat-latin-ext.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* TRUE ITALICS (2026-07-18, the gardener): Montserrat's own italic, not
   the browser's synthesized oblique — its own variable italic file per
   subset, covering italic regular through bold-italic on the weight
   axis. So em renders as a real italic, strong+em as a real bold-italic. */
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400 700;
  font-display: swap;
  src: url(/fonts/montserrat-italic-latin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Montserrat';
  font-style: italic;
  font-weight: 400 700;
  font-display: swap;
  src: url(/fonts/montserrat-italic-latin-ext.woff2) format('woff2');
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* INLINE BOLD IS SEMI-BOLD everywhere (2026-07-29, the gardener —
   generalising the 2026-07-18 Montserrat ruling): the format bar's
   bold renders at 600 on every face, not just Montserrat. Real only
   where the face carries a 600 (Avenir Next Demi, Montserrat's
   variable axis, the system sans); Georgia/Palatino/Times/Courier
   have no semi-bold, so the browser snaps to their 700 — an honest
   limit of the font, not a scoping decision. */
.page strong,
.page b {
  font-weight: 600;
}
/* CODE, THE THIRD INLINE MARK (2026-09-13, sown by the show garden's
   first leaf: a manual needs a face for "exactly what you type or press"
   — a control's label, a typed word, a key). Monospace on a faint
   ground; ink, never a colour, so it reads the same on paper. The same
   rule rides in report.ts's EXPORT_CSS. */
/* THE KEY SYMBOLS COME FROM THE SYSTEM FACE (the gardener, 2026-09-13:
   in the first monospace "the shift sign is even a bit hard to read").
   Measured side by side in Chrome: Menlo and SF Mono draw ⌥ ⇧ ⌘ ⇥ ⎋ ⏎
   themselves, thin and outlined; Monaco and PT Mono do not carry them
   at all, so the browser falls through, glyph by glyph, to the next
   family — and system-ui stands there, drawing the keys exactly as the
   manual draws them. The order is the whole trick: system-ui BEFORE the
   generic monospace, or the generic resolves to Menlo and the thin
   keys come back. (A composite @font-face was tried first and refused:
   Chrome's local() cannot name the hidden system font, and "SF Mono"
   is not even matched by family name here — the mark had been Menlo
   all along.) Windows: Consolas letters, Segoe's keys. */
.page code,
.report-para code {
  font-family: Monaco, "PT Mono", Consolas, system-ui, -apple-system, "Segoe UI", monospace;
  font-size: 0.92em;
  padding: 0 0.25em;
  border-radius: 3px;
  background: color-mix(in srgb, var(--ink-text) 7%, transparent);
}
.fmt-code, .fmtp-kind.fmt-code {
  font-family: Monaco, "PT Mono", Consolas, system-ui, -apple-system, "Segoe UI", monospace;
  font-size: 11px;
}
/* STRIKE (2026-09-16, the fourth inline mark): struck through, still
   standing — on the page and on the record alike. The page may HIDE
   struck text (.hide-struck, desk state per leaf, never the log) to read
   the draft clean; hidden, never removed — the words stay in the log,
   the offset space and the report. RIDES IN BOTH STYLESHEETS. */
.page s,
.report-para s {
  text-decoration: line-through;
  text-decoration-thickness: 1px;
  text-decoration-color: color-mix(in srgb, var(--ink-text) 60%, transparent);
}
.page.hide-struck .ProseMirror s {
  display: none;
}
.fmt-strike, .fmtp-kind.fmt-strike {
  text-decoration: line-through;
}
/* Montserrat's HEADINGS keep the 2026-07-18 semi-bold too (its 700
   reads heavy); other faces' headings keep their full bold. */
.page[data-font="montserrat"] h1,
.page[data-font="montserrat"] h2,
.page[data-font="montserrat"] h3 {
  font-weight: 600;
}

/* THE PALETTE LIVES IN ITS OWN FILE (2026-08-12, the gardener: "collect
   all the style rules which relate to the visual appearance into one css
   file… so I can experiment with the look and feel"). Every colour token
   this stylesheet reads — --paper, --desk, --ink-text, --accent and the
   rest — is declared in public/themes/default.css, loaded by a <link> in
   index.html BEFORE this sheet, and swappable for any sibling file in
   that folder via the workbench's 'the look' register (theme.ts).

   SO THIS FILE NAMES NO COLOUR. It carries structure — layout, geometry,
   type scale, the marks' shapes — and reads the palette through var().
   The one exception is the alarm red (#b23c31, the broken-seal verdict
   and the burn confirmation), which is hardcoded here and in the export
   BY RULING: a theme that could repaint a tamper finding could hide one.
   Its reasoning is written out at the foot of default.css.

   The default palette is a FILE, not a fallback: if the link fails to
   load, the app renders unstyled rather than quietly wrong, which is the
   honest failure. */

* { box-sizing: border-box; }

::selection { background: var(--selection); }
::-moz-selection { background: var(--selection); }

html, body {
  margin: 0;
  background: var(--desk);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Georgia, serif;
}

#app {
  display: flex;
  justify-content: center;
  padding: 3rem 0 6rem;
}

/* The page: A4 width, endless height */
.page {
  position: relative;
  z-index: 1; /* the paper sits above the desk lamp's glow */
  width: var(--page-w);
  min-height: 1123px; /* A4 ratio to start; grows forever */
  background: var(--paper);
  box-shadow: var(--shadow);
  border-radius: 2px;
}

/* Writing surface */
/* THE HORIZONTAL RULE ON THE PAGE (2026-08-20): the same quiet
   ink-mixed hairline the record shows — one meaning, two surfaces. The
   node is a leaf the caret cannot enter; backspace removes it whole. */
.page .ProseMirror hr {
  border: 0;
  border-top: 1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
  margin: 1.1em 0;
}
.page .ProseMirror hr.ProseMirror-selectednode {
  border-top-color: color-mix(in srgb, var(--accent) 60%, transparent);
}
.page .ProseMirror {
  position: relative;
  z-index: 1;
  min-height: 1123px;
  /* Generous margins, like paper — and BREATHING ROOM below the last
     line (the gardener, 2026-07-15, after a jot flowed off the page
     foot and typing lived at the bottom edge): the endless page always
     offers near half a screen of paper beneath the writing, so the
     writer works mid-screen and the margin has somewhere to stand. */
  padding: 72px 68px 45vh;
  outline: none;
  color: var(--ink-text);
  /* Body text: the writing surface's own face, distinct from the UI's
     system font. The leaf's DRESS (2026-07-18) makes it a choice —
     '--leaf-font' / '--leaf-size' set per document from the ⌥ manual's
     type chooser; the defaults stand when the leaf has made no choice. */
  font-family: var(--leaf-font, "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--leaf-size, 12pt);
  line-height: 1.7;
  caret-color: var(--accent);
  white-space: pre-wrap;
  word-wrap: break-word;
}
.page .ProseMirror p { margin: 0 0 0.4em; }
/* LISTS AND INDENT (2026-08-02) — per-line ATTRIBUTES, not nested list
   nodes (schema.ts records why), so the marker is drawn here rather than
   carried by a list_item. Every rule below is shared verbatim with the
   report and its export (report.ts EXPORT_CSS): the record must show the
   writing in the shape it was written, and a bulleted line reading flush
   there would be the same silence as the 2026-07-24 case where the report
   had no handler for marks or headings at all.

   Eight explicit steps rather than a calc on attr(): typed attr() is too
   new to rest a whole feature on, and the schema clamps at 8 anyway. The
   marker lives in the block's own left padding, so a wrapped line aligns
   under the first WORD rather than under the bullet — what a real list
   gets for free and a flat model must ask for. */
[data-indent="1"] { padding-left: 2em; }
[data-indent="2"] { padding-left: 4em; }
[data-indent="3"] { padding-left: 6em; }
[data-indent="4"] { padding-left: 8em; }
[data-indent="5"] { padding-left: 10em; }
[data-indent="6"] { padding-left: 12em; }
[data-indent="7"] { padding-left: 14em; }
[data-indent="8"] { padding-left: 16em; }
[data-list] {
  position: relative;
  padding-left: 1.4em;
}
[data-list][data-indent="1"] { padding-left: 3.4em; }
[data-list][data-indent="2"] { padding-left: 5.4em; }
[data-list][data-indent="3"] { padding-left: 7.4em; }
[data-list][data-indent="4"] { padding-left: 9.4em; }
[data-list][data-indent="5"] { padding-left: 11.4em; }
[data-list][data-indent="6"] { padding-left: 13.4em; }
[data-list][data-indent="7"] { padding-left: 15.4em; }
[data-list][data-indent="8"] { padding-left: 17.4em; }
[data-list]::before {
  position: absolute;
  left: 0;
  width: 1.4em;
  color: inherit;
}
[data-list][data-indent="1"]::before { left: 2em; }
[data-list][data-indent="2"]::before { left: 4em; }
[data-list][data-indent="3"]::before { left: 6em; }
[data-list][data-indent="4"]::before { left: 8em; }
[data-list][data-indent="5"]::before { left: 10em; }
[data-list][data-indent="6"]::before { left: 12em; }
[data-list][data-indent="7"]::before { left: 14em; }
[data-list][data-indent="8"]::before { left: 16em; }
[data-list="bullet"]::before { content: "\\2022"; }
[data-list="dash"]::before { content: "\\2013"; } /* en dash, as a word processor draws it */
/* A NUMBERED RUN COUNTS ITSELF BY POSITION, which is the flat model's
   honest limit: no number is stored, so a run reads 1, 2, 3 among its
   neighbours and any line that is not an ordered item restarts the count.
   Nesting is visual — a sub-list does not restart its own numbering.
   Recorded rather than hidden; stored numbers are a different feature.
   A PICTURE IS NOT AN ITEM (2026-09-18, the gardener: he numbered a whole
   leaf and the picture in the middle restarted the count at 1). A line
   that holds only a picture (.pic-only on the page, figure.report-image on
   the record) neither ends the run nor takes a number: the count passes
   over it. */
.page .ProseMirror,
.report-para-cell {
  counter-reset: phloem-li;
}
.page .ProseMirror > *:not([data-list="ordered"]):not(.pic-only),
.report-para-cell > *:not([data-list="ordered"]):not(figure) {
  counter-reset: phloem-li;
}
[data-list="ordered"] { counter-increment: phloem-li; }
[data-list="ordered"]::before { content: counter(phloem-li) "."; }
/* LINE SPACING (2026-08-03) — the fourth per-line layer, and the place
   where the named rung becomes a measurement. The log stores 'single' or
   'double'; these two numbers are the stylesheet's answer, and re-tuning
   them one day re-draws every leaf without unstyling one.

   THE SCALE, so the numbers are not arbitrary: typographic single spacing
   for body text is 1.2, so double is 2.4 — what a teacher means by
   double-spaced, room to write between the lines. The page's own natural
   leading (1.7, above) sits between them at about 1.4× single, which is
   why there is no '1½' rung: it would land at 1.8, a hair from natural.
   'natural' stores no attr at all, so a leaf that never asked for leading
   is byte-identical to one written before this existed.

   The .report-para pair rides along because the record's own rule sets a
   line-height of its own further down this sheet — a bare attribute
   selector would lose to it on order, and a double-spaced essay reading
   flush on the record is the 2026-07-24 silence again. Both selectors are
   mirrored in report.ts EXPORT_CSS for the travelling copy. */
[data-spacing="single"],
.report-para[data-spacing="single"] { line-height: 1.2; }
[data-spacing="double"],
.report-para[data-spacing="double"] { line-height: 2.4; }
/* THE TABLE ROW (2026-09-16, the format panel's third inhabitant — text
   in rows and columns, nothing more). A row is a paragraph whose cells
   are split at tabs: on the page the editor's decorations wrap each cell
   in .cell and hide each tab in .tabsep (editor.ts); on the record the
   report writes .rep-cell and drops the tabs (report.ts). Both lay the
   cells out as EQUAL COLUMNS — the count is written inline as the grid
   template, the width is the stylesheet's and never logged. Quiet
   ink-mixed rules, consecutive rows sharing their edges so a table reads
   as one thing. RIDES IN BOTH STYLESHEETS. */
.page .ProseMirror [data-table="row"],
.report-para[data-table="row"] {
  position: relative;
  display: grid;
  margin: 0;
  border-top: 1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
  border-left: 1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
}
.page .ProseMirror [data-table="row"] + [data-table="row"],
.report-para[data-table="row"] + .report-para[data-table="row"] {
  border-top: 0;
}
[data-table="row"] .cell,
[data-table="row"] .rep-cell {
  display: block;
  min-width: 0;
  min-height: 1.4em;
  padding: 0.25em 0.55em;
  overflow-wrap: anywhere;
  border-right: 1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
  border-bottom: 1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
}
/* The tab is the separator, not a cell: out of the grid's sight. */
[data-table="row"] .tabsep {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}
/* ProseMirror's own trailing hack (a separator img and a br after a
   widget that ends the block) would become a fifth grid item on its own
   grid row, stretching the row's left rule below the cells. Out of the
   grid's sight too; the caret still lands in the last cell by position. */
.page .ProseMirror [data-table="row"] > img.ProseMirror-separator,
.page .ProseMirror [data-table="row"] > br.ProseMirror-trailingBreak {
  display: none;
}
.report-para[data-table="row"] .rep-kin-mark { grid-column: 1 / -1; }
/* Air after the table's last row, before whatever follows it. */
.page .ProseMirror [data-table="row"] + :not([data-table="row"]),
.report-para[data-table="row"] + .report-para:not([data-table="row"]) {
  margin-top: 0.9em;
}
/* THE IMAGE (2026-09-16, the format panel's fourth inhabitant — the
   gardener's rulings: copied into the record; a named size, never pixels;
   on its line or with the text beside it). SINCE 2026-09-18 IT STANDS IN
   THE TEXT: the page writes span.page-image inside its paragraph
   (schema.ts), at the caret, and the placement says what the words do —
   'inline' sits in the line like a large letter; left, centre and right
   break the line and keep the words clear above and below; the two wraps
   float it and the words flow round. A picture alone in its paragraph is
   "a line of its own", exactly as before. The record writes
   figure.report-image for a picture alone on its line, span.rep-pic for
   one among words, and figure.rep-float for a lone picture the text
   wraps, INSIDE the paragraph that follows it (report.ts) — each grid row
   of the record can only wrap what it holds. Sizes are the stylesheet's;
   the log holds the name. RIDES IN BOTH STYLESHEETS. */
.page .ProseMirror {
  display: flow-root; /* a wrapped picture never spills past the page */
}
.page-image,
.rep-pic {
  display: block;
  margin: 0.6em 0 0.9em;
  padding: 0;
}
figure.report-image {
  margin: 0.6em 0 0.9em;
  padding: 0 0 0 10px;
}
.page-image img,
.rep-pic img,
figure.report-image img,
.rep-float img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 3px;
}
.page-image[data-size="tiny"],
.rep-pic[data-size="tiny"],
figure.report-image[data-size="tiny"] { width: 12.5%; }
.page-image[data-size="small"],
.rep-pic[data-size="small"],
figure.report-image[data-size="small"] { width: 33%; }
.page-image[data-size="medium"],
.rep-pic[data-size="medium"],
figure.report-image[data-size="medium"] { width: 60%; }
.page-image[data-size="full"],
.rep-pic[data-size="full"],
figure.report-image[data-size="full"] { width: 100%; }
.page-image[data-place="center"],
.rep-pic[data-place="center"],
figure.report-image[data-place="center"] { margin-left: auto; margin-right: auto; }
.page-image[data-place="right"],
.rep-pic[data-place="right"],
figure.report-image[data-place="right"] { margin-left: auto; }
/* In the line: a large letter. It rides the baseline's foot, the line
   grows to hold it, and the words before and after stay on its line. */
.page-image[data-place="inline"],
.rep-pic[data-place="inline"] {
  display: inline-block;
  vertical-align: bottom;
  margin: 0.1em 0.2em;
}
/* With the text beside it: floated where it stands, and the words of
   every following line flow around it until it ends. */
.page-image[data-place="wrap-left"],
.rep-pic[data-place="wrap-left"] { float: left; margin: 0.15em 1em 0.5em 0; }
.page-image[data-place="wrap-right"],
.rep-pic[data-place="wrap-right"] { float: right; margin: 0.15em 0 0.5em 1em; }
.page-image[data-place^="wrap"][data-size="tiny"],
.rep-pic[data-place^="wrap"][data-size="tiny"] { width: 12.5%; }
.page-image[data-place^="wrap"][data-size="small"],
.rep-pic[data-place^="wrap"][data-size="small"] { width: 33%; }
.page-image[data-place^="wrap"][data-size="medium"],
.rep-pic[data-place^="wrap"][data-size="medium"] { width: 50%; }
.page-image[data-place^="wrap"][data-size="full"],
.rep-pic[data-place^="wrap"][data-size="full"] { width: 60%; }
/* A LINE THAT HOLDS ONLY A PICTURE (.pic-only, editor.ts): not an item, so
   a numbered run passes over it without a number; and when its picture
   is wrapped, the line takes no height, so the words that follow begin
   level with the picture's top, as they did when a figure was a block. */
.page .ProseMirror > .pic-only { counter-increment: none; }
.page .ProseMirror > .pic-only::before { content: none; }
.page .ProseMirror > .pic-only:has(> .page-image[data-place^="wrap"]) {
  height: 0;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 0;
}
figure.report-image { counter-increment: none; }
figure.report-image::before { content: none; }
.rep-float { margin: 0.15em 0 0.5em; }
.rep-float[data-size="tiny"] { width: 12.5%; }
.rep-float[data-size="small"] { width: 33%; }
.rep-float[data-size="medium"] { width: 50%; }
.rep-float[data-size="full"] { width: 60%; }
.rep-float[data-place="wrap-left"] { float: left; margin-right: 1em; }
.rep-float[data-place="wrap-right"] { float: right; margin-left: 1em; }
.report-para { display: flow-root; }
/* THE CARRY (editor.ts wireCarry): a picture or a selected passage moved
   with plain mouse events. The caret says where it would land, the hand
   says it is held, and the hint stands beside the pointer only when the
   button is up and something is still held — then the next click places
   it. Page only: the record has nothing to carry. */
.carry-caret {
  position: fixed;
  z-index: 60;
  width: 2px;
  border-radius: 1px;
  background: var(--accent);
  pointer-events: none;
}
.carry-hint {
  position: fixed;
  z-index: 61;
  pointer-events: none;
  font: 500 12px/1.3 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--paper);
  background: color-mix(in srgb, var(--ink-text) 88%, transparent);
  border-radius: 6px;
  padding: 4px 9px;
  white-space: nowrap;
}
body.carrying, body.carrying * { cursor: grabbing !important; user-select: none; }
.page .ProseMirror .page-image { cursor: grab; }
/* The selected picture wears the accent ring the rule and the cards wear. */
.page .ProseMirror .page-image.ProseMirror-selectednode img {
  outline: 2px solid color-mix(in srgb, var(--accent) 70%, transparent);
  outline-offset: 2px;
}
/* THE DROP'S QUESTION (2026-09-16, desktop only — files.ts): a picture
   dropped on the page asks where it goes. Stands where the drop landed,
   in the chip's own dress, and leaves on an answer, Esc or a click
   elsewhere. */
.drop-ask {
  position: fixed;
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 10px 12px;
  background: color-mix(in srgb, var(--paper) 94%, transparent);
  border: 1px solid var(--line-soft);
  border-radius: 10px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(3px);
}
.drop-ask-what {
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--hint);
  margin-bottom: 2px;
}
/* The two answers wear the chip's dress but stand in the box's flow —
   .chip is position:fixed for the margin's own use, and two fixed chips
   pinned to one spot hid each other (the gardener, 2026-09-16). */
.drop-ask .chip {
  position: static;
  transform: none;
  box-shadow: none;
}
/* Headings (2026-07-18, block styles): the writing surface's own scale,
   a step up from body. h1 a title, h2 a section — both quieter than a
   word processor's shout. */
.page .ProseMirror h1,
.page .ProseMirror h2,
.page .ProseMirror h3 {
  font-weight: 600; /* semi-bold (Avenir Next Demi) — the gardener's taste */
  line-height: 1.3;
  margin: 0.6em 0 0.3em;
  color: var(--ink-text);
}
/* Headings scale WITH the body size (em), so the leaf's chosen size
   lifts the whole hierarchy together. */
.page .ProseMirror h1 { font-size: 1.42em; }
.page .ProseMirror h2 { font-size: 1.2em; }
.page .ProseMirror h3 { font-size: 1.08em; }
/* THE ASIDE (2026-09-14, block styles): a note or a warning set apart
   from the flow — a wash in ink, never a colour (the report's one red
   is the broken seal's) and never a left rule (the report's left edge
   belongs to the derived and tempo rails), so it survives a
   black-and-white print and reads the same on the page, the painted
   page and the record. */
.page .ProseMirror aside,
.paint-inner aside {
  background: color-mix(in srgb, var(--ink-text) 6%, transparent);
  border-radius: 6px;
  padding: 0.55em 0.9em;
  margin: 0.4em 0;
}

/* Ink overlay: renders a leaf's logged strokes above the text (draw
   mode retired 2026-07-19 — display only, never intercepts clicks). */
.ink {
  position: absolute;
  inset: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  pointer-events: none;
  touch-action: none;
}
.ink path {
  fill: none;
  stroke: var(--ink-stroke);
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* File-leaves: attached documents worn as paper tags along the top of
   the page. Content, not chrome — they live ON the paper. */
.leaves {
  position: absolute;
  top: 14px;
  left: 68px;
  right: 68px;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.leaf {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  padding: 3px 10px;
  color: var(--ink-text);
  background: var(--desk);
  border: 1px solid var(--line);
  border-radius: 6px;
  cursor: pointer;
  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 0.85;
  transition: opacity 0.2s;
}
.leaf:hover {
  opacity: 1;
}
/* Withered: the file has left its path. A record of a source once
   read, not a live door — faint and struck, and it reports rather
   than reaches when clicked. Distillation, not deletion. */
.leaf-withered {
  opacity: 0.4;
  text-decoration: line-through;
  cursor: default;
  font-style: italic;
}
.leaf-withered:hover {
  opacity: 0.55;
}

/* Comet trail canvas floats over everything, never intercepts */
#trail {
  position: fixed;
  inset: 0;
  /* canvas is a replaced element: inset positions it but does NOT
     stretch it — without explicit size it follows its buffer attributes */
  width: 100%;
  height: 100%;
  z-index: 9;
  pointer-events: none;
}

/* The engine's voice: jotted notes in the LEFT margin (the deliberate
   side, addressed to you), each beside the line it concerns — the chip
   grown up. Pencilled, faint, adoptable: click to keep it in your words'
   place. Withdraws when its line's words change; never on a timer. */
#margin {
  position: fixed;
  inset: 0;
  z-index: 8;
  pointer-events: none;
}
.jot {
  position: fixed;
  max-width: 150px;
  text-align: left;
  padding: 3px 9px;
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  font-style: italic;
  line-height: 1.35;
  color: var(--accent);
  background: none;
  border: none;
  border-left: 2px solid var(--accent);
  border-radius: 0;
  opacity: 0.55; /* pencil-faint: an offer, not an assertion */
  cursor: pointer;
  pointer-events: auto;
  transition: opacity 0.3s, transform 0.2s;
  animation: jotIn 0.4s ease-out;
}
.jot {
  cursor: grab;
}
/* AT REST, ONE LINE (2026-07-18, the gardener's crowding ruling):
   notes and jots rest as a single clamped line; at most one stands
   open (the accordion). Fresh arrivals open themselves; a click
   unfolds/folds. The editing card is always whole. */
.jot:not(.open):not(.editing) {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jot:hover {
  opacity: 1;
  transform: translateX(2px); /* leans toward the page, ready to be kept */
}
/* In the hand: fully present, following the pointer, transitions off so
   it tracks honestly. Drop on the page to keep; carry away to let go. */
.jot.dragging {
  opacity: 1;
  cursor: grabbing;
  transform: none;
  transition: none;
  z-index: 9;
}
@keyframes jotIn {
  from { opacity: 0; transform: translateX(-4px); }
  to   { opacity: 0.55; transform: translateX(0); }
}
/* The writer's own margin note (2026-07-18): the same species as the
   jot, told apart by VOICE, not side — the companion writes in accent
   green, the writer in ink. Upright and a touch more present: an
   offer is pencil-faint, but marginalia is a keepsake. */
.jot.own {
  color: var(--ink-text);
  border-left-color: var(--ink-text);
  font-style: normal;
  opacity: 0.7;
}
/* Being written: a live pen, fully present. */
.jot.own.editing {
  min-width: 110px;
  outline: none;
  cursor: text;
  opacity: 1;
}
/* The compose PANEL (2026-07-18, the gardener): an empty contenteditable
   gave no sign of where to write, and Return submitted before he meant
   it. Now a small card — a growing field over a keep/discard foot —
   makes the writing surface obvious and the commit deliberate. It keeps
   the ink left-stripe (the writer's voice) but wears a faint paper so it
   reads as a place to type; Return is a line break, the foot commits. */
.jot.own.editing.composing {
  cursor: default;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 6px 8px 6px 9px;
  min-width: 150px;
  background: var(--paper);
  border-radius: 0 3px 3px 0;
  box-shadow: var(--shadow);
  /* A ceiling, pre-emptively (2026-08-02, with the chooser's and the
     slip's): Return became a LINE BREAK here in July, so a margin note
     may be paragraphs — and the field grows with them, from a card
     anchored to its line with nothing below to stop it. The keep/discard
     foot is what must never be pushed off: it is the only way to commit,
     so the FIELD scrolls (below) and the foot stays. */
  max-height: 70vh;
}
.jot.own.editing.composing .own-compose {
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
}
.own-compose {
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  line-height: 1.35;
  color: var(--ink-text);
  background: none;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
  width: 100%;
  min-height: 1.35em;
  white-space: pre-wrap;
}
.own-compose::placeholder {
  color: var(--hint);
  font-style: italic;
}
.own-compose-foot {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}
.own-compose-foot button {
  font-family: inherit;
  font-size: 11px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: var(--hint);
  transition: opacity 0.2s;
}
.own-compose-foot button:hover { opacity: 0.7; }
/* An unfolded own note keeps the line breaks the writer typed into it
   (Return is a line break now) — the resting clamp still shows one line. */
.jot.own.open { white-space: pre-wrap; }
/* THE NOTE WEARS ITS GROUNDS (2026-08-01): the note's own declaration,
   faint inside the UNFOLDED card only — the resting clamped line stays
   calm. A self-report, dressed as one (smaller, fainter than the note). */
.jot-grounds { display: none; }
.jot.open .jot-grounds {
  display: block;
  margin-top: 3px;
  font-size: 10px;
  opacity: 0.6;
  letter-spacing: 0.02em;
}
/* THE PAGES THE MARGIN READ (2026-08-10) — folded away with the grounds
   line it stands under, so the resting card is still one calm clamped
   line. Each page on its own row, its title only; the full address is
   the row's title attribute, so a long URL can be read without widening
   the margin (whose width the page's own lane is entitled to). Faint,
   like every other self-describing line here, and NOT the accent: the
   accent is reserved for a verb the hand may run, and these are not
   controls — see margin.ts on why they do not open. */
.jot-sources { display: none; }
.jot.open .jot-sources {
  display: block;
  margin-top: 2px;
  font-size: 10px;
  opacity: 0.55;
  line-height: 1.35;
}
.jot-source {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.jot-source::before {
  content: '· ';
  opacity: 0.7;
}

/* THE SOURCE'S OWN WORDS (2026-08-10, the 'quoted' shape) — folded away
   with the grounds line, so the resting card is still one calm clamped
   line. The quote is set in italic to mark it as somebody else's
   sentence; its source sits under it, faint, like every other
   self-describing line here. DRAGGABLE, so it wears the grab cursor the
   jot itself does — what is dragged is what lands. */
.jot-cites { display: none; }
.jot.open .jot-cites {
  display: block;
  margin-top: 3px;
  font-size: 10px;
  line-height: 1.4;
}
.jot-cite {
  display: block;
  margin-top: 3px;
  cursor: grab;
}
.jot-cite-quote {
  display: block;
  font-style: italic;
  opacity: 0.75;
}
.jot-cite-src {
  display: block;
  margin-left: 8px;
  opacity: 0.5;
}

/* THE BANK REMEMBERS WHERE A NOTE CAME FROM (2026-08-10) — faint, under
   the words, in the margin card's own voice.
   AND IT FOLDS WITH THE NOTE (RULED 2026-08-10, the gardener: "the
   'whole' notes should collapse and open together — text AND
   citations"), superseding the always-visible reading made earlier the
   same day. That
   reading protected the right thing and named the wrong one: it argued
   there is no calm resting line to protect in a surface the writer
   summoned on purpose, when what the pad's clamp protects is the LIST —
   a bank of eleven notes is read by running an eye down eleven single
   lines, and a row standing three lines tall because it happens to carry
   a quote breaks the scan for every row beneath it. And it is ONE
   OBJECT: the accordion's whole meaning is that a click opens a note, so
   a note whose evidence stayed open whatever the click did was two
   things wearing one row. The same rule now holds in all three surfaces
   — the margin card, this row, and the report's ledger card. */
.pad-note-sources {
  display: none;
  margin-top: 4px;
  font-size: 10px;
  line-height: 1.35;
  opacity: 0.55;
}
.pad-note.open .pad-note-sources {
  display: block;
}
.pad-note-quote {
  display: block;
  font-style: italic;
  margin-top: 2px;
}
.pad-note-src {
  display: block;
  font-style: normal;
  opacity: 0.75;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}


/* THE QUESTION IN THE MARGIN (2026-08-06): an unfolded own note offers
   to be answered. The verb rests hidden with the fold — the calm margin
   is the contract — and wears the accent, being a summons, not a
   self-report. The grounds tag's dress, made interactive. */
.own-ask { display: none; }
.jot.own.open .own-ask {
  display: block;
  margin-top: 3px;
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.02em;
  cursor: pointer;
  transition: opacity 0.2s;
}
.jot.own.open .own-ask:hover { opacity: 0.7; }
/* 'keep & ask' in the compose foot: a commit that also summons — the
   accent says so, but 'keep' stays the emphatic default. */
/* The foot's ONE verb (2026-08-07): 'ask the margin' wears the emphasis
   the old 'keep' carried — the accent and the weight — being the only
   deliberate act the foot offers now that keeping is the default and
   disposal lives in the notepad. */
.own-compose-foot .own-askbtn {
  color: var(--accent);
  font-weight: 600;
}

/* The drop marker: a caret-thin line at the exact insertion point,
   standing only while a real drag is over the paper — indexical, it IS
   the position the words will take. */
#drop-marker {
  position: fixed;
  width: 2px;
  background: var(--accent);
  z-index: 9;
  pointer-events: none;
  display: none;
}

/* The notepad: the leaf's bank of every note the margin has shown.
   The door is the shade's grammar — faint text, bottom-left, standing
   only when there is content. The pad itself is desk furniture. */
/* THE LEAF WEARS ITS NAME (2026-07-22, the gardener: "I'd like to be
   able to see the name of the current leaf somewhere while I'm on it").
   Faint text in the LEFT column, standing just above the pad door — the
   same desk-furniture grammar, and structure's home is the left. It
   stands ONLY when the leaf carries a deliberate name (an unnamed leaf's
   name is its first line, already on the page), so it is never chrome
   saying what the paper already says. A label, not a control: the verb
   to change it lives in the manual, so it takes no clicks. */
/* THE PILE AT THE GARDEN'S EDGE (2026-07-22, item 0). What has been
   uprooted but not destroyed: last in the survey, quieter than anything
   growing above it, and absent entirely when nothing is uprooted. Rows,
   not cards — a pile is not a display, and these things are no longer
   part of the garden's shape. Both verbs stay hidden until the row is
   wanted (the pad-note grammar); 'burn' wears the app's one alarm red,
   the same the report shows when a chain will not verify. */
.pile-heading {
  opacity: 0.5;
}
.pile-zone {
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-width: 520px;
}
.pile-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 18px;
  padding: 5px 8px;
  border-radius: 8px;
  font-size: 13px;
  color: var(--ink-text);
  opacity: 0.62;
}
.pile-row:hover {
  background: var(--fill);
  opacity: 1;
}
.pile-what {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pile-verbs {
  display: flex;
  flex: 0 0 auto;
  gap: 6px;
}
.pile-verb {
  padding: 2px 6px;
  border: 0;
  border-radius: 6px;
  background: none;
  font: inherit;
  font-size: 11px;
  letter-spacing: 0.04em;
  color: var(--hint);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease;
}
.pile-row:hover .pile-verb,
.pile-verb:focus-visible {
  opacity: 1;
}
.pile-verb:hover {
  color: var(--ink-text);
  background: var(--fill-firm);
}
.pile-burn:hover {
  color: #b23c31;
  background: rgba(178, 60, 49, 0.1);
}
/* THE BURN'S QUESTION (2026-08-02), standing in the survey immediately
   above 'the pile' — with the thing it is about, not half a window away.
   It wears the pile-burn alarm red, which is the app's ONE alarm colour
   and earns its use here: this is the only gesture in Phloem that
   destroys anything. Stated plainly, then a field: consent needs to know
   what it is consenting to. */
.burn-ask {
  max-width: 520px;
  margin: 10px 0 14px;
  padding: 12px 14px;
  border: 1px solid rgba(178, 60, 49, 0.45);
  border-radius: 8px;
  background: rgba(178, 60, 49, 0.06);
}
.burn-said {
  font-size: 13px;
  line-height: 1.5;
  color: var(--ink-text);
}
.burn-input {
  margin-top: 9px;
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: 13px;
  padding: 6px 8px;
  color: var(--ink-text);
  background: var(--paper);
  border: 1px solid rgba(178, 60, 49, 0.5);
  border-radius: 6px;
  outline: none;
}
.burn-input:focus {
  border-color: #b23c31;
}
/* A name typed that does not match: the field says so by standing its
   ground, rather than by a second sentence appearing (which would be the
   system announcing). It clears the moment the typing changes. */
.burn-ask.refused .burn-input {
  border-color: #b23c31;
  background: rgba(178, 60, 49, 0.08);
}
#leaf-name {
  position: fixed;
  left: 12px;
  bottom: 30px;
  z-index: 7;
  max-width: 240px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--ink-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.4s ease;
}
#leaf-name.show {
  opacity: 0.32;
}
#pad-door {
  position: fixed;
  left: 12px;
  bottom: 12px;
  z-index: 7;
  background: none;
  border: none;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--ink-text);
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.4s;
}
#pad-door.show {
  opacity: 0.3;
  pointer-events: auto;
}
#pad-door.show:hover {
  opacity: 0.8;
}
body.revealing #pad-door.show {
  opacity: 0.85;
  color: var(--accent);
}
#pad {
  position: fixed;
  left: 12px;
  bottom: 34px;
  z-index: 10;
  width: 280px;
  max-height: 55vh;
  overflow-y: auto;
  background: var(--paper);
  border: 1px solid var(--line-firm);
  border-radius: 8px;
  box-shadow: var(--shadow);
  padding: 10px 12px 4px;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.25s, visibility 0.25s;
}
#pad.show {
  visibility: visible;
  opacity: 1;
}
.pad-item {
  margin: 0 0 8px;
}
.pad-note {
  display: block;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  border-left: 2px solid var(--accent);
  border-radius: 0;
  padding: 3px 8px;
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  font-style: italic;
  line-height: 1.35;
  color: var(--accent);
  opacity: 0.75;
  cursor: grab;
  /* At rest, a clamped one-line summary; a click unfolds it (the
     accordion, mirroring the margin — 2026-07-19). */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.pad-note.open {
  white-space: normal;
  overflow: visible;
  text-overflow: clip;
  opacity: 1;
}
.pad-note:hover {
  opacity: 1;
}
/* Voice as colour (2026-07-18): the writer's own banked notes wear ink
   and stand upright, the engine's stay accent-green and italic — the
   same authorship the margin and the report paint. */
.pad-note.own {
  color: var(--ink-text);
  border-left-color: var(--ink-text);
  font-style: normal;
}
/* The row's faint controls, revealed when the row is hovered, sharing one
   line under the note (re-cut 2026-08-07, the gardener: 'pin it back' ·
   'copy' · 'to the pile'; '⌖ its line' and '↳ its own leaf' retired —
   the pin-back already carries the hand to the line, and the
   graduation's job is a copy away). 'take it back' is the pile row's
   one control, same dress. */
.pad-copy,
.pad-pile,
.pad-unpile,
.pad-pin {
  display: inline-block;
  margin: 1px 0 0 10px;
  padding: 0;
  background: none;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 10.5px;
  letter-spacing: 0.02em;
  color: var(--accent);
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.15s;
}
.pad-item:hover .pad-copy,
.pad-item:hover .pad-pile,
.pad-item:hover .pad-unpile,
.pad-item:hover .pad-pin {
  opacity: 0.6;
}
.pad-copy:hover,
.pad-pile:hover,
.pad-unpile:hover,
.pad-pin:hover {
  opacity: 1 !important;
  text-decoration: underline;
}
/* A copy mid-confirmation holds its ground (2026-08-07): the label IS
   the feedback, so the hover-reveal may not hide it while it speaks —
   not even if the pointer drifts off the row before it settles back. */
.pad-copy.done {
  opacity: 1 !important;
  text-decoration: none;
}
/* THE PILE, AT THE PAD'S FOOT (2026-08-07): the set-aside notes gather
   behind a faint fold — present and counted, one click from home. A
   pile that destroys nothing wears rest, not alarm: piled rows are
   faint, never struck (struck is the withered grammar, and these lines
   are not lost — they are set aside). */
.pad-pile-door {
  display: block;
  margin: 10px 0 4px;
  padding: 0;
  background: none;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 10.5px;
  letter-spacing: 0.04em;
  color: var(--hint);
  cursor: pointer;
  transition: opacity 0.15s;
}
.pad-pile-door:hover {
  color: var(--accent);
}
.pad-item.piled .pad-note {
  opacity: 0.4;
  cursor: default;
}
.pad-item.piled .pad-note.open,
.pad-item.piled .pad-note:hover {
  opacity: 0.65;
}
/* A note in the hand's grip, on loan from the bank. */
.pad-ghost {
  position: fixed;
  max-width: 220px;
  z-index: 99;
  pointer-events: none;
}

/* The chip: the margin's voice. Lives on the desk beside the line,
   never on the paper. Short-lived; click or Tab accepts. */
.chip {
  position: fixed;
  z-index: 8;
  padding: 4px 10px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12.5px;
  color: var(--accent);
  background: var(--paper);
  border: 1px solid var(--accent);
  border-radius: 999px;
  box-shadow: var(--shadow);
  cursor: pointer;
  opacity: 0;
  transform: translateX(4px);
  transition: opacity 0.25s, transform 0.25s;
  pointer-events: none;
  white-space: nowrap;
}
.chip.show {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}
/* (.chip.asking and its keyframes retired 2026-08-04 with the chip's own
   summons door — dead since the format bar took the selection in July.
   The summons echoes on the hint line now, where every gesture's echo
   lives.) */

/* The ghosts: other trees, summoned by your words, standing at the
   desk's right margin. Solidity is relevance; click to walk in. */
#ghosts {
  /* the desk: an invisible overlay; ghost cards scatter inside it as a
     cloud — positions seeded per tree, stable as you type */
  position: fixed;
  inset: 0;
  z-index: 7;
  pointer-events: none;
}
#ghosts .ghost {
  position: absolute;
  /* Peripheral motion is trust (2026-07-16, the gardener: gentle
     slides, never sudden changes — "more like 2s"): the company
     drifts, it does not dart — re-ranking eases over a long breath.
     Hover stays quick: answering the hand is not peripheral motion. */
  transition: opacity 1.5s ease, transform 0.25s,
    left 2s cubic-bezier(0.22, 0.61, 0.36, 1),
    top 2s cubic-bezier(0.22, 0.61, 0.36, 1);
}
#ghosts .ghost:hover {
  z-index: 99 !important; /* beat the inline stacking order */
}

.ghost {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* the THUMB anchors the card: a wide attribution must never widen
     the box and shove the miniature sideways (the confused-thumbnails
     bug, 2026-07-15 — cards with 📎 lines slid into their neighbours
     at every window size) */
  align-items: flex-start;
  position: relative;
  gap: 5px;
  cursor: pointer;
  opacity: var(--solidity, 0.4);
  transition: opacity 0.4s, transform 0.2s;
  pointer-events: auto;
}
.ghost:hover {
  opacity: 1;
  transform: translateY(-2px);
}

/* The thumb: a true miniature of the tree's page — its real first
   lines, its real strokes, scaled down. */
.thumb {
  position: relative;
  transition: width 0.45s ease, height 0.45s ease;
  background: var(--paper);
  border: 1px solid var(--line-firm);
  border-radius: 3px;
  box-shadow: var(--shadow);
  overflow: hidden;
}
.thumb-inner {
  position: absolute;
  transition: transform 0.45s ease;
  top: 0;
  left: 0;
  width: 794px;
  height: 1123px;
  transform-origin: 0 0;
  background: var(--paper);
}
.thumb-text {
  padding: 58px 62px;
  /* match the page's body face AND its left alignment so the miniature
     stays a true shrink — the .ghost is a <button>, whose UA default is
     text-align:center; without this the preview text would centre while
     the real page (.ProseMirror) runs left. */
  font-family: "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  text-align: left;
}
.thumb-text p {
  margin: 0 0 12px;
  font-size: 30px;
  line-height: 1.5;
  color: var(--ink-text);
  white-space: nowrap;
  overflow: hidden;
}
.thumb-ink {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.thumb-ink path {
  fill: none;
  stroke: var(--ink-stroke);
  stroke-width: 16; /* readable at half-size miniature scale */
  stroke-linecap: round;
  stroke-linejoin: round;
}
/* The title lives inside the miniature (2026-07-15): the preview fades
   through its lower band and the leaf's first line prints over it,
   within the card's boundary — one crisp rectangle, compact stacking. */
.ghost-label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 14px 3px 2px;
  background: linear-gradient(to bottom, transparent, var(--paper) 55%);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink-text);
  opacity: 0.85;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}
/* The paperclip: an attachment answered here. Inside the thumbnail,
   just above the title, left-aligned — a mark, not a sprawling name. */
.ghost-clip {
  font-size: 8px;
  line-height: 1;
  margin-bottom: 1px;
  opacity: 0.85;
}
.ghost-label-text {
  font-size: 9px;
  line-height: 1.25;
  /* up to TWO lines: at miniature widths one line is four characters,
     which recognises nothing — two lines earn a real title. Left-set
     and filled edge to edge (mid-word breaks allowed): a centred short
     first word reads as a stray indent at this size, and every pixel
     of line belongs to characters (the gardener, 2026-07-15). */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  white-space: normal;
  overflow: hidden;
  text-align: left;
  word-break: break-all;
  width: 100%;
}

/* Arrival wash for leaf tags: the answering file points at itself */
.leaf-wash {
  animation: leafGlow 6s ease-out forwards;
}
@keyframes leafGlow {
  0%   { box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 60%, transparent); }
  100% { box-shadow: 0 0 0 0 transparent; }
}

/* The flash: a word clicked on the slip glows where it stands in the
   leaf, then fades. View-only — never content, never logged. The slip,
   not this glow, is the record; the glow is only the pointing finger. */
.reach-wash {
  border-radius: 3px;
  animation: washFade 6s ease-out forwards;
}
@keyframes washFade {
  0%   { background-color: var(--accent-glow); }
  25%  { background-color: color-mix(in srgb, var(--accent) 35%, transparent); }
  100% { background-color: transparent; }
}

/* Cmd-F's find bar (2026-07-20): summoned desk furniture, top-centre,
   slides down when opened and clears out on Esc / a click away. Above
   every place overlay and the reveal, so it stands over whatever screen
   asked for it. */
#findbar {
  position: fixed;
  top: 14px;
  left: 50%;
  z-index: 16;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 6px 5px 12px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 10px;
  box-shadow: var(--shadow);
  opacity: 0;
  pointer-events: none;
  transform: translateX(-50%) translateY(-140%);
  transition: transform 0.18s ease, opacity 0.18s ease;
}
#findbar.show {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}
.find-input {
  font: inherit;
  font-size: 13px;
  border: none;
  outline: none;
  background: transparent;
  color: var(--ink-text);
  width: 190px;
}
.find-count {
  font-size: 11px;
  color: var(--muted);
  min-width: 52px;
  text-align: right;
  user-select: none;
}
.find-nav {
  border: none;
  background: transparent;
  color: var(--ink-text);
  font-size: 17px;
  line-height: 1;
  padding: 2px 6px;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.6;
}
.find-nav:hover {
  opacity: 1;
  background: color-mix(in srgb, var(--ink-text) 8%, transparent);
}
/* Every match glows faintly (the accent, like the slip's wash); the
   current one brighter — the pointing finger. No animation: find holds
   its glow while the bar stands, unlike the transient scroll-wash. */
.find-match {
  border-radius: 3px;
  background-color: color-mix(in srgb, var(--accent) 22%, transparent);
}
.find-current {
  background-color: color-mix(in srgb, var(--accent) 50%, transparent);
}

/* The librarian's slip: why this leaf was pulled from the shelf. Lands
   top-right on the desk, understated (it must not jump into view);
   stands until you SETTLE (its opacity is driven by the commitment
   meter, not a clock). A word cloud graded by the summons' own weights —
   size, opacity, and height all carry relevance. Click a word to be
   carried to it in the leaf. */
#slip {
  position: fixed;
  top: 3.2rem;
  /* Closer to the document: hug the page's right edge (190px cloud +
     14px clear) where the gutter is wide enough; on narrow screens
     with no room beside the page, fall back to the desk edge (14px). */
  right: max(14px, calc(50vw - var(--desk-half, calc(var(--page-w) / 2)) - 204px));
  z-index: 7;
  width: 190px;
  padding: 12px 14px 14px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--shadow);
  /* A ceiling, pre-emptively (2026-08-02, with the chooser's): the cloud
     is one word per query term, and a summons off a long paragraph can
     run it past the foot of the window. It hangs from the top with
     nothing below to stop it. */
  max-height: calc(100vh - 3.2rem - 20px);
  overflow-y: auto;
  overscroll-behavior: contain;
  opacity: 1;
  transition: opacity 0.5s ease;
}
.slip-title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 10px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--muted);
  opacity: 0.7;
  margin-bottom: 9px;
}
.slip-cloud {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 3px 9px;
  line-height: 1.25;
}
.slip-word {
  background: none;
  border: none;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--accent);
  cursor: pointer;
  transition: opacity 0.2s;
}
.slip-word:hover {
  opacity: 1 !important;
  text-decoration: underline;
}
/* A static readout word (the hover-preview, Move 1): a span, not a
   button — no pointer cursor, no hover underline. It shows WHY; it is not
   yet a thing to chase. */
.slip-word.static {
  cursor: default;
}
.slip-word.static:hover {
  text-decoration: none;
}

/* The ghost hover-preview (2026-07-20): the slip's own readout, shown over
   your page while the pointer rests on a ghost — the "why" without the
   walk. Same box as the arrival slip, one z above it. Pointer-transparent
   when hidden (never steals a hover invisibly); interactive when shown —
   its words open the compare view (Move 2), and a grace beat lets the
   pointer travel from the ghost onto it. Fades on the .show toggle. */
#ghost-preview {
  position: fixed;
  top: 3.2rem;
  right: max(14px, calc(50vw - var(--desk-half, calc(var(--page-w) / 2)) - 204px));
  z-index: 8;
  width: 190px;
  padding: 12px 14px 14px;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  box-shadow: var(--shadow);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.28s ease;
}
#ghost-preview.show {
  opacity: 1;
  pointer-events: auto;
}

/* The compare view (2026-07-20, Move 2): two leaves side by side, the
   shared word lit in both — DESK FURNITURE floating over your page (a
   dimmed scrim, not an opaque place), left cleanly by Esc or a click on
   the surround. Read-only: it renders text, never an editor. */
#compare {
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  gap: 2.5vw;
  justify-content: center;
  align-items: stretch;
  padding: 4vh 4vw;
  background: var(--scrim);
  backdrop-filter: blur(3px);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.24s ease, visibility 0.24s ease;
}
#compare.show {
  visibility: visible;
  opacity: 1;
}
.compare-pane {
  flex: 1 1 0;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  min-height: 0;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 10px;
  box-shadow: var(--shadow);
  overflow: hidden;
}
.compare-head {
  flex: 0 0 auto;
  display: flex;
  align-items: baseline;
  padding: 11px 22px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  letter-spacing: 0.03em;
  border-bottom: 1px solid var(--line-soft);
}
/* The leaf's own title, dark enough to read at a glance; the role suffix
   (current / related leaf) greyer, so the two read as label + note. */
.compare-head-title {
  /* span or button — reset the button so both read as one title */
  font: inherit;
  letter-spacing: inherit;
  font-weight: 600;
  color: var(--ink-text);
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* Clickable: the title is a way IN to its leaf. */
button.compare-head-title {
  cursor: pointer;
}
button.compare-head-title:hover {
  color: var(--accent);
  text-decoration: underline;
}
.compare-head-role {
  flex: 0 0 auto;
  color: var(--muted);
}
.compare-body {
  flex: 1 1 auto;
  overflow-y: auto;
  /* deep bottom pad so even a last-line match can still centre */
  padding: 20px 26px 45vh;
  line-height: 1.62;
  font-size: 15px;
  color: var(--ink-text);
}
.compare-para {
  margin: 0 0 0.85em;
  white-space: pre-wrap;
}
.compare-blank {
  min-height: 0.85em;
}
.compare-hit {
  background-color: color-mix(in srgb, var(--accent) 50%, transparent);
  color: inherit;
  border-radius: 2px;
}
/* The occurrence a step landed on — brighter, ringed, the pointing finger
   (the Cmd-F current-match grammar). */
.compare-hit-current {
  background-color: color-mix(in srgb, var(--accent) 78%, transparent);
  outline: 1.5px solid var(--accent);
  outline-offset: 1px;
}
/* The occurrence indicator: a thin panel just below the pane title, its
   count centred with ‹ › either side — the find bar's furniture, per pane. */
.compare-occ {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px 22px;
  border-bottom: 1px solid var(--line-soft);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.compare-occ-count {
  font-size: 11px;
  color: var(--muted);
  min-width: 44px;
  text-align: center;
  user-select: none;
}
.compare-occ-nav {
  border: none;
  background: transparent;
  color: var(--ink-text);
  font-size: 16px;
  line-height: 1;
  padding: 1px 7px;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.6;
}
.compare-occ-nav:hover {
  opacity: 1;
  background: color-mix(in srgb, var(--ink-text) 8%, transparent);
}
.compare-filenote {
  margin: 0 0 16px;
  padding: 5px 11px;
  font-size: 12.5px;
  font-style: italic;
  color: var(--muted);
  background: var(--accent-soft);
  border-left: 2px solid var(--accent);
  border-radius: 0 5px 5px 0;
}
@media (max-width: 720px) {
  #compare {
    flex-direction: column;
    gap: 2vh;
  }
}

/* The source ghost wears the accent ring while its slip stands — the same
   ring the trunk gives the leaf you're in — tying the slip at the top to
   the ghost it reads (2026-07-20, the gardener). */
#ghosts .ghost.slip-source .thumb {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

/* The lamp: while revealing, the desk glows warm — as though someone
   switched on a desk lamp with the bulb set to warm. Margins only;
   the paper (z-index above) keeps its daylight. */
#lamp {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s ease;
  background:
    radial-gradient(560px 75vh at 4% 42%, var(--lamp-near), transparent 70%),
    radial-gradient(560px 75vh at 96% 42%, var(--lamp-far), transparent 70%);
}
body.revealing #lamp {
  opacity: 1;
}
/* The dark scheme's own lamp used to be a second copy of this rule with
   different numbers in it; the two pools are --lamp-near / --lamp-far now
   and the palette carries the scheme difference, so the override is gone.
   The structure is stated once and the theme file answers for the colour —
   which is the shape every rule in this stylesheet is meant to have. */

/* The reveal: hold Option and the margins turn their lights on. */
/* The palette ALWAYS wears a panel (2026-07-19, the gardener): held-⌥
   and right-click summon the same manual, so they look the same — a
   floating paper card, whether tethered at the left margin or dropped at
   the pointer. (Formerly only the at-pointer variant had the panel.) */
#reveal {
  position: fixed;
  left: 14px;
  /* IT MUST ALWAYS FIT (2026-08-02, the gardener: "the margin panel is
     still getting cut off — this should not be happening"). It hung from
     top:33% and grew downwards off the bottom of the window, which was
     harmless while the manual was ten short words and is not now: the
     verbose labels are longer, several wrap, and the format hint and the
     colophon sit under them. CENTRED instead, so a tall panel uses the
     whole window rather than two thirds of it, with a ceiling and its own
     scroll for the case where even that is not enough. The resting manual
     therefore sits a little lower than it did — a deliberate consequence,
     not a drift. The at-pointer variant drops the transform: its position
     is measured and clamped in JS, and a transform would fight it. */
  top: 50%;
  transform: translateY(-50%);
  max-height: calc(100vh - 28px);
  overflow-y: auto;
  overscroll-behavior: contain;
  z-index: 15; /* above every place overlay: ⌥ answers everywhere */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 8px;
  background: color-mix(in srgb, var(--paper) 92%, transparent);
  border: 1px solid var(--line-soft);
  border-radius: 10px;
  box-shadow: var(--shadow);
  backdrop-filter: blur(3px);
}
/* When it holds nothing it IS nothing (2026-07-19, the gardener): the
   'always a panel' rule left the empty rail painting a bare little card
   at the left margin — the uninhabited white dot. An empty reveal shows
   no panel. */
#reveal:empty {
  display: none;
}
.reveal-chip {
  position: static; /* stacked in the rail, not line-anchored */
}
/* Right-click drops the same panel at the pointer instead of the left
   margin; inline left/top (set in JS) place it. */
#reveal.at-pointer {
  left: 0;
  top: 0;
  /* Its place is measured and clamped in JS (showAt), so the centring
     transform must stand down or every pointer position lands half a
     panel's height too high. */
  transform: none;
}
/* THE FIRST-RUN LINE (2026-08-02, the gardener) — "When in doubt, press
   Option", standing in the middle of the desk for a hand that has just
   met the app. THE ONLY hint that stands on the page, and the strictest
   about leaving: it fades on the first work of any kind and dies for good
   at the first press of the key it names (or after three launches, if
   that key is never pressed). It began the morning as a bare sentence in
   the desk's faint voice, low in the page's dead space; by the afternoon
   the gardener had ruled it a CARD, a third of the way down and large —
   the rulings are recorded rule by rule below, and the later ones win.
   Not a dialog: no button, no dismiss control. pointer-events:none — it
   cannot be clicked, because it is not a control and must never eat a
   click meant for the paper. */
#greeting {
  position: fixed;
  left: 50%;
  /* A THIRD OF THE WAY DOWN (2026-08-02, the gardener, overruling the
     earlier 68%): high in the reading eye's path rather than below it.
     The format-panel collision that pushed it low is the lesser risk —
     that panel is summoned deliberately by a hand that already knows
     what it wants, and this line exists for the one moment when nobody
     knows anything. */
  top: 33%;
  transform: translateX(-50%);
  z-index: 6;
  pointer-events: none;
  user-select: none;
  /* BIGGER (2026-08-02, the gardener: "I only caught a brief glimpse of
     it"). It was 13px at 0.55 — the desk's own faint-furniture size, which
     is right for a colophon nobody needs and wrong for the one sentence
     the whole first run depends on. It has to read at a glance, from
     across a room, to someone who does not yet know to look. */
  /* LARGER AGAIN (the gardener, same day, and his reasoning is the
     licence): "this is the one time when the user doesn't know what to
     do and we're telling them" — so the usual restraint is the wrong
     instinct here. Everything else in Phloem whispers because the writer
     is working; nothing is being written yet at this moment. */
  font-size: 30px;
  letter-spacing: 0.01em;
  /* ...AND ON ITS OWN PAPER (same day, the gardener again: bare words
     "get lost when over text"). Launches two and three land on a page
     that already has writing on it, and a faint line laid across prose is
     illegible — a hint that cannot be read is worse than none, because it
     is chrome that costs and teaches nothing. So it wears the chooser
     furniture's dress: an opaque card that covers what it stands on.
     This is the most assertive chrome in the app, and it is admissible on
     exactly one condition — that it dies, fast and for good (learned.ts).
     Not a dialog: no button, no dismiss control, no pointer events. A
     card the desk holds up once, and never again. */
  padding: 26px 44px;
  /* At 30px the line is wider than a narrow window: it wraps rather than
     runs off, and stays centred when it does. */
  max-width: calc(100vw - 40px);
  text-align: center;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow);
  color: color-mix(in srgb, var(--ink-text) 62%, transparent);
  opacity: 0;
  transition: opacity 0.5s ease-out;
}
#greeting.show {
  opacity: 1;
}
/* THE OTHER DOOR, named at the manual's foot (2026-08-02) — the paper's
   right-click, the one gesture ⌥ cannot show, because that click belongs
   to the format panel. Training chrome, and it dies like it: gone once
   the hand has used the gesture (learned.ts). Faint, unboxed, and NOT a
   chip: it is a sentence about a gesture, not a button, and a hand that
   tried to press it would be right to feel misled. Sits with the verbs,
   above the colophon's facts, because it is one. */
.reveal-hint {
  /* PROMINENT (2026-08-02, the gardener). It was 11px italic in the
     colophon's faint grey — which put a thing the reader must ACT on into
     the register reserved for facts they may ignore, and buried it under
     the very chips it is trying to send them away from. It now reads at
     the chips' own size, upright, on its own tinted ground, so it is
     plainly a MESSAGE among the buttons rather than a whispered footnote.
     Still not a chip: no pill, no border, nothing to press — pressing it
     would do nothing, and a hand fooled into trying is worse taught than
     one that never saw it. It leads the panel (the gardener, same day) —
     below the chips it was the last thing read, buried under the very
     verbs it exists to send the reader away from — and it dies on the
     gesture it names. */
  /* RIGHT-ALIGNED, block and text both (2026-08-02, the gardener: "it
     just needs to jump out a little more"). The rail hugs its left edge,
     so every chip starts on the same line down the panel; pushing this
     one to the OTHER edge breaks that line, which is exactly the work a
     separator would otherwise have to do. It reads as addressed to the
     reader rather than as one more thing in the list — and it costs no
     rule, no gap, no extra furniture. */
  align-self: flex-end;
  text-align: right;
  margin-bottom: 4px;
  max-width: 220px;
  padding: 7px 10px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--ink-text) 10%, transparent);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12.5px;
  line-height: 1.35;
  color: color-mix(in srgb, var(--ink-text) 78%, transparent);
  user-select: none;
}
/* The manual's colophon: facts under the verbs — standing only while
   the manual shows. Two registers (2026-07-19): the top lines stand
   open (version, this leaf's word count, the margin's state); the
   estate's plumbing folds behind 'More…' (.reveal-more-body), closed. */
.reveal-info {
  margin-top: 6px;
  font-size: 11px;
  line-height: 1.5;
  color: var(--ink-faint);
  opacity: 0.75;
  /* 200px was a column for SHORT FACTS, and it clamped the disclosure
     paragraph (2026-08-04) to a 22-line ribbon — a child cannot be wider
     than the box it sits in, whatever its own max-width says. Widened for
     the paragraph's sake; the fact lines are nowrap and far shorter, so
     nothing above it moves, and the rail is already wider than this (the
     report's long verb sets it), so the panel does not grow either. */
  max-width: 320px;
  user-select: none;
}
.reveal-info-line {
  white-space: nowrap;
}
/* The disclosure (2026-08-04): what leaves the app when the margin
   speaks. A PARAGRAPH, not a fact — so it wraps where the fact lines
   above it deliberately do not, and it is given a wider measure than the
   colophon's 200px, which is a column for short facts and would set 80
   words as a ribbon. A rule above it, so the eye can see that a different
   kind of thing begins here. It is selectable: a writer may want to
   quote it, or paste it to whoever is asking them about it. */
.reveal-disclosure {
  margin: 4px 0 0;
  max-width: 320px;
  line-height: 1.45;
  user-select: text;
}
.reveal-disclosure[hidden] {
  display: none;
}
/* The disclosure's own door (2026-08-09): folded, but behind a control
   that NAMES it — the rule above it says a different kind of thing
   begins here, which is what the paragraph's own rule used to say when
   it stood open. */
.reveal-privacy {
  margin-top: 7px;
  padding-top: 6px;
  border-top: 1px solid color-mix(in srgb, var(--ink-text) 12%, transparent);
  display: block;
  width: 100%;
  text-align: left;
}
.reveal-more {
  margin-top: 3px;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  color: inherit;
  opacity: 0.8;
  cursor: pointer;
  text-decoration: underline dotted;
  text-underline-offset: 2px;
}
.reveal-more:hover {
  opacity: 1;
}
.reveal-more-body {
  margin-top: 2px;
}
.reveal-more-body[hidden] {
  display: none;
}
body.revealing #ghosts .ghost {
  opacity: 1;
}
body.revealing #hint {
  color: var(--accent);
}

/* The canopy's shade: the matter's name, faint and vertical in the
   left margin — ambient placeness, the system's voice on the desk.
   A free-standing leaf casts no shade. Click to climb to the trunk. */
#shade {
  position: fixed;
  top: 3.4rem;
  left: 8px;
  z-index: 6;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  background: none;
  border: none;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  letter-spacing: 0.16em;
  color: var(--ink-text);
  max-height: 55vh;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.5s;
}
#shade.show {
  opacity: 0.3;
  pointer-events: auto;
}
#shade.show:hover {
  opacity: 0.8;
}
body.revealing #shade.show {
  opacity: 0.85;
  color: var(--accent);
}
/* The canopy's shade arriving after a graft: the tree's name brightens
   to the accent, holds a moment, then eases down to its faint resting
   grey — the new membership announcing itself where it lives, not a
   toast. Ends exactly at .show's resting values, so nothing jumps. */
@keyframes shade-arrive {
  0% {
    opacity: 0;
    color: var(--accent);
  }
  18% {
    opacity: 0.85;
    color: var(--accent);
  }
  100% {
    opacity: 0.3;
    color: var(--ink-text);
  }
}
#shade.show.arriving {
  animation: shade-arrive 2s ease-out;
}

/* The trunk view: one tree seen whole — a place, not a modal. The
   desk itself, cleared; every leaf a true miniature in planting
   order. Esc or the bare ground climbs back down to the page. */
#trunk {
  position: fixed;
  inset: 0;
  z-index: 12;
  background: var(--desk);
  overflow-y: auto;
  padding: 4rem 5rem 5rem;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.35s, visibility 0.35s;
  /* A survey is chrome, not selectable prose: without this a stray
     click-drag on the bare ground painted a text selection across the
     title, headings, and tree names — big green bands on return (the
     gardener, 2026-07-19). The paper is the only place text is selected. */
  user-select: none;
}
#trunk.show {
  visibility: visible;
  opacity: 1;
}
/* The recursive shade: a place wears the name of the place that
   contains it, faintly — click the name to climb. */
.place-shade {
  display: block;
  background: none;
  border: none;
  padding: 0;
  margin: 0 0 1.2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  letter-spacing: 0.16em;
  color: var(--ink-text);
  opacity: 0.3;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.4s;
}
.place-shade:hover {
  opacity: 0.8;
}

.trunk-name {
  font-size: 26px;
  color: var(--ink-text);
  opacity: 0.75;
  margin: 0 0 2.4rem;
}
/* The report's kind, small above its title: 'how it came to be' is a
   subheading, the leaf's first line is the name (the gardener, 2026-07-16). */
.report-eyebrow {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
  opacity: 0.85;
  margin: 0 0 0.4rem;
}
.report-title {
  font-size: 30px;
  opacity: 0.85;
  margin: 0 0 2.2rem;
}
.trunk-leaves {
  display: flex;
  flex-wrap: wrap;
  gap: 38px 34px;
  align-items: flex-start;
}
/* A branch: a subfolder of an adopted matter, named faintly above the
   leaves it carries. */
.trunk-branch {
  margin: 2.6rem 0 1.1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-text);
  opacity: 0.45;
}
.trunk-branch + .trunk-leaves {
  padding-left: 1.2rem;
  border-left: 1px solid var(--line);
}
#trunk .ghost {
  position: static;
}
#trunk .ghost.here .thumb {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
/* The report: the log, shown to a second reader — a place like the
   trunk, not a modal. Bands are quiet facts, never alarms: claimed
   wears the engine's accent, rethought a dashed left rule, typed
   nothing at all (the default deserves no decoration). */
#report {
  position: fixed;
  inset: 0;
  z-index: 14;
  background: var(--desk);
  overflow-y: auto;
  padding: 4rem 5rem 5rem;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.35s, visibility 0.35s;
}
#report.show {
  visibility: visible;
  opacity: 1;
}
.report-sheet {
  max-width: 980px;
  /* Centred (2026-08-12, the gardener): the top panel and the notes on
     the right are what set the report apart from the leaf; its placement
     on the desk should match the page's. */
  margin: 0 auto;
}
/* THE COMPOSITION GRID (2026-07-20): the facts, given room to be read.
   Structural only — nesting, alignment and weight; colour and warmth
   are a later pass. It must never read as a scorecard, so there is no
   evaluative colour here and no grand total: the only colour is the
   bands' own indexical swatches, which already mean something. */
/* THE ANALYSIS IS ONE OBJECT (2026-07-22, the gardener: "extend the
   panel upward — the whole analysis section should read as one"). One
   raised panel holds BOTH grids: the composition figures and the
   margin's tally are two subjects but one reading, and a panel around
   each would have made them two widgets sitting on a desk. The panel
   owns the block-level margins now (the -1.2rem that pulls the analysis
   up under the title); the grids inside are plain siblings. */
.report-analysis {
  margin: -1.2rem 0 2.4rem;
  max-width: 620px;
  background: var(--rep-panel);
  /* One quiet edge, to tie the two grids into a single object (the
     gardener, 2026-07-22). Mixed from the ink, so it is a grey in the
     light scheme and a pale line in the dark one, never a hard black
     box in either. */
  border: 1px solid color-mix(in srgb, var(--ink-text) 14%, transparent);
  border-radius: 8px;
  padding: 0.45rem 0;
  overflow: hidden; /* the bands clip to the rounded corners */
}
.report-analysis .rep-row {
  padding-left: 0.9rem;
  padding-right: 0.9rem;
}
.report-grid {
  margin: 0;
  max-width: 620px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink-text);
}
/* Air between the two subjects, inside the one panel. */
.report-grid + .report-grid {
  margin-top: 1rem;
}
/* THE MARGIN'S LEDGER SUMMARY (2026-07-21): the same grid, a different
   subject — notes and their fates, not characters on the page. It only
   needs its own top margin: the composition grid's -1.2rem exists to
   pull that block up under the title, and a second block must not climb
   into the first.

   THE PANEL AND ITS BANDS (2026-07-22, the gardener: "the numbers on the
   right are quite a long way physically from the descriptors — it would
   be easy to attribute a number to the wrong one"). True: the labels are
   short, the figures right-aligned, and the sub-rows had dropped their
   hairlines, so the eye crossed open ground. A raised panel gathers the
   tally into one object, and alternate rows band so the eye travels a
   LANE from label to figure. Legibility, not meaning: ONE tint, the same
   for every row, in the order the rows already stand — it ranks nothing,
   so the never-a-scorecard line holds (an evaluative colour here would
   be a threshold wearing a stripe). The bands replace the row hairlines
   inside the panel; the group header keeps its rule, because it divides
   the total from the tally it totals. */
.report-ledger .rep-row {
  border-bottom: 0;
}
/* The band itself. WHICH rows wear it is decided in report.ts, not by an
   nth-child here: a band must hold a STATEMENT together, and only the
   builder knows where one ends (in the composition grid a fact and the
   inference nested under it are one statement — a stripe falling between
   them would cut a sentence in half). */
.report-analysis .rep-band {
  background: var(--rep-stripe);
}
.report-ledger .rep-row-group {
  border-bottom: 1px solid color-mix(in srgb, var(--ink-text) 9%, transparent);
}
/* THE LEDGER SUMMARY SHIPS SHUT (2026-08-20, the gardener, staging the
   AIHE room: the tally reads as too much for a first meeting, and every
   figure in it is answered for again by the cards in the right margin).
   The whole second grid folds behind the note folds' own grammar — a
   native <details>, the › leading the label, no script, identical in
   the travelling record. The header row with its total IS the summary
   and never hides; only the tally beneath it folds. The divider that
   separates the total from its tally stands only while the tally does.
   RIDES IN BOTH STYLESHEETS. */
.rep-ledger-bar {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding-left: 0.9rem;
  padding-right: 0.9rem;
}
.rep-ledger-bar::-webkit-details-marker { display: none; }
.rep-ledger-bar::before {
  content: '\\203A';
  font-size: 18px;
  font-weight: 400;
  line-height: 1;
  align-self: center;
  /* the same green the note folds' chevron wears — the SAME mix, so the
     two can never drift apart under a palette */
  color: color-mix(in srgb, var(--accent) 45%, transparent);
  transition: transform 0.15s ease-out;
}
.rep-ledger-fold[open] > .rep-ledger-bar::before { transform: rotate(90deg); }
.rep-ledger-bar:hover::before {
  color: color-mix(in srgb, var(--accent) 80%, transparent);
}
.rep-ledger-bar > .rep-row {
  flex: 1 1 auto;
  padding-left: 0;
  padding-right: 0;
  border-bottom: 0;
}
.rep-ledger-fold[open] > .rep-ledger-bar {
  border-bottom: 1px solid color-mix(in srgb, var(--ink-text) 9%, transparent);
}
@media print {
  .rep-ledger-bar::before { display: none; }
}
/* THE LEGIBILITY PASS (2026-08-12, the gardener, for the teacher forty
   scripts deep: "the top panel of the report is, frankly, hard to
   read"). The panel's hierarchy was built almost entirely out of
   OPACITY — labels at .8, sub-rows at .62, evidence at .45 — which is
   a hierarchy of ghosts: every rank below the first was translucent
   ink. The ranks now come from SIZE and WEIGHT, everything a step
   larger, and nothing meant to be read sits below ~.75. The order of
   rows, the banding discipline and the never-a-scorecard line are
   untouched — this changes how loudly the panel speaks, not what it
   says. */
.rep-row {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: baseline;
  column-gap: 18px;
  padding: 0.34rem 0;
  border-bottom: 1px solid color-mix(in srgb, var(--ink-text) 9%, transparent);
}
.rep-row-label {
  font-size: 14.5px;
}
.rep-row-value {
  font-variant-numeric: tabular-nums;
  font-size: 16px;
}
/* A group subtotal and a standalone fact carry the same weight — they
   are the same rank of statement, and both divide by the whole leaf. */
.rep-row-group > .rep-row-label,
.rep-row-fact > .rep-row-label {
  font-weight: 650;
}
.rep-row-group > .rep-row-value,
.rep-row-fact > .rep-row-value {
  font-size: 20px;
  font-weight: 650;
}
.rep-row-fact > .rep-row-label {
  font-weight: 650;
}
/* Indented members of a group: inside their total, one size down —
   never faded down. */
.rep-row-sub {
  border-bottom: 0;
  padding: 0.16rem 0;
}
.rep-row-sub > .rep-row-label {
  padding-left: 24px;
  font-size: 13.5px;
  opacity: 0.85;
}
.rep-row-sub > .rep-row-value {
  font-size: 15px;
  opacity: 0.92;
}
/* The one INFERENCE. Nested so its denominator is the rows above it —
   and kept italic, small, and ≈-marked so it can never be mistaken for
   a fifth fact. Its evidence rides underneath. */
.rep-row-inference {
  padding: 0.16rem 0 0.5rem;
}
/* The inference keeps its italics and its ≈ — that is what says
   "heuristic, not fact" — but it no longer whispers: a reader who
   cannot comfortably read the one row that most needs judging is not
   being protected from it. */
.rep-row-inference > .rep-row-label {
  padding-left: 24px;
  font-size: 13.5px;
  font-style: italic;
  opacity: 0.85;
}
.rep-row-inference > .rep-row-value {
  font-size: 15px;
  font-style: italic;
  opacity: 0.92;
}
.rep-row-note {
  grid-column: 1 / -1;
  padding-left: 24px;
  margin-top: 0.15rem;
  font-size: 12.5px;
  font-style: italic;
  opacity: 0.7;
}
/* THE ASKING MARK (2026-07-22, the gardener: "where a line has a tooltip
   it doesn't always show"). A native title is the OS's to give or
   withhold, so a line whose meaning matters cannot depend on one. A '?'
   the reader can CLICK, and the answer opens underneath in the same
   dress the inference rows' evidence wears. It is a character, not a
   pictogram — the species count holds — and the slot stands on EVERY
   row (empty where there is nothing to ask), so one label edge runs down
   the panel whether a row explains itself or not. */
.rep-why-slot {
  display: inline-block;
  width: 15px;
}
.rep-why {
  appearance: none;
  padding: 0;
  margin: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: none;
  border: 1px solid color-mix(in srgb, var(--ink-text) 30%, transparent);
  color: color-mix(in srgb, var(--ink-text) 70%, transparent);
  font: inherit;
  font-size: 9px;
  font-style: normal;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  opacity: 0.5;
  vertical-align: 1px;
  transition: opacity 0.15s ease;
}
.rep-why:hover,
.rep-why:focus-visible,
.rep-why.open {
  opacity: 1;
}
.rep-why.open {
  background: color-mix(in srgb, var(--ink-text) 10%, transparent);
}
.rep-row-note[hidden] {
  display: none;
}
/* Each swatch is a MINIATURE OF THE MARK the words wear on the page
   (2026-07-23, the gardener: "make it more clear which marking refers to
   which category") — the same highlight, underline, and left-rule, at
   legend size, so the key reads by resemblance rather than from memory.
   Mirror of EXPORT_CSS in report.ts — edit both, or the travelling record
   loses the styling (the constitution's two-stylesheets rule). */
.rep-key::before {
  content: '';
  display: inline-block;
  box-sizing: border-box;
  /* Legend size, revised 2026-08-12 (the legibility pass): at 18×12 with
     1px marks, dotted and dashed were nearly the same object and the
     typed box read as nothing at all. Bigger canvas, marks drawn at 2px —
     the same TREATMENTS the body text wears (that resemblance is the
     key's whole grammar), scaled to be told apart at a glance. */
  width: 26px;
  height: 15px;
  margin-right: 9px;
  vertical-align: -3px;
}
/* Typed: the unmarked baseline — an empty box, the "no mark" case. */
.rep-key-typed::before {
  border: 1px solid color-mix(in srgb, var(--ink-text) 40%, transparent);
  border-radius: 2px;
}
/* Claimed: the green highlight the words wear — the body's own alpha,
   which at this size is plainly visible. */
.rep-key-claimed::before {
  background: color-mix(in srgb, var(--accent) 22%, transparent);
  border-radius: 2px;
}
/* Pasted: arrived whole, origin unknown — a fact about the gesture,
   worn as the same dotted underline the text wears, never an accusation. */
.rep-key-pasted::before {
  border-bottom: 2px dotted color-mix(in srgb, var(--ink-text) 70%, transparent);
}
/* Unkeyed: arrived with no keystroke — dictation or an OS replacement.
   The same dashed underline the text wears, distinct from pasted's dotted;
   a fact, not a charge. */
.rep-key-unkeyed::before {
  border-bottom: 2px dashed color-mix(in srgb, var(--ink-text) 70%, transparent);
}
.rep-key-brought::before {
  /* solid underline — brought from her workings (2026-08-26) */
  border-bottom: 2px solid color-mix(in srgb, var(--ink-text) 70%, transparent);
}
/* Derived: the green dashed left-rule the paragraph wears. */
.rep-key-derived::before {
  border-left: 3px dashed var(--accent);
}
/* A change of tempo: the dotted rail, plain ink (2026-08-12). */
.rep-key-tempo::before {
  border-left: 3px dotted color-mix(in srgb, var(--ink-text) 60%, transparent);
}
/* THE MARGIN REMEMBERS THE KEY (2026-08-18, the gardener: a reader
   kept flipping to the top to check the legend). Pasted, unkeyed and
   the tempo rail have no card beside them, so a faint tag stands in
   the notes column instead — the key's own miniature and its word,
   once per contiguous stretch. Presentation only; rides in BOTH
   stylesheets. */
.rep-margin-tag {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11px; opacity: 0.7; letter-spacing: 0.02em;
  color: var(--ink-text); margin: 0 0 0.35rem;
}
.rep-margin-tag.inf { font-style: italic; }
.rep-margin-tag .rep-key::before {
  width: 18px; height: 11px; margin-right: 6px; vertical-align: -2px;
}
/* The report body is a two-column GRID: each paragraph in column one,
   its ledger notes in column two of the SAME row — so a note stands
   beside the text it concerns, reflowing with it, never on it (the
   gardener, 2026-07-16). Rows grow to the taller of paragraph or note. */
.report-body {
  display: grid;
  grid-template-columns: minmax(0, 620px) 280px;
  column-gap: 44px;
  align-items: start;
  /* THE ESSAY WEARS THE LEAF'S OWN PAPER (2026-08-12, the gardener):
     the record's text is the writer's page seen again, and it dresses
     accordingly — the same paper, shadow and corner the leaf wears,
     while the top panel and the ledger notes stand on the desk, which
     is exactly what sets the report apart from the leaf. The padding is
     the sheet's margin; the ::before below is the sheet itself, spanning
     the text column and stopping in the column gap so the notes keep
     the desk. z-index 0 makes the grid its own stacking context, so the
     -1 paper can never slide beneath the desk. */
  position: relative;
  z-index: 0;
  padding: 40px 0 46px 40px;
}
.report-body::before {
  content: '';
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  bottom: 0;
  /* 280px of notes column plus most of the 44px gap: the paper's right
     edge stands in the gap, fixed from the grid's right edge so it holds
     wherever the text column flexes. */
  right: 290px;
  background: var(--paper);
  border-radius: 2px;
  box-shadow: var(--shadow);
}
/* A NARROW WINDOW COLLAPSES TO ONE COLUMN (2026-08-12, found while
   building the paper pass): the text column is minmax(0,…) and the notes
   column fixed, so a narrow window crushed the ESSAY to a ribbon while
   the notes kept their 280px — the one column that must never give way
   giving way first. The export has had this collapse since its media
   block existed; the in-app sheet simply never got one. Below the
   breakpoint the notes flow under their paragraphs and the paper spans
   the whole grid, exactly as the export does. */
@media (max-width: 940px) {
  #report {
    padding: 2.5rem 1.5rem 4rem;
  }
  .report-body {
    grid-template-columns: 1fr;
    padding: 22px 18px 28px;
  }
  .report-body::before {
    right: 0;
  }
  .report-note-cell {
    padding: 0 0 0.8rem 10px;
  }
}
.report-para {
  margin: 0 0 0.9em;
  padding-left: 10px;
  border-left: 2px solid transparent;
  color: var(--ink-text);
  font-size: 15px;
  line-height: 1.6;
}
/* THE HORIZONTAL RULE (2026-08-20, the gardener, practising the AIHE
   talk: a divider steadies the eye between paragraphs on a projected
   report). An empty line the writer marked as a rule — content, logged,
   replayed here exactly as on the page. A quiet ink-mixed hairline,
   never the accent: a divider is the writer's own furniture, not an
   engine mark. RIDES IN BOTH STYLESHEETS. */
hr.report-rule {
  border: 0;
  border-top: 1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
  margin: 1.1em 0 1.1em 10px;
}
/* Inline bold on the record matches the page's semi-bold (2026-07-29,
   the gardener — the companion of .page strong above). Scoped to the
   essay's own paragraphs: the report's furniture keeps its weights.
   Rides in BOTH sheets: this one and report.ts's EXPORT_CSS. */
.report-para strong,
.report-para b {
  font-weight: 600;
}
/* A heading on the page is a heading on the record (2026-07-24) — sized
   relative to the body text and kept below the report's own furniture, so the
   record's structure always reads above the leaf's. Rides in BOTH sheets:
   this one and report.ts's EXPORT_CSS, which the travelling file bakes. */
h1.report-para {
  font-size: 21px;
}
h2.report-para {
  font-size: 18px;
}
h3.report-para {
  font-size: 16px;
}
/* AN ASIDE ON THE RECORD (2026-09-14): the page's own dress — rides in
   BOTH stylesheets (report.ts EXPORT_CSS carries the twin). */
aside.report-para {
  background: color-mix(in srgb, var(--ink-text) 6%, transparent);
  border-radius: 6px;
  padding: 0.55em 0.9em 0.55em 10px;
  margin: 0.4em 0 1.1em;
}
.report-head {
  font-weight: 650;
  line-height: 1.35;
  margin: 1.4em 0 0.5em;
  letter-spacing: -0.01em;
}
.report-para:first-child.report-head {
  margin-top: 0;
}
.report-note-cell {
  /* the note(s) for this paragraph's row; empty for most paragraphs */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.rep-claimed {
  background: color-mix(in srgb, var(--accent) 22%, transparent);
  border-radius: 2px;
}
.rep-pasted {
  border-bottom: 1px dotted color-mix(in srgb, var(--ink-text) 55%, transparent);
}
.rep-unkeyed {
  border-bottom: 1px dashed color-mix(in srgb, var(--ink-text) 45%, transparent);
}
.rep-brought {
  border-bottom: 1px solid color-mix(in srgb, var(--ink-text) 45%, transparent);
}
.rep-derived-para {
  border-left-color: var(--accent) !important;
  border-left-style: dashed !important;
}
/* A CHANGE OF TEMPO WEARS A MARK (2026-08-12, the gardener — superseding
   v1's no-body-mark): a dotted rail in plain ink, the writer's-own-hand
   family, never the engine's green. Inside the paragraph's padding, its
   own pseudo-element, so a derived paragraph in a run wears both. RIDES
   IN BOTH STYLESHEETS (here and EXPORT_CSS), as every report rule must. */
.rep-tempo-para {
  position: relative;
}
.rep-tempo-para::before {
  content: '';
  position: absolute;
  left: 4px;
  top: 0.15em;
  bottom: 0.15em;
  width: 0;
  border-left: 2px dotted color-mix(in srgb, var(--ink-text) 35%, transparent);
}
/* EVERY ¶ REFERENCE IS A DOOR (2026-08-12): quiet dotted links; the
   paragraph a door lands on wears a brief neutral wash — :target for the
   travelling record, .rep-jumped for the in-app glide. Plain ink, never
   the accent: a green wash beside the claimed highlight would read as a
   fifth band. */
.rep-jump {
  color: inherit;
  text-decoration: underline dotted;
  text-underline-offset: 2px;
}
/* A LANDING LEAVES AIR ABOVE (2026-08-12): a passage start flush with
   the viewport's top edge reads as the middle of something. One line's
   height of breathing room; scroll-margin-top is honoured by
   scrollIntoView and fragment jumps alike. RIDES IN BOTH STYLESHEETS. */
.report-para {
  scroll-margin-top: 2.2rem;
}
.report-para:target,
.report-para.rep-jumped {
  background: color-mix(in srgb, var(--ink-text) 6%, transparent);
  border-radius: 4px;
}
/* THE WAY BACK (2026-08-12): hidden at rest, standing only on the
   paragraph the reader arrived at — :target for the travelling record,
   .rep-arrived for the in-app glide, cleared by the next jump. RIDES IN
   BOTH STYLESHEETS, as every report rule must. */
.rep-back {
  display: none;
}
.report-para:target .rep-back,
.report-para.rep-arrived .rep-back {
  display: block;
  width: max-content;
  margin-top: 0.35em;
  font-size: 11px;
  opacity: 0.55;
}
.rep-back:hover {
  opacity: 1;
}
.rep-kin-mark {
  font-size: 10px;
  color: var(--accent);
  user-select: none;
}
/* The tail: orphaned notes and the sources, a full-width band below.
   A sibling of the body since 2026-08-12 (the paper pass) — it speaks
   ABOUT the margin, so it stands on the desk below the sheet. The
   grid-column it used to carry went with the move. */
.report-tail {
  margin-top: 2.4rem;
  padding-top: 1.4rem;
  border-top: 1px solid color-mix(in srgb, var(--ink-text) 12%, transparent);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--ink-text);
}
.report-rail-title {
  font-size: 12px;
  letter-spacing: 0.14em;
  opacity: 0.5;
  margin: 0 0 0.9rem;
}
.report-rail-title + .report-rail-title,
.report-note + .report-rail-title {
  margin-top: 1.8rem;
}
.report-rail-empty,
.report-note-text {
  font-size: 12.5px;
  font-style: italic;
  opacity: 0.75;
  line-height: 1.45;
}
.report-note {
  margin: 0 0 1rem;
  padding-left: 10px;
  border-left: 2px solid color-mix(in srgb, var(--accent) 45%, transparent);
}
.report-note-head {
  font-size: 11px;
  letter-spacing: 0.04em;
  opacity: 0.6;
  margin-bottom: 2px;
}
/* THE NOTE'S OWN DECLARATIONS (2026-08-01): grounds + corrects, stated
   by the note itself at showing — worn as a self-report (italic, faint,
   no ≈: that mark means the REPORT inferred it). Rides in BOTH
   stylesheets (here and EXPORT_CSS), as all report dress must. */
.report-note-declared {
  font-size: 10.5px;
  font-style: italic;
  opacity: 0.55;
  letter-spacing: 0.02em;
  margin: 1px 0 2px;
}

/* THE PAGES IT READ (2026-08-10) — the ledger card's evidence, told
   apart from the note's own account above it by being upright where
   that line is italic. Rides in BOTH stylesheets, as every report rule
   must: the export bakes its own copy, and forgetting one half silently
   strips the styling from the travelling record. */
.report-note-read {
  font-size: 11px;
  opacity: 0.75;
  margin: 2px 0 3px;
}
.report-note-read-label {
  letter-spacing: 0.04em;
}
.report-note-source { margin-left: 9px; }
.report-note-source-title::before {
  content: '· ';
  opacity: 0.6;
}
.report-note-source-url {
  display: block;
  margin-left: 9px;
  opacity: 0.6;
  word-break: break-all;
}

.report-note-cite { margin-top: 3px; }

/* A SOURCE'S ADDRESS IS A DOOR (2026-08-10) — see noteviewer.ts for why a
   link is admissible here and what is refused. Underlined only on hover:
   a wall of ten underlined addresses would shout, and the whole block is
   already behind a chevron. RIDES IN BOTH STYLESHEETS. */
a.note-url { color: inherit; text-decoration: none; cursor: pointer; }
a.note-url:hover { text-decoration: underline; opacity: 1; }


/* the report card's evidence bars — a chevron to shut a long block, and
   the export force-opens them. RIDES IN BOTH STYLESHEETS. */
.report-note-section { border-top: 1px solid var(--line-soft); margin-top: 4px; }
/* THE BAR IS A CONTROL AND DRESSES AS ONE (2026-08-12, the gardener,
   two findings in one evening on the same element). First: the › trailed
   at the bar's far end, orphaned from the words it served — in the
   full-width tail it sat a page away from its label, effectively
   invisible. A triangle BEFORE a label is the OS's own folder grammar,
   and reads as "this opens" without a word of instruction. Second: the
   bar inherited its section's 10.5px at compounded fades — "so small as
   to be completely missable... people will simply not see them". The bar
   now carries its own size and weight, a step ABOVE the rows it hides,
   because it is the one part of the block that must be found; the rows
   stay quiet, being the detail a reader asked for. Rides in BOTH
   stylesheets. */
.report-note-bar {
  list-style: none; cursor: pointer; display: flex; align-items: center;
  gap: 6px; padding: 5px 0 4px;
  font-size: 12px; font-weight: 600; letter-spacing: 0.03em;
  opacity: 0.85;
}
.report-note-bar::-webkit-details-marker { display: none; }
.report-note-bar::before {
  content: '\\203A'; font-size: 18px; font-weight: 400; line-height: 1;
  /* the same green the card's rail wears (the gardener, 2026-08-12) —
     the SAME mix, so the two can never drift apart under a palette */
  color: color-mix(in srgb, var(--accent) 45%, transparent);
  transition: transform .15s ease-out;
}
.report-note-section[open] > .report-note-bar::before { transform: rotate(90deg); }
.report-note-bar:hover { opacity: 1; }


/* the report card's quoted evidence — rides in both stylesheets */
.report-note-quote {
  font-size: 10.5px;
  opacity: 0.7;
  margin: 2px 0 0 9px;
  font-style: italic;
}
.report-note-quote-src {
  display: block;
  font-style: normal;
  opacity: 0.6;
  margin-left: 9px;
  word-break: break-all;
}

/* A LONG JOT IS CLIPPED (2026-07-22, the gardener): two lines beside the
   paragraph, click to open. A native <details> and NOT a script, because
   the exported report carries none — so this one disclosure behaves
   identically in the app and in the still photograph a teacher opens
   (the export unfolds them anyway: a reader of a record is told, not
   left to discover a control). The triangle is dropped; the affordance
   is the word 'more', in the margin's own quiet voice. */
.report-note-fold > summary {
  list-style: none;
  cursor: pointer;
}
.report-note-fold > summary::-webkit-details-marker {
  display: none;
}
.report-note-fold:not([open]) > summary > .report-note-text {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
/* Sized up with the bars (2026-08-12): the hint is the only thing that
   says a clipped note goes on, so it may not whisper — and it wears the
   rail's green with the bar arrows, one disclosure grammar per card. */
.report-note-fold:not([open]) > summary::after {
  content: ' › more';
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.04em;
  color: color-mix(in srgb, var(--accent) 45%, transparent);
}
/* The attestation: intact is quiet, broken is plain — a report that
   cannot vouch for its log says so before anything else is believed. */
/* The reading state: the report appears at once and says it is reading
   the log, so a slow derivation is never a silent wait. */
.report-loading {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 15px;
  color: var(--ink-text);
  opacity: 0.5;
  animation: reportPulse 1.4s ease-in-out infinite;
}
@keyframes reportPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.62; }
}
/* The seal-audit runs after first paint; its line pulses until it settles. */
.report-attest-pending {
  animation: reportPulse 1.4s ease-in-out infinite;
}
.report-attest {
  margin-top: 3rem;
  font-family: "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  font-size: 11px;
  color: var(--ink-text);
  opacity: 0.55;
}
/* The sealed-record link (2026-08-12): a button dressed as a quiet link
   beneath the attestation, opening the leaf's own JSON in the note
   reader. In-app only — the export strips it (report.ts), so it never
   rides in EXPORT_CSS. */
.report-evidence-link {
  appearance: none;
  display: block;
  background: none;
  border: none;
  padding: 0;
  margin: 0.4rem 0 0;
  font-size: 11px;
  color: var(--ink-text);
  opacity: 0.5;
  text-decoration: underline dotted;
  text-underline-offset: 2px;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.report-evidence-link:hover,
.report-evidence-link:focus-visible {
  opacity: 1;
}
.report-attest.bad {
  color: #b23c31;
  opacity: 1;
  font-weight: 600;
  /* broken leads: the verdict moves to the TOP of the sheet (report.ts
     prepends it), so its resting bottom-margin grammar inverts */
  margin: 0 0 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 13px;
}

/* A broken replanting stands on the page until the writer notes it
   (2026-07-28, the seal-break drill). The report's red — the only red
   in Phloem — worn as a standing band, resting only on the click that
   acknowledges it; the fact itself stays in the log and the report. */
.seal-notice {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 60;
  padding: 0.6rem 1.2rem;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 13px;
  font-weight: 600;
  color: #b23c31;
  background: rgba(178, 60, 49, 0.08);
  border-bottom: 1px solid rgba(178, 60, 49, 0.35);
  cursor: pointer;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
}
.report-foot {
  margin-top: 0.6rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11.5px;
  color: var(--ink-text);
  opacity: 0.4;
}

.trunk-hint {
  margin-top: 3rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11.5px;
  color: var(--hint);
  user-select: none;
}

/* The whence-ghost: the door you came through, still ajar — the leaf
   you just left, faint at the LEFT margin (the deliberate side),
   tilted like a door not quite closed. Presence, not a button:
   dismissed by settling into work, never by a timer. */
#whence {
  position: fixed;
  /* Next to the action: the door hugs the page's left edge (in the
     gutter, 14px clear) rather than the far viewport margin — same
     vertical level as before. right-anchored so the card grows
     leftward into the gutter from the page. */
  right: calc(50vw + var(--desk-half, calc(var(--page-w) / 2)) + 14px);
  top: 12%;
  /* Above the place overlays (trunk/garden, 12): every screen is a
     place, and a place's way back stands ON it — at 7 the door only
     showed through the overlay's fade-in and then vanished behind it
     (the gardener's "visible for a moment", 2026-07-17 evening).
     Below the reveal (15): the manual outranks the door. */
  z-index: 13;
  pointer-events: none;
}
#whence .ghost {
  pointer-events: auto;
  transform: rotate(-7deg); /* ajar */
  transition: opacity 0.4s, transform 0.25s;
}
#whence .ghost:hover {
  transform: rotate(-2.5deg); /* the door swings a little wider */
}
#whence .ghost-label {
  color: var(--accent);
}

/* The garden view: the ladder's top rung — the estate surveyed.
   Shares the trunk view's ground. */
#garden {
  position: fixed;
  inset: 0;
  z-index: 12;
  background: var(--desk);
  overflow-y: auto;
  padding: 4rem 5rem 5rem;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.35s, visibility 0.35s;
  user-select: none; /* chrome, not selectable prose — see #trunk */
}
#garden.show {
  visibility: visible;
  opacity: 1;
}
/* Cold-launch flash suppression (2026-07-19, the gardener): on first
   open the survey covers the last-open leaf, but the leaf painted first
   and showed through the garden's 0.35s fade — a flash that read as a
   bug. While booting, the page is hidden AND the garden skips its fade,
   so the survey is the first and only thing seen; main.ts lifts the
   class once the garden is up (an in-session reload never sets it). */
/* AND IT ONLY EVER COVERED THE PAGE (2026-08-02, the gardener: the flash
   "appears to have come back"). It never fully went: the rule hid .page
   and nothing else, so every piece of LEAF FURNITURE outside it — the
   standing margin notes, the ghosts, the whence door, the shade, the pad
   door, the leaf's name — painted before the survey covered them. That
   was survivable when the fix was written and is not now: a leaf re-
   stands every jot it was ever shown (2026-07-25), so there is far more
   furniture up at boot than there was. Hide EVERYTHING that is not the
   survey, by structure rather than by a list of ids somebody must keep
   current — a list is exactly how this regressed. */
body.booting > *:not(#garden) {
  visibility: hidden;
}
body.booting #garden {
  transition: none;
}
#garden .ghost {
  position: static;
}
#garden .ghost.here .thumb {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
/* Air between the greenhouse (the standing-free grove) and the first
   tree (2026-07-19, the gardener: the survey's two zones touched).
   Scoped to the garden so the trunk view's own leaf grove is untouched. */
#garden .trunk-leaves {
  margin-bottom: 2.8rem;
}
.garden-trees {
  display: flex;
  flex-wrap: wrap;
  gap: 44px 56px;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}
.garden-tree {
  cursor: pointer;
  border-radius: 8px;
  padding: 10px 12px;
  margin: -10px -12px;
  transition: background 0.25s;
}
.garden-tree:hover {
  background: var(--fill);
}
.garden-tree .ghost {
  pointer-events: none; /* the whole cluster is one door to the trunk */
}
.garden-tree-name {
  font-size: 15px;
  color: var(--ink-text);
  opacity: 0.8;
  margin-bottom: 0.7rem;
}
.garden-tree.here .garden-tree-name {
  color: var(--accent);
  opacity: 1;
}
/* The you-are-here tree wears a narrow ring around the whole cluster —
   name and leaves together (the gardener, 2026-07-17: the green name
   alone was easy to miss). Same accent as the leaf ring; outline, not
   border, so nothing shifts. The cluster's own padding gives it air. */
.garden-tree.here {
  outline: 1.5px solid var(--accent);
}
/* THE CARRY (2026-07-26): a free leaf in the hand, and the tree that
   would take it. Both marks are indexical — the card follows the
   pointer because the pointer is where it is, and the tree lights
   because releasing there is what would happen. Neither outlives the
   gesture. The card sheds its pointer so elementFromPoint reads the
   ground it is passing over, not itself. */
#garden .ghost.dragging {
  opacity: 1;
  cursor: grabbing;
  transition: none;
  pointer-events: none;
  z-index: 9;
}
.garden-tree.taking {
  outline: 1.5px solid var(--accent);
  background: var(--fill-strong);
}
/* ...and a FREE LEAF that would take it (2026-09-16): the two would mint
   a tree, so the target card wears the same ring the tree wears. */
#garden .trunk-leaves .ghost.taking .thumb {
  outline: 1.5px solid var(--accent);
  outline-offset: 3px;
}
/* AN EMPTY TREE (2026-09-16): a tree whose leaves have all left. It
   keeps its name and a faint dashed outline where its sheaf stood, with
   the words 'empty tree' inside — a true report of a container holding
   nothing, not a bug. It still lights when a carried leaf passes over. */
.garden-tree.empty {
  outline: 1px dashed var(--line-soft);
}
.garden-tree-empty {
  font-size: 12px;
  letter-spacing: 0.04em;
  color: var(--hint);
  opacity: 0.7;
  padding: 14px 6px;
  min-width: 96px;
}
/* A tree seen from across the garden is ONE thing (the gardener,
   2026-07-17 evening: the row of minis read as a choice of leaves, and
   he expected to land on the one he clicked — but the whole cluster is
   a single door to the trunk, where leaves BECOME choices). So the
   leaves gather into a SHEAF: overlapped and faintly fanned, one clump
   with depth, no card individually offered. */
.tree-sheaf {
  display: flex;
  align-items: flex-start;
  width: max-content; /* the sheaf is its cards' width, never the name's */
  padding: 3px 4px 3px 0; /* air for the fan's corners */
}
/* The minis are PINNED (2026-07-19, the gardener: some trees sheafed
   tightly, others stood spread). ROOT CAUSE (2026-07-19 later): the row
   wore '.garden-row', the SAME class the garden chooser defines with
   justify-content:space-between + gap:18px — the chooser's rule won the
   cascade and spread the minis to fill whatever width the tree NAME gave
   the cluster (the gardener's 'long name → spread' diagnosis exactly).
   Renamed to '.tree-sheaf' so nothing bleeds in; flex:0 0 auto + the
   negative margin now actually hold, and width:max-content keeps the row
   from stretching to a long name. Every sheaf overlaps the same. */
.tree-sheaf .ghost {
  flex: 0 0 auto;
}
.tree-sheaf .ghost + .ghost {
  margin-left: -28px;
}
.tree-sheaf .ghost:nth-child(odd) {
  transform: rotate(-2deg);
}
.tree-sheaf .ghost:nth-child(even) {
  transform: rotate(2.4deg) translateY(2px);
}
.garden-more {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11px;
  color: var(--hint);
  align-self: center;
  margin-left: 10px; /* clear of the sheaf's fanned corner */
}

/* The format bar: the selection's small panel (2026-07-18). Summoned
   above a marked passage — never standing. Paper card, ink type,
   accent for what's on; the same understated grammar as the chips. */
#formatbar {
  position: fixed;
  z-index: 16; /* above the reveal — it answers a live selection */
  display: none;
  align-items: center;
  gap: 1px;
  padding: 3px;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 8px;
  box-shadow: var(--shadow);
  animation: fmtIn 0.14s ease-out;
}
#formatbar.show {
  display: flex;
}
@keyframes fmtIn {
  from { opacity: 0; transform: translateY(3px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fmt-btn {
  border: none;
  background: none;
  color: var(--ink-text);
  cursor: pointer;
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 13px;
  line-height: 1;
  min-width: 26px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  transition: background 0.12s, color 0.12s;
}
.fmt-btn:hover {
  background: var(--fill-firm);
}
.fmt-btn.on {
  color: var(--accent);
  background: var(--accent-soft);
}
.fmt-bold {
  font-weight: 700;
}
.fmt-ital {
  font-style: italic;
  font-family: Georgia, "Times New Roman", serif;
}
/* The bar's Format door (2026-08-01, in the seat Heading held). */
.fmt-format {
  font-size: 12px;
}
/* Alignment: L / C / R — compact single letters, the current one lit by
   the shared .fmt-btn.on (2026-07-20; moved into the format panel
   2026-08-01, same dress). */
.fmt-align {
  font-size: 11px;
  min-width: 20px;
  padding: 4px 6px;
}
.fmt-ask {
  font-size: 12px;
  color: var(--hint);
}
.fmt-ask:hover {
  color: var(--ink-text);
}
.fmt-div {
  width: 1px;
  align-self: stretch;
  margin: 3px 2px;
  background: var(--line);
}

/* The format panel (2026-08-01): the line-level controls behind the
   bar's Format button, and the paper's right-click answer. Chooser
   furniture at the GARDENS panel's size, standing CENTRED in the
   viewport (the gardener's image of it: a room being furnished, with
   space where the coming controls will go). Its buttons are .fmt-btn
   DELIBERATELY — the panel's controls are the same species as the
   bar's, sharing on purpose (the .garden-row lesson forbids accidental
   sharing, not kinship); the fmtp-* layout classes are its own, scoped
   apart from the choosers'. */
#formatpanel {
  position: fixed;
  z-index: 16;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  flex-direction: column;
  gap: 10px;
  padding: 18px 20px;
  min-width: 280px;
  /* The room, not the furniture: the panel holds the gardens panel's
     full footprint even while mostly empty — the open floor below the
     first rows is where the coming controls visibly belong (the
     gardener's work-in-progress image). Content flows from the top. */
  min-height: 300px;
  /* The room has a ceiling: an opened stamp list (or the rows the shed's
     display blocks will add) must not run off a short window. Scrolls
     inside itself; the panel stays centred. */
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  justify-content: flex-start;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow);
  /* Its own keyframes, NOT fmtIn: a keyframe's transform REPLACES the
     base transform, so animating translateY alone would knock out the
     -50%,-50% centring for the animation's duration (and for good in a
     throttled background tab, where the first frame can freeze). The
     choosers share this latent quirk with their translateX(-50%). */
  animation: fmtpIn 0.16s ease-out;
}
#formatpanel.show {
  display: flex;
}
@keyframes fmtpIn {
  from { opacity: 0; transform: translate(-50%, calc(-50% + 3px)); }
  to   { opacity: 1; transform: translate(-50%, -50%); }
}
.fmtp-title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--hint);
}
/* What stands selected (2026-09-14): a quiet count under the title. */
.fmtp-count {
  font-size: 11px;
  color: var(--hint);
  margin-top: -0.35rem;
  font-variant-numeric: tabular-nums;
}
.fmtp-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  font-size: 13px;
  color: var(--ink-text);
}
.fmtp-cap {
  color: var(--hint);
  font-size: 12px;
}
.fmtp-group {
  display: flex;
  align-items: center;
  gap: 1px;
}
.fmtp-kind {
  font-size: 12px;
}
/* A register's caption — what the rows beneath it act on ('this line',
   'insert', 'the whole leaf'). A control's REACH is not guessable from
   its label, and a document-wide typeface sitting under a line's
   alignment would read as the line's, so this caption is doing work and
   must be READABLE (amended 2026-08-02, the gardener: the first cut wore
   --hint at 0.7 opacity — about 15% black — and read as a watermark).
   Ink-mixed, so it darkens in light and lightens in dark, and each
   caption sits on a hairline that runs the panel's width: the rule below
   the words is what makes a register a section rather than a label. Air
   above, none below — the caption belongs to what follows it. */
.fmtp-reg {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.09em;
  color: color-mix(in srgb, var(--ink-text) 62%, transparent);
  margin-top: 4px;
  padding-bottom: 5px;
  border-bottom: 1px solid color-mix(in srgb, var(--ink-text) 14%, transparent);
}
.fmtp-row + .fmtp-reg,
.fmtp-stamps + .fmtp-reg {
  margin-top: 14px;
}
/* THE STAMP LIST (2026-08-02): the date formats, opened in place under the
   insert register. Each row IS its own preview — it renders the moment you
   are standing in, in that format — so the choice is made by reading, and
   no preference is stored anywhere. Left-aligned in a column, because they
   are read down and compared; the panel's own type, not the paper's. */
.fmtp-stamps {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1px;
  margin: 2px 0 2px 0;
}
.fmtp-stamp {
  appearance: none;
  background: none;
  border: 1px solid transparent;
  border-radius: 6px;
  text-align: left;
  padding: 5px 8px;
  font: inherit;
  font-size: 13px;
  color: var(--ink-text);
  cursor: pointer;
}
.fmtp-stamp:hover {
  background: color-mix(in srgb, var(--accent) 10%, transparent);
  border-color: color-mix(in srgb, var(--accent) 30%, transparent);
}

/* The OS's own <select> worn as clothes — the type chooser's control,
   brought across whole when the leaf's dress moved into this panel
   (2026-08-02); #typechooser and its .type-* dress went with the move. */
.fmtp-select {
  font-size: 13px;
  padding: 4px 6px;
  border: 1px solid var(--line-firm);
  border-radius: 6px;
  background: var(--paper);
  color: var(--ink-text);
  min-width: 130px;
}

/* The garden chooser (2026-07-18, multi-garden): gardens open like
   documents — the same summoned-panel furniture the type chooser wore.
   Rows list the worlds, most recently tended first; the one you stand
   in wears the accent. Its title was '.type-title', BORROWED from the
   type chooser — which retired 2026-08-02 when the leaf's dress moved
   into the format panel, so the class is its own now (the .garden-row
   lesson: two surfaces sharing a bare class name is a latent cascade
   collision, and a class outliving its owner is how one starts). */
#gardenchooser {
  position: fixed;
  z-index: 16;
  top: 14%;
  left: 50%;
  transform: translateX(-50%);
  display: none;
  flex-direction: column;
  gap: 6px;
  padding: 18px 20px;
  min-width: 280px;
  /* A CEILING, pre-emptively (2026-08-02). This list grows with the
     writer's worlds — a gardener with a dozen test gardens fills it —
     and it hangs from the top with nothing below to stop it. Two panels
     were found running off the bottom of the window in one morning (the
     workbench, then the ⌥ manual), and the lesson from both is that a
     clamped POSITION cannot rescue a panel taller than the window. So
     every summoned panel that can grow gets a ceiling now, before a
     screenshot finds it. */
  max-height: calc(86vh - 20px);
  overflow-y: auto;
  overscroll-behavior: contain;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow);
  animation: fmtIn 0.16s ease-out;
}
#gardenchooser.show {
  display: flex;
}
.gardens-title {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--hint);
  margin-bottom: 2px;
}
.garden-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 18px;
  padding: 6px 8px;
  border: 1px solid transparent;
  border-radius: 8px;
  background: none;
  font: inherit;
  font-size: 13px;
  color: var(--ink-text);
  text-align: left;
  cursor: pointer;
}
.garden-row:hover {
  background: var(--fill);
}
.garden-row.here {
  border-color: var(--accent);
}
/* THE BURNING (2026-07-22). The row is a button, so the burn stands
   BESIDE it in a line, never inside it. It is FAINT and revealed on
   hover (the pad-note's '↳ its own leaf' grammar): a destroying verb may
   not advertise itself in a resting list, and it is absent entirely
   where it cannot be done — the garden you stand in, and the last one.
   Its only colour is the app's one alarm red, the same the report wears
   when a chain will not verify; nothing else in Phloem is red. */
.garden-line {
  display: flex;
  align-items: center;
  gap: 4px;
}
.garden-line > .garden-row {
  flex: 1 1 auto;
  min-width: 0;
}
.garden-burn {
  flex: 0 0 auto;
  padding: 4px 7px;
  border: 0;
  border-radius: 8px;
  background: none;
  font: inherit;
  font-size: 11px;
  color: var(--hint);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s ease;
}
.garden-line:hover > .garden-burn,
.garden-burn:focus-visible {
  opacity: 1;
}
.garden-burn:hover {
  color: #b23c31;
  background: rgba(178, 60, 49, 0.1);
}
/* The ceremony: what will be lost, and the name typed back. */
.garden-burn-form {
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  gap: 5px;
  padding: 6px 8px;
}
.garden-burn-says {
  font-size: 11.5px;
  line-height: 1.45;
  color: var(--hint);
}
.garden-name-input.astray {
  border-color: #b23c31;
}
.garden-name.unnamed {
  color: var(--hint);
  font-style: italic;
}
.garden-tended {
  font-size: 11px;
  color: var(--hint);
  white-space: nowrap;
}
.garden-verbs {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px solid var(--line-soft);
}
.garden-verb {
  padding: 4px 8px;
  border: none;
  border-radius: 8px;
  background: none;
  font: inherit;
  font-size: 12.5px;
  color: var(--hint);
  text-align: left;
  cursor: pointer;
}
.garden-verb:hover {
  color: var(--ink-text);
  background: var(--fill);
}
/* THE SHOW GARDEN'S ONE LINE (2026-09-12): a caption under its verb —
   admissible because the chooser is a summoned panel, and a stranger
   meeting 'the show garden' needs to be told, in a breath, that it is
   not theirs. */
.garden-verb-note {
  padding: 0 8px 4px;
  font-size: 11px;
  line-height: 1.35;
  color: var(--hint);
  opacity: 0.85;
}
.garden-name-input {
  font: inherit;
  font-size: 13px;
  padding: 4px 8px;
  border: 1px solid var(--line-firm);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink-text);
}

/* The 'name tree' field (2026-07-20): stands where the reveal rail did
   (left margin, same top), so it takes the place of the 'name this tree'
   chip just clicked. z-index above every place overlay AND the reveal
   (15), so naming from the trunk shows the field over it. */
.tree-name-input {
  position: fixed;
  left: 14px;
  top: 33%;
  z-index: 16;
  width: 180px;
  font: inherit;
  font-size: 13px;
  padding: 5px 9px;
  border: 1px solid var(--line-firm);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink-text);
  box-shadow: var(--shadow);
}

/* THE WHISPER — the app answering a hand.
   IT CAME IN FROM THE CORNER (2026-08-04, the gardener: "I've always
   thought it is way too understated… in practice I always miss it, in
   fact I can hardly recall ever seeing it"). It was 11.5px in the
   bottom-right at --hint, which is the desk's own faint-furniture
   voice — right for a colophon nobody needs, and wrong for the only
   sentence the app ever addresses TO the writer. A confirmation nobody
   sees is the same defect as no confirmation: the 3 August download
   ruling in a second costume, and this time the message was reaching
   the DOM and still not reaching the reader.

   It now stands where THE FIRST-RUN LINE stands, and wears its dress,
   because that argument was had and settled on 2026-08-02 and the
   reasoning transfers whole: high in the reading eye's path, on its own
   opaque paper so words laid over prose stay legible. The greeting's
   own caveat transfers too — this is assertive chrome, admissible only
   because it is TRANSIENT and only ever answers a gesture the hand just
   made. It never speaks unbidden; the ambient margin has its own lane
   and is not allowed here.

   Smaller than the greeting (18 against 30): that line is five words
   read from across a room by someone who knows nothing, this is a
   sentence read by someone who just did something and is looking for
   the result.

   z-index 16 keeps it above every place overlay (12), the whence door
   (13) and the reveal (15) — raised earlier the same day, when a leaf
   file could first be dropped onto a trunk or the garden and its seal
   verdict was painted underneath the very screen the hand was on. */
#hint {
  position: fixed;
  left: 50%;
  top: 33%;
  transform: translateX(-50%);
  z-index: 16;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 18px;
  line-height: 1.45;
  padding: 18px 30px;
  max-width: min(34rem, calc(100vw - 40px));
  text-align: center;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow);
  color: color-mix(in srgb, var(--ink-text) 72%, transparent);
  user-select: none;
  pointer-events: none; /* never eats a click meant for the paper */
  opacity: 0;
  transition: opacity 0.45s ease-out;
}
/* Empty at rest, and an empty card would be a box standing over the page
   saying nothing — so the dress only exists while there are words. */
#hint:empty {
  padding: 0;
  border: 0;
  background: none;
  box-shadow: none;
}
#hint.show {
  opacity: 1;
}
/* The two cannot share the spot. An answer speaks to something the hand
   just did; the greeting is a standing offer to a hand that has done
   nothing, so the answer wins the moment and the greeting steps aside.
   Driven by a class on <body> rather than a sibling selector on purpose:
   these two elements are order-dependent siblings today, and a rule that
   silently depends on that is how the .garden-row collision started. */
body.answering #greeting {
  opacity: 0;
}

/* Print: the essay's prose export, worn as the OS's own clothes
   (2026-07-16, the punch-list build) — a bare in-app print yields just the
   words on white. NB Cmd-P no longer routes here: Tauri's WKWebView has no
   print engine, so Cmd-P opens the document in the browser instead (see
   openForPrint in main.ts). Kept for any raw OS print gesture. */
/* THE PRINT BLOCK IS NOT THEMED, and that is not an oversight: paper is
   white and ink is black wherever it comes out of a printer. A theme
   dresses a screen; a sheet of A4 has its own palette and the app does
   not get a vote. (The same reason the export's @media print says #fff.) */
@media print {
  body > *:not(#app) {
    display: none !important;
  }
  html,
  body {
    background: #fff;
  }
  #app {
    padding: 0;
  }
  .page {
    width: auto;
    min-height: 0;
    box-shadow: none;
    border-radius: 0;
    background: #fff;
  }
  .page .ProseMirror {
    min-height: 0;
    padding: 0;
    color: #1f2428;
  }
}

/* READING A NOTE WHOLE (2026-08-10, the gardener, of the margin and the
   report at once: "I kind of like the notes being unobtrusive. However
   the user should be able to look at them comfortably if they want to").
   See noteviewer.ts for the reasoning; this is its dress.

   IT DOES NOT RIDE IN EXPORT_CSS, and that is deliberate rather than a
   lapse of the both-stylesheets rule: the export strips .note-expand
   from its clone (a control with no script behind it is a dead control
   on paper) and the reading room is script-only, so neither element
   exists in the travelling record. */

/* THE MARK — hover-revealed, the pad-note's grammar: a verb wanted only
   occasionally may not advertise itself in a resting list. It appears
   when the pointer is on the note it belongs to, and nowhere else.

   AND WHEN IT APPEARS IT IS LEGIBLE (2026-08-10, the gardener's second
   pass, with a drawing): a framed square on the LEFT, level with the
   first line. WHETHER it shows is still the hover's business; what it
   looks like once shown is this, and the two are not in tension — a
   control the hand cannot see while looking straight at it is not
   restrained, it is broken.

   ONE FACE IN THREE PLACES: the margin's jot, the report's ledger card,
   and the notepad. A hand that learns the gesture on one surface finds
   it unmoved on the next, which is the whole reason it is one class. */
.note-expand {
  flex: 0 0 auto;
  opacity: 0;
  width: 20px;
  height: 20px;
  margin: 1px 0 0;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  line-height: 1;
  color: var(--accent);
  background: var(--paper);
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 4px;
  cursor: pointer;
  /* A MOMENT'S GRACE ON THE WAY OUT (the gardener, 2026-09-12: the mark
     vanished before the hand could reach it). The fade waits 0.35s
     after the hover is lost; arriving hover reveals instantly. */
  transition: opacity 0.15s ease-out 0.35s, background 0.15s ease-out;
  /* The margin's card is a drag handle; this is not part of the grip. */
  pointer-events: auto;
}
.jot:hover .note-expand,
.report-note:hover .note-expand,
.pad-item:hover .note-expand,
.note-expand:focus-visible {
  opacity: 1;
  transition-delay: 0s;
}
.note-expand:hover {
  background: color-mix(in srgb, var(--accent) 12%, var(--paper));
}

/* THE CARD LAYS THEM OUT AS A ROW, and the mark comes first. Scoped by
   \`has-mark\` so the writer's own note and the compose card — which have
   no evidence to read and wear no mark — keep the single-box shape they
   have always had. */
.jot.has-mark,
.report-note.has-mark,
.pad-item.has-mark {
  display: flex;
  align-items: flex-start;
  gap: 7px;
}
/* ONE BODY, THREE SURFACES (2026-08-10, the gardener: "am I right in
   believing that this note viewer is built from the same code in all
   three of its incarnations? It would be a waste of code if it was
   not"). He was right to ask and right about the answer — readNote,
   expandMark, sourceTitle and urlLink are each written once — but the
   body wrapper had gone in as three names for one idea (.jot-body,
   .report-note-body, .pad-body), which is the same waste one level down.
   One class now; only what genuinely differs by surface is scoped. */
.note-body {
  min-width: 0;
  flex: 1 1 auto;
}
/* The jot alone: the green rule and the resting one-line clip move onto
   the body, so the mark stands outside them — the gardener's drawing is
   [mark][rule][words], and a mark inside the clipped box would be cut
   off with the sentence it belongs to. */
.jot.has-mark {
  border-left: none;
  padding-left: 0;
}
.jot.has-mark > .note-body {
  border-left: 2px solid var(--accent);
  padding: 3px 9px;
}
.jot.has-mark:not(.open) > .note-body {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* THE MARK CLIMBS ABOVE THE MARGIN'S CARD (the gardener, 2026-09-11,
   on the split: the 20px mark and its 7px gap cost the margin's narrow
   lane a fifth of its width, and a summoned note read one word to a
   line. His own August drawing put the mark beside the note; his own
   hand moves it just above, so the note sits as far left as the
   writer's own. The REPORT and NOTEPAD keep the drawing — their rooms
   are wide — and 'one face in three places' still holds: the face is
   the framed square, not its seat. Inert until the card is hovered,
   because an invisible button floating over the note above would be a
   click-trap in the claim-drag's own lane. */
.jot.has-mark {
  position: relative;
  display: block;
}
.jot.has-mark > .note-expand {
  position: absolute;
  top: -23px;
  left: 0;
  pointer-events: none;
}
/* THE BRIDGE (the gardener, 2026-09-12: the mark disappeared before he
   could click it). The floating mark stands 3px clear of the card, and
   a pointer crossing that gap left the card's hover — hiding the very
   thing it was travelling to. An invisible extension spans the gap, so
   the journey from note to mark never leaves the pair's hover. It only
   exists while the mark is interactive (the pair is hovered), so it
   can never be the invisible click-trap the inert state guards
   against. */
.jot.has-mark > .note-expand::after {
  content: '';
  position: absolute;
  left: -4px;
  right: -4px;
  top: 100%;
  height: 5px;
}
.jot.has-mark:hover > .note-expand,
.jot.has-mark > .note-expand:focus-visible {
  pointer-events: auto;
}

/* THE ROOM — the gardens chooser's manner: summoned, centred, closing on
   Esc or a click outside, never standing. z-index above every panel (16)
   and every place overlay (12): it is opened FROM the report, so it must
   sit over it. */
.notereader-veil {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: color-mix(in srgb, var(--ink-text) 22%, transparent);
}
.notereader {
  max-width: 640px;
  width: 100%;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  padding: 26px 30px;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow);
  /* A keyframe's transform REPLACES the base transform (the format
     panel's own trap, recorded 2026-08-01) — this panel is centred by
     flex rather than by a translate, so its entry animation is free to
     move it without knocking the centring out. */
  animation: notereader-in 0.16s ease-out;
}
@keyframes notereader-in {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: none; }
}
.notereader-head {
  font-size: 11px;
  letter-spacing: 0.04em;
  opacity: 0.55;
  margin-bottom: 10px;
}
/* The note at a size it can actually be read at — the whole point of the
   room. The margin's 12px and the report's clamped column are right where
   they stand; this is the other register. */
.notereader-note {
  font-size: 16px;
  line-height: 1.55;
  color: var(--ink-text);
}
/* The sealed-record register (2026-08-12): the report's evidence link
   opens the leaf's own JSON here, and data reads as data. In-app only —
   the note reader never exists in the export, so nothing rides in
   EXPORT_CSS (the recorded exception to the both-stylesheets rule). */
.notereader-note.notereader-mono {
  font-family: ui-monospace, 'SF Mono', Menlo, monospace;
  font-size: 11px;
  line-height: 1.5;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.notereader-declared {
  font-size: 12px;
  opacity: 0.55;
  margin-top: 10px;
}
.notereader-label {
  font-size: 11px;
  letter-spacing: 0.04em;
  opacity: 0.6;
  margin-bottom: 6px;
}
/* A SUB-HEADING BAR WITH A CHEVRON (2026-08-10, the gardener: "all the
   information is available at all times but is never in your face").
   A native <details>, so the same markup serves the app and the export.
   Shut by default: the room's first duty is the note itself, and the
   evidence is a question the reader asks. */
.notereader-section {
  margin-top: 16px;
  border-top: 1px solid var(--line-soft);
}
.notereader-bar {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 2px 8px;
  font-size: 11.5px;
  letter-spacing: 0.04em;
  opacity: 0.72;
}
.notereader-bar::-webkit-details-marker { display: none; }
.notereader-bar::after {
  content: '›';
  font-size: 15px;
  line-height: 1;
  opacity: 0.6;
  transition: transform 0.15s ease-out;
}
.notereader-section[open] > .notereader-bar::after {
  transform: rotate(90deg);
}
.notereader-bar:hover { opacity: 1; }
.notereader-section > *:not(.notereader-bar):last-child {
  margin-bottom: 12px;
}
.notereader-cite { margin-bottom: 12px; }
.notereader-quote {
  font-size: 14px;
  line-height: 1.5;
  font-style: italic;
  opacity: 0.85;
}
.notereader-source { margin-bottom: 7px; }
.notereader-src {
  display: block;
  font-size: 12.5px;
  opacity: 0.8;
  margin-top: 3px;
}
.notereader-url {
  display: block;
  font-size: 11px;
  opacity: 0.5;
  word-break: break-all;
}

/* THE TWO DOORS AT THE MANUAL'S TOP: GET HELP (left, 2026-09-16) and
   SEND FEEDBACK (right, 2026-09-12), one row, one dress, apart from the
   verbs — neither is an act on the leaf. Get help opens Ask Phloem; it
   used to be a verb chip near the foot, and moved up so a new hand finds
   the word "help" first. The feedback panel below is Ask Phloem's dress
   family. */
.reveal-doors {
  /* The rail hugs its left edge (align-items: flex-start), so this row
     must stretch to the rail's width or the two doors would sit side by
     side on the left. Stretch, then push the doors to opposite edges. */
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 10px;
}
.reveal-help,
.reveal-feedback {
  background: none;
  border: none;
  padding: 2px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--accent);
  opacity: 0.75;
  cursor: pointer;
  user-select: none;
}
.reveal-help:hover,
.reveal-feedback:hover { opacity: 1; text-decoration: underline; }
.feedback-veil {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: color-mix(in srgb, var(--ink-text) 22%, transparent);
}
.feedback {
  max-width: 520px;
  width: 100%;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  padding: 24px 28px;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow);
  animation: notereader-in 0.16s ease-out;
}
.feedback-head {
  font-size: 11px;
  letter-spacing: 0.04em;
  opacity: 0.55;
}
.feedback-caption {
  font-size: 12px;
  opacity: 0.55;
  margin: 6px 0 12px;
}
.feedback-mail,
.feedback-msg {
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-text);
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 8px;
  padding: 8px 10px;
  margin-bottom: 10px;
}
.feedback-msg { resize: vertical; }
.feedback-mail:focus,
.feedback-msg:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--accent) 55%, var(--line-soft));
}
.feedback-note {
  font-size: 12px;
  opacity: 0.7;
  min-height: 18px;
  margin-bottom: 8px;
}
.feedback-send {
  font: inherit;
  font-size: 13px;
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px solid color-mix(in srgb, var(--accent) 45%, var(--line-soft));
  background: color-mix(in srgb, var(--accent) 10%, var(--paper));
  color: var(--accent);
  cursor: pointer;
}
.feedback-send:hover { background: color-mix(in srgb, var(--accent) 18%, var(--paper)); }
.feedback-send:disabled { opacity: 0.5; cursor: default; }

/* ASK PHLOEM (2026-09-11, roadmap №1) --------------------------------- */
/* The ⌥⇧? panel: the app answering questions about itself, from its own
   manual. The noteviewer's manner and dress — summoned furniture over
   whatever stands, Esc / click-away closes, never chrome, never the log.
   In-app only, so nothing rides in EXPORT_CSS (the noteviewer's recorded
   exception to the both-stylesheets rule: the element does not exist in
   the travelling record). */
.askphloem-veil {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: color-mix(in srgb, var(--ink-text) 22%, transparent);
}
.askphloem {
  max-width: 560px;
  width: 100%;
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  padding: 24px 28px;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 12px;
  box-shadow: var(--shadow);
  /* Centred by flex, so the entry animation is free to move it (the
     format panel's keyframe-transform trap, recorded 2026-08-01). */
  animation: notereader-in 0.16s ease-out;
}
.askphloem-head {
  font-size: 11px;
  letter-spacing: 0.04em;
  opacity: 0.55;
}
.askphloem-caption {
  font-size: 12px;
  opacity: 0.55;
  margin: 6px 0 12px;
}
.askphloem-q {
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  font: inherit;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink-text);
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 8px;
  padding: 8px 10px;
}
.askphloem-q:focus {
  outline: none;
  border-color: color-mix(in srgb, var(--accent) 55%, var(--line-soft));
}
/* The answer at a size it can be read at — the noteviewer's register,
   with the paragraphs the model writes kept apart. */
.askphloem-a {
  margin-top: 14px;
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--ink-text);
  white-space: pre-wrap;
}
/* The eye's resting line while the request is out; the comet trail is
   the true in-flight mark. */
.askphloem-a.askphloem-asking {
  opacity: 0.5;
  font-style: italic;
}
/* Past the manual's edge, a person: the demurral's own instruction as a
   live door. */
.askphloem-foot {
  margin-top: 16px;
  padding-top: 10px;
  border-top: 1px solid var(--line-soft);
  font-size: 11.5px;
  opacity: 0.6;
}
.askphloem-write {
  color: var(--accent);
  text-decoration: none;
}
.askphloem-write:hover {
  text-decoration: underline;
}

/* THE WORKINGS (2026-08-26, note 66) ---------------------------------- */
/* The door: standing faint text, top right — the notepad door's grammar
   mirrored (an icon was ruled out by the standing-pictogram rule). */
#workings-door {
  /* Stands just above the page's top-RIGHT corner — the mirror of the
     '← the front page' tag above the top-left (the gardener's sketch,
     2026-08-26): the two doors of the pair share one shelf. */
  position: fixed;
  left: 50%;
  transform: translateX(calc(var(--desk-half, calc(var(--page-w) / 2)) - 100%));
  top: 12px;
  z-index: 7;
  background: none;
  border: none;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--ink-text);
  opacity: 0;
  pointer-events: none;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.4s;
}
#workings-door.show { opacity: 0.3; pointer-events: auto; }
#workings-door.show:hover { opacity: 0.8; }
body.revealing #workings-door.show { opacity: 0.85; color: var(--accent); }

/* THE WORKINGS WEARS LEGAL-PAD YELLOW (2026-08-26, the gardener: "too
   easy to forget which one you're on"). Mixed from the paper token so
   both schemes keep their footing: soft legal yellow in light, an
   olive-warm sheet in dark. The front stays true paper — the contrast
   IS the wayfinding, and since the split (2026-09-11) the yellow rides
   the workings SHEET wherever it stands: the live page when the pen is
   on the drafts, the painted pane when it is not. Placeholder shade,
   his to tweak. (The '#workings-front' backdrop tag retired with the
   overlay walk it served — the split view, roadmap №1.) */
/* One name for the shade, still the 2026-08-26 placeholder and still
   his to tweak — in exactly one place now. */
:root {
  --workings-paper: color-mix(in srgb, var(--paper) 70%, #f2d879);
  /* ...and the shade its dwellers cast (the gardener, 2026-09-12): the
     paper's yellow darkened to a shadow's weight, one name for it. */
  --workings-shadow-tint: color-mix(in srgb, #c9a02c 45%, transparent);
}
body.workings-open .page,
.paint-page.workings-paper {
  background: var(--workings-paper);
}

/* THE DRAFTS' DOT (the gardener, 2026-09-12): in the survey, a leaf
   whose workings holds drafts wears a small yellow dot at its icon's
   top-right — the drafts' own paper, edged with its shadow tint so it
   reads on white. The thumb clips its overflow, so the dot rides the
   card and leans over the icon's corner. */
.workings-dot {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #f2d879;
  border: 1px solid color-mix(in srgb, #c9a02c 65%, transparent);
  z-index: 2;
  pointer-events: none;
}

/* THE MENUS FOLLOW THE PEN (the gardener, 2026-09-12: "when the option
   menu, or, indeed, the format menu relate to the workings page they
   should reflect the same yellow colouring — a simple way to remove any
   confusion about which page is the current subject"). The wayfinding
   contrast of 2026-08-26 extended to the summoned surfaces: while the
   pen is on the workings, the manual's chips and the format panel wear
   the drafts' own paper, so what they act on is legible at a glance. */
/* ...BUT ONLY WHILE THE PEN'S PAGE IS WHAT YOU ARE LOOKING AT (the
   gardener, 2026-09-12, same day: standing in the garden view with the
   workings as the last live page, a right-click brought up the manual in
   yellow — "this should reset upon travel back to the garden so that the
   only menu available from the garden is the primary one"). The body
   class says which page holds the pen, and it stays true under a place
   overlay; the DRESS must not, because from the garden, the trunk, the
   report or the compare view the menu acts on the place, not on the
   drafts. :has() reads the real state — a place standing over the page
   — rather than asking four modules to keep a second class in step.
   First use of :has() in this sheet; every surface this app runs on
   supports it. */
body.workings-open:not(:has(#garden.show, #trunk.show, #report.show, #compare.show)) .reveal-chip,
body.workings-open:not(:has(#garden.show, #trunk.show, #report.show, #compare.show)) .chip,
body.workings-open:not(:has(#garden.show, #trunk.show, #report.show, #compare.show)) #formatpanel {
  background: var(--workings-paper);
}
/* ...and the manual's own card with them (the gardener, same day:
   yellow chips on white paper read as odd — the panel body wears the
   drafts' paper too, at the rail's usual translucency). */
body.workings-open:not(:has(#garden.show, #trunk.show, #report.show, #compare.show)) #reveal {
  background: color-mix(in srgb, var(--workings-paper) 92%, transparent);
}
/* ...and the notepad with them (the gardener, 2026-09-13, once its door
   had learned to sit with its page): the pad wears the drafts' paper and
   its door casts the drafts' shadow, so the bank you open from the
   workings looks like the workings'. */
body.workings-open:not(:has(#garden.show, #trunk.show, #report.show, #compare.show)) #pad {
  background: var(--workings-paper);
}
body.workings-open:not(:has(#garden.show, #trunk.show, #report.show, #compare.show)) #pad-door.show {
  filter: drop-shadow(0 2px 5px var(--workings-shadow-tint));
}
/* AND THE MARGIN-DWELLERS CAST THE DRAFTS' SHADOW (the gardener, same
   day, extending the identity a register further: the notes and the
   ghosts keep their own faces, but their shadows turn the workings'
   yellow while the pen is there — whose page they serve, said by the
   light they stand in). The ghost's shadow lives on its thumbnail; a
   note has no box at all, so its shadow hugs the glyphs and the green
   rule (drop-shadow follows the rendered shape, not the rectangle). */
body.workings-open #ghosts .thumb {
  box-shadow: 0 2px 14px var(--workings-shadow-tint);
}
body.workings-open .jot {
  filter: drop-shadow(0 2px 5px var(--workings-shadow-tint));
}
body.workings-open .jot.own.editing.composing {
  box-shadow: 0 2px 14px var(--workings-shadow-tint);
}

/* THE SPLIT VIEW (2026-09-11, roadmap №1): both pages of the pair on
   one desk, side by side — ONE PEN, the other sheet painted from its
   log. The pair narrows to fit two abreast; --desk-half repositions the
   furniture formulas that assumed one centered page (the slip, the
   ghost preview, the whence door, the workings door), so left-of-the-
   desk and right-of-the-desk keep their meaning around the pair. */
body.split-open {
  /* THE SEAM IS A FURNITURE LANE (the gardener, 2026-09-11, first
     hand-test): each page's furniture hugs its OWN page, so when the
     pen is on the left pane its ghost column stands in the seam — the
     gap is sized for it (10px clear + 38px card + 4px air). */
  --split-gap: 52px;
  --pane-w: min(794px, calc(50vw - 60px));
  --desk-half: calc(var(--pane-w) + var(--split-gap) / 2);
}
body.split-open #app { gap: var(--split-gap); }
body.split-open .page { width: var(--pane-w); }
/* THE TWO PAGES SCROLL ON THEIR OWN (RULED AND BUILT 2026-09-13, the
   gardener: with a long workings and a short front, "it is impossible to
   drag to a destination with any accuracy because you can't get to the
   part of the destination page where you want to be"). One window scroll
   moved both sheets together; now the desk stands still and each sheet
   is its own scrolling column, so the workings can be scrolled to its
   depths while the front stays at the paragraph you are aiming for, and
   the browser's own drag autoscroll works inside whichever sheet the
   hand is over. The margin's furniture is fixed to the viewport and
   measures its lines afresh on any scroll (margin.ts listens in the
   capture phase, since a sheet's scroll never bubbles to the window). */
body.split-open { overflow: hidden; }
body.split-open #app { height: 100vh; padding: 3rem 0 0; align-items: flex-start; }
body.split-open .page,
body.split-open .paint-page {
  height: calc(100vh - 3rem - 1.25rem);
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
}

/* THE WHENCE DOOR FOLLOWS THE LIVE PAGE (the gardener, same test: the
   door standing across the desk beside the OTHER page read as that
   page's). The CSS right-anchor assumes the live page starts at the
   desk's left; when the live page is the RIGHT pane — pen on the
   workings with the workings right, or pen on the front with the
   workings switched left — the door moves to the seam, hugging its
   page's left edge (a little overlap onto the painted sheet is the
   door's own manner — it is a picture, not the paper being written). */
/* AND THE NOTEPAD'S DOOR SITS WITH ITS OWN PAGE (RULED 2026-09-13, the
   gardener: at the desk's bottom-left "it intuitively feels as though it
   belongs to the page on the left, even when the page on the right is
   active"). The two pages already keep separate notepads — the bank is
   per leaf, and the pen swap makes the workings the current leaf — so
   the door is the one thing that was shared, and it now moves to the
   live page's own bottom-left when that page is the right pane, leaning
   16px onto it exactly as the whence door does. */
body.split-open.workings-open:not(.workings-left) #pad-door,
body.split-open.workings-left:not(.workings-open) #pad-door {
  left: calc(50vw + var(--split-gap) / 2 - 16px);
}
/* ...and the pad opens above its door, on the same page (the gardener,
   within the hour: the pad "appears over the left pane" once the door
   had moved). */
body.split-open.workings-open:not(.workings-left) #pad,
body.split-open.workings-left:not(.workings-open) #pad {
  left: calc(50vw + var(--split-gap) / 2 - 16px);
}
body.split-open.workings-open:not(.workings-left) #whence,
body.split-open.workings-left:not(.workings-open) #whence {
  /* ...and it LEANS ONTO ITS PAGE (the gardener, second pass, same
     day: overlap direction signals ownership — a door touching the
     neighbouring sheet reads as the neighbour's). The door's right
     edge sits 16px onto the live page's blank margin. */
  right: calc(50vw - var(--split-gap) / 2 - 16px);
}

/* The painted companion: the pair's other page, replayed and painted by
   the page's own renderer (workings.ts). NOT '.page' — that name means
   the pen's page everywhere, and every margin-dweller positions off the
   pen's page (the gardener's furniture ruling, 2026-09-11: each page's
   furniture hugs its own page). A click takes the pen there. */
.paint-page {
  position: relative;
  z-index: 1;
  width: var(--pane-w, var(--page-w));
  min-height: 1123px;
  background: var(--paper);
  box-shadow: var(--shadow);
  border-radius: 2px;
}
/* The painting brightens a breath under the hand — indexical of the one
   thing a painted page can do: take the pen. */
.paint-page:hover { box-shadow: 0 4px 22px color-mix(in srgb, var(--ink-text) 22%, transparent); }
/* Each sheet's own paper colour, named once so the fade below can match
   whichever sheet it stands on. */
/* AN EMPTY LINE IS STILL A LINE (2026-09-13, the gardener: the painted
   workings "collapses empty lines to nothing" the moment the pen leaves
   it). The live editor props an empty paragraph up with a trailing
   break; the plain serializer that paints the companion gives it none,
   so it had no height. A zero-width space restores the line box without
   adding a character anyone could select or copy. */
.paint-inner p:empty::before,
.paint-inner aside:empty::before,
.paint-inner h1:empty::before,
.paint-inner h2:empty::before,
.paint-inner h3:empty::before { content: '\\200B'; }
.paint-page { --paint-bg: var(--paper); }
.paint-page.workings-paper { --paint-bg: var(--workings-paper); }
/* THE PAINTED PAGE YIELDS UNDER THE NOTE LANE (the gardener,
   2026-09-11, third pass: a note on the workings reaches across the
   seam and mixes with the front's prose). When the pen's page is the
   right pane, its margin notes stand over the painted sheet's right
   edge — so that edge fades the painting's words to a little left of
   the notes' rule: the clash softens, the FEEL of the page remains,
   and focusing it brings it back whole. Pointer-inert, so the pane's
   take-the-pen click passes through; under the flip control (z 2). */
body.split-open.workings-open:not(.workings-left) .paint-page::after,
body.split-open.workings-left:not(.workings-open) .paint-page::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 230px;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(to right, transparent, var(--paint-bg) 55%);
}
/* The painted words: the .page .ProseMirror typography, mirrored — one
   look for both sheets, so the painting reads as the page it is. */
.paint-inner {
  padding: 72px 68px 120px;
  color: var(--ink-text);
  font-family: var(--leaf-font, "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  font-size: var(--leaf-size, 12pt);
  line-height: 1.7;
  white-space: pre-wrap;
  word-wrap: break-word;
  user-select: none;
  cursor: default;
}
.paint-inner p { margin: 0 0 0.4em; }
.paint-inner h1,
.paint-inner h2,
.paint-inner h3 {
  margin: 0.6em 0 0.3em;
  line-height: 1.25;
  font-weight: 650;
}
.paint-inner h1 { font-size: 1.42em; }
.paint-inner h2 { font-size: 1.2em; }
.paint-inner h3 { font-size: 1.08em; }
.paint-inner hr {
  border: 0;
  border-top: 1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
  margin: 1.1em 0;
}
/* 'switch sides' — the pair's one control, hover-revealed (the pad-note
   grammar): a verb wanted occasionally may not advertise itself. */
.paint-flip {
  position: absolute;
  top: 10px;
  right: 12px;
  z-index: 2;
  background: none;
  border: none;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--ink-text);
  opacity: 0;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.3s;
}
.paint-page:hover .paint-flip { opacity: 0.35; }
.paint-flip:hover { opacity: 0.85; }
/* The landing sheet standing IN the pane (the crossing, while the split
   is open): the same .crossing-* rows the overlay uses, in the pane's
   own paper. */
.paint-landing { padding: 34px 40px; }
/* The desktop carry's ghost: a scrap of the selection under the hand
   while the house's own gesture stands in for the swallowed native
   drag (workings.ts). */
.carry-ghost {
  position: fixed;
  z-index: 50;
  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px 8px;
  background: var(--paper);
  border: 1px solid var(--line-soft);
  border-radius: 4px;
  box-shadow: var(--shadow);
  font-size: 12px;
  color: var(--ink-text);
  pointer-events: none;
}
/* The drag's drop line: the slot the release would fill — the
   .crossing-slot's own accent bar, following the pointer. */
.paint-dropline {
  position: absolute;
  left: 40px;
  right: 40px;
  height: 2px;
  border-radius: 1px;
  background: var(--accent);
  opacity: 0.85;
  z-index: 2;
  pointer-events: none;
}

/* The landing view: the front's paragraphs and the slots between them.
   Summoned furniture in the compare view's manner — Esc or the surround
   closes; nothing here is an editor. */
#crossing {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: none;
  background: color-mix(in srgb, var(--desk) 62%, transparent);
  overflow: auto;
  padding: 6vh 0;
}
#crossing.show { display: block; }
.crossing-panel {
  width: min(var(--page-w), 92vw);
  margin: 0 auto;
  background: var(--paper);
  box-shadow: var(--shadow);
  border-radius: 3px;
  padding: 26px 40px 34px;
}
.crossing-head {
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.crossing-para {
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: var(--ink-text);
}
.crossing-empty { opacity: 0.5; font-style: italic; }
.crossing-slot {
  display: block;
  width: 100%;
  height: 14px;
  margin: 2px 0;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
}
.crossing-slot::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 6px;
  height: 2px;
  border-radius: 1px;
  background: var(--accent);
  opacity: 0;
  transition: opacity 0.12s;
}
.crossing-slot:hover::before { opacity: 0.85; }
`;function t(e,t,n={}){e.addEventListener(`mousedown`,e=>{e.button!==0||e.ctrlKey||(n.keepDefault||e.preventDefault(),t(e))})}var n=`the show garden`,r=`phloem.gardens`,i=`phloem.currentGarden`,a=[`phloem.app.`,`phloem.engine.`,`phloem.reach.`,`phloem.workbench.`];function o(){try{let e=JSON.parse(localStorage.getItem(r)??`null`);if(e&&e.v===1&&e.gardens&&typeof e.gardens==`object`)return e}catch{}return null}function s(e){localStorage.setItem(r,JSON.stringify(e))}function c(){return`g${Date.now().toString(36)}${Math.floor(Math.random()*1e4).toString(36)}`}function l(){let e=o();if(!e){let t=c();return e={v:1,gardens:{[t]:{name:null,created:Date.now(),tended:Date.now(),dbName:`phloem`,keys:`phloem.`}}},s(e),localStorage.setItem(i,t),{reg:e,id:t}}let t=localStorage.getItem(i);return(!t||!e.gardens[t])&&(t=Object.keys(e.gardens).find(t=>e.gardens[t].dbName===`phloem`)??Object.keys(e.gardens)[0],localStorage.setItem(i,t)),{reg:e,id:t}}function u(){return l().id}function d(){let{reg:e,id:t}=l();return e.gardens[t]}function f(){return d().dbName}function p(){return d().keys}function m(){let{reg:e}=l();return Object.entries(e.gardens).map(([e,t])=>({id:e,...t})).sort((e,t)=>t.tended-e.tended)}function h(e,t){let{reg:n}=l(),r=c();return n.gardens[r]={name:e&&e.trim()?e.trim():null,created:Date.now(),tended:Date.now(),dbName:`phloem.${r}`,keys:`phloem.g.${r}.`,...t?.demo?{demo:!0}:{}},s(n),r}function g(){let{reg:e}=l();return Object.keys(e.gardens).find(t=>e.gardens[t].demo)??null}function _(e,t){let{reg:n}=l();n.gardens[e]&&(n.gardens[e].name=t.trim()||null,s(n))}var v=0;function y(){let e=Date.now();if(e-v<6e4)return;v=e;let{reg:t,id:n}=l();t.gardens[n].tended=e,s(t)}async function b(e){let t={leaves:0,events:0};if(typeof indexedDB.databases==`function`&&!(await indexedDB.databases()).some(t=>t.name===e))return t;let n=await new Promise(t=>{let n=indexedDB.open(e);n.onsuccess=()=>t(n.result),n.onerror=()=>t(null)});if(!n)return t;if(!n.objectStoreNames.contains(`events`))return n.close(),t;let r=await new Promise(e=>{let t=n.transaction(`events`,`readonly`).objectStore(`events`).getAll();t.onsuccess=()=>e(t.result),t.onerror=()=>e([])});return n.close(),{leaves:new Set(r.map(e=>e.docId).filter(Boolean)).size,events:r.length}}async function x(e){let{reg:t,id:n}=l(),o=t.gardens[e];if(o){if(e===n)throw Error(`a garden is never burned from inside it`);if(Object.keys(t.gardens).length<=1)throw Error(`the last garden stands`);await new Promise(e=>{let t=indexedDB.deleteDatabase(`${o.dbName}.blobs`);t.onsuccess=()=>e(),t.onerror=()=>e(),t.onblocked=()=>e()}),await new Promise(e=>{let t=indexedDB.deleteDatabase(o.dbName);t.onsuccess=()=>e(),t.onerror=()=>e(),t.onblocked=()=>e()});for(let e of Object.keys(localStorage))e.startsWith(o.keys)&&(e===r||e===i||o.keys===`phloem.`&&e.startsWith(`phloem.g.`)||o.keys===`phloem.`&&a.some(t=>e.startsWith(t))||localStorage.removeItem(e));delete t.gardens[e],s(t)}}function S(e){let{reg:t}=l();if(t.gardens[e]){for(let e of Object.keys(sessionStorage))e.startsWith(`phloem.`)&&sessionStorage.removeItem(e);localStorage.setItem(i,e),location.reload()}}function C(e){let r=document.createElement(`div`);r.id=`gardenchooser`,document.body.appendChild(r);let i=!1;function a(){r.classList.remove(`show`)}function o(e){return`tended ${new Date(e.tended).toLocaleDateString(void 0,{day:`numeric`,month:`short`})}`}function s(e,t,n){let r=document.createElement(`input`);r.className=`garden-name-input`,r.value=e,r.placeholder=`a name for the garden`;let i=!1;return r.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`&&(i=!0,t(r.value)),e.key===`Escape`&&(i=!0,l())}),r.addEventListener(`blur`,()=>{i||!n||r.value.trim()!==e.trim()&&(i=!0,n(r.value))}),r.addEventListener(`mousedown`,e=>e.stopPropagation()),r}async function c(e,t){let n=t.name?.trim()?t.name.trim():`burn`,r=await b(t.dbName);if(!e.isConnected)return;let i=document.createElement(`div`);i.className=`garden-burn-form`;let a=document.createElement(`div`);a.className=`garden-burn-says`;let o=`${r.leaves} ${r.leaves===1?`leaf`:`leaves`}`,s=`${r.events} ${r.events===1?`event`:`events`}`;a.textContent=`type ${t.name?.trim()?`‘${n}’`:`‘burn’`} to burn this garden — ${o}, ${s}. this cannot be undone.`;let c=document.createElement(`input`);c.className=`garden-name-input`,c.placeholder=n,c.addEventListener(`mousedown`,e=>e.stopPropagation()),c.addEventListener(`keydown`,e=>{if(e.stopPropagation(),e.key===`Escape`){l();return}if(e.key===`Enter`){if(c.value.trim().toLowerCase()!==n.toLowerCase()){c.classList.add(`astray`);return}x(t.id).then(l,()=>l())}}),i.append(a,c),e.textContent=``,e.appendChild(i),c.focus()}function l(){let f=u();r.textContent=``;let p=document.createElement(`div`);p.className=`gardens-title`,p.textContent=`the gardens`,r.appendChild(p);let v=m().length>1;for(let n of m()){let i=document.createElement(`div`);i.className=`garden-line`;let s=document.createElement(`button`);s.type=`button`,s.className=`garden-row`+(n.id===f?` here`:``);let l=document.createElement(`span`);l.className=`garden-name`+(n.name?``:` unnamed`),l.textContent=n.name??`(an unnamed garden)`;let u=document.createElement(`span`);if(u.className=`garden-tended`,u.textContent=o(n),s.append(l,u),t(s,()=>{if(n.id===f){a();return}a(),e.switchTo(n.id)}),i.appendChild(s),n.id!==f&&v){let e=document.createElement(`button`);e.type=`button`,e.className=`garden-burn`,e.textContent=`burn`,e.title=`destroy ${n.name??`this unnamed garden`} entirely`,t(e,e=>{e.stopPropagation(),c(i,n)}),i.appendChild(e)}r.appendChild(i)}let y=document.createElement(`div`);y.className=`garden-verbs`;let b=document.createElement(`button`);b.type=`button`,b.className=`garden-verb`,b.textContent=`🌱 new garden`,t(b,t=>{t.stopPropagation();let n=s(``,t=>{a(),e.switchTo(h(t))});b.replaceWith(n),n.focus()});let x=document.createElement(`button`);x.type=`button`,x.className=`garden-verb`,x.textContent=`name this garden`,t(x,e=>{e.stopPropagation();let t=s(d().name??``,e=>{_(f,e),l()},e=>{_(f,e),r.classList.contains(`show`)&&(l(),i=!1)});x.replaceWith(t),t.focus()});let S=document.createElement(`button`);if(S.type=`button`,S.className=`garden-verb`,S.textContent=`⎙ export this garden`,t(S,()=>{a(),e.exportGarden()}),y.append(b,x,S),e.plantShow){let r=g(),i=document.createElement(`button`);i.type=`button`,i.className=`garden-verb`,i.textContent=`🌿 ${n}`,i.title=r?`walk into ${n}`:`plant ${n} as its own garden`,t(i,()=>{a(),e.plantShow()});let o=document.createElement(`div`);o.className=`garden-verb-note`,o.textContent=`a small world written for real by the person who built Phloem, every report in it genuine — walk it, then burn it`,y.append(i,o)}r.appendChild(y),r.classList.add(`show`),i=!0}return window.addEventListener(`keydown`,e=>{e.key===`Escape`&&r.classList.contains(`show`)&&(e.preventDefault(),e.stopImmediatePropagation(),a())}),window.addEventListener(`mousedown`,e=>{if(r.classList.contains(`show`)){if(i){i=!1;return}e.target.closest(`#gardenchooser`)||a()}}),{open:l,visible:()=>r.classList.contains(`show`)}}var w=`blobs`,T=e=>`${e}.blobs`;function E(e){return new Promise((t,n)=>{let r=indexedDB.open(T(e),1);r.onupgradeneeded=()=>{r.result.objectStoreNames.contains(w)||r.result.createObjectStore(w)},r.onsuccess=()=>{r.result.onversionchange=()=>r.result.close(),t(r.result)},r.onerror=()=>n(r.error)})}function D(e,t,n){return E(e).then(e=>new Promise((r,i)=>{let a=e.transaction(w,t),o=n(a.objectStore(w));a.oncomplete=()=>{e.close(),r(o.result)},a.onerror=()=>{e.close(),i(a.error)},a.onabort=()=>{e.close(),i(a.error)}}))}function ee(e){let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);return n}function O(e){let t=``;for(let n=0;n<e.length;n+=32768)t+=String.fromCharCode(...e.subarray(n,n+32768));return btoa(t)}async function k(e){let t=await crypto.subtle.digest(`SHA-256`,e.slice().buffer);return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}var te=new Map;function ne(e){return e&&te.get(e)||``}async function A(e,t,n=f()){let r=ee(t),i=await k(r);return await D(n,`readonly`,e=>e.getKey(i))===void 0&&await D(n,`readwrite`,t=>t.put({mime:e,bytes:r},i)),n===f()&&te.set(i,`data:${e};base64,${t}`),{ref:i,bytes:r.length}}async function j(e,t=f()){for(let n of new Set(e)){if(te.has(n))continue;let e=await D(t,`readonly`,e=>e.get(n));e&&te.set(n,`data:${e.mime};base64,${O(e.bytes)}`)}}async function re(e,t=f()){let n={};for(let r of new Set(e)){let e=await D(t,`readonly`,e=>e.get(r));e&&(n[r]={mime:e.mime,data:O(e.bytes)})}return n}async function ie(e,t=f()){if(!(!e||typeof e!=`object`))for(let[n,r]of Object.entries(e)){let e=r;if(typeof e?.mime!=`string`||typeof e?.data!=`string`)continue;let i;try{i=ee(e.data)}catch{continue}await k(i)===n&&await D(t,`readwrite`,t=>t.put({mime:e.mime,bytes:i},n))}}async function ae(e,t=f()){let n=await D(t,`readonly`,e=>e.getAllKeys());for(let r of n)e.has(String(r))||(await D(t,`readwrite`,e=>e.delete(r)),te.delete(String(r)))}async function oe(e,t=f()){let n=0;for(let r of new Set(e)){let e=await D(t,`readonly`,e=>e.get(r));e&&(n+=e.bytes.length)}return n}function se(e){let t=[];for(let n of e)n.type===`block-image`&&typeof n.ref==`string`&&t.push(n.ref);return t}function M(e){this.content=e}M.prototype={constructor:M,find:function(e){for(var t=0;t<this.content.length;t+=2)if(this.content[t]===e)return t;return-1},get:function(e){var t=this.find(e);return t==-1?void 0:this.content[t+1]},update:function(e,t,n){var r=n&&n!=e?this.remove(n):this,i=r.find(e),a=r.content.slice();return i==-1?a.push(n||e,t):(a[i+1]=t,n&&(a[i]=n)),new M(a)},remove:function(e){var t=this.find(e);if(t==-1)return this;var n=this.content.slice();return n.splice(t,2),new M(n)},addToStart:function(e,t){return new M([e,t].concat(this.remove(e).content))},addToEnd:function(e,t){var n=this.remove(e).content.slice();return n.push(e,t),new M(n)},addBefore:function(e,t,n){var r=this.remove(t),i=r.content.slice(),a=r.find(e);return i.splice(a==-1?i.length:a,0,t,n),new M(i)},forEach:function(e){for(var t=0;t<this.content.length;t+=2)e(this.content[t],this.content[t+1])},prepend:function(e){return e=M.from(e),e.size?new M(e.content.concat(this.subtract(e).content)):this},append:function(e){return e=M.from(e),e.size?new M(this.subtract(e).content.concat(e.content)):this},subtract:function(e){var t=this;e=M.from(e);for(var n=0;n<e.content.length;n+=2)t=t.remove(e.content[n]);return t},toObject:function(){var e={};return this.forEach(function(t,n){e[t]=n}),e},get size(){return this.content.length>>1}},M.from=function(e){if(e instanceof M)return e;var t=[];if(e)for(var n in e)t.push(n,e[n]);return new M(t)};function ce(e,t,n){for(let r=0;;r++){if(r==e.childCount||r==t.childCount)return e.childCount==t.childCount?null:n;let i=e.child(r),a=t.child(r);if(i==a){n+=i.nodeSize;continue}if(!i.sameMarkup(a))return n;if(i.isText&&i.text!=a.text){let e=i.text,t=a.text,r=0;for(;e[r]==t[r];r++)n++;return r&&r<e.length&&r<t.length&&N(e.charCodeAt(r-1))&&ue(e.charCodeAt(r))&&n--,n}if(i.content.size||a.content.size){let e=ce(i.content,a.content,n+1);if(e!=null)return e}n+=i.nodeSize}}function le(e,t,n,r){for(let i=e.childCount,a=t.childCount;;){if(i==0||a==0)return i==a?null:{a:n,b:r};let o=e.child(--i),s=t.child(--a),c=o.nodeSize;if(o==s){n-=c,r-=c;continue}if(!o.sameMarkup(s))return{a:n,b:r};if(o.isText&&o.text!=s.text){let e=o.text,t=s.text,i=e.length,a=t.length;for(;i>0&&a>0&&e[i-1]==t[a-1];)i--,a--,n--,r--;return i&&a&&i<e.length&&N(e.charCodeAt(i-1))&&ue(e.charCodeAt(i))&&(n++,r++),{a:n,b:r}}if(o.content.size||s.content.size){let e=le(o.content,s.content,n-1,r-1);if(e)return e}n-=c,r-=c}}function ue(e){return e>=56320&&e<57344}function N(e){return e>=55296&&e<56320}var P=class e{constructor(e,t){if(this.content=e,this.size=t||0,t==null)for(let t=0;t<e.length;t++)this.size+=e[t].nodeSize}nodesBetween(e,t,n,r=0,i){for(let a=0,o=0;o<t;a++){let s=this.content[a],c=o+s.nodeSize;if(c>e&&n(s,r+o,i||null,a)!==!1&&s.content.size){let i=o+1;s.nodesBetween(Math.max(0,e-i),Math.min(s.content.size,t-i),n,r+i)}o=c}}descendants(e){this.nodesBetween(0,this.size,e)}textBetween(e,t,n,r){let i=``,a=!0;return this.nodesBetween(e,t,(o,s)=>{let c=o.isText?o.text.slice(Math.max(e,s)-s,t-s):o.isLeaf?r?typeof r==`function`?r(o):r:o.type.spec.leafText?o.type.spec.leafText(o):``:``;o.isBlock&&(o.isLeaf&&c||o.isTextblock)&&n&&(a?a=!1:i+=n),i+=c},0),i}append(t){if(!t.size)return this;if(!this.size)return t;let n=this.lastChild,r=t.firstChild,i=this.content.slice(),a=0;for(n.isText&&n.sameMarkup(r)&&(i[i.length-1]=n.withText(n.text+r.text),a=1);a<t.content.length;a++)i.push(t.content[a]);return new e(i,this.size+t.size)}cut(t,n=this.size){if(t==0&&n==this.size)return this;let r=[],i=0;if(n>t)for(let e=0,a=0;a<n;e++){let o=this.content[e],s=a+o.nodeSize;s>t&&((a<t||s>n)&&(o=o.isText?o.cut(Math.max(0,t-a),Math.min(o.text.length,n-a)):o.cut(Math.max(0,t-a-1),Math.min(o.content.size,n-a-1))),r.push(o),i+=o.nodeSize),a=s}return new e(r,i)}cutByIndex(t,n){return t==n?e.empty:t==0&&n==this.content.length?this:new e(this.content.slice(t,n))}replaceChild(t,n){let r=this.content[t];if(r==n)return this;let i=this.content.slice(),a=this.size+n.nodeSize-r.nodeSize;return i[t]=n,new e(i,a)}addToStart(t){return new e([t].concat(this.content),this.size+t.nodeSize)}addToEnd(t){return new e(this.content.concat(t),this.size+t.nodeSize)}eq(e){if(this.content.length!=e.content.length)return!1;for(let t=0;t<this.content.length;t++)if(!this.content[t].eq(e.content[t]))return!1;return!0}get firstChild(){return this.content.length?this.content[0]:null}get lastChild(){return this.content.length?this.content[this.content.length-1]:null}get childCount(){return this.content.length}child(e){let t=this.content[e];if(!t)throw RangeError(`Index `+e+` out of range for `+this);return t}maybeChild(e){return this.content[e]||null}forEach(e){for(let t=0,n=0;t<this.content.length;t++){let r=this.content[t];e(r,n,t),n+=r.nodeSize}}findDiffStart(e,t=0){return ce(this,e,t)}findDiffEnd(e,t=this.size,n=e.size){return le(this,e,t,n)}findIndex(e){if(e==0)return de(0,e);if(e==this.size)return de(this.content.length,e);if(e>this.size||e<0)throw RangeError(`Position ${e} outside of fragment (${this})`);for(let t=0,n=0;;t++){let r=this.child(t),i=n+r.nodeSize;if(i>=e)return i==e?de(t+1,i):de(t,n);n=i}}toString(){return`<`+this.toStringInner()+`>`}toStringInner(){return this.content.join(`, `)}toJSON(){return this.content.length?this.content.map(e=>e.toJSON()):null}static fromJSON(t,n){if(!n)return e.empty;if(!Array.isArray(n))throw RangeError(`Invalid input for Fragment.fromJSON`);return e.fromArray(n.map(t.nodeFromJSON))}static fromArray(t){if(!t.length)return e.empty;let n,r=0;for(let e=0;e<t.length;e++){let i=t[e];r+=i.nodeSize,e&&i.isText&&t[e-1].sameMarkup(i)?(n||=t.slice(0,e),n[n.length-1]=i.withText(n[n.length-1].text+i.text)):n&&n.push(i)}return new e(n||t,r)}static from(t){if(!t)return e.empty;if(t instanceof e)return t;if(Array.isArray(t))return this.fromArray(t);if(t.attrs)return new e([t],t.nodeSize);throw RangeError(`Can not convert `+t+` to a Fragment`+(t.nodesBetween?` (looks like multiple versions of prosemirror-model were loaded)`:``))}};P.empty=new P([],0);var F={index:0,offset:0};function de(e,t){return F.index=e,F.offset=t,F}function fe(e,t){if(e===t)return!0;if(!(e&&typeof e==`object`)||!(t&&typeof t==`object`))return!1;let n=Array.isArray(e);if(Array.isArray(t)!=n)return!1;if(n){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!fe(e[n],t[n]))return!1}else{for(let n in e)if(!(n in t)||!fe(e[n],t[n]))return!1;for(let n in t)if(!(n in e))return!1}return!0}var I=class e{constructor(e,t){this.type=e,this.attrs=t}addToSet(e){let t,n=!1;for(let r=0;r<e.length;r++){let i=e[r];if(this.eq(i))return e;if(this.type.excludes(i.type))t||=e.slice(0,r);else if(i.type.excludes(this.type))return e;else!n&&i.type.rank>this.type.rank&&(t||=e.slice(0,r),t.push(this),n=!0),t&&t.push(i)}return t||=e.slice(),n||t.push(this),t}removeFromSet(e){for(let t=0;t<e.length;t++)if(this.eq(e[t]))return e.slice(0,t).concat(e.slice(t+1));return e}isInSet(e){for(let t=0;t<e.length;t++)if(this.eq(e[t]))return!0;return!1}eq(e){return this==e||this.type==e.type&&fe(this.attrs,e.attrs)}toJSON(){let e={type:this.type.name};for(let t in this.attrs){e.attrs=this.attrs;break}return e}static fromJSON(e,t){if(!t)throw RangeError(`Invalid input for Mark.fromJSON`);let n=e.marks[t.type];if(!n)throw RangeError(`There is no mark type ${t.type} in this schema`);let r=n.create(t.attrs);return n.checkAttrs(r.attrs),r}static sameSet(e,t){if(e==t)return!0;if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!e[n].eq(t[n]))return!1;return!0}static setFrom(t){if(!t||Array.isArray(t)&&t.length==0)return e.none;if(t instanceof e)return[t];let n=t.slice();return n.sort((e,t)=>e.type.rank-t.type.rank),n}};I.none=[];var pe=class extends Error{},L=class e{constructor(e,t,n){this.content=e,this.openStart=t,this.openEnd=n}get size(){return this.content.size-this.openStart-this.openEnd}insertAt(t,n){let r=he(this.content,t+this.openStart,n,this.openStart+1,this.openEnd+1);return r&&new e(r,this.openStart,this.openEnd)}removeBetween(t,n){return new e(me(this.content,t+this.openStart,n+this.openStart),this.openStart,this.openEnd)}eq(e){return this.content.eq(e.content)&&this.openStart==e.openStart&&this.openEnd==e.openEnd}toString(){return this.content+`(`+this.openStart+`,`+this.openEnd+`)`}toJSON(){if(!this.content.size)return null;let e={content:this.content.toJSON()};return this.openStart>0&&(e.openStart=this.openStart),this.openEnd>0&&(e.openEnd=this.openEnd),e}static fromJSON(t,n){if(!n)return e.empty;let r=n.openStart||0,i=n.openEnd||0;if(typeof r!=`number`||typeof i!=`number`)throw RangeError(`Invalid input for Slice.fromJSON`);return new e(P.fromJSON(t,n.content),r,i)}static maxOpen(t,n=!0){let r=0,i=0;for(let e=t.firstChild;e&&!e.isLeaf&&(n||!e.type.spec.isolating);e=e.firstChild)r++;for(let e=t.lastChild;e&&!e.isLeaf&&(n||!e.type.spec.isolating);e=e.lastChild)i++;return new e(t,r,i)}};L.empty=new L(P.empty,0,0);function me(e,t,n){let{index:r,offset:i}=e.findIndex(t),a=e.maybeChild(r),{index:o,offset:s}=e.findIndex(n);if(i==t||a.isText){if(s!=n&&!e.child(o).isText)throw RangeError(`Removing non-flat range`);return e.cut(0,t).append(e.cut(n))}if(r!=o)throw RangeError(`Removing non-flat range`);return e.replaceChild(r,a.copy(me(a.content,t-i-1,n-i-1)))}function he(e,t,n,r,i,a){let{index:o,offset:s}=e.findIndex(t),c=e.maybeChild(o);if(s==t||c.isText)return a&&r<=0&&i<=0&&!a.canReplace(o,o,n)?null:e.cut(0,t).append(n).append(e.cut(t));let l=he(c.content,t-s-1,n,o==0?r-1:0,o==e.childCount-1?i-1:0,c);return l&&e.replaceChild(o,c.copy(l))}function ge(e,t,n){if(n.openStart>e.depth)throw new pe(`Inserted content deeper than insertion position`);if(e.depth-n.openStart!=t.depth-n.openEnd)throw new pe(`Inconsistent open depths`);return _e(e,t,n,0)}function _e(e,t,n,r){let i=e.index(r),a=e.node(r);if(i==t.index(r)&&r<e.depth-n.openStart){let o=_e(e,t,n,r+1);return a.copy(a.content.replaceChild(i,o))}else if(!n.content.size)return Se(a,we(e,t,r));else if(!n.openStart&&!n.openEnd&&e.depth==r&&t.depth==r){let r=e.parent,i=r.content;return Se(r,i.cut(0,e.parentOffset).append(n.content).append(i.cut(t.parentOffset)))}else{let{start:i,end:o}=Te(n,e);return Se(a,Ce(e,i,o,t,r))}}function ve(e,t){if(!t.type.compatibleContent(e.type))throw new pe(`Cannot join `+t.type.name+` onto `+e.type.name)}function ye(e,t,n){let r=e.node(n);return ve(r,t.node(n)),r}function be(e,t){let n=t.length-1;n>=0&&e.isText&&e.sameMarkup(t[n])?t[n]=e.withText(t[n].text+e.text):t.push(e)}function xe(e,t,n,r){let i=(t||e).node(n),a=0,o=t?t.index(n):i.childCount;e&&(a=e.index(n),e.depth>n?a++:e.textOffset&&(be(e.nodeAfter,r),a++));for(let e=a;e<o;e++)be(i.child(e),r);t&&t.depth==n&&t.textOffset&&be(t.nodeBefore,r)}function Se(e,t){if(!e.type.validContent(t))throw new pe(`Invalid content for node `+e.type.name);return e.copy(t)}function Ce(e,t,n,r,i){let a=e.depth>i&&ye(e,t,i+1),o=r.depth>i&&ye(n,r,i+1),s=[];return xe(null,e,i,s),a&&o&&t.index(i)==n.index(i)?(ve(a,o),be(Se(a,Ce(e,t,n,r,i+1)),s)):(a&&be(Se(a,we(e,t,i+1)),s),xe(t,n,i,s),o&&be(Se(o,we(n,r,i+1)),s)),xe(r,null,i,s),new P(s)}function we(e,t,n){let r=[];return xe(null,e,n,r),e.depth>n&&be(Se(ye(e,t,n+1),we(e,t,n+1)),r),xe(t,null,n,r),new P(r)}function Te(e,t){let n=t.depth-e.openStart,r=t.node(n).copy(e.content);for(let e=n-1;e>=0;e--)r=t.node(e).copy(P.from(r));return{start:r.resolveNoCache(e.openStart+n),end:r.resolveNoCache(r.content.size-e.openEnd-n)}}var Ee=class e{constructor(e,t,n){this.pos=e,this.path=t,this.parentOffset=n,this.depth=t.length/3-1}resolveDepth(e){return e==null?this.depth:e<0?this.depth+e:e}get parent(){return this.node(this.depth)}get doc(){return this.node(0)}node(e){return this.path[this.resolveDepth(e)*3]}index(e){return this.path[this.resolveDepth(e)*3+1]}indexAfter(e){return e=this.resolveDepth(e),this.index(e)+(e==this.depth&&!this.textOffset?0:1)}start(e){return e=this.resolveDepth(e),e==0?0:this.path[e*3-1]+1}end(e){return e=this.resolveDepth(e),this.start(e)+this.node(e).content.size}before(e){if(e=this.resolveDepth(e),!e)throw RangeError(`There is no position before the top-level node`);return e==this.depth+1?this.pos:this.path[e*3-1]}after(e){if(e=this.resolveDepth(e),!e)throw RangeError(`There is no position after the top-level node`);return e==this.depth+1?this.pos:this.path[e*3-1]+this.path[e*3].nodeSize}get textOffset(){return this.pos-this.path[this.path.length-1]}get nodeAfter(){let e=this.parent,t=this.index(this.depth);if(t==e.childCount)return null;let n=this.pos-this.path[this.path.length-1],r=e.child(t);return n?e.child(t).cut(n):r}get nodeBefore(){let e=this.index(this.depth),t=this.pos-this.path[this.path.length-1];return t?this.parent.child(e).cut(0,t):e==0?null:this.parent.child(e-1)}posAtIndex(e,t){t=this.resolveDepth(t);let n=this.path[t*3],r=t==0?0:this.path[t*3-1]+1;for(let t=0;t<e;t++)r+=n.child(t).nodeSize;return r}marks(){let e=this.parent,t=this.index();if(e.content.size==0)return I.none;if(this.textOffset)return e.child(t).marks;let n=e.maybeChild(t-1),r=e.maybeChild(t);if(!n){let e=n;n=r,r=e}let i=n.marks;for(var a=0;a<i.length;a++)i[a].type.spec.inclusive===!1&&(!r||!i[a].isInSet(r.marks))&&(i=i[a--].removeFromSet(i));return i}marksAcross(e){let t=this.parent.maybeChild(this.index());if(!t||!t.isInline)return null;let n=t.marks,r=e.parent.maybeChild(e.index());for(var i=0;i<n.length;i++)n[i].type.spec.inclusive===!1&&(!r||!n[i].isInSet(r.marks))&&(n=n[i--].removeFromSet(n));return n}sharedDepth(e){for(let t=this.depth;t>0;t--)if(this.start(t)<=e&&this.end(t)>=e)return t;return 0}blockRange(e=this,t){if(e.pos<this.pos)return e.blockRange(this);for(let n=this.depth-(this.parent.inlineContent||this.pos==e.pos?1:0);n>=0;n--)if(e.pos<=this.end(n)&&(!t||t(this.node(n))))return new Ae(this,e,n);return null}sameParent(e){return this.pos-this.parentOffset==e.pos-e.parentOffset}max(e){return e.pos>this.pos?e:this}min(e){return e.pos<this.pos?e:this}toString(){let e=``;for(let t=1;t<=this.depth;t++)e+=(e?`/`:``)+this.node(t).type.name+`_`+this.index(t-1);return e+`:`+this.parentOffset}static resolve(t,n){if(!(n>=0&&n<=t.content.size))throw RangeError(`Position `+n+` out of range`);let r=[],i=0,a=n;for(let e=t;;){let{index:t,offset:n}=e.content.findIndex(a),o=a-n;if(r.push(e,t,i+n),!o||(e=e.child(t),e.isText))break;a=o-1,i+=n+1}return new e(n,r,a)}static resolveCached(t,n){let r=ke.get(t);if(r)for(let e=0;e<r.elts.length;e++){let t=r.elts[e];if(t.pos==n)return t}else ke.set(t,r=new De);let i=r.elts[r.i]=e.resolve(t,n);return r.i=(r.i+1)%Oe,i}},De=class{constructor(){this.elts=[],this.i=0}},Oe=12,ke=new WeakMap,Ae=class{constructor(e,t,n){this.$from=e,this.$to=t,this.depth=n}get start(){return this.$from.before(this.depth+1)}get end(){return this.$to.after(this.depth+1)}get parent(){return this.$from.node(this.depth)}get startIndex(){return this.$from.index(this.depth)}get endIndex(){return this.$to.indexAfter(this.depth)}},je=Object.create(null),Me=class e{constructor(e,t,n,r=I.none){this.type=e,this.attrs=t,this.marks=r,this.content=n||P.empty}get children(){return this.content.content}get nodeSize(){return this.isLeaf?1:2+this.content.size}get childCount(){return this.content.childCount}child(e){return this.content.child(e)}maybeChild(e){return this.content.maybeChild(e)}forEach(e){this.content.forEach(e)}nodesBetween(e,t,n,r=0){this.content.nodesBetween(e,t,n,r,this)}descendants(e){this.nodesBetween(0,this.content.size,e)}get textContent(){return this.isLeaf&&this.type.spec.leafText?this.type.spec.leafText(this):this.textBetween(0,this.content.size,``)}textBetween(e,t,n,r){return this.content.textBetween(e,t,n,r)}get firstChild(){return this.content.firstChild}get lastChild(){return this.content.lastChild}eq(e){return this==e||this.sameMarkup(e)&&this.content.eq(e.content)}sameMarkup(e){return this.hasMarkup(e.type,e.attrs,e.marks)}hasMarkup(e,t,n){return this.type==e&&fe(this.attrs,t||e.defaultAttrs||je)&&I.sameSet(this.marks,n||I.none)}copy(t=null){return t==this.content?this:new e(this.type,this.attrs,t,this.marks)}mark(t){return t==this.marks?this:new e(this.type,this.attrs,this.content,t)}cut(e,t=this.content.size){return e==0&&t==this.content.size?this:this.copy(this.content.cut(e,t))}slice(e,t=this.content.size,n=!1){if(e==t)return L.empty;let r=this.resolve(e),i=this.resolve(t),a=n?0:r.sharedDepth(t),o=r.start(a);return new L(r.node(a).content.cut(r.pos-o,i.pos-o),r.depth-a,i.depth-a)}replace(e,t,n){return ge(this.resolve(e),this.resolve(t),n)}nodeAt(e){for(let t=this;;){let{index:n,offset:r}=t.content.findIndex(e);if(t=t.maybeChild(n),!t)return null;if(r==e||t.isText)return t;e-=r+1}}childAfter(e){let{index:t,offset:n}=this.content.findIndex(e);return{node:this.content.maybeChild(t),index:t,offset:n}}childBefore(e){if(e==0)return{node:null,index:0,offset:0};let{index:t,offset:n}=this.content.findIndex(e);if(n<e)return{node:this.content.child(t),index:t,offset:n};let r=this.content.child(t-1);return{node:r,index:t-1,offset:n-r.nodeSize}}resolve(e){return Ee.resolveCached(this,e)}resolveNoCache(e){return Ee.resolve(this,e)}rangeHasMark(e,t,n){let r=!1;return t>e&&this.nodesBetween(e,t,e=>(n.isInSet(e.marks)&&(r=!0),!r)),r}get isBlock(){return this.type.isBlock}get isTextblock(){return this.type.isTextblock}get inlineContent(){return this.type.inlineContent}get isInline(){return this.type.isInline}get isText(){return this.type.isText}get isLeaf(){return this.type.isLeaf}get isAtom(){return this.type.isAtom}toString(){if(this.type.spec.toDebugString)return this.type.spec.toDebugString(this);let e=this.type.name;return this.content.size&&(e+=`(`+this.content.toStringInner()+`)`),Pe(this.marks,e)}contentMatchAt(e){let t=this.type.contentMatch.matchFragment(this.content,0,e);if(!t)throw Error(`Called contentMatchAt on a node with invalid content`);return t}canReplace(e,t,n=P.empty,r=0,i=n.childCount){let a=this.contentMatchAt(e).matchFragment(n,r,i),o=a&&a.matchFragment(this.content,t);if(!o||!o.validEnd)return!1;for(let e=r;e<i;e++)if(!this.type.allowsMarks(n.child(e).marks))return!1;return!0}canReplaceWith(e,t,n,r){if(r&&!this.type.allowsMarks(r))return!1;let i=this.contentMatchAt(e).matchType(n),a=i&&i.matchFragment(this.content,t);return a?a.validEnd:!1}canAppend(e){return e.content.size?this.canReplace(this.childCount,this.childCount,e.content):this.type.compatibleContent(e.type)}check(){this.type.checkContent(this.content),this.type.checkAttrs(this.attrs);let e=I.none;for(let t=0;t<this.marks.length;t++){let n=this.marks[t];n.type.checkAttrs(n.attrs),e=n.addToSet(e)}if(!I.sameSet(e,this.marks))throw RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map(e=>e.type.name)}`);this.content.forEach(e=>e.check())}toJSON(){let e={type:this.type.name};for(let t in this.attrs){e.attrs=this.attrs;break}return this.content.size&&(e.content=this.content.toJSON()),this.marks.length&&(e.marks=this.marks.map(e=>e.toJSON())),e}static fromJSON(e,t){if(!t)throw RangeError(`Invalid input for Node.fromJSON`);let n;if(t.marks){if(!Array.isArray(t.marks))throw RangeError(`Invalid mark data for Node.fromJSON`);n=t.marks.map(e.markFromJSON)}if(t.type==`text`){if(typeof t.text!=`string`)throw RangeError(`Invalid text node in JSON`);return e.text(t.text,n)}let r=P.fromJSON(e,t.content),i=e.nodeType(t.type).create(t.attrs,r,n);return i.type.checkAttrs(i.attrs),i}};Me.prototype.text=void 0;var Ne=class e extends Me{constructor(e,t,n,r){if(super(e,t,null,r),!n)throw RangeError(`Empty text nodes are not allowed`);this.text=n}toString(){return this.type.spec.toDebugString?this.type.spec.toDebugString(this):Pe(this.marks,JSON.stringify(this.text))}get textContent(){return this.text}textBetween(e,t){return this.text.slice(e,t)}get nodeSize(){return this.text.length}mark(t){return t==this.marks?this:new e(this.type,this.attrs,this.text,t)}withText(t){return t==this.text?this:new e(this.type,this.attrs,t,this.marks)}cut(e=0,t=this.text.length){return e==0&&t==this.text.length?this:this.withText(this.text.slice(e,t))}eq(e){return this.sameMarkup(e)&&this.text==e.text}toJSON(){let e=super.toJSON();return e.text=this.text,e}};function Pe(e,t){for(let n=e.length-1;n>=0;n--)t=e[n].type.name+`(`+t+`)`;return t}var Fe=class e{constructor(e){this.validEnd=e,this.next=[],this.wrapCache=[]}static parse(t,n){let r=new Ie(t,n);if(r.next==null)return e.empty;let i=R(r);r.next&&r.err(`Unexpected trailing text`);let a=Ge(He(i));return Ke(a,r),a}matchType(e){for(let t=0;t<this.next.length;t++)if(this.next[t].type==e)return this.next[t].next;return null}matchFragment(e,t=0,n=e.childCount){let r=this;for(let i=t;r&&i<n;i++)r=r.matchType(e.child(i).type);return r}get inlineContent(){return this.next.length!=0&&this.next[0].type.isInline}get defaultType(){for(let e=0;e<this.next.length;e++){let{type:t}=this.next[e];if(!(t.isText||t.hasRequiredAttrs()))return t}return null}compatible(e){for(let t=0;t<this.next.length;t++)for(let n=0;n<e.next.length;n++)if(this.next[t].type==e.next[n].type)return!0;return!1}fillBefore(e,t=!1,n=0){let r=[this];function i(a,o){let s=a.matchFragment(e,n);if(s&&(!t||s.validEnd))return P.from(o.map(e=>e.createAndFill()));for(let e=0;e<a.next.length;e++){let{type:t,next:n}=a.next[e];if(!(t.isText||t.hasRequiredAttrs())&&r.indexOf(n)==-1){r.push(n);let e=i(n,o.concat(t));if(e)return e}}return null}return i(this,[])}findWrapping(e){for(let t=0;t<this.wrapCache.length;t+=2)if(this.wrapCache[t]==e)return this.wrapCache[t+1];let t=this.computeWrapping(e);return this.wrapCache.push(e,t),t}computeWrapping(e){let t=Object.create(null),n=[{match:this,type:null,via:null}];for(;n.length;){let r=n.shift(),i=r.match;if(i.matchType(e)){let e=[];for(let t=r;t.type;t=t.via)e.push(t.type);return e.reverse()}for(let e=0;e<i.next.length;e++){let{type:a,next:o}=i.next[e];!a.isLeaf&&!a.hasRequiredAttrs()&&!(a.name in t)&&(!r.type||o.validEnd)&&(n.push({match:a.contentMatch,type:a,via:r}),t[a.name]=!0)}}return null}get edgeCount(){return this.next.length}edge(e){if(e>=this.next.length)throw RangeError(`There's no ${e}th edge in this content match`);return this.next[e]}toString(){let e=[];function t(n){e.push(n);for(let r=0;r<n.next.length;r++)e.indexOf(n.next[r].next)==-1&&t(n.next[r].next)}return t(this),e.map((t,n)=>{let r=n+(t.validEnd?`*`:` `)+` `;for(let n=0;n<t.next.length;n++)r+=(n?`, `:``)+t.next[n].type.name+`->`+e.indexOf(t.next[n].next);return r}).join(`
`)}};Fe.empty=new Fe(!0);var Ie=class{constructor(e,t){this.string=e,this.nodeTypes=t,this.inline=null,this.pos=0,this.tokens=e.split(/\s*(?=\b|\W|$)/),this.tokens[this.tokens.length-1]==``&&this.tokens.pop(),this.tokens[0]==``&&this.tokens.shift()}get next(){return this.tokens[this.pos]}eat(e){return this.next==e&&(this.pos++||!0)}err(e){throw SyntaxError(e+` (in content expression '`+this.string+`')`)}};function R(e){let t=[];do t.push(z(e));while(e.eat(`|`));return t.length==1?t[0]:{type:`choice`,exprs:t}}function z(e){let t=[];do t.push(Le(e));while(e.next&&e.next!=`)`&&e.next!=`|`);return t.length==1?t[0]:{type:`seq`,exprs:t}}function Le(e){let t=Ve(e);for(;;)if(e.eat(`+`))t={type:`plus`,expr:t};else if(e.eat(`*`))t={type:`star`,expr:t};else if(e.eat(`?`))t={type:`opt`,expr:t};else if(e.eat(`{`))t=ze(e,t);else break;return t}function Re(e){/\D/.test(e.next)&&e.err(`Expected number, got '`+e.next+`'`);let t=Number(e.next);return e.pos++,t}function ze(e,t){let n=Re(e),r=n;return e.eat(`,`)&&(r=e.next==`}`?-1:Re(e)),e.eat(`}`)||e.err(`Unclosed braced range`),{type:`range`,min:n,max:r,expr:t}}function Be(e,t){let n=e.nodeTypes,r=n[t];if(r)return[r];let i=[];for(let e in n){let r=n[e];r.isInGroup(t)&&i.push(r)}return i.length==0&&e.err(`No node type or group '`+t+`' found`),i}function Ve(e){if(e.eat(`(`)){let t=R(e);return e.eat(`)`)||e.err(`Missing closing paren`),t}else if(/\W/.test(e.next))e.err(`Unexpected token '`+e.next+`'`);else{let t=Be(e,e.next).map(t=>(e.inline==null?e.inline=t.isInline:e.inline!=t.isInline&&e.err(`Mixing inline and block content`),{type:`name`,value:t}));return e.pos++,t.length==1?t[0]:{type:`choice`,exprs:t}}}function He(e){let t=[[]];return i(a(e,0),n()),t;function n(){return t.push([])-1}function r(e,n,r){let i={term:r,to:n};return t[e].push(i),i}function i(e,t){e.forEach(e=>e.to=t)}function a(e,t){if(e.type==`choice`)return e.exprs.reduce((e,n)=>e.concat(a(n,t)),[]);if(e.type==`seq`)for(let r=0;;r++){let o=a(e.exprs[r],t);if(r==e.exprs.length-1)return o;i(o,t=n())}else if(e.type==`star`){let o=n();return r(t,o),i(a(e.expr,o),o),[r(o)]}else if(e.type==`plus`){let o=n();return i(a(e.expr,t),o),i(a(e.expr,o),o),[r(o)]}else if(e.type==`opt`)return[r(t)].concat(a(e.expr,t));else if(e.type==`range`){let o=t;for(let t=0;t<e.min;t++){let t=n();i(a(e.expr,o),t),o=t}if(e.max==-1)i(a(e.expr,o),o);else for(let t=e.min;t<e.max;t++){let t=n();r(o,t),i(a(e.expr,o),t),o=t}return[r(o)]}else if(e.type==`name`)return[r(t,void 0,e.value)];else throw Error(`Unknown expr type`)}}function Ue(e,t){return t-e}function We(e,t){let n=[];return r(t),n.sort(Ue);function r(t){let i=e[t];if(i.length==1&&!i[0].term)return r(i[0].to);n.push(t);for(let e=0;e<i.length;e++){let{term:t,to:a}=i[e];!t&&n.indexOf(a)==-1&&r(a)}}}function Ge(e){let t=Object.create(null);return n(We(e,0));function n(r){let i=[];r.forEach(t=>{e[t].forEach(({term:t,to:n})=>{if(!t)return;let r;for(let e=0;e<i.length;e++)i[e][0]==t&&(r=i[e][1]);We(e,n).forEach(e=>{r||i.push([t,r=[]]),r.indexOf(e)==-1&&r.push(e)})})});let a=t[r.join(`,`)]=new Fe(r.indexOf(e.length-1)>-1);for(let e=0;e<i.length;e++){let r=i[e][1].sort(Ue);a.next.push({type:i[e][0],next:t[r.join(`,`)]||n(r)})}return a}}function Ke(e,t){for(let n=0,r=[e];n<r.length;n++){let e=r[n],i=!e.validEnd,a=[];for(let t=0;t<e.next.length;t++){let{type:n,next:o}=e.next[t];a.push(n.name),i&&!(n.isText||n.hasRequiredAttrs())&&(i=!1),r.indexOf(o)==-1&&r.push(o)}i&&t.err(`Only non-generatable nodes (`+a.join(`, `)+`) in a required position (see https://prosemirror.net/docs/guide/#generatable)`)}}function qe(e){let t=Object.create(null);for(let n in e){let r=e[n];if(!r.hasDefault)return null;t[n]=r.default}return t}function Je(e,t){let n=Object.create(null);for(let r in e){let i=t&&t[r];if(i===void 0){let t=e[r];if(t.hasDefault)i=t.default;else throw RangeError(`No value supplied for attribute `+r)}n[r]=i}return n}function Ye(e,t,n,r){for(let i in t)if(!(i in e))throw RangeError(`Unsupported attribute ${i} for ${n} of type ${r}`);for(let n in e)e[n].validate&&e[n].validate(t[n])}function Xe(e,t){let n=Object.create(null);if(t)for(let r in t)n[r]=new B(e,r,t[r]);return n}var Ze=class e{constructor(e,t,n){this.name=e,this.schema=t,this.spec=n,this.markSet=null,this.groups=n.group?n.group.split(` `):[],this.attrs=Xe(e,n.attrs),this.defaultAttrs=qe(this.attrs),this.contentMatch=null,this.inlineContent=null,this.isBlock=!(n.inline||e==`text`),this.isText=e==`text`}get isInline(){return!this.isBlock}get isTextblock(){return this.isBlock&&this.inlineContent}get isLeaf(){return this.contentMatch==Fe.empty}get isAtom(){return this.isLeaf||!!this.spec.atom}isInGroup(e){return this.groups.indexOf(e)>-1}get whitespace(){return this.spec.whitespace||(this.spec.code?`pre`:`normal`)}hasRequiredAttrs(){for(let e in this.attrs)if(this.attrs[e].isRequired)return!0;return!1}compatibleContent(e){return this==e||this.contentMatch.compatible(e.contentMatch)}computeAttrs(e){return!e&&this.defaultAttrs?this.defaultAttrs:Je(this.attrs,e)}create(e=null,t,n){if(this.isText)throw Error(`NodeType.create can't construct text nodes`);return new Me(this,this.computeAttrs(e),P.from(t),I.setFrom(n))}createChecked(e=null,t,n){return t=P.from(t),this.checkContent(t),new Me(this,this.computeAttrs(e),t,I.setFrom(n))}createAndFill(e=null,t,n){if(e=this.computeAttrs(e),t=P.from(t),t.size){let e=this.contentMatch.fillBefore(t);if(!e)return null;t=e.append(t)}let r=this.contentMatch.matchFragment(t),i=r&&r.fillBefore(P.empty,!0);return i?new Me(this,e,t.append(i),I.setFrom(n)):null}validContent(e){let t=this.contentMatch.matchFragment(e);if(!t||!t.validEnd)return!1;for(let t=0;t<e.childCount;t++)if(!this.allowsMarks(e.child(t).marks))return!1;return!0}checkContent(e){if(!this.validContent(e))throw RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0,50)}`)}checkAttrs(e){Ye(this.attrs,e,`node`,this.name)}allowsMarkType(e){return this.markSet==null||this.markSet.indexOf(e)>-1}allowsMarks(e){if(this.markSet==null)return!0;for(let t=0;t<e.length;t++)if(!this.allowsMarkType(e[t].type))return!1;return!0}allowedMarks(e){if(this.markSet==null)return e;let t;for(let n=0;n<e.length;n++)this.allowsMarkType(e[n].type)?t&&t.push(e[n]):t||=e.slice(0,n);return t?t.length?t:I.none:e}static compile(t,n){let r=Object.create(null);t.forEach((t,i)=>r[t]=new e(t,n,i));let i=n.spec.topNode||`doc`;if(!r[i])throw RangeError(`Schema is missing its top node type ('`+i+`')`);if(!r.text)throw RangeError(`Every schema needs a 'text' type`);for(let e in r.text.attrs)throw RangeError(`The text node type should not have attributes`);return r}};function Qe(e,t,n){let r=n.split(`|`);return n=>{let i=n===null?`null`:typeof n;if(r.indexOf(i)<0)throw RangeError(`Expected value of type ${r} for attribute ${t} on type ${e}, got ${i}`)}}var B=class{constructor(e,t,n){this.hasDefault=Object.prototype.hasOwnProperty.call(n,`default`),this.default=n.default,this.validate=typeof n.validate==`string`?Qe(e,t,n.validate):n.validate}get isRequired(){return!this.hasDefault}},$e=class e{constructor(e,t,n,r){this.name=e,this.rank=t,this.schema=n,this.spec=r,this.attrs=Xe(e,r.attrs),this.excluded=null;let i=qe(this.attrs);this.instance=i?new I(this,i):null}create(e=null){return!e&&this.instance?this.instance:new I(this,Je(this.attrs,e))}static compile(t,n){let r=Object.create(null),i=0;return t.forEach((t,a)=>r[t]=new e(t,i++,n,a)),r}removeFromSet(e){for(var t=0;t<e.length;t++)e[t].type==this&&(e=e.slice(0,t).concat(e.slice(t+1)),t--);return e}isInSet(e){for(let t=0;t<e.length;t++)if(e[t].type==this)return e[t]}checkAttrs(e){Ye(this.attrs,e,`mark`,this.name)}excludes(e){return this.excluded.indexOf(e)>-1}},et=class{constructor(e){this.linebreakReplacement=null,this.cached=Object.create(null);let t=this.spec={};for(let n in e)t[n]=e[n];t.nodes=M.from(e.nodes),t.marks=M.from(e.marks||{}),this.nodes=Ze.compile(this.spec.nodes,this),this.marks=$e.compile(this.spec.marks,this);let n=Object.create(null);for(let e in this.nodes){if(e in this.marks)throw RangeError(e+` can not be both a node and a mark`);let t=this.nodes[e],r=t.spec.content||``,i=t.spec.marks;if(t.contentMatch=n[r]||(n[r]=Fe.parse(r,this.nodes)),t.inlineContent=t.contentMatch.inlineContent,t.spec.linebreakReplacement){if(this.linebreakReplacement)throw RangeError(`Multiple linebreak nodes defined`);if(!t.isInline||!t.isLeaf)throw RangeError(`Linebreak replacement nodes must be inline leaf nodes`);this.linebreakReplacement=t}t.markSet=i==`_`?null:i?tt(this,i.split(` `)):i==``||!t.inlineContent?[]:null}for(let e in this.marks){let t=this.marks[e],n=t.spec.excludes;t.excluded=n==null?[t]:n==``?[]:tt(this,n.split(` `))}this.nodeFromJSON=e=>Me.fromJSON(this,e),this.markFromJSON=e=>I.fromJSON(this,e),this.topNodeType=this.nodes[this.spec.topNode||`doc`],this.cached.wrappings=Object.create(null)}node(e,t=null,n,r){if(typeof e==`string`)e=this.nodeType(e);else if(!(e instanceof Ze))throw RangeError(`Invalid node type: `+e);else if(e.schema!=this)throw RangeError(`Node type from different schema used (`+e.name+`)`);return e.createChecked(t,n,r)}text(e,t){let n=this.nodes.text;return new Ne(n,n.defaultAttrs,e,I.setFrom(t))}mark(e,t){return typeof e==`string`&&(e=this.marks[e]),e.create(t)}nodeType(e){let t=this.nodes[e];if(!t)throw RangeError(`Unknown node type: `+e);return t}};function tt(e,t){let n=[];for(let r=0;r<t.length;r++){let i=t[r],a=e.marks[i],o=a;if(a)n.push(a);else for(let t in e.marks){let r=e.marks[t];(i==`_`||r.spec.group&&r.spec.group.split(` `).indexOf(i)>-1)&&n.push(o=r)}if(!o)throw SyntaxError(`Unknown mark type: '`+t[r]+`'`)}return n}function nt(e){return e.tag!=null}function rt(e){return e.style!=null}var it=class e{constructor(e,t){this.schema=e,this.rules=t,this.tags=[],this.styles=[];let n=this.matchedStyles=[];t.forEach(e=>{if(nt(e))this.tags.push(e);else if(rt(e)){let t=/[^=]*/.exec(e.style)[0];n.indexOf(t)<0&&n.push(t),this.styles.push(e)}}),this.normalizeLists=!this.tags.some(t=>{if(!/^(ul|ol)\b/.test(t.tag)||!t.node)return!1;let n=e.nodes[t.node];return n.contentMatch.matchType(n)})}parse(e,t={}){let n=new pt(this,t,!1);return n.addAll(e,I.none,t.from,t.to),n.finish()}parseSlice(e,t={}){let n=new pt(this,t,!0);return n.addAll(e,I.none,t.from,t.to),L.maxOpen(n.finish())}matchTag(e,t,n){for(let r=n?this.tags.indexOf(n)+1:0;r<this.tags.length;r++){let n=this.tags[r];if(ht(e,n.tag)&&(n.namespace===void 0||e.namespaceURI==n.namespace)&&(!n.context||t.matchesContext(n.context))){if(n.getAttrs){let t=n.getAttrs(e);if(t===!1)continue;n.attrs=t||void 0}return n}}}matchStyle(e,t,n,r){for(let i=r?this.styles.indexOf(r)+1:0;i<this.styles.length;i++){let r=this.styles[i],a=r.style;if(!(a.indexOf(e)!=0||r.context&&!n.matchesContext(r.context)||a.length>e.length&&(a.charCodeAt(e.length)!=61||a.slice(e.length+1)!=t))){if(r.getAttrs){let e=r.getAttrs(t);if(e===!1)continue;r.attrs=e||void 0}return r}}}static schemaRules(e){let t=[];function n(e){let n=e.priority==null?50:e.priority,r=0;for(;r<t.length;r++){let e=t[r];if((e.priority==null?50:e.priority)<n)break}t.splice(r,0,e)}for(let t in e.marks){let r=e.marks[t].spec.parseDOM;r&&r.forEach(e=>{n(e=gt(e)),e.mark||e.ignore||e.clearMark||(e.mark=t)})}for(let t in e.nodes){let r=e.nodes[t].spec.parseDOM;r&&r.forEach(e=>{n(e=gt(e)),e.node||e.ignore||e.mark||(e.node=t)})}return t}static fromSchema(t){return t.cached.domParser||(t.cached.domParser=new e(t,e.schemaRules(t)))}},at={address:!0,article:!0,aside:!0,blockquote:!0,canvas:!0,dd:!0,div:!0,dl:!0,fieldset:!0,figcaption:!0,figure:!0,footer:!0,form:!0,h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,hgroup:!0,hr:!0,li:!0,noscript:!0,ol:!0,output:!0,p:!0,pre:!0,section:!0,table:!0,tfoot:!0,ul:!0},ot={head:!0,noscript:!0,object:!0,script:!0,style:!0,title:!0},st={ol:!0,ul:!0},ct=1,lt=2,ut=4;function dt(e,t,n){return t==null?e&&e.whitespace==`pre`?3:n&-5:(t?ct:0)|(t===`full`?lt:0)}var ft=class{constructor(e,t,n,r,i,a){this.type=e,this.attrs=t,this.marks=n,this.solid=r,this.options=a,this.content=[],this.activeMarks=I.none,this.match=i||(a&ut?null:e.contentMatch)}findWrapping(e){if(!this.match){if(!this.type)return[];let t=this.type.contentMatch.fillBefore(P.from(e));if(t)this.match=this.type.contentMatch.matchFragment(t);else{let t=this.type.contentMatch,n;return(n=t.findWrapping(e.type))?(this.match=t,n):null}}return this.match.findWrapping(e.type)}finish(e){if(!(this.options&ct)){let e=this.content[this.content.length-1],t;if(e&&e.isText&&(t=/[ \t\r\n\u000c]+$/.exec(e.text))){let n=e;e.text.length==t[0].length?this.content.pop():this.content[this.content.length-1]=n.withText(n.text.slice(0,n.text.length-t[0].length))}}let t=P.from(this.content);return!e&&this.match&&(t=t.append(this.match.fillBefore(P.empty,!0))),this.type?this.type.create(this.attrs,t,this.marks):t}inlineContext(e){return this.type?this.type.inlineContent:this.content.length?this.content[0].isInline:e.parentNode&&!at.hasOwnProperty(e.parentNode.nodeName.toLowerCase())}},pt=class{constructor(e,t,n){this.parser=e,this.options=t,this.isOpen=n,this.open=0,this.localPreserveWS=!1;let r=t.topNode,i,a=dt(null,t.preserveWhitespace,0)|(n?ut:0);i=r?new ft(r.type,r.attrs,I.none,!0,t.topMatch||r.type.contentMatch,a):n?new ft(null,null,I.none,!0,null,a):new ft(e.schema.topNodeType,null,I.none,!0,null,a),this.nodes=[i],this.find=t.findPositions,this.needsBlock=!1}get top(){return this.nodes[this.open]}addDOM(e,t){e.nodeType==3?this.addTextNode(e,t):e.nodeType==1&&this.addElement(e,t)}addTextNode(e,t){let n=e.nodeValue,r=this.top,i=r.options&lt?`full`:this.localPreserveWS||(r.options&ct)>0,{schema:a}=this.parser;if(i===`full`||r.inlineContext(e)||/[^ \t\r\n\u000c]/.test(n)){if(!i){if(n=n.replace(/[ \t\r\n\u000c]+/g,` `),/^[ \t\r\n\u000c]/.test(n)&&this.open==this.nodes.length-1){let t=r.content[r.content.length-1],i=e.previousSibling;(!t||i&&i.nodeName==`BR`||t.isText&&/[ \t\r\n\u000c]$/.test(t.text))&&(n=n.slice(1))}}else if(i===`full`)n=n.replace(/\r\n?/g,`
`);else if(a.linebreakReplacement&&/[\r\n]/.test(n)&&this.top.findWrapping(a.linebreakReplacement.create())){let e=n.split(/\r?\n|\r/);for(let n=0;n<e.length;n++)n&&this.insertNode(a.linebreakReplacement.create(),t,!0),e[n]&&this.insertNode(a.text(e[n]),t,!/\S/.test(e[n]));n=``}else n=n.replace(/\r?\n|\r/g,` `);n&&this.insertNode(a.text(n),t,!/\S/.test(n)),this.findInText(e)}else this.findInside(e)}addElement(e,t,n){let r=this.localPreserveWS,i=this.top;(e.tagName==`PRE`||/pre/.test(e.style&&e.style.whiteSpace))&&(this.localPreserveWS=!0);let a=e.nodeName.toLowerCase(),o;st.hasOwnProperty(a)&&this.parser.normalizeLists&&mt(e);let s=this.options.ruleFromNode&&this.options.ruleFromNode(e)||(o=this.parser.matchTag(e,this,n));out:if(s?s.ignore:ot.hasOwnProperty(a))this.findInside(e),this.ignoreFallback(e,t);else if(!s||s.skip||s.closeParent){s&&s.closeParent?this.open=Math.max(0,this.open-1):s&&s.skip.nodeType&&(e=s.skip);let n,r=this.needsBlock;if(at.hasOwnProperty(a))i.content.length&&i.content[0].isInline&&this.open&&(this.open--,i=this.top),n=!0,i.type||(this.needsBlock=!0);else if(!e.firstChild){this.leafFallback(e,t);break out}let o=s&&s.skip?t:this.readStyles(e,t);o&&this.addAll(e,o),n&&this.sync(i),this.needsBlock=r}else{let n=this.readStyles(e,t);n&&this.addElementByRule(e,s,n,s.consuming===!1?o:void 0)}this.localPreserveWS=r}leafFallback(e,t){e.nodeName==`BR`&&this.top.type&&this.top.type.inlineContent&&this.addTextNode(e.ownerDocument.createTextNode(`
`),t)}ignoreFallback(e,t){e.nodeName==`BR`&&(!this.top.type||!this.top.type.inlineContent)&&this.findPlace(this.parser.schema.text(`-`),t,!0)}readStyles(e,t){let n=e.style;if(n&&n.length)for(let e=0;e<this.parser.matchedStyles.length;e++){let r=this.parser.matchedStyles[e],i=n.getPropertyValue(r);if(i)for(let e;;){let n=this.parser.matchStyle(r,i,this,e);if(!n)break;if(n.ignore)return null;if(t=n.clearMark?t.filter(e=>!n.clearMark(e)):t.concat(this.parser.schema.marks[n.mark].create(n.attrs)),n.consuming===!1)e=n;else break}}return t}addElementByRule(e,t,n,r){let i,a;if(t.node)if(a=this.parser.schema.nodes[t.node],a.isLeaf)this.insertNode(a.create(t.attrs),n,e.nodeName==`BR`)||this.leafFallback(e,n);else{let e=this.enter(a,t.attrs||null,n,t.preserveWhitespace);e&&(i=!0,n=e)}else{let e=this.parser.schema.marks[t.mark];n=n.concat(e.create(t.attrs))}let o=this.top;if(a&&a.isLeaf)this.findInside(e);else if(r)this.addElement(e,n,r);else if(t.getContent)this.findInside(e),t.getContent(e,this.parser.schema).forEach(e=>this.insertNode(e,n,!1));else{let r=e;typeof t.contentElement==`string`?r=e.querySelector(t.contentElement):typeof t.contentElement==`function`?r=t.contentElement(e):t.contentElement&&(r=t.contentElement),this.findAround(e,r,!0),this.addAll(r,n),this.findAround(e,r,!1)}i&&this.sync(o)&&this.open--}addAll(e,t,n,r){let i=n||0;for(let a=n?e.childNodes[n]:e.firstChild,o=r==null?null:e.childNodes[r];a!=o;a=a.nextSibling,++i)this.findAtPoint(e,i),this.addDOM(a,t);this.findAtPoint(e,i)}findPlace(e,t,n){let r,i;for(let t=this.open,a=0;t>=0;t--){let o=this.nodes[t],s=o.findWrapping(e);if(s&&(!r||r.length>s.length+a)&&(r=s,i=o,!s.length))break;if(o.solid){if(n)break;a+=2}}if(!r)return null;this.sync(i);for(let e=0;e<r.length;e++)t=this.enterInner(r[e],null,t,!1);return t}insertNode(e,t,n){if(e.isInline&&this.needsBlock&&!this.top.type){let e=this.textblockFromContext();e&&(t=this.enterInner(e,null,t))}let r=this.findPlace(e,t,n);if(r){this.closeExtra();let t=this.top;t.match&&=t.match.matchType(e.type);let n=I.none;for(let i of r.concat(e.marks))(t.type?t.type.allowsMarkType(i.type):_t(i.type,e.type))&&(n=i.addToSet(n));return t.content.push(e.mark(n)),!0}return!1}enter(e,t,n,r){let i=this.findPlace(e.create(t),n,!1);return i&&=this.enterInner(e,t,n,!0,r),i}enterInner(e,t,n,r=!1,i){this.closeExtra();let a=this.top;a.match=a.match&&a.match.matchType(e);let o=dt(e,i,a.options);a.options&ut&&a.content.length==0&&(o|=ut);let s=I.none;return n=n.filter(t=>(a.type?a.type.allowsMarkType(t.type):_t(t.type,e))?(s=t.addToSet(s),!1):!0),this.nodes.push(new ft(e,t,s,r,null,o)),this.open++,n}closeExtra(e=!1){let t=this.nodes.length-1;if(t>this.open){for(;t>this.open;t--)this.nodes[t-1].content.push(this.nodes[t].finish(e));this.nodes.length=this.open+1}}finish(){return this.open=0,this.closeExtra(this.isOpen),this.nodes[0].finish(!!(this.isOpen||this.options.topOpen))}sync(e){for(let t=this.open;t>=0;t--)if(this.nodes[t]==e)return this.open=t,!0;else this.localPreserveWS&&(this.nodes[t].options|=ct);return!1}get currentPos(){this.closeExtra();let e=0;for(let t=this.open;t>=0;t--){let n=this.nodes[t].content;for(let t=n.length-1;t>=0;t--)e+=n[t].nodeSize;t&&e++}return e}findAtPoint(e,t){if(this.find)for(let n=0;n<this.find.length;n++)this.find[n].node==e&&this.find[n].offset==t&&(this.find[n].pos=this.currentPos)}findInside(e){if(this.find)for(let t=0;t<this.find.length;t++)this.find[t].pos==null&&e.nodeType==1&&e.contains(this.find[t].node)&&(this.find[t].pos=this.currentPos)}findAround(e,t,n){if(e!=t&&this.find)for(let r=0;r<this.find.length;r++)this.find[r].pos==null&&e.nodeType==1&&e.contains(this.find[r].node)&&t.compareDocumentPosition(this.find[r].node)&(n?2:4)&&(this.find[r].pos=this.currentPos)}findInText(e){if(this.find)for(let t=0;t<this.find.length;t++)this.find[t].node==e&&(this.find[t].pos=this.currentPos-(e.nodeValue.length-this.find[t].offset))}matchesContext(e){if(e.indexOf(`|`)>-1)return e.split(/\s*\|\s*/).some(this.matchesContext,this);let t=e.split(`/`),n=this.options.context,r=!this.isOpen&&(!n||n.parent.type==this.nodes[0].type),i=-(n?n.depth+1:0)+ +!r,a=(e,o)=>{for(;e>=0;e--){let s=t[e];if(s==``){if(e==t.length-1||e==0)continue;for(;o>=i;o--)if(a(e-1,o))return!0;return!1}else{let e=o>0||o==0&&r?this.nodes[o].type:n&&o>=i?n.node(o-i).type:null;if(!e||e.name!=s&&!e.isInGroup(s))return!1;o--}}return!0};return a(t.length-1,this.open)}textblockFromContext(){let e=this.options.context;if(e)for(let t=e.depth;t>=0;t--){let n=e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;if(n&&n.isTextblock&&n.defaultAttrs)return n}for(let e in this.parser.schema.nodes){let t=this.parser.schema.nodes[e];if(t.isTextblock&&t.defaultAttrs)return t}}};function mt(e){for(let t=e.firstChild,n=null;t;t=t.nextSibling){let e=t.nodeType==1?t.nodeName.toLowerCase():null;e&&st.hasOwnProperty(e)&&n?(n.appendChild(t),t=n):e==`li`?n=t:e&&(n=null)}}function ht(e,t){return(e.matches||e.msMatchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector).call(e,t)}function gt(e){let t={};for(let n in e)t[n]=e[n];return t}function _t(e,t){let n=t.schema.nodes;for(let r in n){let i=n[r];if(!i.allowsMarkType(e))continue;let a=[],o=e=>{a.push(e);for(let n=0;n<e.edgeCount;n++){let{type:r,next:i}=e.edge(n);if(r==t||a.indexOf(i)<0&&o(i))return!0}};if(o(i.contentMatch))return!0}}var vt=class e{constructor(e,t){this.nodes=e,this.marks=t}serializeFragment(e,t={},n){n||=bt(t).createDocumentFragment();let r=n,i=[];return e.forEach(e=>{if(i.length||e.marks.length){let n=0,a=0;for(;n<i.length&&a<e.marks.length;){let t=e.marks[a];if(!this.marks[t.type.name]){a++;continue}if(!t.eq(i[n][0])||t.type.spec.spanning===!1)break;n++,a++}for(;n<i.length;)r=i.pop()[1];for(;a<e.marks.length;){let n=e.marks[a++],o=this.serializeMark(n,e.isInline,t);o&&(i.push([n,r]),r.appendChild(o.dom),r=o.contentDOM||o.dom)}}r.appendChild(this.serializeNodeInner(e,t))}),n}serializeNodeInner(e,t){if(e.isText)return bt(t).createTextNode(e.text);let{dom:n,contentDOM:r}=Ct(bt(t),this.nodes[e.type.name](e),null,e.attrs);if(r){if(e.isLeaf)throw RangeError(`Content hole not allowed in a leaf node spec`);this.serializeFragment(e.content,t,r)}return n}serializeNode(e,t={}){let n=this.serializeNodeInner(e,t);for(let r=e.marks.length-1;r>=0;r--){let i=this.serializeMark(e.marks[r],e.isInline,t);i&&((i.contentDOM||i.dom).appendChild(n),n=i.dom)}return n}serializeMark(e,t,n={}){let r=this.marks[e.type.name];return r&&Ct(bt(n),r(e,t),null,e.attrs)}static renderSpec(e,t,n=null,r){return typeof t==`string`?{dom:e.createTextNode(t)}:Ct(e,t,n,r)}static fromSchema(t){return t.cached.domSerializer||(t.cached.domSerializer=new e(this.nodesFromSchema(t),this.marksFromSchema(t)))}static nodesFromSchema(e){let t=yt(e.nodes);return t.text||=e=>e.text,t}static marksFromSchema(e){return yt(e.marks)}};function yt(e){let t={};for(let n in e){let r=e[n].spec.toDOM;r&&(t[n]=r)}return t}function bt(e){return e.document||window.document}var xt=new WeakMap;function St(e){let t=xt.get(e);return t===void 0&&xt.set(e,t=V(e)),t}function V(e){let t=null;function n(e){if(e&&typeof e==`object`)if(Array.isArray(e))if(typeof e[0]==`string`)t||=[],t.push(e);else for(let t=0;t<e.length;t++)n(e[t]);else for(let t in e)n(e[t])}return n(e),t}function Ct(e,t,n,r){if(t.nodeType==1)return{dom:t};if(t.dom&&t.dom.nodeType==1)return t;let i=t[0],a;if(typeof i!=`string`)throw RangeError(`Invalid array passed to renderSpec`);if(r&&(a=St(r))&&a.indexOf(t)>-1)throw RangeError(`Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.`);let o=i.indexOf(` `);o>0&&(n=i.slice(0,o),i=i.slice(o+1));let s,c=n?e.createElementNS(n,i):e.createElement(i),l=t[1],u=1;if(l&&typeof l==`object`&&l.nodeType==null&&!Array.isArray(l)){u=2;for(let e in l)if(l[e]!=null){let t=e.indexOf(` `);t>0?c.setAttributeNS(e.slice(0,t),e.slice(t+1),l[e]):e==`style`&&c.style?c.style.cssText=l[e]:c.setAttribute(e,l[e])}}for(let i=u;i<t.length;i++){let a=t[i];if(a===0){if(i<t.length-1||i>u)throw RangeError(`Content hole must be the only child of its parent node`);return{dom:c,contentDOM:c}}else if(typeof a==`string`)c.appendChild(e.createTextNode(a));else{let{dom:t,contentDOM:i}=Ct(e,a,n,r);if(c.appendChild(t),i){if(s)throw RangeError(`Multiple content holes`);s=i}}}return{dom:c,contentDOM:s}}var wt=[`p`,0],Tt=[`blockquote`,0],Et=[`hr`],Dt=[`pre`,[`code`,0]],Ot=[`br`],kt={doc:{content:`block+`},paragraph:{content:`inline*`,group:`block`,parseDOM:[{tag:`p`}],toDOM(){return wt}},blockquote:{content:`block+`,group:`block`,defining:!0,parseDOM:[{tag:`blockquote`}],toDOM(){return Tt}},horizontal_rule:{group:`block`,parseDOM:[{tag:`hr`}],toDOM(){return Et}},heading:{attrs:{level:{default:1,validate:`number`}},content:`inline*`,group:`block`,defining:!0,parseDOM:[{tag:`h1`,attrs:{level:1}},{tag:`h2`,attrs:{level:2}},{tag:`h3`,attrs:{level:3}},{tag:`h4`,attrs:{level:4}},{tag:`h5`,attrs:{level:5}},{tag:`h6`,attrs:{level:6}}],toDOM(e){return[`h`+e.attrs.level,0]}},code_block:{content:`text*`,marks:``,group:`block`,code:!0,defining:!0,parseDOM:[{tag:`pre`,preserveWhitespace:`full`}],toDOM(){return Dt}},text:{group:`inline`},image:{inline:!0,attrs:{src:{validate:`string`},alt:{default:null,validate:`string|null`},title:{default:null,validate:`string|null`}},group:`inline`,draggable:!0,parseDOM:[{tag:`img[src]`,getAttrs(e){return{src:e.getAttribute(`src`),title:e.getAttribute(`title`),alt:e.getAttribute(`alt`)}}}],toDOM(e){let{src:t,alt:n,title:r}=e.attrs;return[`img`,{src:t,alt:n,title:r}]}},hard_break:{inline:!0,group:`inline`,selectable:!1,parseDOM:[{tag:`br`}],toDOM(){return Ot}}},At=[`em`,0],jt=[`strong`,0],Mt=[`code`,0],Nt=new et({nodes:kt,marks:{link:{attrs:{href:{validate:`string`},title:{default:null,validate:`string|null`}},inclusive:!1,parseDOM:[{tag:`a[href]`,getAttrs(e){return{href:e.getAttribute(`href`),title:e.getAttribute(`title`)}}}],toDOM(e){let{href:t,title:n}=e.attrs;return[`a`,{href:t,title:n},0]}},em:{parseDOM:[{tag:`i`},{tag:`em`},{style:`font-style=italic`},{style:`font-style=normal`,clearMark:e=>e.type.name==`em`}],toDOM(){return At}},strong:{parseDOM:[{tag:`strong`},{tag:`b`,getAttrs:e=>e.style.fontWeight!=`normal`&&null},{style:`font-weight=400`,clearMark:e=>e.type.name==`strong`},{style:`font-weight`,getAttrs:e=>/^(bold(er)?|[5-9]\d{2,})$/.test(e)&&null}],toDOM(){return jt}},code:{code:!0,parseDOM:[{tag:`code`}],toDOM(){return Mt}}}});function Pt(e){let t=e.style?.textAlign;return t===`center`||t===`right`?t:null}function Ft(e){let t=e.dataset?.list;return t===`bullet`||t===`dash`||t===`ordered`?t:null}function It(e){let t=Number(e.dataset?.indent??0);return Number.isFinite(t)&&t>0?Math.min(8,Math.floor(t)):null}function Lt(e){let t=e.dataset?.spacing;return t===`single`||t===`double`?t:null}function Rt(e){return e.dataset?.table===`row`?`row`:null}function zt(e){let t={};return e.attrs.align&&(t.style=`text-align:${e.attrs.align}`),e.attrs.list&&(t[`data-list`]=String(e.attrs.list)),e.attrs.indent&&(t[`data-indent`]=String(e.attrs.indent)),e.attrs.spacing&&(t[`data-spacing`]=String(e.attrs.spacing)),e.attrs.table&&(t[`data-table`]=`row`),t}var Bt=Nt.spec.nodes.update(`paragraph`,{content:`inline*`,group:`block`,attrs:{align:{default:null},list:{default:null},indent:{default:null},spacing:{default:null},table:{default:null}},parseDOM:[{tag:`p`,getAttrs:e=>({align:Pt(e),list:Ft(e),indent:It(e),spacing:Lt(e),table:Rt(e)})},{tag:`li`,getAttrs:e=>({list:Ft(e)??`bullet`})}],toDOM(e){return[`p`,zt(e),0]}}).update(`heading`,{content:`inline*`,group:`block`,defining:!0,attrs:{level:{default:1},align:{default:null},indent:{default:null},spacing:{default:null}},parseDOM:[1,2,3,4,5,6].map(e=>({tag:`h${e}`,getAttrs:t=>({level:e,align:Pt(t),indent:It(t),spacing:Lt(t)})})),toDOM(e){return[`h${e.attrs.level}`,zt(e),0]}}).addToEnd(`aside`,{content:`inline*`,group:`block`,defining:!0,attrs:{align:{default:null},list:{default:null},indent:{default:null},spacing:{default:null}},parseDOM:[{tag:`aside`,getAttrs:e=>({align:Pt(e),list:Ft(e),indent:It(e),spacing:Lt(e)})}],toDOM(e){return[`aside`,zt(e),0]}}),Vt=[`tiny`,`small`,`medium`,`full`],Ht=[`left`,`center`,`right`,`wrap-left`,`wrap-right`,`inline`],Ut=e=>Vt.includes(e)?e:`medium`,Wt=e=>Ht.includes(e)?e:`left`,Gt=e=>{let t=e.querySelector(`img`),n=t?.getAttribute(`src`)??``;return n.startsWith(`data:image/`)?{id:e.dataset.image??``,src:n,name:t?.getAttribute(`alt`)??``,w:Number(t?.getAttribute(`width`)??0)||0,h:Number(t?.getAttribute(`height`)??0)||0,size:Ut(e.dataset.size),place:Wt(e.dataset.place)}:!1},Kt=new et({nodes:Bt.addToEnd(`figure`,{inline:!0,group:`inline`,atom:!0,selectable:!0,draggable:!1,marks:``,attrs:{id:{default:``},src:{default:``},name:{default:``},w:{default:0},h:{default:0},size:{default:`medium`},place:{default:`left`},inl:{default:!1}},parseDOM:[{tag:`span[data-image]`,getAttrs:e=>Gt(e)},{tag:`figure[data-image]`,getAttrs:e=>Gt(e)}],toDOM(e){let t=e.attrs;return[`span`,{class:`page-image`,"data-image":String(t.id),"data-size":String(t.size),"data-place":String(t.place)},[`img`,{src:String(t.src),alt:String(t.name),draggable:`false`,...t.w?{width:String(t.w)}:{},...t.h?{height:String(t.h)}:{}}]]}}),marks:Nt.spec.marks.addToEnd(`strike`,{parseDOM:[{tag:`s`},{tag:`del`},{tag:`strike`},{style:`text-decoration`,getAttrs:e=>String(e).includes(`line-through`)?null:!1}],toDOM(){return[`s`,0]}})}),qt=f(),Jt=3,H=`events`,Yt=`docId`,Xt=`first-tree`,Zt=p(),Qt=Zt+`currentDoc`,$t=Zt+`currentMatter`;function U(e){return Zt+e}function en(e=new Date){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}function W(){return localStorage.getItem(Qt)||Xt}function G(){return localStorage.getItem($t)}function tn(){return`t${Date.now().toString(36)}${Math.floor(Math.random()*1e4).toString(36)}`}function nn(){let e=tn();return localStorage.setItem(Qt,e),e}function rn(){return`m${Date.now().toString(36)}${Math.floor(Math.random()*1e4).toString(36)}`}function an(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return`f${(t>>>0).toString(36)}`}function on(e,t){localStorage.setItem(Qt,e),t?localStorage.setItem($t,t):localStorage.removeItem($t)}function sn(e){let t=null;for(let n of e)n.type===`ungraft`?t=null:typeof n.matter==`string`&&n.matter&&(t=n.matter);return t}function cn(e=qt){return new Promise((t,n)=>{let r=indexedDB.open(e,Jt);r.onupgradeneeded=e=>{let t=r.result,n=t.objectStoreNames.contains(H)?r.transaction.objectStore(H):t.createObjectStore(H,{autoIncrement:!0});e.oldVersion>=1&&(n.openCursor().onsuccess=e=>{let t=e.target.result;if(!t)return;let n=t.value;n.docId||t.update({v:1,author:`gardener`,source:`human`,docId:Xt,...n}),t.continue()}),n.indexNames.contains(Yt)||n.createIndex(Yt,`docId`,{unique:!1})},r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error)})}var ln=null;function un(){return ln||=cn(),ln}var dn=null;function fn(e){dn=e}function pn(e){try{dn?.(e)}catch{}console.error(`[phloem] log write failed`,e)}var mn=e=>`phloem:1:${e}`,hn=Zt+`anchor.`;function gn(e){if(typeof e!=`object`||!e)return JSON.stringify(e)??`null`;if(Array.isArray(e))return`[`+e.map(gn).join(`,`)+`]`;let t=e;return`{`+Object.keys(t).filter(e=>t[e]!==void 0).sort().map(e=>JSON.stringify(e)+`:`+gn(t[e])).join(`,`)+`}`}function _n(e){let t={};for(let n of Object.keys(e))n!==`hash`&&n!==`prev`&&(t[n]=e[n]);return gn(t)}async function vn(e){let t=await crypto.subtle.digest(`SHA-256`,new TextEncoder().encode(e));return[...new Uint8Array(t)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}var yn=Promise.resolve();function bn(e){let t=yn.then(e,e);return yn=t.catch(()=>{}),t}var xn=new Map,Sn=new Map;function Cn(e){return new Promise((t,n)=>{let r=[],i=e.transaction(H,`readonly`);i.objectStore(H).openCursor().onsuccess=e=>{let n=e.target.result;if(!n){t(r);return}r.push({key:n.primaryKey,value:n.value}),n.continue()},i.onerror=()=>n(i.error)})}function wn(e,t){return new Promise((n,r)=>{let i=[],a=e.transaction(H,`readonly`),o=IDBKeyRange.only(t);a.objectStore(H).index(Yt).openCursor(o).onsuccess=e=>{let t=e.target.result;if(!t){n(i);return}i.push({key:t.primaryKey,value:t.value}),t.continue()},a.onerror=()=>r(a.error)})}function Tn(e,t){return new Promise((n,r)=>{let i=e.transaction(H,`readwrite`);for(let e of t)i.objectStore(H).put(e.value,e.key);i.oncomplete=()=>n(),i.onerror=()=>r(i.error)})}function En(e){let t=Sn.get(e)??0;try{let n=JSON.parse(localStorage.getItem(hn+e)??`null`);if(n&&typeof n.n==`number`&&n.n>t)return;localStorage.setItem(hn+e,JSON.stringify({head:xn.get(e),n:t,t:Date.now()}))}catch{}}async function Dn(e){if(xn.has(e))return;let t=await un(),n=await wn(t,e),r=mn(e),i=[];for(let e of n){if(typeof e.value.hash==`string`&&e.value.hash){r=e.value.hash;continue}let t={...e.value,prev:r,hash:``};t.hash=await vn(r+`|`+_n(t)),i.push({key:e.key,value:t}),r=t.hash}i.length&&await Tn(t,i),xn.set(e,r),Sn.set(e,n.length),En(e)}async function On(e){await Dn(e.docId);let t=xn.get(e.docId),n={...e,prev:t,hash:``};n.hash=await vn(t+`|`+_n(n));let r=await un();await new Promise((e,t)=>{let i=r.transaction(H,`readwrite`);i.objectStore(H).add(n),i.oncomplete=()=>e(),i.onerror=()=>{pn(i.error),t(i.error)}}),xn.set(e.docId,n.hash),Sn.set(e.docId,(Sn.get(e.docId)??0)+1),En(e.docId),y()}function kn(e){return bn(()=>On(e))}function An(e,t,n,r,i){return bn(async()=>{await Dn(e.docId),await Dn(t.docId);let a=xn.get(e.docId),o=xn.get(t.docId),s=Date.now();await On({v:1,author:`gardener`,source:`human`,type:`text-splice`,at:n,del:0,ins:r,via:`workings`,from:{doc:t.docId,head:o},...i?.engineRuns?.length?{engineRuns:i.engineRuns}:{},...i?.pastedRuns?.length?{pastedRuns:i.pastedRuns}:{},...e.matter?{matter:e.matter}:{},docId:e.docId,t:s}),await On({v:1,author:`gardener`,source:`human`,type:`crossing`,text:r,to:{doc:e.docId,head:a},...t.matter?{matter:t.matter}:{},docId:t.docId,t:s})})}function jn(){return bn(async()=>{let e=await un(),t=new Set((await Cn(e)).map(e=>e.value.docId).filter(Boolean));for(let e of t)await Dn(e)})}function Mn(e){return bn(async()=>{let t=await wn(await un(),e),n=mn(e),r=null;for(let e=0;e<t.length;e++){let i=t[e].value;if(typeof i.hash!=`string`||i.prev!==n){r=e+1;break}if(await vn(n+`|`+_n(i))!==i.hash){r=e+1;break}n=i.hash}let i=r===null&&t.length?n:null,a=`none`,o;try{let n=JSON.parse(localStorage.getItem(hn+e)??`null`);n&&typeof n.n==`number`&&(o=n.n,a=n.n>t.length?`truncated`:n.n<t.length?`stale`:i&&n.head===i?`ok`:`mismatch`)}catch{}return{ok:r===null&&a!==`truncated`&&a!==`mismatch`,n:t.length,head:i,brokenAt:r,anchor:a,anchorN:o}})}async function Nn(e){let t=G();return kn({v:1,author:`gardener`,source:`human`,...t?{matter:t}:{},...e,docId:W(),t:Date.now()})}async function K(e,t,n){return kn({v:1,author:`gardener`,source:`human`,...n?{matter:n}:{},...t,docId:e,t:Date.now()})}async function Pn(e,t){let n=t.trim();if(!(!e||!n))return K(e,{type:`matter-rename`,name:n},e)}async function Fn(e,t){if(e)return K(e,{type:`leaf-rename`,name:t.trim()})}async function In(e,t=!0){if(!e)return;await K(e,t?{type:`uproot`}:{type:`uproot`,replanted:!0});let n=localStorage.getItem(U(`workings.of.${e}`));n&&await K(n,t?{type:`uproot`}:{type:`uproot`,replanted:!0})}async function Ln(e,t=!0){if(e)return K(e,t?{type:`uproot`}:{type:`uproot`,replanted:!0},e)}async function Rn(e,t){if(!e||!t)return;await K(e,{type:`ungraft`,from:t});let n=localStorage.getItem(U(`workings.of.${e}`));n&&await K(n,{type:`ungraft`,from:t})}async function zn(e){let t=new Set(e.filter(Boolean));return t.size?bn(async()=>{let e=await un(),n=await Cn(e),r=n.filter(e=>e.value.docId&&t.has(e.value.docId));await new Promise((t,n)=>{let i=e.transaction(H,`readwrite`),a=i.objectStore(H);for(let e of r)a.delete(e.key);i.oncomplete=()=>t(),i.onerror=()=>n(i.error)});for(let e of t)localStorage.removeItem(hn+e),xn.delete(e),Sn.delete(e);if(se(r.map(e=>e.value)).length){let e=n.filter(e=>!(e.value.docId&&t.has(e.value.docId)));await ae(new Set(se(e.map(e=>e.value))))}return r.length}):0}async function Bn(){let e=await un(),t=await new Promise((t,n)=>{let r=e.transaction(H,`readonly`).objectStore(H).getAll();r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error)}),n=new Map;for(let e of t)e.docId&&typeof e.matter==`string`&&e.matter&&n.set(e.docId,e.matter);let r=new Map;for(let e of t)e.type!==`file-ref`||!e.docId||r.set(e.docId,{docId:e.docId,matter:n.get(e.docId)??null,leaf:{path:e.path,name:e.name,kind:e.kind,size:e.size,mtime:e.mtime,text:e.text}});return[...r.values()]}async function Vn(e){let t=await un();return new Promise((n,r)=>{let i=t.transaction(H,`readonly`).objectStore(H).index(Yt).getAll(IDBKeyRange.only(e));i.onsuccess=()=>n(i.result),i.onerror=()=>r(i.error)}).then(async e=>{let t=se(e);return t.length&&await j(t),e})}async function Hn(){return Vn(W())}async function Un(){return Hn()}async function Wn(){let e=await Un(),t=e[e.length-1],n=await re(se(e));return JSON.stringify({phloem:1,chain:{scheme:`phloem-chain-1`,head:t?.hash??null,events:e.length},events:e,...Object.keys(n).length?{blobs:n}:{}},null,1)}async function Gn(e){if(!e.some(e=>typeof e.hash==`string`))return{sealed:!1,ok:!0,brokenAt:null};let t=new Map;for(let n=0;n<e.length;n++){let r=e[n];if(!r.docId)continue;let i=t.get(r.docId)??mn(r.docId);if(typeof r.hash!=`string`||r.prev!==i||await vn(i+`|`+_n(r))!==r.hash)return{sealed:!0,ok:!1,brokenAt:n+1};t.set(r.docId,r.hash)}return{sealed:!0,ok:!0,brokenAt:null}}async function Kn(e,t,n){let r=n?.docId??W(),i=n&&`matter`in n?n.matter??null:G(),a=n?.at??0;for(let t of e){let e={...t,docId:r};delete e.hash,delete e.prev,i?e.matter=i:delete e.matter,a&&typeof e.at==`number`&&(e.at+=a),await kn(e)}t&&await K(r,{type:`replant`,count:e.length,sealed:t.sealed,fileOk:t.ok,...t.brokenAt==null?{}:{fileBrokenAt:t.brokenAt}},i)}function qn(){return bn(async()=>(await Cn(await un())).map(e=>e.value))}async function Jn(e,t,n){n&&await ie(n,e);let r=await cn(e);try{for(let e=0;e<t.length;e+=500){let n=t.slice(e,e+500);await new Promise((e,t)=>{let i=r.transaction(H,`readwrite`);for(let e of n)i.objectStore(H).add(e);i.oncomplete=()=>e(),i.onerror=()=>t(i.error)})}}finally{r.close()}}function Yn(e){if(!e||typeof e!=`object`)return``;let t=e;return typeof t.text==`string`?t.text:(t.content??[]).map(Yn).join(t.type===`doc`?`
`:``)}function Xn(e,t){return e.slice(0,t.at)+t.ins+e.slice(t.at+t.del)}function Zn(e,t,n,r){return e<=t?e:e>=t+n?e+r-n:t}function Qn(e,t,n,r){if(e<t)return e;let i=t+r.lastIndexOf(`
`)+1;return e===t?/[^\n]/.test(r)?e:i:e<=t+n?i:e+r.length-n}function $n(e,t,n,r){let i=[];for(let a of e){let e=Zn(a.start,t,n,r),o=Zn(a.end,t,n,r);o>e&&i.push({kind:a.kind,start:e,end:o})}return i}function er(e,t,n,r,i){if(r<=n)return e;let a=e.filter(e=>e.kind!==t),o=e.filter(e=>e.kind===t);if(i){o.push({kind:t,start:n,end:r}),o.sort((e,t)=>e.start-t.start);let e=[];for(let t of o){let n=e[e.length-1];n&&t.start<=n.end?n.end=Math.max(n.end,t.end):e.push({...t})}o=e}else{let e=[];for(let i of o){if(i.end<=n||i.start>=r){e.push(i);continue}i.start<n&&e.push({kind:t,start:i.start,end:n}),i.end>r&&e.push({kind:t,start:r,end:i.end})}o=e}return[...a,...o]}var tr=e=>e.data?`data:${e.mime};base64,${e.data}`:ne(e.ref);function nr(e,t,n){if(t.type===`block-image`){let r=e.get(t.id);return e.set(t.id,{id:t.id,at:t.at,seq:n,name:t.name,mime:t.mime,w:t.w,h:t.h,data:t.data??``,...t.ref?{ref:t.ref}:{},size:r?.size??`medium`,place:r?.place??`left`,gone:!1,inline:!!t.inline||!!r?.inline}),!0}if(t.type===`block-image-place`){let r=e.get(t.id);return r&&(r.at=t.at,r.seq=n,r.gone=!1,t.inline&&(r.inline=!0)),!0}if(t.type===`block-image-gone`){let n=e.get(t.id);return n&&(n.gone=!0),!0}if(t.type===`block-image-style`){let n=e.get(t.id);return n&&(t.size&&(n.size=t.size),t.place&&(n.place=t.place)),!0}return!1}function rr(e,t,n){if(!n.length)return e?[{type:`text`,text:e}]:[];let r=new Set([0,e.length]);for(let i of n){let n=i.start-t,a=i.end-t;a>0&&n<e.length&&(r.add(Math.max(0,n)),r.add(Math.min(e.length,a)))}let i=[...r].sort((e,t)=>e-t),a=[];for(let r=0;r<i.length-1;r++){let o=i[r],s=i[r+1];if(s<=o)continue;let c=new Set;for(let e of n)e.start-t<=o&&e.end-t>=s&&c.add(e.kind);let l=[...c].map(e=>({type:e}));a.push({type:`text`,text:e.slice(o,s),...l.length?{marks:l}:{}})}return a}function ir(e,t=[],n=[],r=[],i=[],a=[],o=[],s=[],c=[],l=new Map){let u=e.split(`
`),d=[],f=0;for(let e of u)d.push({start:f,end:f+e.length}),f+=e.length+1;let p=e=>{let t=d.findIndex(t=>e>=t.start&&e<=t.end);return t<0?e<0?0:d.length-1:t},m=new Map;for(let e of n){let t=p(e.at),n=m.get(t);(!n||e.seq>n.seq)&&m.set(t,{kind:e.kind,level:e.level,seq:e.seq})}let h=new Map;for(let e of r){let t=p(e.at),n=h.get(t);(!n||e.seq>n.seq)&&h.set(t,{align:e.align,seq:e.seq})}let g=new Map;for(let e of i){let t=p(e.at),n=g.get(t);(!n||e.seq>n.seq)&&g.set(t,{kind:e.kind,seq:e.seq})}let _=new Map;for(let e of a){let t=p(e.at),n=_.get(t);(!n||e.seq>n.seq)&&_.set(t,{level:e.level,seq:e.seq})}let v=new Map;for(let e of o){let t=p(e.at),n=v.get(t);(!n||e.seq>n.seq)&&v.set(t,{kind:e.kind,seq:e.seq})}let y=new Set;for(let e of s)y.add(p(e.at));let b=new Map;for(let e of c){let t=p(e.at),n=b.get(t);(!n||e.seq>n.seq)&&b.set(t,{kind:e.kind,seq:e.seq})}let x=new Map,S=new Map;for(let e of l.values()){if(e.gone)continue;let t=p(e.at);if(e.inline){S.set(t,[...S.get(t)??[],e]);continue}let n=x.get(t);(!n||e.seq>n.seq)&&x.set(t,e)}let C=e=>({type:`figure`,attrs:{id:e.id,src:tr(e),name:e.name,w:e.w,h:e.h,size:e.size,place:e.place,inl:e.inline}}),w=(e,t)=>{let n=[...S.get(t)??[]].sort((e,t)=>e.at-t.at||e.seq-t.seq);if(!n.length)return e;let r=[],i=0,a=0,o=d[t].start;for(let t of e){let e=t.text??``;for(;a<n.length&&n[a].at-o<=i+e.length;){let s=Math.max(0,n[a].at-o-i);s>0&&r.push({...t,text:e.slice(0,s)}),r.push(C(n[a])),e=e.slice(s),i+=s,a++}e&&r.push({...t,text:e}),i+=e.length}for(;a<n.length;)r.push(C(n[a++]));return r},T=e=>{let t={},n=h.get(e)?.align;(n===`center`||n===`right`)&&(t.align=n);let r=g.get(e)?.kind;(r===`bullet`||r===`dash`||r===`ordered`)&&(t.list=r);let i=_.get(e)?.level??0;i>0&&(t.indent=Math.min(8,Math.floor(i)));let a=v.get(e)?.kind;return(a===`single`||a===`double`)&&(t.spacing=a),b.get(e)?.kind===`row`&&(t.table=`row`),t};return{type:`doc`,content:u.map((e,n)=>{let r=T(n),i=Object.keys(r).length>0;if(!e){let e=x.get(n),t=w(e?[C(e)]:[],n);return t.length?i?{type:`paragraph`,attrs:r,content:t}:{type:`paragraph`,content:t}:y.has(n)?{type:`horizontal_rule`}:i?{type:`paragraph`,attrs:r}:{type:`paragraph`}}let a=w(rr(e,d[n].start,t),n),o=m.get(n);if(o&&o.kind===`heading`){let{list:e,table:t,...n}=r;return{type:`heading`,attrs:{level:o.level,...n},content:a}}if(o&&o.kind===`aside`){let{table:e,...t}=r;return Object.keys(t).length?{type:`aside`,attrs:t,content:a}:{type:`aside`,content:a}}return i?{type:`paragraph`,attrs:r,content:a}:{type:`paragraph`,content:a}})}}async function ar(e){let t=await un(),n=await new Promise((e,n)=>{let r=t.transaction(H,`readonly`).objectStore(H).getAll();r.onsuccess=()=>e(r.result),r.onerror=()=>n(r.error)}),r=``;for(let t of n)if(t.docId===e){if(t.type===`text-snapshot`)r=`h`.repeat(Yn(t.doc).length);else if(t.type===`text-splice`){let e;if(t.source===`engine`)e=`e`.repeat(t.ins.length);else if(t.via===`workings`||t.via===`move`){let n=t.via===`workings`?`w`:`h`,r=Array(t.ins.length).fill(n),i=(e,t)=>{for(let[n,i]of e??[])for(let e=Math.max(0,n);e<n+i&&e<r.length;e++)r[e]=t};i(t.engineRuns,`e`),i(t.pastedRuns,`p`),i(t.unkeyedRuns,`u`),i(t.broughtRuns,`w`),e=r.join(``)}else e=(t.pasted?`p`:t.unkeyed?`u`:`h`).repeat(t.ins.length);r=r.slice(0,t.at)+e+r.slice(t.at+t.del)}}return r}async function or(e){let t=await un(),n=await new Promise((e,n)=>{let r=t.transaction(H,`readonly`).objectStore(H).getAll();r.onsuccess=()=>e(r.result),r.onerror=()=>n(r.error)}),r=``;for(let t of n)t.docId===e&&(t.type===`text-snapshot`?r=Yn(t.doc):t.type===`text-splice`&&(r=Xn(r,t)));return r}async function sr(){let e=await un(),t=await new Promise((t,n)=>{let r=e.transaction(H,`readonly`).objectStore(H).getAll();r.onsuccess=()=>t(r.result),r.onerror=()=>n(r.error)}),n=new Map,r=new Map,i=new Map,a=new Map,o=new Map,s=new Map,c=new Map,l=new Map,u=new Map,d=new Map,f=new Map,p=new Map,m=new Map,h=new Map,g=new Map;for(let e of t)if(e.docId){if(e.type===`replant`&&e.count===(h.get(e.docId)??0)&&typeof e.t==`number`&&g.set(e.docId,e.t),h.set(e.docId,(h.get(e.docId)??0)+1),e.type===`uproot`){let t=e.matter===e.docId,n=t?m:p,r=n.get(e.docId),i=e.t??0;if((!r||i>=r.t)&&n.set(e.docId,{up:!e.replanted,t:i}),t)continue}if(e.type===`leaf-rename`){let t=f.get(e.docId),n=e.t??0;(!t||n>=t.t)&&f.set(e.docId,{name:e.name,t:n})}if(typeof e.matter==`string`&&e.matter){s.set(e.docId,e.matter);let t=`${e.matter}::${e.docId}`;!l.has(t)&&e.t&&l.set(t,e.t)}if(e.type===`ungraft`&&(s.delete(e.docId),l.delete(`${e.from}::${e.docId}`)),e.type===`matter-adopt`&&e.matter){u.set(e.matter,{path:e.path,name:e.name});continue}if(e.type===`matter-rename`&&e.matter){let t=d.get(e.matter),n=e.t??0;(!t||n>=t.t)&&d.set(e.matter,{name:e.name,t:n});continue}if(e.type===`file-ref`){let t=i.get(e.docId);t||i.set(e.docId,t=new Map),t.set(e.path,{path:e.path,name:e.name,lower:`${e.name}\n${e.text}`.slice(0,2e4).toLowerCase()})}if(e.type===`text-snapshot`&&n.set(e.docId,Yn(e.doc)),e.type===`text-splice`&&n.set(e.docId,Xn(n.get(e.docId)??``,e)),e.type===`stroke-add`){let t=r.get(e.docId);t||r.set(e.docId,t=new Map),t.set(e.id,e.points.filter((e,t)=>t%2==0))}if(e.type===`stroke-remove`&&r.get(e.docId)?.delete(e.id),e.type===`margin-note`){let t=c.get(e.docId);t||c.set(e.docId,t=new Map);let n=`${e.anchorText}::${e.note}`;e.gone?t.delete(n):t.set(n,e.note)}e.t&&(e.type!==`note-shown`&&a.set(e.docId,Math.max(a.get(e.docId)??0,e.t)),o.has(e.docId)||o.set(e.docId,e.t))}let _=[],v=new Set([...n.keys(),...r.keys(),...i.keys()]),y=new Map;for(let e of[...v]){let t=localStorage.getItem(U(`workings.front.${e}`));t&&(y.set(e,t),v.add(t))}for(let[e,t]of y)!a.has(t)&&a.has(e)&&(a.set(t,a.get(e)),o.has(t)||o.set(t,o.get(e)??a.get(e)));for(let[e,t]of f)t.name.trim()&&v.add(e);for(let e of v){let t=(n.get(e)??``).trim(),l=r.get(e),u=[...i.get(e)?.values()??[]],d=f.get(e)?.name.trim(),p=[...y.values()].includes(e);if(!t&&!l?.size&&!u.length&&!d&&!p)continue;let m=t.split(`
`),h=d||m.find(e=>e.trim())||(u.length?u[0].name:p?`(an unwritten page — its workings have begun)`:`(a drawing)`);_.push({docId:e,matter:s.get(e)??null,...y.has(e)?{workingsOf:y.get(e)}:{},firstLine:h.slice(0,40),text:t+`
`+u.map(e=>e.name).join(`
`),files:u,firstT:o.get(e)??0,lastT:a.get(e)??0,previewLines:m.slice(0,14).map(e=>e.slice(0,70)),strokes:[...l?.values()??[]].slice(0,60),notes:[...c.get(e)?.values()??[]]})}let b=new Map,x=new Map;for(let e of _){if(!e.matter)continue;let t=l.get(`${e.matter}::${e.docId}`)??e.firstT,n=b.get(e.matter);n||(n={id:e.matter,name:e.firstLine,nameLeaf:e.docId,leafIds:[]},b.set(e.matter,n),x.set(e.matter,t)),n.leafIds.push(e.docId),t<(x.get(e.matter)??1/0)&&(n.name=e.firstLine,n.nameLeaf=e.docId,x.set(e.matter,t))}let S=new Map;for(let e of _){if(e.workingsOf||e.firstLine.startsWith(`(`))continue;let t=e.firstLine;S.set(t,[...S.get(t)??[],e])}for(let e of S.values()){if(e.length<2)continue;let t=e=>g.get(e.docId)??e.firstT;e.sort((e,n)=>t(e)-t(n)),e.slice(1).forEach((e,t)=>{e.firstLine=`${e.firstLine} ${t+2}`})}for(let[e,t]of u){let n=b.get(e);n||(n={id:e,name:t.name,nameLeaf:``,leafIds:[]},b.set(e,n)),n.name=t.name,n.nameLeaf=``,n.root=t.path}for(let[e,t]of d){let n=b.get(e);n||(n={id:e,name:t.name,nameLeaf:``,leafIds:[]},b.set(e,n)),n.name=t.name,n.nameLeaf=``}{let e=new Map(_.map(e=>[e.docId,e]));for(let t of _){if(!t.workingsOf||!t.text.trim())continue;let n=e.get(t.workingsOf);n&&(n.drafts=!0)}}let C=e=>!!e&&(m.get(e)?.up??!1),w=new Map;for(let[e,t]of b)m.get(e)?.up&&(w.set(e,t),b.delete(e));let T=[],E=[];for(let e of _)C(e.matter)||(p.get(e.docId)?.up?E.push(e):T.push(e));return{leaves:T,matters:b,pile:{leaves:E,matters:w,treeLeaves:_.filter(e=>C(e.matter))}}}function cr(e){let t=null,n=``,r=!1,i=[],a=[],o=[],s=[],c=[],l=[],u=[],d=[],f=new Map,p=0,m=new Map,h=new Map;for(let g of e)if(g.type===`text-snapshot`)t=g.doc,n=Yn(g.doc),i=[],a.length=0,o.length=0,s.length=0,c.length=0,l.length=0,u.length=0,d.length=0,f.clear();else if(g.type===`text-splice`){n=Xn(n,g),i=$n(i,g.at,g.del,g.ins.length);for(let e of a)e.at=Qn(e.at,g.at,g.del,g.ins);for(let e of o)e.at=Qn(e.at,g.at,g.del,g.ins);for(let e of s)e.at=Qn(e.at,g.at,g.del,g.ins);for(let e of c)e.at=Qn(e.at,g.at,g.del,g.ins);for(let e of l)e.at=Qn(e.at,g.at,g.del,g.ins);for(let e of u)e.at=Qn(e.at,g.at,g.del,g.ins);for(let e of d)e.at=Qn(e.at,g.at,g.del,g.ins);for(let e of f.values())e.at=Qn(e.at,g.at,g.del,g.ins);r=!0}else if(g.type===`mark`)i=er(i,g.kind,g.at,g.at+g.len,g.on),r=!0;else if(g.type===`block-style`)a.push({at:g.at,kind:g.kind,level:g.level??1,seq:p++}),r=!0;else if(g.type===`block-align`)o.push({at:g.at,align:g.align,seq:p++}),r=!0;else if(g.type===`block-list`)s.push({at:g.at,kind:g.kind,seq:p++}),r=!0;else if(g.type===`block-indent`)c.push({at:g.at,level:g.level,seq:p++}),r=!0;else if(g.type===`block-spacing`)l.push({at:g.at,kind:g.kind,seq:p++}),r=!0;else if(g.type===`block-rule`)u.push({at:g.at,seq:p++}),r=!0;else if(g.type===`block-table`)d.push({at:g.at,kind:g.kind,seq:p++}),r=!0;else if(nr(f,g,p++))r=!0;else if(g.type===`file-ref`){for(let[e,t]of h)if(e!==g.path&&t.size===g.size&&t.mtime===g.mtime&&t.text===g.text){h.delete(e);break}h.set(g.path,{path:g.path,name:g.name,kind:g.kind,size:g.size,mtime:g.mtime,text:g.text})}else g.type===`stroke-add`?m.set(g.id,g.points):g.type===`stroke-remove`&&m.delete(g.id);return r&&(t=ir(n,i,a,o,s,c,l,u,d,f)),{doc:t,strokes:m,files:h}}var lr=65535,ur=2**16;function dr(e,t){return e+t*ur}function fr(e){return e&lr}function pr(e){return(e-(e&lr))/ur}var mr=1,hr=2,gr=4,_r=8,vr=class{constructor(e,t,n){this.pos=e,this.delInfo=t,this.recover=n}get deleted(){return(this.delInfo&_r)>0}get deletedBefore(){return(this.delInfo&5)>0}get deletedAfter(){return(this.delInfo&6)>0}get deletedAcross(){return(this.delInfo&gr)>0}},yr=class e{constructor(t,n=!1){if(this.ranges=t,this.inverted=n,!t.length&&e.empty)return e.empty}recover(e){let t=0,n=fr(e);if(!this.inverted)for(let e=0;e<n;e++)t+=this.ranges[e*3+2]-this.ranges[e*3+1];return this.ranges[n*3]+t+pr(e)}mapResult(e,t=1){return this._map(e,t,!1)}map(e,t=1){return this._map(e,t,!0)}_map(e,t,n){let r=0,i=this.inverted?2:1,a=this.inverted?1:2;for(let o=0;o<this.ranges.length;o+=3){let s=this.ranges[o]-(this.inverted?r:0);if(s>e)break;let c=this.ranges[o+i],l=this.ranges[o+a],u=s+c;if(e<=u){let i=c?e==s?-1:e==u?1:t:t,a=s+r+(i<0?0:l);if(n)return a;let d=e==(t<0?s:u)?null:dr(o/3,e-s),f=e==s?hr:e==u?mr:gr;return(t<0?e!=s:e!=u)&&(f|=_r),new vr(a,f,d)}r+=l-c}return n?e+r:new vr(e+r,0,null)}touches(e,t){let n=0,r=fr(t),i=this.inverted?2:1,a=this.inverted?1:2;for(let t=0;t<this.ranges.length;t+=3){let o=this.ranges[t]-(this.inverted?n:0);if(o>e)break;let s=this.ranges[t+i];if(e<=o+s&&t==r*3)return!0;n+=this.ranges[t+a]-s}return!1}forEach(e){let t=this.inverted?2:1,n=this.inverted?1:2;for(let r=0,i=0;r<this.ranges.length;r+=3){let a=this.ranges[r],o=a-(this.inverted?i:0),s=a+(this.inverted?0:i),c=this.ranges[r+t],l=this.ranges[r+n];e(o,o+c,s,s+l),i+=l-c}}invert(){return new e(this.ranges,!this.inverted)}toString(){return(this.inverted?`-`:``)+JSON.stringify(this.ranges)}static offset(t){return t==0?e.empty:new e(t<0?[0,-t,0]:[0,0,t])}};yr.empty=new yr([]);var br=class e{constructor(e,t,n=0,r=e?e.length:0){this.mirror=t,this.from=n,this.to=r,this._maps=e||[],this.ownData=!(e||t)}get maps(){return this._maps}slice(t=0,n=this.maps.length){return new e(this._maps,this.mirror,t,n)}appendMap(e,t){this.ownData||=(this._maps=this._maps.slice(),this.mirror=this.mirror&&this.mirror.slice(),!0),this.to=this._maps.push(e),t!=null&&this.setMirror(this._maps.length-1,t)}appendMapping(e){for(let t=0,n=this._maps.length;t<e._maps.length;t++){let r=e.getMirror(t);this.appendMap(e._maps[t],r!=null&&r<t?n+r:void 0)}}getMirror(e){if(this.mirror){for(let t=0;t<this.mirror.length;t++)if(this.mirror[t]==e)return this.mirror[t+(t%2?-1:1)]}}setMirror(e,t){this.mirror||=[],this.mirror.push(e,t)}appendMappingInverted(e){for(let t=e.maps.length-1,n=this._maps.length+e._maps.length;t>=0;t--){let r=e.getMirror(t);this.appendMap(e._maps[t].invert(),r!=null&&r>t?n-r-1:void 0)}}invert(){let t=new e;return t.appendMappingInverted(this),t}map(e,t=1){if(this.mirror)return this._map(e,t,!0);for(let n=this.from;n<this.to;n++)e=this._maps[n].map(e,t);return e}mapResult(e,t=1){return this._map(e,t,!1)}_map(e,t,n){let r=0;for(let n=this.from;n<this.to;n++){let i=this._maps[n].mapResult(e,t);if(i.recover!=null){let t=this.getMirror(n);if(t!=null&&t>n&&t<this.to){n=t,e=this._maps[t].recover(i.recover);continue}}r|=i.delInfo,e=i.pos}return n?e:new vr(e,r,null)}},xr=Object.create(null),Sr=class{getMap(){return yr.empty}merge(e){return null}static fromJSON(e,t){if(!t||!t.stepType)throw RangeError(`Invalid input for Step.fromJSON`);let n=xr[t.stepType];if(!n)throw RangeError(`No step type ${t.stepType} defined`);return n.fromJSON(e,t)}static jsonID(e,t){if(e in xr)throw RangeError(`Duplicate use of step JSON ID `+e);return xr[e]=t,t.prototype.jsonID=e,t}},Cr=class e{constructor(e,t){this.doc=e,this.failed=t}static ok(t){return new e(t,null)}static fail(t){return new e(null,t)}static fromReplace(t,n,r,i){try{return e.ok(t.replace(n,r,i))}catch(t){if(t instanceof pe)return e.fail(t.message);throw t}}};function wr(e,t,n){let r=[];for(let i=0;i<e.childCount;i++){let a=e.child(i);a.content.size&&(a=a.copy(wr(a.content,t,a))),a.isInline&&(a=t(a,n,i)),r.push(a)}return P.fromArray(r)}var Tr=class e extends Sr{constructor(e,t,n){super(),this.from=e,this.to=t,this.mark=n}apply(e){let t=e.slice(this.from,this.to),n=e.resolve(this.from),r=n.node(n.sharedDepth(this.to)),i=new L(wr(t.content,(e,t)=>!e.isAtom||!t.type.allowsMarkType(this.mark.type)?e:e.mark(this.mark.addToSet(e.marks)),r),t.openStart,t.openEnd);return Cr.fromReplace(e,this.from,this.to,i)}invert(){return new Er(this.from,this.to,this.mark)}map(t){let n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark)}merge(t){return t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from?new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark):null}toJSON(){return{stepType:`addMark`,mark:this.mark.toJSON(),from:this.from,to:this.to}}static fromJSON(t,n){if(typeof n.from!=`number`||typeof n.to!=`number`)throw RangeError(`Invalid input for AddMarkStep.fromJSON`);return new e(n.from,n.to,t.markFromJSON(n.mark))}};Sr.jsonID(`addMark`,Tr);var Er=class e extends Sr{constructor(e,t,n){super(),this.from=e,this.to=t,this.mark=n}apply(e){let t=e.slice(this.from,this.to),n=new L(wr(t.content,e=>e.mark(this.mark.removeFromSet(e.marks)),e),t.openStart,t.openEnd);return Cr.fromReplace(e,this.from,this.to,n)}invert(){return new Tr(this.from,this.to,this.mark)}map(t){let n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1);return n.deleted&&r.deleted||n.pos>=r.pos?null:new e(n.pos,r.pos,this.mark)}merge(t){return t instanceof e&&t.mark.eq(this.mark)&&this.from<=t.to&&this.to>=t.from?new e(Math.min(this.from,t.from),Math.max(this.to,t.to),this.mark):null}toJSON(){return{stepType:`removeMark`,mark:this.mark.toJSON(),from:this.from,to:this.to}}static fromJSON(t,n){if(typeof n.from!=`number`||typeof n.to!=`number`)throw RangeError(`Invalid input for RemoveMarkStep.fromJSON`);return new e(n.from,n.to,t.markFromJSON(n.mark))}};Sr.jsonID(`removeMark`,Er);var Dr=class e extends Sr{constructor(e,t){super(),this.pos=e,this.mark=t}apply(e){let t=e.nodeAt(this.pos);if(!t)return Cr.fail(`No node at mark step's position`);let n=t.type.create(t.attrs,null,this.mark.addToSet(t.marks));return Cr.fromReplace(e,this.pos,this.pos+1,new L(P.from(n),0,+!t.isLeaf))}invert(t){let n=t.nodeAt(this.pos);if(n){let t=this.mark.addToSet(n.marks);if(t.length==n.marks.length){for(let r=0;r<n.marks.length;r++)if(!n.marks[r].isInSet(t))return new e(this.pos,n.marks[r]);return new e(this.pos,this.mark)}}return new Or(this.pos,this.mark)}map(t){let n=t.mapResult(this.pos,1);return n.deletedAfter?null:new e(n.pos,this.mark)}toJSON(){return{stepType:`addNodeMark`,pos:this.pos,mark:this.mark.toJSON()}}static fromJSON(t,n){if(typeof n.pos!=`number`)throw RangeError(`Invalid input for AddNodeMarkStep.fromJSON`);return new e(n.pos,t.markFromJSON(n.mark))}};Sr.jsonID(`addNodeMark`,Dr);var Or=class e extends Sr{constructor(e,t){super(),this.pos=e,this.mark=t}apply(e){let t=e.nodeAt(this.pos);if(!t)return Cr.fail(`No node at mark step's position`);let n=t.type.create(t.attrs,null,this.mark.removeFromSet(t.marks));return Cr.fromReplace(e,this.pos,this.pos+1,new L(P.from(n),0,+!t.isLeaf))}invert(e){let t=e.nodeAt(this.pos);return!t||!this.mark.isInSet(t.marks)?this:new Dr(this.pos,this.mark)}map(t){let n=t.mapResult(this.pos,1);return n.deletedAfter?null:new e(n.pos,this.mark)}toJSON(){return{stepType:`removeNodeMark`,pos:this.pos,mark:this.mark.toJSON()}}static fromJSON(t,n){if(typeof n.pos!=`number`)throw RangeError(`Invalid input for RemoveNodeMarkStep.fromJSON`);return new e(n.pos,t.markFromJSON(n.mark))}};Sr.jsonID(`removeNodeMark`,Or);var kr=class e extends Sr{constructor(e,t,n,r=!1){super(),this.from=e,this.to=t,this.slice=n,this.structure=r}apply(e){return this.structure&&jr(e,this.from,this.to)?Cr.fail(`Structure replace would overwrite content`):Cr.fromReplace(e,this.from,this.to,this.slice)}getMap(){return new yr([this.from,this.to-this.from,this.slice.size])}invert(t){return new e(this.from,this.from+this.slice.size,t.slice(this.from,this.to))}map(t){let n=t.mapResult(this.to,-1),r=this.from==this.to&&e.MAP_BIAS<0?n:t.mapResult(this.from,1);return r.deletedAcross&&n.deletedAcross?null:new e(r.pos,Math.max(r.pos,n.pos),this.slice,this.structure)}merge(t){if(!(t instanceof e)||t.structure||this.structure)return null;if(this.from+this.slice.size==t.from&&!this.slice.openEnd&&!t.slice.openStart){let n=this.slice.size+t.slice.size==0?L.empty:new L(this.slice.content.append(t.slice.content),this.slice.openStart,t.slice.openEnd);return new e(this.from,this.to+(t.to-t.from),n,this.structure)}else if(t.to==this.from&&!this.slice.openStart&&!t.slice.openEnd){let n=this.slice.size+t.slice.size==0?L.empty:new L(t.slice.content.append(this.slice.content),t.slice.openStart,this.slice.openEnd);return new e(t.from,this.to,n,this.structure)}else return null}toJSON(){let e={stepType:`replace`,from:this.from,to:this.to};return this.slice.size&&(e.slice=this.slice.toJSON()),this.structure&&(e.structure=!0),e}static fromJSON(t,n){if(typeof n.from!=`number`||typeof n.to!=`number`)throw RangeError(`Invalid input for ReplaceStep.fromJSON`);return new e(n.from,n.to,L.fromJSON(t,n.slice),!!n.structure)}};kr.MAP_BIAS=1,Sr.jsonID(`replace`,kr);var Ar=class e extends Sr{constructor(e,t,n,r,i,a,o=!1){super(),this.from=e,this.to=t,this.gapFrom=n,this.gapTo=r,this.slice=i,this.insert=a,this.structure=o}apply(e){if(this.structure&&(jr(e,this.from,this.gapFrom)||jr(e,this.gapTo,this.to)))return Cr.fail(`Structure gap-replace would overwrite content`);let t=e.slice(this.gapFrom,this.gapTo);if(t.openStart||t.openEnd)return Cr.fail(`Gap is not a flat range`);let n=this.slice.insertAt(this.insert,t.content);return n?Cr.fromReplace(e,this.from,this.to,n):Cr.fail(`Content does not fit in gap`)}getMap(){return new yr([this.from,this.gapFrom-this.from,this.insert,this.gapTo,this.to-this.gapTo,this.slice.size-this.insert])}invert(t){let n=this.gapTo-this.gapFrom;return new e(this.from,this.from+this.slice.size+n,this.from+this.insert,this.from+this.insert+n,t.slice(this.from,this.to).removeBetween(this.gapFrom-this.from,this.gapTo-this.from),this.gapFrom-this.from,this.structure)}map(t){let n=t.mapResult(this.from,1),r=t.mapResult(this.to,-1),i=this.from==this.gapFrom?n.pos:t.map(this.gapFrom,-1),a=this.to==this.gapTo?r.pos:t.map(this.gapTo,1);return n.deletedAcross&&r.deletedAcross||i<n.pos||a>r.pos?null:new e(n.pos,r.pos,i,a,this.slice,this.insert,this.structure)}toJSON(){let e={stepType:`replaceAround`,from:this.from,to:this.to,gapFrom:this.gapFrom,gapTo:this.gapTo,insert:this.insert};return this.slice.size&&(e.slice=this.slice.toJSON()),this.structure&&(e.structure=!0),e}static fromJSON(t,n){if(typeof n.from!=`number`||typeof n.to!=`number`||typeof n.gapFrom!=`number`||typeof n.gapTo!=`number`||typeof n.insert!=`number`)throw RangeError(`Invalid input for ReplaceAroundStep.fromJSON`);return new e(n.from,n.to,n.gapFrom,n.gapTo,L.fromJSON(t,n.slice),n.insert,!!n.structure)}};Sr.jsonID(`replaceAround`,Ar);function jr(e,t,n){let r=e.resolve(t),i=n-t,a=r.depth;for(;i>0&&a>0&&r.indexAfter(a)==r.node(a).childCount;)a--,i--;if(i>0){let e=r.node(a).maybeChild(r.indexAfter(a));for(;i>0;){if(!e||e.isLeaf)return!0;e=e.firstChild,i--}}return!1}function Mr(e,t,n,r){let i=[],a=[],o,s;e.doc.nodesBetween(t,n,(e,c,l)=>{if(!e.isInline)return;let u=e.marks;if(!r.isInSet(u)&&l.type.allowsMarkType(r.type)){let l=Math.max(c,t),d=Math.min(c+e.nodeSize,n),f=r.addToSet(u);for(let e=0;e<u.length;e++)u[e].isInSet(f)||(o&&o.to==l&&o.mark.eq(u[e])?o.to=d:i.push(o=new Er(l,d,u[e])));s&&s.to==l?s.to=d:a.push(s=new Tr(l,d,r))}}),i.forEach(t=>e.step(t)),a.forEach(t=>e.step(t))}function Nr(e,t,n,r){let i=[],a=0;e.doc.nodesBetween(t,n,(e,o)=>{if(!e.isInline)return;a++;let s=null;if(r instanceof $e){let t=e.marks,n;for(;n=r.isInSet(t);)(s||=[]).push(n),t=n.removeFromSet(t)}else r?r.isInSet(e.marks)&&(s=[r]):s=e.marks;if(s&&s.length){let r=Math.min(o+e.nodeSize,n);for(let e=0;e<s.length;e++){let n=s[e],c;for(let e=0;e<i.length;e++){let t=i[e];t.step==a-1&&n.eq(i[e].style)&&(c=t)}c?(c.to=r,c.step=a):i.push({style:n,from:Math.max(o,t),to:r,step:a})}}}),i.forEach(t=>e.step(new Er(t.from,t.to,t.style)))}function Pr(e,t,n,r=n.contentMatch,i=!0){let a=e.doc.nodeAt(t),o=[],s=t+1;for(let t=0;t<a.childCount;t++){let c=a.child(t),l=s+c.nodeSize,u=r.matchType(c.type);if(!u)o.push(new kr(s,l,L.empty));else{r=u;for(let t=0;t<c.marks.length;t++)n.allowsMarkType(c.marks[t].type)||e.step(new Er(s,l,c.marks[t]));if(i&&c.isText&&n.whitespace!=`pre`){let e,t=/\r?\n|\r/g,r;for(;e=t.exec(c.text);)r||=new L(P.from(n.schema.text(` `,n.allowedMarks(c.marks))),0,0),o.push(new kr(s+e.index,s+e.index+e[0].length,r))}}s=l}if(!r.validEnd){let t=r.fillBefore(P.empty,!0);e.replace(s,s,new L(t,0,0))}for(let t=o.length-1;t>=0;t--)e.step(o[t])}function Fr(e,t,n){return(t==0||e.canReplace(t,e.childCount))&&(n==e.childCount||e.canReplace(0,n))}function Ir(e){let t=e.parent.content.cutByIndex(e.startIndex,e.endIndex);for(let n=e.depth,r=0,i=0;;--n){let a=e.$from.node(n),o=e.$from.index(n)+r,s=e.$to.indexAfter(n)-i;if(n<e.depth&&a.canReplace(o,s,t))return n;if(n==0||a.type.spec.isolating||!Fr(a,o,s))break;o&&(r=1),s<a.childCount&&(i=1)}return null}function Lr(e,t,n){let{$from:r,$to:i,depth:a}=t,o=r.before(a+1),s=i.after(a+1),c=o,l=s,u=P.empty,d=0;for(let e=a,t=!1;e>n;e--)t||r.index(e)>0?(t=!0,u=P.from(r.node(e).copy(u)),d++):c--;let f=P.empty,p=0;for(let e=a,t=!1;e>n;e--)t||i.after(e+1)<i.end(e)?(t=!0,f=P.from(i.node(e).copy(f)),p++):l++;e.step(new Ar(c,l,o,s,new L(u.append(f),d,p),u.size-d,!0))}function Rr(e,t,n){let r=P.empty;for(let e=n.length-1;e>=0;e--){if(r.size){let t=n[e].type.contentMatch.matchFragment(r);if(!t||!t.validEnd)throw RangeError(`Wrapper type given to Transform.wrap does not form valid content of its parent wrapper`)}r=P.from(n[e].type.create(n[e].attrs,r))}let i=t.start,a=t.end;e.step(new Ar(i,a,i,a,new L(r,0,0),n.length,!0))}function zr(e,t,n,r,i){if(!r.isTextblock)throw RangeError(`Type given to setBlockType should be a textblock`);let a=e.steps.length;e.doc.nodesBetween(t,n,(t,n)=>{let o=typeof i==`function`?i(t):i;if(t.isTextblock&&!t.hasMarkup(r,o)&&Hr(e.doc,e.mapping.slice(a).map(n),r)){let i=null;if(r.schema.linebreakReplacement){let e=r.whitespace==`pre`,t=!!r.contentMatch.matchType(r.schema.linebreakReplacement);e&&!t?i=!1:!e&&t&&(i=!0)}i===!1&&Vr(e,t,n,a),Pr(e,e.mapping.slice(a).map(n,1),r,void 0,i===null);let s=e.mapping.slice(a),c=s.map(n,1),l=s.map(n+t.nodeSize,1);return e.step(new Ar(c,l,c+1,l-1,new L(P.from(r.create(o,null,t.marks)),0,0),1,!0)),i===!0&&Br(e,t,n,a),!1}})}function Br(e,t,n,r){t.forEach((i,a)=>{if(i.isText){let o,s=/\r?\n|\r/g;for(;o=s.exec(i.text);){let i=e.mapping.slice(r).map(n+1+a+o.index);e.replaceWith(i,i+1,t.type.schema.linebreakReplacement.create())}}})}function Vr(e,t,n,r){t.forEach((i,a)=>{if(i.type==i.type.schema.linebreakReplacement){let i=e.mapping.slice(r).map(n+1+a);e.replaceWith(i,i+1,t.type.schema.text(`
`))}})}function Hr(e,t,n){let r=e.resolve(t),i=r.index();return r.parent.canReplaceWith(i,i+1,n)}function Ur(e,t,n,r,i){let a=e.doc.nodeAt(t);if(!a)throw RangeError(`No node at given position`);n||=a.type;let o=n.create(r,null,i||a.marks);if(a.isLeaf)return e.replaceWith(t,t+a.nodeSize,o);if(!n.validContent(a.content))throw RangeError(`Invalid content for node type `+n.name);e.step(new Ar(t,t+a.nodeSize,t+1,t+a.nodeSize-1,new L(P.from(o),0,0),1,!0))}function Wr(e,t,n=1,r){let i=e.resolve(t),a=i.depth-n,o=r&&r[r.length-1]||i.parent;if(a<0||i.parent.type.spec.isolating||!i.parent.canReplace(i.index(),i.parent.childCount)||!o.type.validContent(i.parent.content.cutByIndex(i.index(),i.parent.childCount)))return!1;for(let e=i.depth-1,t=n-2;e>a;e--,t--){let n=i.node(e),a=i.index(e);if(n.type.spec.isolating)return!1;let o=n.content.cutByIndex(a,n.childCount),s=r&&r[t+1];s&&(o=o.replaceChild(0,s.type.create(s.attrs)));let c=r&&r[t]||n;if(!n.canReplace(a+1,n.childCount)||!c.type.validContent(o))return!1}let s=i.indexAfter(a),c=r&&r[0];return i.node(a).canReplaceWith(s,s,c?c.type:i.node(a+1).type)}function Gr(e,t,n=1,r){let i=e.doc.resolve(t),a=P.empty,o=P.empty;for(let e=i.depth,t=i.depth-n,s=n-1;e>t;e--,s--){a=P.from(i.node(e).copy(a));let t=r&&r[s];o=P.from(t?t.type.create(t.attrs,o):i.node(e).copy(o))}e.step(new kr(t,t,new L(a.append(o),n,n),!0))}function Kr(e,t){let n=e.resolve(t),r=n.index();return Jr(n.nodeBefore,n.nodeAfter)&&n.parent.canReplace(r,r+1)}function qr(e,t){t.content.size||e.type.compatibleContent(t.type);let n=e.contentMatchAt(e.childCount),{linebreakReplacement:r}=e.type.schema;for(let i=0;i<t.childCount;i++){let a=t.child(i),o=a.type==r?e.type.schema.nodes.text:a.type;if(n=n.matchType(o),!n||!e.type.allowsMarks(a.marks))return!1}return n.validEnd}function Jr(e,t){return!!(e&&t&&!e.isLeaf&&qr(e,t))}function Yr(e,t,n){let r=null,{linebreakReplacement:i}=e.doc.type.schema,a=e.doc.resolve(t-n),o=a.node().type;if(i&&o.inlineContent){let e=o.whitespace==`pre`,t=!!o.contentMatch.matchType(i);e&&!t?r=!1:!e&&t&&(r=!0)}let s=e.steps.length;if(r===!1){let r=e.doc.resolve(t+n);Vr(e,r.node(),r.before(),s)}o.inlineContent&&Pr(e,t+n-1,o,a.node().contentMatchAt(a.index()),r==null);let c=e.mapping.slice(s),l=c.map(t-n);if(e.step(new kr(l,c.map(t+n,-1),L.empty,!0)),r===!0){let t=e.doc.resolve(l);Br(e,t.node(),t.before(),e.steps.length)}return e}function Xr(e,t,n){let r=e.resolve(t);if(r.parent.canReplaceWith(r.index(),r.index(),n))return t;if(r.parentOffset==0)for(let e=r.depth-1;e>=0;e--){let t=r.index(e);if(r.node(e).canReplaceWith(t,t,n))return r.before(e+1);if(t>0)return null}if(r.parentOffset==r.parent.content.size)for(let e=r.depth-1;e>=0;e--){let t=r.indexAfter(e);if(r.node(e).canReplaceWith(t,t,n))return r.after(e+1);if(t<r.node(e).childCount)return null}return null}function Zr(e,t,n){let r=e.resolve(t);if(!n.content.size)return t;let i=n.content;for(let e=0;e<n.openStart;e++)i=i.firstChild.content;for(let e=1;e<=(n.openStart==0&&n.size?2:1);e++)for(let t=r.depth;t>=0;t--){let n=t==r.depth?0:r.pos<=(r.start(t+1)+r.end(t+1))/2?-1:1,a=r.index(t)+ +(n>0),o=r.node(t),s=!1;if(e==1)s=o.canReplace(a,a,i);else{let e=o.contentMatchAt(a).findWrapping(i.firstChild.type);s=e&&o.canReplaceWith(a,a,e[0])}if(s)return n==0?r.pos:n<0?r.before(t+1):r.after(t+1)}return null}function Qr(e,t,n=t,r=L.empty){if(t==n&&!r.size)return null;let i=e.resolve(t),a=e.resolve(n);return $r(i,a,r)?new kr(t,n,r):new ei(i,a,r).fit()}function $r(e,t,n){return!n.openStart&&!n.openEnd&&e.start()==t.start()&&e.parent.canReplace(e.index(),t.index(),n.content)}var ei=class{constructor(e,t,n){this.$from=e,this.$to=t,this.unplaced=n,this.frontier=[],this.placed=P.empty;for(let t=0;t<=e.depth;t++){let n=e.node(t);this.frontier.push({type:n.type,match:n.contentMatchAt(e.indexAfter(t))})}for(let t=e.depth;t>0;t--)this.placed=P.from(e.node(t).copy(this.placed))}get depth(){return this.frontier.length-1}fit(){for(;this.unplaced.size;){let e=this.findFittable();e?this.placeNodes(e):this.openMore()||this.dropNode()}let e=this.mustMoveInline(),t=this.placed.size-this.depth-this.$from.depth,n=this.$from,r=this.close(e<0?this.$to:n.doc.resolve(e));if(!r)return null;let i=this.placed,a=n.depth,o=r.depth;for(;a&&o&&i.childCount==1;)i=i.firstChild.content,a--,o--;let s=new L(i,a,o);return e>-1?new Ar(n.pos,e,this.$to.pos,this.$to.end(),s,t):s.size||n.pos!=this.$to.pos?new kr(n.pos,r.pos,s):null}findFittable(){let e=this.unplaced.openStart;for(let t=this.unplaced.content,n=0,r=this.unplaced.openEnd;n<e;n++){let i=t.firstChild;if(t.childCount>1&&(r=0),i.type.spec.isolating&&r<=n){e=n;break}t=i.content}for(let t=1;t<=2;t++)for(let n=t==1?e:this.unplaced.openStart;n>=0;n--){let e,r=null;n?(r=ri(this.unplaced.content,n-1).firstChild,e=r.content):e=this.unplaced.content;let i=e.firstChild;for(let e=this.depth;e>=0;e--){let{type:a,match:o}=this.frontier[e],s,c=null;if(t==1&&(i?o.matchType(i.type)||(c=o.fillBefore(P.from(i),!1)):r&&a.compatibleContent(r.type)))return{sliceDepth:n,frontierDepth:e,parent:r,inject:c};if(t==2&&i&&(s=o.findWrapping(i.type)))return{sliceDepth:n,frontierDepth:e,parent:r,wrap:s};if(r&&o.matchType(r.type))break}}}openMore(){let{content:e,openStart:t,openEnd:n}=this.unplaced,r=ri(e,t);return!r.childCount||r.firstChild.isLeaf?!1:(this.unplaced=new L(e,t+1,Math.max(n,r.size+t>=e.size-n?t+1:0)),!0)}dropNode(){let{content:e,openStart:t,openEnd:n}=this.unplaced,r=ri(e,t);if(r.childCount<=1&&t>0){let i=e.size-t<=t+r.size;this.unplaced=new L(ti(e,t-1,1),t-1,i?t-1:n)}else this.unplaced=new L(ti(e,t,1),t,n)}placeNodes({sliceDepth:e,frontierDepth:t,parent:n,inject:r,wrap:i}){for(;this.depth>t;)this.closeFrontierNode();if(i)for(let e=0;e<i.length;e++)this.openFrontierNode(i[e]);let a=this.unplaced,o=n?n.content:a.content,s=a.openStart-e,c=0,l=[],{match:u,type:d}=this.frontier[t];if(r){for(let e=0;e<r.childCount;e++)l.push(r.child(e));u=u.matchFragment(r)}let f=o.size+e-(a.content.size-a.openEnd);for(;c<o.childCount;){let e=o.child(c),t=u.matchType(e.type);if(!t)break;c++,(c>1||s==0||e.content.size)&&(u=t,l.push(ii(e.mark(d.allowedMarks(e.marks)),c==1?s:0,c==o.childCount?f:-1)))}let p=c==o.childCount;p||(f=-1),this.placed=ni(this.placed,t,P.from(l)),this.frontier[t].match=u,p&&f<0&&n&&n.type==this.frontier[this.depth].type&&this.frontier.length>1&&this.closeFrontierNode();for(let e=0,t=o;e<f;e++){let e=t.lastChild;this.frontier.push({type:e.type,match:e.contentMatchAt(e.childCount)}),t=e.content}this.unplaced=p?e==0?L.empty:new L(ti(a.content,e-1,1),e-1,f<0?a.openEnd:e-1):new L(ti(a.content,e,c),a.openStart,a.openEnd)}mustMoveInline(){if(!this.$to.parent.isTextblock)return-1;let e=this.frontier[this.depth],t;if(!e.type.isTextblock||!ai(this.$to,this.$to.depth,e.type,e.match,!1)||this.$to.depth==this.depth&&(t=this.findCloseLevel(this.$to))&&t.depth==this.depth)return-1;let{depth:n}=this.$to,r=this.$to.after(n);for(;n>1&&r==this.$to.end(--n);)++r;return r}findCloseLevel(e){scan:for(let t=Math.min(this.depth,e.depth);t>=0;t--){let{match:n,type:r}=this.frontier[t],i=t<e.depth&&e.end(t+1)==e.pos+(e.depth-(t+1)),a=ai(e,t,r,n,i);if(a){for(let n=t-1;n>=0;n--){let{match:t,type:r}=this.frontier[n],i=ai(e,n,r,t,!0);if(!i||i.childCount)continue scan}return{depth:t,fit:a,move:i?e.doc.resolve(e.after(t+1)):e}}}}close(e){let t=this.findCloseLevel(e);if(!t)return null;for(;this.depth>t.depth;)this.closeFrontierNode();t.fit.childCount&&(this.placed=ni(this.placed,t.depth,t.fit)),e=t.move;for(let n=t.depth+1;n<=e.depth;n++){let t=e.node(n),r=t.type.contentMatch.fillBefore(t.content,!0,e.index(n));this.openFrontierNode(t.type,t.attrs,r)}return e}openFrontierNode(e,t=null,n){let r=this.frontier[this.depth];r.match=r.match.matchType(e),this.placed=ni(this.placed,this.depth,P.from(e.create(t,n))),this.frontier.push({type:e,match:e.contentMatch})}closeFrontierNode(){let e=this.frontier.pop().match.fillBefore(P.empty,!0);e.childCount&&(this.placed=ni(this.placed,this.frontier.length,e))}};function ti(e,t,n){return t==0?e.cutByIndex(n,e.childCount):e.replaceChild(0,e.firstChild.copy(ti(e.firstChild.content,t-1,n)))}function ni(e,t,n){return t==0?e.append(n):e.replaceChild(e.childCount-1,e.lastChild.copy(ni(e.lastChild.content,t-1,n)))}function ri(e,t){for(let n=0;n<t;n++)e=e.firstChild.content;return e}function ii(e,t,n){if(t<=0)return e;let r=e.content;return t>1&&(r=r.replaceChild(0,ii(r.firstChild,t-1,r.childCount==1?n-1:0))),t>0&&(r=e.type.contentMatch.fillBefore(r).append(r),n<=0&&(r=r.append(e.type.contentMatch.matchFragment(r).fillBefore(P.empty,!0)))),e.copy(r)}function ai(e,t,n,r,i){let a=e.node(t),o=i?e.indexAfter(t):e.index(t);if(o==a.childCount&&!n.compatibleContent(a.type))return null;let s=r.fillBefore(a.content,!0,o);return s&&!oi(n,a.content,o)?s:null}function oi(e,t,n){for(let r=n;r<t.childCount;r++)if(!e.allowsMarks(t.child(r).marks))return!0;return!1}function si(e){return e.spec.defining||e.spec.definingForContent}function ci(e,t,n,r){if(!r.size)return e.deleteRange(t,n);let i=e.doc.resolve(t),a=e.doc.resolve(n);if($r(i,a,r))return e.step(new kr(t,n,r));let o=fi(i,a);o[o.length-1]==0&&o.pop();let s=-(i.depth+1);o.unshift(s);for(let e=i.depth,t=i.pos-1;e>0;e--,t--){let n=i.node(e).type.spec;if(n.defining||n.definingAsContext||n.isolating)break;o.indexOf(e)>-1?s=e:i.before(e)==t&&o.splice(1,0,-e)}let c=o.indexOf(s),l=[],u=r.openStart;for(let e=r.content,t=0;;t++){let n=e.firstChild;if(l.push(n),t==r.openStart)break;e=n.content}for(let e=u-1;e>=0;e--){let t=l[e],n=si(t.type);if(n&&!t.sameMarkup(i.node(Math.abs(s)-1)))u=e;else if(n||!t.type.isTextblock)break}for(let t=r.openStart;t>=0;t--){let s=(t+u+1)%(r.openStart+1),d=l[s];if(d)for(let t=0;t<o.length;t++){let l=o[(t+c)%o.length],u=!0;l<0&&(u=!1,l=-l);let f=i.node(l-1),p=i.index(l-1);if(f.canReplaceWith(p,p,d.type,d.marks))return e.replace(i.before(l),u?a.after(l):n,new L(li(r.content,0,r.openStart,s),s,r.openEnd))}}let d=e.steps.length;for(let s=o.length-1;s>=0&&(e.replace(t,n,r),!(e.steps.length>d));s--){let e=o[s];e<0||(t=i.before(e),n=a.after(e))}}function li(e,t,n,r,i){if(t<n){let i=e.firstChild;e=e.replaceChild(0,i.copy(li(i.content,t+1,n,r,i)))}if(t>r){let t=i.contentMatchAt(0),n=t.fillBefore(e).append(e);e=n.append(t.matchFragment(n).fillBefore(P.empty,!0))}return e}function ui(e,t,n,r){if(!r.isInline&&t==n&&e.doc.resolve(t).parent.content.size){let i=Xr(e.doc,t,r.type);i!=null&&(t=n=i)}e.replaceRange(t,n,new L(P.from(r),0,0))}function di(e,t,n){let r=e.doc.resolve(t),i=e.doc.resolve(n);if(r.parent.isTextblock&&i.parent.isTextblock&&r.start()!=i.start()&&r.parentOffset==0&&i.parentOffset==0){let a=r.sharedDepth(n),o=!1;for(let e=r.depth;e>a;e--)r.node(e).type.spec.isolating&&(o=!0);for(let e=i.depth;e>a;e--)i.node(e).type.spec.isolating&&(o=!0);if(!o){for(let e=r.depth;e>0&&t==r.start(e);e--)t=r.before(e);for(let e=i.depth;e>0&&n==i.start(e);e--)n=i.before(e);r=e.doc.resolve(t),i=e.doc.resolve(n)}}let a=fi(r,i);for(let t=0;t<a.length;t++){let n=a[t],o=t==a.length-1;if(o&&n==0||r.node(n).type.contentMatch.validEnd)return e.delete(r.start(n),i.end(n));if(n>0&&(o||r.node(n-1).canReplace(r.index(n-1),i.indexAfter(n-1))))return e.delete(r.before(n),i.after(n))}for(let a=1;a<=r.depth&&a<=i.depth;a++)if(t-r.start(a)==r.depth-a&&n>r.end(a)&&i.end(a)-n!=i.depth-a&&r.start(a-1)==i.start(a-1)&&r.node(a-1).canReplace(r.index(a-1),i.index(a-1)))return e.delete(r.before(a),n);e.delete(t,n)}function fi(e,t){let n=[],r=Math.min(e.depth,t.depth);for(let i=r;i>=0;i--){let r=e.start(i);if(r<e.pos-(e.depth-i)||t.end(i)>t.pos+(t.depth-i)||e.node(i).type.spec.isolating||t.node(i).type.spec.isolating)break;(r==t.start(i)||i==e.depth&&i==t.depth&&e.parent.inlineContent&&t.parent.inlineContent&&i&&t.start(i-1)==r-1)&&n.push(i)}return n}var pi=class e extends Sr{constructor(e,t,n){super(),this.pos=e,this.attr=t,this.value=n}apply(e){let t=e.nodeAt(this.pos);if(!t)return Cr.fail(`No node at attribute step's position`);let n=Object.create(null);for(let e in t.attrs)n[e]=t.attrs[e];n[this.attr]=this.value;let r=t.type.create(n,null,t.marks);return Cr.fromReplace(e,this.pos,this.pos+1,new L(P.from(r),0,+!t.isLeaf))}getMap(){return yr.empty}invert(t){return new e(this.pos,this.attr,t.nodeAt(this.pos).attrs[this.attr])}map(t){let n=t.mapResult(this.pos,1);return n.deletedAfter?null:new e(n.pos,this.attr,this.value)}toJSON(){return{stepType:`attr`,pos:this.pos,attr:this.attr,value:this.value}}static fromJSON(t,n){if(typeof n.pos!=`number`||typeof n.attr!=`string`)throw RangeError(`Invalid input for AttrStep.fromJSON`);return new e(n.pos,n.attr,n.value)}};Sr.jsonID(`attr`,pi);var mi=class e extends Sr{constructor(e,t){super(),this.attr=e,this.value=t}apply(e){let t=Object.create(null);for(let n in e.attrs)t[n]=e.attrs[n];t[this.attr]=this.value;let n=e.type.create(t,e.content,e.marks);return Cr.ok(n)}getMap(){return yr.empty}invert(t){return new e(this.attr,t.attrs[this.attr])}map(e){return this}toJSON(){return{stepType:`docAttr`,attr:this.attr,value:this.value}}static fromJSON(t,n){if(typeof n.attr!=`string`)throw RangeError(`Invalid input for DocAttrStep.fromJSON`);return new e(n.attr,n.value)}};Sr.jsonID(`docAttr`,mi);var hi=class extends Error{};hi=function e(t){let n=Error.call(this,t);return n.__proto__=e.prototype,n},hi.prototype=Object.create(Error.prototype),hi.prototype.constructor=hi,hi.prototype.name=`TransformError`;var gi=class{constructor(e){this.doc=e,this.steps=[],this.docs=[],this.mapping=new br}get before(){return this.docs.length?this.docs[0]:this.doc}step(e){let t=this.maybeStep(e);if(t.failed)throw new hi(t.failed);return this}maybeStep(e){let t=e.apply(this.doc);return t.failed||this.addStep(e,t.doc),t}get docChanged(){return this.steps.length>0}changedRange(){let e=1e9,t=-1e9;for(let n=0;n<this.mapping.maps.length;n++){let r=this.mapping.maps[n];n&&(e=r.map(e,1),t=r.map(t,-1)),r.forEach((n,r,i,a)=>{e=Math.min(e,i),t=Math.max(t,a)})}return e==1e9?null:{from:e,to:t}}addStep(e,t){this.docs.push(this.doc),this.steps.push(e),this.mapping.appendMap(e.getMap()),this.doc=t}replace(e,t=e,n=L.empty){let r=Qr(this.doc,e,t,n);return r&&this.step(r),this}replaceWith(e,t,n){return this.replace(e,t,new L(P.from(n),0,0))}delete(e,t){return this.replace(e,t,L.empty)}insert(e,t){return this.replaceWith(e,e,t)}replaceRange(e,t,n){return ci(this,e,t,n),this}replaceRangeWith(e,t,n){return ui(this,e,t,n),this}deleteRange(e,t){return di(this,e,t),this}lift(e,t){return Lr(this,e,t),this}join(e,t=1){return Yr(this,e,t),this}wrap(e,t){return Rr(this,e,t),this}setBlockType(e,t=e,n,r=null){return zr(this,e,t,n,r),this}setNodeMarkup(e,t,n=null,r){return Ur(this,e,t,n,r),this}setNodeAttribute(e,t,n){return this.step(new pi(e,t,n)),this}setDocAttribute(e,t){return this.step(new mi(e,t)),this}addNodeMark(e,t){return this.step(new Dr(e,t)),this}removeNodeMark(e,t){let n=this.doc.nodeAt(e);if(!n)throw RangeError(`No node at position `+e);if(t instanceof I)t.isInSet(n.marks)&&this.step(new Or(e,t));else{let r=n.marks,i,a=[];for(;i=t.isInSet(r);)a.push(new Or(e,i)),r=i.removeFromSet(r);for(let e=a.length-1;e>=0;e--)this.step(a[e])}return this}split(e,t=1,n){return Gr(this,e,t,n),this}addMark(e,t,n){return Mr(this,e,t,n),this}removeMark(e,t,n){return Nr(this,e,t,n),this}clearIncompatible(e,t,n){return Pr(this,e,t,n),this}},_i=Object.create(null),q=class{constructor(e,t,n){this.$anchor=e,this.$head=t,this.ranges=n||[new vi(e.min(t),e.max(t))]}get anchor(){return this.$anchor.pos}get head(){return this.$head.pos}get from(){return this.$from.pos}get to(){return this.$to.pos}get $from(){return this.ranges[0].$from}get $to(){return this.ranges[0].$to}get empty(){let e=this.ranges;for(let t=0;t<e.length;t++)if(e[t].$from.pos!=e[t].$to.pos)return!1;return!0}content(){return this.$from.doc.slice(this.from,this.to,!0)}replace(e,t=L.empty){let n=t.content.lastChild,r=null;for(let e=0;e<t.openEnd;e++)r=n,n=n.lastChild;let i=e.steps.length,a=this.ranges;for(let o=0;o<a.length;o++){let{$from:s,$to:c}=a[o],l=e.mapping.slice(i);e.replaceRange(l.map(s.pos),l.map(c.pos),o?L.empty:t),o==0&&Ei(e,i,(n?n.isInline:r&&r.isTextblock)?-1:1)}}replaceWith(e,t){let n=e.steps.length,r=this.ranges;for(let i=0;i<r.length;i++){let{$from:a,$to:o}=r[i],s=e.mapping.slice(n),c=s.map(a.pos),l=s.map(o.pos);i?e.deleteRange(c,l):(e.replaceRangeWith(c,l,t),Ei(e,n,t.isInline?-1:1))}}static findFrom(e,t,n=!1){let r=e.parent.inlineContent?new J(e):Ti(e.node(0),e.parent,e.pos,e.index(),t,n);if(r)return r;for(let r=e.depth-1;r>=0;r--){let i=t<0?Ti(e.node(0),e.node(r),e.before(r+1),e.index(r),t,n):Ti(e.node(0),e.node(r),e.after(r+1),e.index(r)+1,t,n);if(i)return i}return null}static near(e,t=1){return this.findFrom(e,t)||this.findFrom(e,-t)||new Ci(e.node(0))}static atStart(e){return Ti(e,e,0,0,1)||new Ci(e)}static atEnd(e){return Ti(e,e,e.content.size,e.childCount,-1)||new Ci(e)}static fromJSON(e,t){if(!t||!t.type)throw RangeError(`Invalid input for Selection.fromJSON`);let n=_i[t.type];if(!n)throw RangeError(`No selection type ${t.type} defined`);return n.fromJSON(e,t)}static jsonID(e,t){if(e in _i)throw RangeError(`Duplicate use of selection JSON ID `+e);return _i[e]=t,t.prototype.jsonID=e,t}getBookmark(){return J.between(this.$anchor,this.$head).getBookmark()}};q.prototype.visible=!0;var vi=class{constructor(e,t){this.$from=e,this.$to=t}},yi=!1;function bi(e){!yi&&!e.parent.inlineContent&&(yi=!0,console.warn(`TextSelection endpoint not pointing into a node with inline content (`+e.parent.type.name+`)`))}var J=class e extends q{constructor(e,t=e){bi(e),bi(t),super(e,t)}get $cursor(){return this.$anchor.pos==this.$head.pos?this.$head:null}map(t,n){let r=t.resolve(n.map(this.head));if(!r.parent.inlineContent)return q.near(r);let i=t.resolve(n.map(this.anchor));return new e(i.parent.inlineContent?i:r,r)}replace(e,t=L.empty){if(super.replace(e,t),t==L.empty){let t=this.$from.marksAcross(this.$to);t&&e.ensureMarks(t)}}eq(t){return t instanceof e&&t.anchor==this.anchor&&t.head==this.head}getBookmark(){return new xi(this.anchor,this.head)}toJSON(){return{type:`text`,anchor:this.anchor,head:this.head}}static fromJSON(t,n){if(typeof n.anchor!=`number`||typeof n.head!=`number`)throw RangeError(`Invalid input for TextSelection.fromJSON`);return new e(t.resolve(n.anchor),t.resolve(n.head))}static create(e,t,n=t){let r=e.resolve(t);return new this(r,n==t?r:e.resolve(n))}static between(t,n,r){let i=t.pos-n.pos;if((!r||i)&&(r=i>=0?1:-1),!n.parent.inlineContent){let e=q.findFrom(n,r,!0)||q.findFrom(n,-r,!0);if(e)n=e.$head;else return q.near(n,r)}return t.parent.inlineContent||(i==0?t=n:(t=(q.findFrom(t,-r,!0)||q.findFrom(t,r,!0)).$anchor,t.pos<n.pos!=i<0&&(t=n))),new e(t,n)}};q.jsonID(`text`,J);var xi=class e{constructor(e,t){this.anchor=e,this.head=t}map(t){return new e(t.map(this.anchor),t.map(this.head))}resolve(e){return J.between(e.resolve(this.anchor),e.resolve(this.head))}},Y=class e extends q{constructor(e){let t=e.nodeAfter,n=e.node(0).resolve(e.pos+t.nodeSize);super(e,n),this.node=t}map(t,n){let{deleted:r,pos:i}=n.mapResult(this.anchor),a=t.resolve(i);return r?q.near(a):new e(a)}content(){return new L(P.from(this.node),0,0)}eq(t){return t instanceof e&&t.anchor==this.anchor}toJSON(){return{type:`node`,anchor:this.anchor}}getBookmark(){return new Si(this.anchor)}static fromJSON(t,n){if(typeof n.anchor!=`number`)throw RangeError(`Invalid input for NodeSelection.fromJSON`);return new e(t.resolve(n.anchor))}static create(t,n){return new e(t.resolve(n))}static isSelectable(e){return!e.isText&&e.type.spec.selectable!==!1}};Y.prototype.visible=!1,q.jsonID(`node`,Y);var Si=class e{constructor(e){this.anchor=e}map(t){let{deleted:n,pos:r}=t.mapResult(this.anchor);return n?new xi(r,r):new e(r)}resolve(e){let t=e.resolve(this.anchor),n=t.nodeAfter;return n&&Y.isSelectable(n)?new Y(t):q.near(t)}},Ci=class e extends q{constructor(e){super(e.resolve(0),e.resolve(e.content.size))}replace(e,t=L.empty){if(t==L.empty){e.delete(0,e.doc.content.size);let t=q.atStart(e.doc);t.eq(e.selection)||e.setSelection(t)}else super.replace(e,t)}toJSON(){return{type:`all`}}static fromJSON(t){return new e(t)}map(t){return new e(t)}eq(t){return t instanceof e}getBookmark(){return wi}};q.jsonID(`all`,Ci);var wi={map(){return this},resolve(e){return new Ci(e)}};function Ti(e,t,n,r,i,a=!1){if(t.inlineContent)return J.create(e,n);for(let o=r-(i>0?0:1);i>0?o<t.childCount:o>=0;o+=i){let r=t.child(o);if(!r.isAtom){let t=Ti(e,r,n+i,i<0?r.childCount:0,i,a);if(t)return t}else if(!a&&Y.isSelectable(r))return Y.create(e,n-(i<0?r.nodeSize:0));n+=r.nodeSize*i}return null}function Ei(e,t,n){let r=e.steps.length-1;if(r<t)return;let i=e.steps[r];if(!(i instanceof kr||i instanceof Ar))return;let a=e.mapping.maps[r],o;a.forEach((e,t,n,r)=>{o??=r}),e.setSelection(q.near(e.doc.resolve(o),n))}var Di=1,Oi=2,ki=4,Ai=class extends gi{constructor(e){super(e.doc),this.curSelectionFor=0,this.updated=0,this.meta=Object.create(null),this.time=Date.now(),this.curSelection=e.selection,this.storedMarks=e.storedMarks}get selection(){return this.curSelectionFor<this.steps.length&&(this.curSelection=this.curSelection.map(this.doc,this.mapping.slice(this.curSelectionFor)),this.curSelectionFor=this.steps.length),this.curSelection}setSelection(e){if(e.$from.doc!=this.doc)throw RangeError(`Selection passed to setSelection must point at the current document`);return this.curSelection=e,this.curSelectionFor=this.steps.length,this.updated=(this.updated|Di)&-3,this.storedMarks=null,this}get selectionSet(){return(this.updated&Di)>0}setStoredMarks(e){return this.storedMarks=e,this.updated|=Oi,this}ensureMarks(e){return I.sameSet(this.storedMarks||this.selection.$from.marks(),e)||this.setStoredMarks(e),this}addStoredMark(e){return this.ensureMarks(e.addToSet(this.storedMarks||this.selection.$head.marks()))}removeStoredMark(e){return this.ensureMarks(e.removeFromSet(this.storedMarks||this.selection.$head.marks()))}get storedMarksSet(){return(this.updated&Oi)>0}addStep(e,t){super.addStep(e,t),this.updated&=-3,this.storedMarks=null}setTime(e){return this.time=e,this}replaceSelection(e){return this.selection.replace(this,e),this}replaceSelectionWith(e,t=!0){let n=this.selection;return t&&(e=e.mark(this.storedMarks||(n.empty?n.$from.marks():n.$from.marksAcross(n.$to)||I.none))),n.replaceWith(this,e),this}deleteSelection(){return this.selection.replace(this),this}insertText(e,t,n){let r=this.doc.type.schema;if(t==null)return e?this.replaceSelectionWith(r.text(e),!0):this.deleteSelection();{if(n??=t,!e)return this.deleteRange(t,n);let i=this.storedMarks;if(!i){let e=this.doc.resolve(t);i=n==t?e.marks():e.marksAcross(this.doc.resolve(n))}return this.replaceRangeWith(t,n,r.text(e,i)),!this.selection.empty&&this.selection.to==t+e.length&&this.setSelection(q.near(this.selection.$to)),this}}setMeta(e,t){return this.meta[typeof e==`string`?e:e.key]=t,this}getMeta(e){return this.meta[typeof e==`string`?e:e.key]}get isGeneric(){for(let e in this.meta)return!1;return!0}scrollIntoView(){return this.updated|=ki,this}get scrolledIntoView(){return(this.updated&ki)>0}};function ji(e,t){return!t||!e?e:e.bind(t)}var Mi=class{constructor(e,t,n){this.name=e,this.init=ji(t.init,n),this.apply=ji(t.apply,n)}},Ni=[new Mi(`doc`,{init(e){return e.doc||e.schema.topNodeType.createAndFill()},apply(e){return e.doc}}),new Mi(`selection`,{init(e,t){return e.selection||q.atStart(t.doc)},apply(e){return e.selection}}),new Mi(`storedMarks`,{init(e){return e.storedMarks||null},apply(e,t,n,r){return r.selection.$cursor?e.storedMarks:null}}),new Mi(`scrollToSelection`,{init(){return 0},apply(e,t){return e.scrolledIntoView?t+1:t}})],Pi=class{constructor(e,t){this.schema=e,this.plugins=[],this.pluginsByKey=Object.create(null),this.fields=Ni.slice(),t&&t.forEach(e=>{if(this.pluginsByKey[e.key])throw RangeError(`Adding different instances of a keyed plugin (`+e.key+`)`);this.plugins.push(e),this.pluginsByKey[e.key]=e,e.spec.state&&this.fields.push(new Mi(e.key,e.spec.state,e))})}},Fi=class e{constructor(e){this.config=e}get schema(){return this.config.schema}get plugins(){return this.config.plugins}apply(e){return this.applyTransaction(e).state}filterTransaction(e,t=-1){for(let n=0;n<this.config.plugins.length;n++)if(n!=t){let t=this.config.plugins[n];if(t.spec.filterTransaction&&!t.spec.filterTransaction.call(t,e,this))return!1}return!0}applyTransaction(e){if(!this.filterTransaction(e))return{state:this,transactions:[]};let t=[e],n=this.applyInner(e),r=null;for(;;){let i=!1;for(let a=0;a<this.config.plugins.length;a++){let o=this.config.plugins[a];if(o.spec.appendTransaction){let s=r?r[a].n:0,c=r?r[a].state:this,l=s<t.length&&o.spec.appendTransaction.call(o,s?t.slice(s):t,c,n);if(l&&n.filterTransaction(l,a)){if(l.setMeta(`appendedTransaction`,e),!r){r=[];for(let e=0;e<this.config.plugins.length;e++)r.push(e<a?{state:n,n:t.length}:{state:this,n:0})}t.push(l),n=n.applyInner(l),i=!0}r&&(r[a]={state:n,n:t.length})}}if(!i)return{state:n,transactions:t}}}applyInner(t){if(!t.before.eq(this.doc))throw RangeError(`Applying a mismatched transaction`);let n=new e(this.config),r=this.config.fields;for(let e=0;e<r.length;e++){let i=r[e];n[i.name]=i.apply(t,this[i.name],this,n)}return n}get tr(){return new Ai(this)}static create(t){let n=new Pi(t.doc?t.doc.type.schema:t.schema,t.plugins),r=new e(n);for(let e=0;e<n.fields.length;e++)r[n.fields[e].name]=n.fields[e].init(t,r);return r}reconfigure(t){let n=new Pi(this.schema,t.plugins),r=n.fields,i=new e(n);for(let e=0;e<r.length;e++){let n=r[e].name;i[n]=this.hasOwnProperty(n)?this[n]:r[e].init(t,i)}return i}toJSON(e){let t={doc:this.doc.toJSON(),selection:this.selection.toJSON()};if(this.storedMarks&&(t.storedMarks=this.storedMarks.map(e=>e.toJSON())),e&&typeof e==`object`)for(let n in e){if(n==`doc`||n==`selection`)throw RangeError("The JSON fields `doc` and `selection` are reserved");let r=e[n],i=r.spec.state;i&&i.toJSON&&(t[n]=i.toJSON.call(r,this[r.key]))}return t}static fromJSON(t,n,r){if(!n)throw RangeError(`Invalid input for EditorState.fromJSON`);if(!t.schema)throw RangeError(`Required config field 'schema' missing`);let i=new Pi(t.schema,t.plugins),a=new e(i);return i.fields.forEach(e=>{if(e.name==`doc`)a.doc=Me.fromJSON(t.schema,n.doc);else if(e.name==`selection`)a.selection=q.fromJSON(a.doc,n.selection);else if(e.name==`storedMarks`)n.storedMarks&&(a.storedMarks=n.storedMarks.map(t.schema.markFromJSON));else{if(r)for(let i in r){let o=r[i],s=o.spec.state;if(o.key==e.name&&s&&s.fromJSON&&Object.prototype.hasOwnProperty.call(n,i)){a[e.name]=s.fromJSON.call(o,t,n[i],a);return}}a[e.name]=e.init(t,a)}}),a}};function Ii(e,t,n){for(let r in e){let i=e[r];i instanceof Function?i=i.bind(t):r==`handleDOMEvents`&&(i=Ii(i,t,{})),n[r]=i}return n}var Li=class{constructor(e){this.spec=e,this.props={},e.props&&Ii(e.props,this,this.props),this.key=e.key?e.key.key:zi(`plugin`)}getState(e){return e[this.key]}},Ri=Object.create(null);function zi(e){return e in Ri?e+`$`+ ++Ri[e]:(Ri[e]=0,e+`$`)}var Bi=class{constructor(e=`key`){this.key=zi(e)}get(e){return e.config.pluginsByKey[this.key]}getState(e){return e[this.key]}},Vi=function(e){for(var t=0;;t++)if(e=e.previousSibling,!e)return t},Hi=function(e){let t=e.assignedSlot||e.parentNode;return t&&t.nodeType==11?t.host:t},Ui=null,Wi=function(e,t,n){let r=Ui||=document.createRange();return r.setEnd(e,n??e.nodeValue.length),r.setStart(e,t||0),r},Gi=function(){Ui=null},Ki=function(e,t,n,r){return n&&(Ji(e,t,n,r,-1)||Ji(e,t,n,r,1))},qi=/^(img|br|input|textarea|hr)$/i;function Ji(e,t,n,r,i){for(;;){if(e==n&&t==r)return!0;if(t==(i<0?0:Yi(e))){let n=e.parentNode;if(!n||n.nodeType!=1||$i(e)||qi.test(e.nodeName)||e.contentEditable==`false`)return!1;t=Vi(e)+(i<0?0:1),e=n}else if(e.nodeType==1){let n=e.childNodes[t+(i<0?-1:0)];if(n.nodeType==1&&n.contentEditable==`false`)if(n.pmViewDesc?.ignoreForSelection)t+=i;else return!1;else e=n,t=i<0?Yi(e):0}else return!1}}function Yi(e){return e.nodeType==3?e.nodeValue.length:e.childNodes.length}function Xi(e,t){for(;;){if(e.nodeType==3&&t)return e;if(e.nodeType==1&&t>0){if(e.contentEditable==`false`)return null;e=e.childNodes[t-1],t=Yi(e)}else if(e.parentNode&&!$i(e))t=Vi(e),e=e.parentNode;else return null}}function Zi(e,t){for(;;){if(e.nodeType==3&&t<e.nodeValue.length)return e;if(e.nodeType==1&&t<e.childNodes.length){if(e.contentEditable==`false`)return null;e=e.childNodes[t],t=0}else if(e.parentNode&&!$i(e))t=Vi(e)+1,e=e.parentNode;else return null}}function Qi(e,t,n){for(let r=t==0,i=t==Yi(e);r||i;){if(e==n)return!0;let t=Vi(e);if(e=e.parentNode,!e)return!1;r&&=t==0,i&&=t==Yi(e)}}function $i(e){let t;for(let n=e;n&&!(t=n.pmViewDesc);n=n.parentNode);return t&&t.node&&t.node.isBlock&&(t.dom==e||t.contentDOM==e)}var ea=function(e){return e.focusNode&&Ki(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset)};function ta(e,t){let n=document.createEvent(`Event`);return n.initEvent(`keydown`,!0,!0),n.keyCode=e,n.key=n.code=t,n}function na(e){let t=e.activeElement;for(;t&&t.shadowRoot;)t=t.shadowRoot.activeElement;return t}function ra(e,t,n){if(e.caretPositionFromPoint)try{let r=e.caretPositionFromPoint(t,n);if(r)return{node:r.offsetNode,offset:Math.min(Yi(r.offsetNode),r.offset)}}catch{}if(e.caretRangeFromPoint){let r=e.caretRangeFromPoint(t,n);if(r)return{node:r.startContainer,offset:Math.min(Yi(r.startContainer),r.startOffset)}}}var ia=typeof navigator<`u`?navigator:null,aa=typeof document<`u`?document:null,oa=ia&&ia.userAgent||``,sa=/Edge\/(\d+)/.exec(oa),ca=/MSIE \d/.exec(oa),la=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(oa),ua=!!(ca||la||sa),da=ca?document.documentMode:la?+la[1]:sa?+sa[1]:0,fa=!ua&&/gecko\/(\d+)/i.test(oa);fa&&+(/Firefox\/(\d+)/.exec(oa)||[0,0])[1];var pa=!ua&&/Chrome\/(\d+)/.exec(oa),ma=!!pa,ha=pa?+pa[1]:0,ga=!ua&&!!ia&&/Apple Computer/.test(ia.vendor),_a=ga&&(/Mobile\/\w+/.test(oa)||!!ia&&ia.maxTouchPoints>2),va=_a||(ia?/Mac/.test(ia.platform):!1),ya=ia?/Win/.test(ia.platform):!1,ba=/Android \d/.test(oa),xa=!!aa&&`webkitFontSmoothing`in aa.documentElement.style,Sa=xa?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0;function Ca(e){let t=e.defaultView&&e.defaultView.visualViewport;return t?{left:0,right:t.width,top:0,bottom:t.height}:{left:0,right:e.documentElement.clientWidth,top:0,bottom:e.documentElement.clientHeight}}function wa(e,t){return typeof e==`number`?e:e[t]}function Ta(e){let t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return{left:t.left,right:t.left+e.clientWidth*n,top:t.top,bottom:t.top+e.clientHeight*r}}function Ea(e,t,n){let r=e.someProp(`scrollThreshold`)||0,i=e.someProp(`scrollMargin`)||5,a=e.dom.ownerDocument;for(let o=n||e.dom;o;){if(o.nodeType!=1){o=Hi(o);continue}let e=o,n=e==a.body,s=n?Ca(a):Ta(e),c=0,l=0;if(t.top<s.top+wa(r,`top`)?l=-(s.top-t.top+wa(i,`top`)):t.bottom>s.bottom-wa(r,`bottom`)&&(l=t.bottom-t.top>s.bottom-s.top?t.top+wa(i,`top`)-s.top:t.bottom-s.bottom+wa(i,`bottom`)),t.left<s.left+wa(r,`left`)?c=-(s.left-t.left+wa(i,`left`)):t.right>s.right-wa(r,`right`)&&(c=t.right-s.right+wa(i,`right`)),c||l)if(n)a.defaultView.scrollBy(c,l);else{let n=e.scrollLeft,r=e.scrollTop;l&&(e.scrollTop+=l),c&&(e.scrollLeft+=c);let i=e.scrollLeft-n,a=e.scrollTop-r;t={left:t.left-i,top:t.top-a,right:t.right-i,bottom:t.bottom-a}}let u=n?`fixed`:getComputedStyle(o).position;if(/^(fixed|sticky)$/.test(u))break;o=u==`absolute`?o.offsetParent:Hi(o)}}function Da(e){let t=e.dom.getBoundingClientRect(),n=Math.max(0,t.top),r,i;for(let a=(t.left+t.right)/2,o=n+1;o<Math.min(innerHeight,t.bottom);o+=5){let t=e.root.elementFromPoint(a,o);if(!t||t==e.dom||!e.dom.contains(t))continue;let s=t.getBoundingClientRect();if(s.top>=n-20){r=t,i=s.top;break}}return{refDOM:r,refTop:i,stack:Oa(e.dom)}}function Oa(e){let t=[],n=e.ownerDocument;for(let r=e;r&&(t.push({dom:r,top:r.scrollTop,left:r.scrollLeft}),e!=n);r=Hi(r));return t}function ka({refDOM:e,refTop:t,stack:n}){let r=e?e.getBoundingClientRect().top:0;Aa(n,r==0?0:r-t)}function Aa(e,t){for(let n=0;n<e.length;n++){let{dom:r,top:i,left:a}=e[n];r.scrollTop!=i+t&&(r.scrollTop=i+t),r.scrollLeft!=a&&(r.scrollLeft=a)}}var ja=null;function Ma(e){if(e.setActive)return e.setActive();if(ja)return e.focus(ja);let t=Oa(e);e.focus(ja==null?{get preventScroll(){return ja={preventScroll:!0},!0}}:void 0),ja||(ja=!1,Aa(t,0))}function Na(e,t){let n,r=2e8,i,a=0,o=t.top,s=t.top,c,l;for(let u=e.firstChild,d=0;u;u=u.nextSibling,d++){let e;if(u.nodeType==1)e=u.getClientRects();else if(u.nodeType==3)e=Wi(u).getClientRects();else continue;for(let f=0;f<e.length;f++){let p=e[f];if(p.top<=o&&p.bottom>=s){o=Math.max(p.bottom,o),s=Math.min(p.top,s);let e=p.left>t.left?p.left-t.left:p.right<t.left?t.left-p.right:0;if(e<r){n=u,r=e,i=e&&n.nodeType==3?{left:p.right<t.left?p.right:p.left,top:t.top}:t,u.nodeType==1&&e&&(a=d+ +(t.left>=(p.left+p.right)/2));continue}}else p.top>t.top&&!c&&p.left<=t.left&&p.right>=t.left&&(c=u,l={left:Math.max(p.left,Math.min(p.right,t.left)),top:p.top});!n&&(t.left>=p.right&&t.top>=p.top||t.left>=p.left&&t.top>=p.bottom)&&(a=d+1)}}return!n&&c&&(n=c,i=l,r=0),n&&n.nodeType==3?Pa(n,i):!n||r&&n.nodeType==1?{node:e,offset:a}:Na(n,i)}function Pa(e,t){let n=e.nodeValue.length,r=document.createRange(),i;for(let a=0;a<n;a++){r.setEnd(e,a+1),r.setStart(e,a);let n=Ha(r,1);if(n.top!=n.bottom&&Fa(t,n)){i={node:e,offset:a+ +(t.left>=(n.left+n.right)/2)};break}}return r.detach(),i||{node:e,offset:0}}function Fa(e,t){return e.left>=t.left-1&&e.left<=t.right+1&&e.top>=t.top-1&&e.top<=t.bottom+1}function Ia(e,t){let n=e.parentNode;return n&&/^li$/i.test(n.nodeName)&&t.left<e.getBoundingClientRect().left?n:e}function La(e,t,n){let{node:r,offset:i}=Na(t,n),a=-1;if(r.nodeType==1&&!r.firstChild){let e=r.getBoundingClientRect();a=e.left!=e.right&&n.left>(e.left+e.right)/2?1:-1}return e.docView.posFromDOM(r,i,a)}function Ra(e,t,n,r){let i=-1;for(let n=t,a=!1;n!=e.dom;){let t=e.docView.nearestDesc(n,!0),o;if(!t)return null;if(t.dom.nodeType==1&&(t.node.isBlock&&t.parent||!t.contentDOM)&&((o=t.dom.getBoundingClientRect()).width||o.height)&&(t.node.isBlock&&t.parent&&!/^T(R|BODY|HEAD|FOOT)$/.test(t.dom.nodeName)&&(!a&&o.left>r.left||o.top>r.top?i=t.posBefore:(!a&&o.right<r.left||o.bottom<r.top)&&(i=t.posAfter),a=!0),!t.contentDOM&&i<0&&!t.node.isText))return(t.node.isBlock?r.top<(o.top+o.bottom)/2:r.left<(o.left+o.right)/2)?t.posBefore:t.posAfter;n=t.dom.parentNode}return i>-1?i:e.docView.posFromDOM(t,n,-1)}function za(e,t,n){let r=e.childNodes.length;if(r&&n.top<n.bottom)for(let i=Math.max(0,Math.min(r-1,Math.floor(r*(t.top-n.top)/(n.bottom-n.top))-2)),a=i;;){let n=e.childNodes[a];if(n.nodeType==1){let e=n.getClientRects();for(let r=0;r<e.length;r++){let i=e[r];if(Fa(t,i))return za(n,t,i)}}if((a=(a+1)%r)==i)break}return e}function Ba(e,t){let n=e.dom.ownerDocument,r,i=0,a=ra(n,t.left,t.top);a&&({node:r,offset:i}=a);let o=(e.root.elementFromPoint?e.root:n).elementFromPoint(t.left,t.top),s;if(!o||!e.dom.contains(o.nodeType==1?o:o.parentNode)){let n=e.dom.getBoundingClientRect();if(!Fa(t,n)||(o=za(e.dom,t,n),!o))return null}if(ga)for(let e=o;r&&e;e=Hi(e))e.draggable&&(r=void 0);if(o=Ia(o,t),r){if(fa&&r.nodeType==1&&(i=Math.min(i,r.childNodes.length),i<r.childNodes.length)){let e=r.childNodes[i],n;e.nodeName==`IMG`&&(n=e.getBoundingClientRect()).right<=t.left&&n.bottom>t.top&&i++}let n;xa&&i&&r.nodeType==1&&(n=r.childNodes[i-1]).nodeType==1&&n.contentEditable==`false`&&n.getBoundingClientRect().top>=t.top&&i--,r==e.dom&&i==r.childNodes.length-1&&r.lastChild.nodeType==1&&t.top>r.lastChild.getBoundingClientRect().bottom?s=e.state.doc.content.size:(i==0||r.nodeType!=1||r.childNodes[i-1].nodeName!=`BR`)&&(s=Ra(e,r,i,t))}s??=La(e,o,t);let c=e.docView.nearestDesc(o,!0);return{pos:s,inside:c?c.posAtStart-c.border:-1}}function Va(e){return e.top<e.bottom||e.left<e.right}function Ha(e,t){let n=e.getClientRects();if(n.length){let e=n[t<0?0:n.length-1];if(Va(e))return e}return Array.prototype.find.call(n,Va)||e.getBoundingClientRect()}var Ua=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;function Wa(e,t,n){let{node:r,offset:i,atom:a}=e.docView.domFromPos(t,n<0?-1:1),o=xa||fa;if(r.nodeType==3)if(o&&(Ua.test(r.nodeValue)||(n<0?!i:i==r.nodeValue.length))){let e=Ha(Wi(r,i,i),n);if(fa&&i&&/\s/.test(r.nodeValue[i-1])&&i<r.nodeValue.length){let t=Ha(Wi(r,i-1,i-1),-1);if(t.top==e.top){let n=Ha(Wi(r,i,i+1),-1);if(n.top!=e.top)return Ga(n,n.left<t.left)}}return e}else{let e=i,t=i,a=n<0?1:-1;return n<0&&!i?(t++,a=-1):n>=0&&i==r.nodeValue.length?(e--,a=1):n<0?e--:t++,Ga(Ha(Wi(r,e,t),a),a<0)}if(!e.state.doc.resolve(t-(a||0)).parent.inlineContent){if(a==null&&i&&(n<0||i==Yi(r))){let e=r.childNodes[i-1];if(e.nodeType==1)return Ka(e.getBoundingClientRect(),!1)}if(a==null&&i<Yi(r)){let e=r.childNodes[i];if(e.nodeType==1)return Ka(e.getBoundingClientRect(),!0)}return Ka(r.getBoundingClientRect(),n>=0)}if(a==null&&i&&(n<0||i==Yi(r))){let e=r.childNodes[i-1],t=e.nodeType==3?Wi(e,Yi(e)-+!o):e.nodeType==1&&(e.nodeName!=`BR`||!e.nextSibling)?e:null;if(t)return Ga(Ha(t,1),!1)}if(a==null&&i<Yi(r)){let e=r.childNodes[i];for(;e.pmViewDesc&&e.pmViewDesc.ignoreForCoords;)e=e.nextSibling;let t=e?e.nodeType==3?Wi(e,0,+!o):e.nodeType==1?e:null:null;if(t)return Ga(Ha(t,-1),!0)}return Ga(Ha(r.nodeType==3?Wi(r):r,-n),n>=0)}function Ga(e,t){if(e.width==0)return e;let n=t?e.left:e.right;return{top:e.top,bottom:e.bottom,left:n,right:n}}function Ka(e,t){if(e.height==0)return e;let n=t?e.top:e.bottom;return{top:n,bottom:n,left:e.left,right:e.right}}function qa(e,t,n){let r=e.state,i=e.root.activeElement;r!=t&&e.updateState(t),i!=e.dom&&e.focus();try{return n()}finally{r!=t&&e.updateState(r),i!=e.dom&&i&&i.focus()}}function Ja(e,t,n){let r=t.selection,i=n==`up`?r.$from:r.$to;return qa(e,t,()=>{let{node:t}=e.docView.domFromPos(i.pos,n==`up`?-1:1);for(;;){let n=e.docView.nearestDesc(t,!0);if(!n)break;if(n.node.isBlock){t=n.contentDOM||n.dom;break}t=n.dom.parentNode}let r=Wa(e,i.pos,1);for(let e=t.firstChild;e;e=e.nextSibling){let t;if(e.nodeType==1)t=e.getClientRects();else if(e.nodeType==3)t=Wi(e,0,e.nodeValue.length).getClientRects();else continue;for(let e=0;e<t.length;e++){let i=t[e];if(i.bottom>i.top+1&&(n==`up`?r.top-i.top>(i.bottom-r.top)*2:i.bottom-r.bottom>(r.bottom-i.top)*2))return!1}}return!0})}var Ya=/[\u0590-\u08ac]/;function Xa(e,t,n){let{$head:r}=t.selection;if(!r.parent.isTextblock)return!1;let i=r.parentOffset,a=!i,o=i==r.parent.content.size,s=e.domSelection();return s?!Ya.test(r.parent.textContent)||!s.modify?n==`left`||n==`backward`?a:o:qa(e,t,()=>{let{focusNode:t,focusOffset:i,anchorNode:a,anchorOffset:o}=e.domSelectionRange(),c=s.caretBidiLevel;s.modify(`move`,n,`character`);let l=r.depth?e.docView.domAfterPos(r.before()):e.dom,{focusNode:u,focusOffset:d}=e.domSelectionRange(),f=u&&!l.contains(u.nodeType==1?u:u.parentNode)||t==u&&i==d;try{s.collapse(a,o),t&&(t!=a||i!=o)&&s.extend&&s.extend(t,i)}catch{}return c!=null&&(s.caretBidiLevel=c),f}):r.pos==r.start()||r.pos==r.end()}var Za=null,Qa=null,$a=!1;function eo(e,t,n){return Za==t&&Qa==n?$a:(Za=t,Qa=n,$a=n==`up`||n==`down`?Ja(e,t,n):Xa(e,t,n))}var to=0,no=1,ro=2,io=3,ao=class{constructor(e,t,n,r){this.parent=e,this.children=t,this.dom=n,this.contentDOM=r,this.dirty=to,n.pmViewDesc=this}matchesWidget(e){return!1}matchesMark(e){return!1}matchesNode(e,t,n){return!1}matchesHack(e){return!1}parseRule(){return null}stopEvent(e){return!1}get size(){let e=0;for(let t=0;t<this.children.length;t++)e+=this.children[t].size;return e}get border(){return 0}destroy(){this.parent=void 0,this.dom.pmViewDesc==this&&(this.dom.pmViewDesc=void 0);for(let e=0;e<this.children.length;e++)this.children[e].destroy()}posBeforeChild(e){for(let t=0,n=this.posAtStart;;t++){let r=this.children[t];if(r==e)return n;n+=r.size}}get posBefore(){return this.parent.posBeforeChild(this)}get posAtStart(){return this.parent?this.parent.posBeforeChild(this)+this.border:0}get posAfter(){return this.posBefore+this.size}get posAtEnd(){return this.posAtStart+this.size-2*this.border}localPosFromDOM(e,t,n){if(this.contentDOM&&this.contentDOM.contains(e.nodeType==1?e:e.parentNode))if(n<0){let n,r;if(e==this.contentDOM)n=e.childNodes[t-1];else{for(;e.parentNode!=this.contentDOM;)e=e.parentNode;n=e.previousSibling}for(;n&&!((r=n.pmViewDesc)&&r.parent==this);)n=n.previousSibling;return n?this.posBeforeChild(r)+r.size:this.posAtStart}else{let n,r;if(e==this.contentDOM)n=e.childNodes[t];else{for(;e.parentNode!=this.contentDOM;)e=e.parentNode;n=e.nextSibling}for(;n&&!((r=n.pmViewDesc)&&r.parent==this);)n=n.nextSibling;return n?this.posBeforeChild(r):this.posAtEnd}let r;if(e==this.dom&&this.contentDOM)r=t>Vi(this.contentDOM);else if(this.contentDOM&&this.contentDOM!=this.dom&&this.dom.contains(this.contentDOM))r=e.compareDocumentPosition(this.contentDOM)&2;else if(this.dom.firstChild){if(t==0)for(let t=e;;t=t.parentNode){if(t==this.dom){r=!1;break}if(t.previousSibling)break}if(r==null&&t==e.childNodes.length)for(let t=e;;t=t.parentNode){if(t==this.dom){r=!0;break}if(t.nextSibling)break}}return r??n>0?this.posAtEnd:this.posAtStart}nearestDesc(e,t=!1){for(let n=!0,r=e;r;r=r.parentNode){let i=this.getDesc(r),a;if(i&&(!t||i.node))if(n&&(a=i.nodeDOM)&&!(a.nodeType==1?a.contains(e.nodeType==1?e:e.parentNode):a==e))n=!1;else return i}}getDesc(e){let t=e.pmViewDesc;for(let e=t;e;e=e.parent)if(e==this)return t}posFromDOM(e,t,n){for(let r=e;r;r=r.parentNode){let i=this.getDesc(r);if(i)return i.localPosFromDOM(e,t,n)}return-1}descAt(e){for(let t=0,n=0;t<this.children.length;t++){let r=this.children[t],i=n+r.size;if(n==e&&i!=n){for(;!r.border&&r.children.length;)for(let e=0;e<r.children.length;e++){let t=r.children[e];if(t.size){r=t;break}}return r}if(e<i)return r.descAt(e-n-r.border);n=i}}domFromPos(e,t){if(!this.contentDOM)return{node:this.dom,offset:0,atom:e+1};let n=0,r=0;for(let t=0;n<this.children.length;n++){let i=this.children[n],a=t+i.size;if(a>e||i instanceof po){r=e-t;break}t=a}if(r)return this.children[n].domFromPos(r-this.children[n].border,t);for(let e;n&&!(e=this.children[n-1]).size&&e instanceof oo&&e.side>=0;n--);if(t<=0){let e,r=!0;for(;e=n?this.children[n-1]:null,!(!e||e.dom.parentNode==this.contentDOM);n--,r=!1);return e&&t&&r&&!e.border&&!e.domAtom?e.domFromPos(e.size,t):{node:this.contentDOM,offset:e?Vi(e.dom)+1:0}}else{let e,r=!0;for(;e=n<this.children.length?this.children[n]:null,!(!e||e.dom.parentNode==this.contentDOM);n++,r=!1);return e&&r&&!e.border&&!e.domAtom?e.domFromPos(0,t):{node:this.contentDOM,offset:e?Vi(e.dom):this.contentDOM.childNodes.length}}}parseRange(e,t,n=0){if(this.children.length==0)return{node:this.contentDOM,from:e,to:t,fromOffset:0,toOffset:this.contentDOM.childNodes.length};let r=-1,i=-1;for(let a=n,o=0;;o++){let n=this.children[o],s=a+n.size;if(r==-1&&e<=s){let i=a+n.border;if(e>=i&&t<=s-n.border&&n.node&&n.contentDOM&&this.contentDOM.contains(n.contentDOM))return n.parseRange(e,t,i);e=a;for(let t=o;t>0;t--){let n=this.children[t-1];if(n.size&&n.dom.parentNode==this.contentDOM&&!n.emptyChildAt(1)){r=Vi(n.dom)+1;break}e-=n.size}r==-1&&(r=0)}if(r>-1&&(s>t||o==this.children.length-1)){t=s;for(let e=o+1;e<this.children.length;e++){let n=this.children[e];if(n.size&&n.dom.parentNode==this.contentDOM&&!n.emptyChildAt(-1)){i=Vi(n.dom);break}t+=n.size}i==-1&&(i=this.contentDOM.childNodes.length);break}a=s}return{node:this.contentDOM,from:e,to:t,fromOffset:r,toOffset:i}}emptyChildAt(e){if(this.border||!this.contentDOM||!this.children.length)return!1;let t=this.children[e<0?0:this.children.length-1];return t.size==0||t.emptyChildAt(e)}domAfterPos(e){let{node:t,offset:n}=this.domFromPos(e,0);if(t.nodeType!=1||n==t.childNodes.length)throw RangeError(`No node after pos `+e);return t.childNodes[n]}setSelection(e,t,n,r=!1){let i=Math.min(e,t),a=Math.max(e,t);for(let o=0,s=0;o<this.children.length;o++){let c=this.children[o],l=s+c.size;if(i>s&&a<l)return c.setSelection(e-s-c.border,t-s-c.border,n,r);s=l}let o=this.domFromPos(e,e?-1:1),s=t==e?o:this.domFromPos(t,t?-1:1),c=n.root.getSelection(),l=n.domSelectionRange(),u=!1;if((fa||ga)&&e==t){let{node:e,offset:t}=o;if(e.nodeType==3){if(u=!!(t&&e.nodeValue[t-1]==`
`),u&&t==e.nodeValue.length)for(let t=e,n;t;t=t.parentNode){if(n=t.nextSibling){n.nodeName==`BR`&&(o=s={node:n.parentNode,offset:Vi(n)+1});break}let e=t.pmViewDesc;if(e&&e.node&&e.node.isBlock)break}}else{let n=e.childNodes[t-1];u=n&&(n.nodeName==`BR`||n.contentEditable==`false`)}}if(fa&&l.focusNode&&l.focusNode!=s.node&&l.focusNode.nodeType==1){let e=l.focusNode.childNodes[l.focusOffset];e&&e.contentEditable==`false`&&(r=!0)}if(!(r||u&&ga)&&Ki(o.node,o.offset,l.anchorNode,l.anchorOffset)&&Ki(s.node,s.offset,l.focusNode,l.focusOffset))return;let d=!1;if((c.extend||e==t)&&!(u&&fa)){c.collapse(o.node,o.offset);try{e!=t&&c.extend(s.node,s.offset),d=!0}catch{}}if(!d){if(e>t){let e=o;o=s,s=e}let n=document.createRange();n.setEnd(s.node,s.offset),n.setStart(o.node,o.offset),c.removeAllRanges(),c.addRange(n)}}ignoreMutation(e){return!this.contentDOM&&e.type!=`selection`}get contentLost(){return this.contentDOM&&this.contentDOM!=this.dom&&!this.dom.contains(this.contentDOM)}markDirty(e,t){for(let n=0,r=0;r<this.children.length;r++){let i=this.children[r],a=n+i.size;if(n==a?e<=a&&t>=n:e<a&&t>n){let r=n+i.border,o=a-i.border;if(e>=r&&t<=o){this.dirty=e==n||t==a?ro:no,e==r&&t==o&&(i.contentLost||i.dom.parentNode!=this.contentDOM)?i.dirty=io:i.markDirty(e-r,t-r);return}else i.dirty=i.dom==i.contentDOM&&i.dom.parentNode==this.contentDOM&&!i.children.length?ro:io}n=a}this.dirty=ro}markParentsDirty(){let e=1;for(let t=this.parent;t;t=t.parent,e++){let n=e==1?ro:no;t.dirty<n&&(t.dirty=n)}}get domAtom(){return!1}get ignoreForCoords(){return!1}get ignoreForSelection(){return!1}isText(e){return!1}},oo=class extends ao{constructor(e,t,n,r){let i,a=t.type.toDOM;if(typeof a==`function`&&(a=a(n,()=>{if(!i)return r;if(i.parent)return i.parent.posBeforeChild(i)})),!t.type.spec.raw){if(a.nodeType!=1){let e=document.createElement(`span`);e.appendChild(a),a=e}a.contentEditable=`false`,a.classList.add(`ProseMirror-widget`)}super(e,[],a,null),this.widget=t,this.widget=t,i=this}matchesWidget(e){return this.dirty==to&&e.type.eq(this.widget.type)}parseRule(){return{ignore:!0}}stopEvent(e){let t=this.widget.spec.stopEvent;return t?t(e):!1}ignoreMutation(e){return e.type!=`selection`||this.widget.spec.ignoreSelection}destroy(){this.widget.type.destroy(this.dom),super.destroy()}get domAtom(){return!0}get ignoreForSelection(){return!!this.widget.type.spec.relaxedSide}get side(){return this.widget.type.side}},so=class extends ao{constructor(e,t,n,r){super(e,[],t,null),this.textDOM=n,this.text=r}get size(){return this.text.length}localPosFromDOM(e,t){return e==this.textDOM?this.posAtStart+t:this.posAtStart+(t?this.size:0)}domFromPos(e){return{node:this.textDOM,offset:e}}ignoreMutation(e){return e.type===`characterData`&&e.target.nodeValue==e.oldValue}},co=class e extends ao{constructor(e,t,n,r,i){super(e,[],n,r),this.mark=t,this.spec=i}static create(t,n,r,i){let a=i.nodeViews[n.type.name],o=a&&a(n,i,r);return(!o||!o.dom)&&(o=vt.renderSpec(document,n.type.spec.toDOM(n,r),null,n.attrs)),new e(t,n,o.dom,o.contentDOM||o.dom,o)}parseRule(){return this.dirty&io||this.mark.type.spec.reparseInView?null:{mark:this.mark.type.name,attrs:this.mark.attrs,contentElement:this.contentDOM}}matchesMark(e){return this.dirty!=io&&this.mark.eq(e)}markDirty(e,t){if(super.markDirty(e,t),this.dirty!=to){let e=this.parent;for(;!e.node;)e=e.parent;e.dirty<this.dirty&&(e.dirty=this.dirty),this.dirty=to}}slice(t,n,r){let i=e.create(this.parent,this.mark,!0,r),a=this.children,o=this.size;n<o&&(a=Ao(a,n,o,r)),t>0&&(a=Ao(a,0,t,r));for(let e=0;e<a.length;e++)a[e].parent=i;return i.children=a,i}ignoreMutation(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):super.ignoreMutation(e)}destroy(){this.spec.destroy&&this.spec.destroy(),super.destroy()}},lo=class e extends ao{constructor(e,t,n,r,i,a,o){super(e,[],i,a),this.node=t,this.outerDeco=n,this.innerDeco=r,this.nodeDOM=o}static create(t,n,r,i,a,o){let s=a.nodeViews[n.type.name],c,l=s&&s(n,a,()=>{if(!c)return o;if(c.parent)return c.parent.posBeforeChild(c)},r,i),u=l&&l.dom,d=l&&l.contentDOM;if(n.isText){if(!u)u=document.createTextNode(n.text);else if(u.nodeType!=3)throw RangeError(`Text must be rendered as a DOM text node`)}else if(!u){let e=vt.renderSpec(document,n.type.spec.toDOM(n),null,n.attrs);({dom:u,contentDOM:d}=e)}!d&&!n.isText&&u.nodeName!=`BR`&&(u.hasAttribute(`contenteditable`)||(u.contentEditable=`false`),n.type.spec.draggable&&(u.draggable=!0));let f=u;return u=xo(u,r,n),l?c=new mo(t,n,r,i,u,d||null,f,l):n.isText?new fo(t,n,r,i,u,f):new e(t,n,r,i,u,d||null,f)}parseRule(){if(this.node.type.spec.reparseInView)return null;let e={node:this.node.type.name,attrs:this.node.attrs};if(this.node.type.whitespace==`pre`&&(e.preserveWhitespace=`full`),!this.contentDOM)e.getContent=()=>this.node.content;else if(!this.contentLost)e.contentElement=this.contentDOM;else{for(let t=this.children.length-1;t>=0;t--){let n=this.children[t];if(this.dom.contains(n.dom.parentNode)){e.contentElement=n.dom.parentNode;break}}e.contentElement||(e.getContent=()=>P.empty)}return e}matchesNode(e,t,n){return this.dirty==to&&e.eq(this.node)&&So(t,this.outerDeco)&&n.eq(this.innerDeco)}get size(){return this.node.nodeSize}get border(){return+!this.node.isLeaf}updateChildren(e,t){let n=this.node.inlineContent,r=t,i=e.composing?this.localCompositionInfo(e,t):null,a=i&&i.pos>-1?i:null,o=i&&i.pos<0,s=new wo(this,a&&a.node,e);Do(this.node,this.innerDeco,(t,i,a)=>{t.spec.marks?s.syncToMarks(t.spec.marks,n,e,i):t.type.side>=0&&!a&&s.syncToMarks(i==this.node.childCount?I.none:this.node.child(i).marks,n,e,i),s.placeWidget(t,e,r)},(t,a,c,l)=>{s.syncToMarks(t.marks,n,e,l);let u;s.findNodeMatch(t,a,c,l)||o&&e.state.selection.from>r&&e.state.selection.to<r+t.nodeSize&&(u=s.findIndexWithChild(i.node))>-1&&s.updateNodeAt(t,a,c,u,e)||s.updateNextNode(t,a,c,e,l,r)||s.addNode(t,a,c,e,r),r+=t.nodeSize}),s.syncToMarks([],n,e,0),this.node.isTextblock&&s.addTextblockHacks(),s.destroyRest(),(s.changed||this.dirty==ro)&&(a&&this.protectLocalComposition(e,a),ho(this.contentDOM,this.children,e),_a&&Oo(this.dom))}localCompositionInfo(e,t){let{from:n,to:r}=e.state.selection;if(!(e.state.selection instanceof J)||n<t||r>t+this.node.content.size)return null;let i=e.input.compositionNode;if(!i||!this.dom.contains(i.parentNode))return null;if(this.node.inlineContent){let e=i.nodeValue,a=ko(this.node.content,e,n-t,r-t);return a<0?null:{node:i,pos:a,text:e}}else return{node:i,pos:-1,text:``}}protectLocalComposition(e,{node:t,pos:n,text:r}){if(this.getDesc(t))return;let i=t;for(;i.parentNode!=this.contentDOM;i=i.parentNode){for(;i.previousSibling;)i.parentNode.removeChild(i.previousSibling);for(;i.nextSibling;)i.parentNode.removeChild(i.nextSibling);i.pmViewDesc&&=void 0}let a=new so(this,i,t,r);e.input.compositionNodes.push(a),this.children=Ao(this.children,n,n+r.length,e,a)}update(e,t,n,r){return this.dirty==io||!e.sameMarkup(this.node)?!1:(this.updateInner(e,t,n,r),!0)}updateInner(e,t,n,r){this.updateOuterDeco(t),this.node=e,this.innerDeco=n,this.contentDOM&&this.updateChildren(r,this.posAtStart),this.dirty=to}updateOuterDeco(e){if(So(e,this.outerDeco))return;let t=this.nodeDOM.nodeType!=1,n=this.dom;this.dom=yo(this.dom,this.nodeDOM,vo(this.outerDeco,this.node,t),vo(e,this.node,t)),this.dom!=n&&(n.pmViewDesc=void 0,this.dom.pmViewDesc=this),this.outerDeco=e}selectNode(){this.nodeDOM.nodeType==1&&(this.nodeDOM.classList.add(`ProseMirror-selectednode`),(this.contentDOM||!this.node.type.spec.draggable)&&(this.nodeDOM.draggable=!0))}deselectNode(){this.nodeDOM.nodeType==1&&(this.nodeDOM.classList.remove(`ProseMirror-selectednode`),(this.contentDOM||!this.node.type.spec.draggable)&&this.nodeDOM.removeAttribute(`draggable`))}get domAtom(){return this.node.isAtom}};function uo(e,t,n,r,i){xo(r,t,e);let a=new lo(void 0,e,t,n,r,r,r);return a.contentDOM&&a.updateChildren(i,0),a}var fo=class e extends lo{constructor(e,t,n,r,i,a){super(e,t,n,r,i,null,a)}parseRule(){let e=this.nodeDOM.parentNode;for(;e&&e!=this.dom&&!e.pmIsDeco;)e=e.parentNode;return{skip:e||!0}}update(e,t,n,r){return this.dirty==io||this.dirty!=to&&!this.inParent()||!e.sameMarkup(this.node)?!1:(this.updateOuterDeco(t),(this.dirty!=to||e.text!=this.node.text)&&e.text!=this.nodeDOM.nodeValue&&(this.nodeDOM.nodeValue=e.text,r.trackWrites==this.nodeDOM&&(r.trackWrites=null)),this.node=e,this.dirty=to,!0)}inParent(){let e=this.parent.contentDOM;for(let t=this.nodeDOM;t;t=t.parentNode)if(t==e)return!0;return!1}domFromPos(e){return{node:this.nodeDOM,offset:e}}localPosFromDOM(e,t,n){return e==this.nodeDOM?this.posAtStart+Math.min(t,this.node.text.length):super.localPosFromDOM(e,t,n)}ignoreMutation(e){return e.type!=`characterData`&&e.type!=`selection`}slice(t,n,r){let i=this.node.cut(t,n),a=document.createTextNode(i.text);return new e(this.parent,i,this.outerDeco,this.innerDeco,a,a)}markDirty(e,t){super.markDirty(e,t),this.dom!=this.nodeDOM&&(e==0||t==this.nodeDOM.nodeValue.length)&&(this.dirty=io)}get domAtom(){return!1}isText(e){return this.node.text==e}},po=class extends ao{parseRule(){return{ignore:!0}}matchesHack(e){return this.dirty==to&&this.dom.nodeName==e}get domAtom(){return!0}get ignoreForCoords(){return this.dom.nodeName==`IMG`}},mo=class extends lo{constructor(e,t,n,r,i,a,o,s){super(e,t,n,r,i,a,o),this.spec=s}update(e,t,n,r){if(this.dirty==io)return!1;if(this.spec.update&&(this.node.type==e.type||this.spec.multiType)){let i=this.spec.update(e,t,n);return i&&this.updateInner(e,t,n,r),i}else if(!this.contentDOM&&!e.isLeaf)return!1;else return super.update(e,t,n,r)}selectNode(){this.spec.selectNode?this.spec.selectNode():super.selectNode()}deselectNode(){this.spec.deselectNode?this.spec.deselectNode():super.deselectNode()}setSelection(e,t,n,r){this.spec.setSelection?this.spec.setSelection(e,t,n.root):super.setSelection(e,t,n,r)}destroy(){this.spec.destroy&&this.spec.destroy(),super.destroy()}stopEvent(e){return this.spec.stopEvent?this.spec.stopEvent(e):!1}ignoreMutation(e){return this.spec.ignoreMutation?this.spec.ignoreMutation(e):super.ignoreMutation(e)}};function ho(e,t,n){let r=e.firstChild,i=!1;for(let a=0;a<t.length;a++){let o=t[a],s=o.dom;if(s.parentNode==e){for(;s!=r;)r=Co(r),i=!0;r=r.nextSibling}else i=!0,e.insertBefore(s,r);if(o instanceof co){let t=r?r.previousSibling:e.lastChild;ho(o.contentDOM,o.children,n),r=t?t.nextSibling:e.firstChild}}for(;r;)r=Co(r),i=!0;i&&n.trackWrites==e&&(n.trackWrites=null)}var go=function(e){e&&(this.nodeName=e)};go.prototype=Object.create(null);var _o=[new go];function vo(e,t,n){if(e.length==0)return _o;let r=n?_o[0]:new go,i=[r];for(let a=0;a<e.length;a++){let o=e[a].type.attrs;if(o){o.nodeName&&i.push(r=new go(o.nodeName));for(let e in o){let a=o[e];a!=null&&(n&&i.length==1&&i.push(r=new go(t.isInline?`span`:`div`)),e==`class`?r.class=(r.class?r.class+` `:``)+a:e==`style`?r.style=(r.style?r.style+`;`:``)+a:e!=`nodeName`&&(r[e]=a))}}}return i}function yo(e,t,n,r){if(n==_o&&r==_o)return t;let i=t;for(let t=0;t<r.length;t++){let a=r[t],o=n[t];if(t){let t;o&&o.nodeName==a.nodeName&&i!=e&&(t=i.parentNode)&&t.nodeName.toLowerCase()==a.nodeName?i=t:(t=document.createElement(a.nodeName),t.pmIsDeco=!0,t.appendChild(i),o=_o[0],i=t)}bo(i,o||_o[0],a)}return i}function bo(e,t,n){for(let r in t)r!=`class`&&r!=`style`&&r!=`nodeName`&&!(r in n)&&e.removeAttribute(r);for(let r in n)r!=`class`&&r!=`style`&&r!=`nodeName`&&n[r]!=t[r]&&e.setAttribute(r,n[r]);if(t.class!=n.class){let r=t.class?t.class.split(` `).filter(Boolean):[],i=n.class?n.class.split(` `).filter(Boolean):[];for(let t=0;t<r.length;t++)i.indexOf(r[t])==-1&&e.classList.remove(r[t]);for(let t=0;t<i.length;t++)r.indexOf(i[t])==-1&&e.classList.add(i[t]);e.classList.length==0&&e.removeAttribute(`class`)}if(t.style!=n.style){if(t.style){let n=/\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g,r;for(;r=n.exec(t.style);)e.style.removeProperty(r[1])}n.style&&(e.style.cssText+=n.style)}}function xo(e,t,n){return yo(e,e,_o,vo(t,n,e.nodeType!=1))}function So(e,t){if(e.length!=t.length)return!1;for(let n=0;n<e.length;n++)if(!e[n].type.eq(t[n].type))return!1;return!0}function Co(e){let t=e.nextSibling;return e.parentNode.removeChild(e),t}var wo=class{constructor(e,t,n){this.lock=t,this.view=n,this.index=0,this.stack=[],this.changed=!1,this.top=e,this.preMatch=To(e.node.content,e)}destroyBetween(e,t){if(e!=t){for(let n=e;n<t;n++)this.top.children[n].destroy();this.top.children.splice(e,t-e),this.changed=!0}}destroyRest(){this.destroyBetween(this.index,this.top.children.length)}syncToMarks(e,t,n,r){let i=0,a=this.stack.length>>1,o=Math.min(a,e.length);for(;i<o&&(i==a-1?this.top:this.stack[i+1<<1]).matchesMark(e[i])&&e[i].type.spec.spanning!==!1;)i++;for(;i<a;)this.destroyRest(),this.top.dirty=to,this.index=this.stack.pop(),this.top=this.stack.pop(),a--;for(;a<e.length;){this.stack.push(this.top,this.index+1);let i=-1,o=this.top.children.length;r<this.preMatch.index&&(o=Math.min(this.index+3,o));for(let t=this.index;t<o;t++){let n=this.top.children[t];if(n.matchesMark(e[a])&&!this.isLocked(n.dom)){i=t;break}}if(i<0&&this.index<this.top.children.length){let t=this.top.children[this.index];t instanceof co&&t.dirty!=io&&t.mark.type==e[a].type&&t.spec.update&&!this.isLocked(t.dom)&&t.spec.update(e[a])&&(t.mark=e[a],i=this.index,this.changed=!0)}if(i>-1)i>this.index&&(this.changed=!0,this.destroyBetween(this.index,i)),this.top=this.top.children[this.index];else{let r=co.create(this.top,e[a],t,n);this.top.children.splice(this.index,0,r),this.top=r,this.changed=!0}this.index=0,a++}}findNodeMatch(e,t,n,r){let i=-1,a;if(r>=this.preMatch.index&&(a=this.preMatch.matches[r-this.preMatch.index]).parent==this.top&&a.matchesNode(e,t,n))i=this.top.children.indexOf(a,this.index);else for(let r=this.index,a=Math.min(this.top.children.length,r+5);r<a;r++){let a=this.top.children[r];if(a.matchesNode(e,t,n)&&!this.preMatch.matched.has(a)){i=r;break}}return i<0?!1:(this.destroyBetween(this.index,i),this.index++,!0)}updateNodeAt(e,t,n,r,i){let a=this.top.children[r];return a.dirty==io&&a.dom==a.contentDOM&&(a.dirty=ro),a.update(e,t,n,i)?(this.destroyBetween(this.index,r),this.index++,!0):!1}findIndexWithChild(e){for(;;){let t=e.parentNode;if(!t)return-1;if(t==this.top.contentDOM){let t=e.pmViewDesc;if(t){for(let e=this.index;e<this.top.children.length;e++)if(this.top.children[e]==t)return e}return-1}e=t}}updateNextNode(e,t,n,r,i,a){for(let o=this.index;o<this.top.children.length;o++){let s=this.top.children[o];if(s instanceof lo){let c=this.preMatch.matched.get(s);if(c!=null&&c!=i)return!1;let l=s.dom,u,d=this.isLocked(l)&&!(e.isText&&s.node&&s.node.isText&&s.nodeDOM.nodeValue==e.text&&s.dirty!=io&&So(t,s.outerDeco));if(!d&&s.update(e,t,n,r))return this.destroyBetween(this.index,o),s.dom!=l&&(this.changed=!0),this.index++,!0;if(!d&&(u=this.recreateWrapper(s,e,t,n,r,a)))return this.destroyBetween(this.index,o),this.top.children[this.index]=u,u.contentDOM&&(u.dirty=ro,u.updateChildren(r,a+1),u.dirty=to),this.changed=!0,this.index++,!0;break}}return!1}recreateWrapper(e,t,n,r,i,a){if(e.dirty||t.isAtom||!e.children.length||!e.node.content.eq(t.content)||!So(n,e.outerDeco)||!r.eq(e.innerDeco))return null;let o=lo.create(this.top,t,n,r,i,a);if(o.contentDOM){o.children=e.children,e.children=[];for(let e of o.children)e.parent=o}return e.destroy(),o}addNode(e,t,n,r,i){let a=lo.create(this.top,e,t,n,r,i);a.contentDOM&&a.updateChildren(r,i+1),this.top.children.splice(this.index++,0,a),this.changed=!0}placeWidget(e,t,n){let r=this.index<this.top.children.length?this.top.children[this.index]:null;if(r&&r.matchesWidget(e)&&(e==r.widget||!r.widget.type.toDOM.parentNode))this.index++;else{let r=new oo(this.top,e,t,n);this.top.children.splice(this.index++,0,r),this.changed=!0}}addTextblockHacks(){let e=this.top.children[this.index-1],t=this.top;for(;e instanceof co;)t=e,e=t.children[t.children.length-1];(!e||!(e instanceof fo)||/\n$/.test(e.node.text)||this.view.requiresGeckoHackNode&&/\s$/.test(e.node.text))&&((ga||ma)&&e&&e.dom.contentEditable==`false`&&this.addHackNode(`IMG`,t),this.addHackNode(`BR`,this.top))}addHackNode(e,t){if(t==this.top&&this.index<t.children.length&&t.children[this.index].matchesHack(e))this.index++;else{let n=document.createElement(e);e==`IMG`&&(n.className=`ProseMirror-separator`,n.alt=``),e==`BR`&&(n.className=`ProseMirror-trailingBreak`);let r=new po(this.top,[],n,null);t==this.top?t.children.splice(this.index++,0,r):t.children.push(r),this.changed=!0}}isLocked(e){return this.lock&&(e==this.lock||e.nodeType==1&&e.contains(this.lock.parentNode))}};function To(e,t){let n=t,r=n.children.length,i=e.childCount,a=new Map,o=[];outer:for(;i>0;){let s;for(;;)if(r){let e=n.children[r-1];if(e instanceof co)n=e,r=e.children.length;else{s=e,r--;break}}else if(n==t)break outer;else r=n.parent.children.indexOf(n),n=n.parent;let c=s.node;if(c){if(c!=e.child(i-1))break;--i,a.set(s,i),o.push(s)}}return{index:i,matched:a,matches:o.reverse()}}function Eo(e,t){return e.type.side-t.type.side}function Do(e,t,n,r){let i=t.locals(e),a=0;if(i.length==0){for(let n=0;n<e.childCount;n++){let o=e.child(n);r(o,i,t.forChild(a,o),n),a+=o.nodeSize}return}let o=0,s=[],c=null;for(let l=0;;){let u,d;for(;o<i.length&&i[o].to==a;){let e=i[o++];e.widget&&(u?(d||=[u]).push(e):u=e)}if(u)if(d){d.sort(Eo);for(let e=0;e<d.length;e++)n(d[e],l,!!c)}else n(u,l,!!c);let f,p;if(c)p=-1,f=c,c=null;else if(l<e.childCount)p=l,f=e.child(l++);else break;for(let e=0;e<s.length;e++)s[e].to<=a&&s.splice(e--,1);for(;o<i.length&&i[o].from<=a&&i[o].to>a;)s.push(i[o++]);let m=a+f.nodeSize;if(f.isText){let e=m;o<i.length&&i[o].from<e&&(e=i[o].from);for(let t=0;t<s.length;t++)s[t].to<e&&(e=s[t].to);e<m&&(c=f.cut(e-a),f=f.cut(0,e-a),m=e,p=-1)}else for(;o<i.length&&i[o].to<m;)o++;let h=f.isInline&&!f.isLeaf?s.filter(e=>!e.inline):s.slice();r(f,h,t.forChild(a,f),p),a=m}}function Oo(e){if(e.nodeName==`UL`||e.nodeName==`OL`){let t=e.style.cssText;e.style.cssText=t+`; list-style: square !important`,window.getComputedStyle(e).listStyle,e.style.cssText=t}}function ko(e,t,n,r){for(let i=0,a=0;i<e.childCount&&a<=r;){let o=e.child(i++),s=a;if(a+=o.nodeSize,!o.isText)continue;let c=o.text;for(;i<e.childCount;){let t=e.child(i++);if(a+=t.nodeSize,!t.isText)break;c+=t.text}if(a>=n){if(a>=r&&c.slice(r-t.length-s,r-s)==t)return r-t.length;let e=s<r?c.lastIndexOf(t,r-s-1):-1;if(e>=0&&e+t.length+s>=n)return s+e;if(n==r&&c.length>=r+t.length-s&&c.slice(r-s,r-s+t.length)==t)return r}}return-1}function Ao(e,t,n,r,i){let a=[];for(let o=0,s=0;o<e.length;o++){let c=e[o],l=s,u=s+=c.size;l>=n||u<=t?a.push(c):(l<t&&a.push(c.slice(0,t-l,r)),i&&=(a.push(i),void 0),u>n&&a.push(c.slice(n-l,c.size,r)))}return a}function jo(e,t=null){let n=e.domSelectionRange(),r=e.state.doc;if(!n.focusNode)return null;let i=e.docView.nearestDesc(n.focusNode),a=i&&i.size==0,o=e.docView.posFromDOM(n.focusNode,n.focusOffset,1);if(o<0)return null;let s=r.resolve(o),c,l;if(ea(n)){for(c=o;i&&!i.node;)i=i.parent;let e=i.node;if(i&&e.isAtom&&Y.isSelectable(e)&&i.parent&&!(e.isInline&&Qi(n.focusNode,n.focusOffset,i.dom))){let e=i.posBefore;l=new Y(o==e?s:r.resolve(e))}}else{if(n instanceof e.dom.ownerDocument.defaultView.Selection&&n.rangeCount>1){let t=o,i=o;for(let r=0;r<n.rangeCount;r++){let a=n.getRangeAt(r);t=Math.min(t,e.docView.posFromDOM(a.startContainer,a.startOffset,1)),i=Math.max(i,e.docView.posFromDOM(a.endContainer,a.endOffset,-1))}if(t<0)return null;[c,o]=i==e.state.selection.anchor?[i,t]:[t,i],s=r.resolve(o)}else c=e.docView.posFromDOM(n.anchorNode,n.anchorOffset,1);if(c<0)return null}let u=r.resolve(c);if(!l){let n=t==`pointer`||e.state.selection.head<s.pos&&!a?1:-1;l=Ho(e,u,s,n)}return l}function Mo(e){return e.editable?e.hasFocus():Wo(e)&&document.activeElement&&document.activeElement.contains(e.dom)}function No(e,t=!1){let n=e.state.selection;if(Bo(e,n),!Mo(e))return;let r=e.input.mouseDown;if(!t&&ma&&r){let t=e.domSelectionRange(),n=e.domObserver.currentSelection;if(t.anchorNode&&n.anchorNode&&Ki(t.anchorNode,t.anchorOffset,n.anchorNode,n.anchorOffset)&&r.delaySelUpdate()){e.domObserver.setCurSelection();return}}if(e.domObserver.disconnectSelection(),e.cursorWrapper)zo(e);else{let{anchor:r,head:i}=n,a,o;Po&&!(n instanceof J)&&(n.$from.parent.inlineContent||(a=Fo(e,n.from)),!n.empty&&!n.$from.parent.inlineContent&&(o=Fo(e,n.to))),e.docView.setSelection(r,i,e,t),Po&&(a&&Lo(a),o&&Lo(o)),n.visible?e.dom.classList.remove(`ProseMirror-hideselection`):(e.dom.classList.add(`ProseMirror-hideselection`),`onselectionchange`in document&&Ro(e))}e.domObserver.setCurSelection(),e.domObserver.connectSelection()}var Po=ga||ma&&ha<63;function Fo(e,t){let{node:n,offset:r}=e.docView.domFromPos(t,0),i=r<n.childNodes.length?n.childNodes[r]:null,a=r?n.childNodes[r-1]:null;if(ga&&i&&i.contentEditable==`false`)return Io(i);if((!i||i.contentEditable==`false`)&&(!a||a.contentEditable==`false`)){if(i)return Io(i);if(a)return Io(a)}}function Io(e){return e.contentEditable=`true`,ga&&e.draggable&&(e.draggable=!1,e.wasDraggable=!0),e}function Lo(e){e.contentEditable=`false`,e.wasDraggable&&=(e.draggable=!0,null)}function Ro(e){let t=e.dom.ownerDocument;t.removeEventListener(`selectionchange`,e.input.hideSelectionGuard);let n=e.domSelectionRange(),r=n.anchorNode,i=n.anchorOffset;t.addEventListener(`selectionchange`,e.input.hideSelectionGuard=()=>{(n.anchorNode!=r||n.anchorOffset!=i)&&(t.removeEventListener(`selectionchange`,e.input.hideSelectionGuard),setTimeout(()=>{(!Mo(e)||e.state.selection.visible)&&e.dom.classList.remove(`ProseMirror-hideselection`)},20))})}function zo(e){let t=e.domSelection();if(!t)return;let n=e.cursorWrapper.dom,r=n.nodeName==`IMG`;r?t.collapse(n.parentNode,Vi(n)+1):t.collapse(n,0),!r&&!e.state.selection.visible&&ua&&da<=11&&(n.disabled=!0,n.disabled=!1)}function Bo(e,t){if(t instanceof Y){let n=e.docView.descAt(t.from);n!=e.lastSelectedViewDesc&&(Vo(e),n&&n.selectNode(),e.lastSelectedViewDesc=n)}else Vo(e)}function Vo(e){e.lastSelectedViewDesc&&=(e.lastSelectedViewDesc.parent&&e.lastSelectedViewDesc.deselectNode(),void 0)}function Ho(e,t,n,r){return e.someProp(`createSelectionBetween`,r=>r(e,t,n))||J.between(t,n,r)}function Uo(e){return e.editable&&!e.hasFocus()?!1:Wo(e)}function Wo(e){let t=e.domSelectionRange();if(!t.anchorNode)return!1;try{return e.dom.contains(t.anchorNode.nodeType==3?t.anchorNode.parentNode:t.anchorNode)&&(e.editable||e.dom.contains(t.focusNode.nodeType==3?t.focusNode.parentNode:t.focusNode))}catch{return!1}}function Go(e){let t=e.docView.domFromPos(e.state.selection.anchor,0),n=e.domSelectionRange();return Ki(t.node,t.offset,n.anchorNode,n.anchorOffset)}function Ko(e,t){let{$anchor:n,$head:r}=e.selection,i=t>0?n.max(r):n.min(r),a=i.parent.inlineContent?i.depth?e.doc.resolve(t>0?i.after():i.before()):null:i;return a&&q.findFrom(a,t)}function qo(e,t){return e.dispatch(e.state.tr.setSelection(t).scrollIntoView()),!0}function Jo(e,t,n){let r=e.state.selection;if(r instanceof J){if(n.indexOf(`s`)>-1){let{$head:n}=r,i=n.textOffset?null:t<0?n.nodeBefore:n.nodeAfter;if(!i||i.isText||!i.isLeaf)return!1;let a=e.state.doc.resolve(n.pos+i.nodeSize*(t<0?-1:1));return qo(e,new J(r.$anchor,a))}else if(!r.empty)return!1;else if(e.endOfTextblock(t>0?`forward`:`backward`)){let n=Ko(e.state,t);return n&&n instanceof Y?qo(e,n):!1}else if(!(va&&n.indexOf(`m`)>-1)){let n=r.$head,i=n.textOffset?null:t<0?n.nodeBefore:n.nodeAfter,a;if(!i||i.isText)return!1;let o=t<0?n.pos-i.nodeSize:n.pos;return i.isAtom||(a=e.docView.descAt(o))&&!a.contentDOM?Y.isSelectable(i)?qo(e,new Y(t<0?e.state.doc.resolve(n.pos-i.nodeSize):n)):xa?qo(e,new J(e.state.doc.resolve(t<0?o:o+i.nodeSize))):!1:!1}}else if(r instanceof Y&&r.node.isInline)return qo(e,new J(t>0?r.$to:r.$from));else{let n=Ko(e.state,t);return n?qo(e,n):!1}}function Yo(e){return e.nodeType==3?e.nodeValue.length:e.childNodes.length}function Xo(e,t){let n=e.pmViewDesc;return n&&n.size==0&&(t<0||e.nextSibling||e.nodeName!=`BR`)}function Zo(e,t){return t<0?Qo(e):$o(e)}function Qo(e){let t=e.domSelectionRange(),n=t.focusNode,r=t.focusOffset;if(!n)return;let i,a,o=!1;for(fa&&n.nodeType==1&&r<Yo(n)&&Xo(n.childNodes[r],-1)&&(o=!0);;)if(r>0){if(n.nodeType!=1)break;{let e=n.childNodes[r-1];if(Xo(e,-1))i=n,a=--r;else if(e.nodeType==3)n=e,r=n.nodeValue.length;else break}}else if(es(n))break;else{let t=n.previousSibling;for(;t&&Xo(t,-1);)i=n.parentNode,a=Vi(t),t=t.previousSibling;if(t)n=t,r=Yo(n);else{if(n=n.parentNode,n==e.dom)break;r=0}}o?rs(e,n,r):i&&rs(e,i,a)}function $o(e){let t=e.domSelectionRange(),n=t.focusNode,r=t.focusOffset;if(!n)return;let i=Yo(n),a,o;for(;;)if(r<i){if(n.nodeType!=1)break;let e=n.childNodes[r];if(Xo(e,1))a=n,o=++r;else break}else if(es(n))break;else{let t=n.nextSibling;for(;t&&Xo(t,1);)a=t.parentNode,o=Vi(t)+1,t=t.nextSibling;if(t)n=t,r=0,i=Yo(n);else{if(n=n.parentNode,n==e.dom)break;r=i=0}}a&&rs(e,a,o)}function es(e){let t=e.pmViewDesc;return t&&t.node&&t.node.isBlock}function ts(e,t){for(;e&&t==e.childNodes.length&&!$i(e);)t=Vi(e)+1,e=e.parentNode;for(;e&&t<e.childNodes.length;){let n=e.childNodes[t];if(n.nodeType==3)return n;if(n.nodeType==1&&n.contentEditable==`false`)break;e=n,t=0}}function ns(e,t){for(;e&&!t&&!$i(e);)t=Vi(e),e=e.parentNode;for(;e&&t;){let n=e.childNodes[t-1];if(n.nodeType==3)return n;if(n.nodeType==1&&n.contentEditable==`false`)break;e=n,t=e.childNodes.length}}function rs(e,t,n){if(t.nodeType!=3){let e,r;(r=ts(t,n))?(t=r,n=0):(e=ns(t,n))&&(t=e,n=e.nodeValue.length)}let r=e.domSelection();if(!r)return;if(ea(r)){let e=document.createRange();e.setEnd(t,n),e.setStart(t,n),r.removeAllRanges(),r.addRange(e)}else r.extend&&r.extend(t,n);e.domObserver.setCurSelection();let{state:i}=e;setTimeout(()=>{e.state==i&&No(e)},50)}function is(e,t){let n=e.state.doc.resolve(t);if(!(ma||ya)&&n.parent.inlineContent){let r=e.coordsAtPos(t);if(t>n.start()){let n=e.coordsAtPos(t-1),i=(n.top+n.bottom)/2;if(i>r.top&&i<r.bottom&&Math.abs(n.left-r.left)>1)return n.left<r.left?`ltr`:`rtl`}if(t<n.end()){let n=e.coordsAtPos(t+1),i=(n.top+n.bottom)/2;if(i>r.top&&i<r.bottom&&Math.abs(n.left-r.left)>1)return n.left>r.left?`ltr`:`rtl`}}return getComputedStyle(e.dom).direction==`rtl`?`rtl`:`ltr`}function as(e,t,n){let r=e.state.selection;if(r instanceof J&&!r.empty||n.indexOf(`s`)>-1||va&&n.indexOf(`m`)>-1)return!1;let{$from:i,$to:a}=r;if(!i.parent.inlineContent||e.endOfTextblock(t<0?`up`:`down`)){let n=Ko(e.state,t);if(n&&n instanceof Y)return qo(e,n)}if(!i.parent.inlineContent){let n=t<0?i:a,o=r instanceof Ci?q.near(n,t):q.findFrom(n,t);return o?qo(e,o):!1}return!1}function ss(e,t){if(!(e.state.selection instanceof J))return!0;let{$head:n,$anchor:r,empty:i}=e.state.selection;if(!n.sameParent(r))return!0;if(!i)return!1;if(e.endOfTextblock(t>0?`forward`:`backward`))return!0;let a=!n.textOffset&&(t<0?n.nodeBefore:n.nodeAfter);if(a&&!a.isText){let r=e.state.tr;return t<0?r.delete(n.pos-a.nodeSize,n.pos):r.delete(n.pos,n.pos+a.nodeSize),e.dispatch(r),!0}return!1}function cs(e,t,n){e.domObserver.stop(),t.contentEditable=n,e.domObserver.start()}function ls(e){if(!ga||e.state.selection.$head.parentOffset>0)return!1;let{focusNode:t,focusOffset:n}=e.domSelectionRange();if(t&&t.nodeType==1&&n==0&&t.firstChild&&t.firstChild.contentEditable==`false`){let n=t.firstChild;cs(e,n,`true`),setTimeout(()=>cs(e,n,`false`),20)}return!1}function us(e){let t=``;return e.ctrlKey&&(t+=`c`),e.metaKey&&(t+=`m`),e.altKey&&(t+=`a`),e.shiftKey&&(t+=`s`),t}function ds(e,t){let n=t.keyCode,r=us(t);if(n==8||va&&n==72&&r==`c`)return ss(e,-1)||Zo(e,-1);if(n==46&&!t.shiftKey||va&&n==68&&r==`c`)return ss(e,1)||Zo(e,1);if(n==13||n==27)return!0;if(n==37||va&&n==66&&r==`c`){let t=n==37?is(e,e.state.selection.from)==`ltr`?-1:1:-1;return Jo(e,t,r)||Zo(e,t)}else if(n==39||va&&n==70&&r==`c`){let t=n==39?is(e,e.state.selection.from)==`ltr`?1:-1:1;return Jo(e,t,r)||Zo(e,t)}else if(n==38||va&&n==80&&r==`c`)return as(e,-1,r)||Zo(e,-1);else if(n==40||va&&n==78&&r==`c`)return ls(e)||as(e,1,r)||Zo(e,1);else if(r==(va?`m`:`c`)&&(n==66||n==73||n==89||n==90))return!0;return!1}function fs(e,t){e.someProp(`transformCopied`,n=>{t=n(t,e)});let n=[],{content:r,openStart:i,openEnd:a}=t;for(;i>1&&a>1&&r.childCount==1&&r.firstChild.childCount==1;){i--,a--;let e=r.firstChild;n.push(e.type.name,e.attrs==e.type.defaultAttrs?null:e.attrs),r=e.content}let o=e.someProp(`clipboardSerializer`)||vt.fromSchema(e.state.schema),s=Ss(),c=s.createElement(`div`);c.appendChild(o.serializeFragment(r,{document:s}));let l=c.firstChild,u,d=0;for(;l&&l.nodeType==1&&(u=xs[l.nodeName.toLowerCase()]);){for(let e=u.length-1;e>=0;e--){let t=s.createElement(u[e]);for(;c.firstChild;)t.appendChild(c.firstChild);c.appendChild(t),d++}l=c.firstChild}return l&&l.nodeType==1&&l.setAttribute(`data-pm-slice`,`${i} ${a}${d?` -${d}`:``} ${JSON.stringify(n)}`),{dom:c,text:e.someProp(`clipboardTextSerializer`,n=>n(t,e))||t.content.textBetween(0,t.content.size,`

`),slice:t}}function ps(e,t,n,r,i){let a=i.parent.type.spec.code,o,s;if(!n&&!t)return null;let c=!!t&&(r||a||!n);if(c){if(e.someProp(`transformPastedText`,n=>{t=n(t,a||r,e)}),a)return s=new L(P.from(e.state.schema.text(t.replace(/\r\n?/g,`
`))),0,0),e.someProp(`transformPasted`,t=>{s=t(s,e,!0)}),s;let n=e.someProp(`clipboardTextParser`,n=>n(t,i,r,e));if(n)s=n;else{let n=i.marks(),{schema:r}=e.state,a=vt.fromSchema(r);o=document.createElement(`div`),t.split(/(?:\r\n?|\n)+/).forEach(e=>{let t=o.appendChild(document.createElement(`p`));e&&t.appendChild(a.serializeNode(r.text(e,n)))})}}else e.someProp(`transformPastedHTML`,t=>{n=t(n,e)}),o=Ts(n),xa&&Es(o);let l=o&&o.querySelector(`[data-pm-slice]`),u=l&&/^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(l.getAttribute(`data-pm-slice`)||``);if(u&&u[3])for(let e=+u[3];e>0;e--){let e=o.firstChild;for(;e&&e.nodeType!=1;)e=e.nextSibling;if(!e)break;o=e}if(s||=(e.someProp(`clipboardParser`)||e.someProp(`domParser`)||it.fromSchema(e.state.schema)).parseSlice(o,{preserveWhitespace:!!(c||u),context:i,ruleFromNode(e){return e.nodeName==`BR`&&!e.nextSibling&&e.parentNode&&!ms.test(e.parentNode.nodeName)?{ignore:!0}:null}}),u)s=Ds(bs(s,+u[1],+u[2]),u[4]);else if(s=L.maxOpen(hs(s.content,i),!0),s.openStart||s.openEnd){let e=0,t=0;for(let t=s.content.firstChild;e<s.openStart&&!t.type.spec.isolating;e++,t=t.firstChild);for(let e=s.content.lastChild;t<s.openEnd&&!e.type.spec.isolating;t++,e=e.lastChild);s=bs(s,e,t)}return e.someProp(`transformPasted`,t=>{s=t(s,e,c)}),s}var ms=/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;function hs(e,t){if(e.childCount<2)return e;for(let n=t.depth;n>=0;n--){let r=t.node(n).contentMatchAt(t.index(n)),i,a=[];if(e.forEach(e=>{if(!a)return;let t=r.findWrapping(e.type),n;if(!t)return a=null;if(n=a.length&&i.length&&_s(t,i,e,a[a.length-1],0))a[a.length-1]=n;else{a.length&&(a[a.length-1]=vs(a[a.length-1],i.length));let n=gs(e,t);a.push(n),r=r.matchType(n.type),i=t}}),a)return P.from(a)}return e}function gs(e,t,n=0){for(let r=t.length-1;r>=n;r--)e=t[r].create(null,P.from(e));return e}function _s(e,t,n,r,i){if(i<e.length&&i<t.length&&e[i]==t[i]){let a=_s(e,t,n,r.lastChild,i+1);if(a)return r.copy(r.content.replaceChild(r.childCount-1,a));if(r.contentMatchAt(r.childCount).matchType(i==e.length-1?n.type:e[i+1]))return r.copy(r.content.append(P.from(gs(n,e,i+1))))}}function vs(e,t){if(t==0)return e;let n=e.content.replaceChild(e.childCount-1,vs(e.lastChild,t-1)),r=e.contentMatchAt(e.childCount).fillBefore(P.empty,!0);return e.copy(n.append(r))}function ys(e,t,n,r,i,a){let o=t<0?e.firstChild:e.lastChild,s=o.content;return e.childCount>1&&(a=0),i<r-1&&(s=ys(s,t,n,r,i+1,a)),i>=n&&(s=t<0?o.contentMatchAt(0).fillBefore(s,a<=i).append(s):s.append(o.contentMatchAt(o.childCount).fillBefore(P.empty,!0))),e.replaceChild(t<0?0:e.childCount-1,o.copy(s))}function bs(e,t,n){return t<e.openStart&&(e=new L(ys(e.content,-1,t,e.openStart,0,e.openEnd),t,e.openEnd)),n<e.openEnd&&(e=new L(ys(e.content,1,n,e.openEnd,0,0),e.openStart,n)),e}var xs={thead:[`table`],tbody:[`table`],tfoot:[`table`],caption:[`table`],colgroup:[`table`],col:[`table`,`colgroup`],tr:[`table`,`tbody`],td:[`table`,`tbody`,`tr`],th:[`table`,`tbody`,`tr`]};function Ss(){return document.implementation.createHTMLDocument(`title`)}var Cs=null;function ws(e){let t=window.trustedTypes;return t?(Cs||=t.defaultPolicy||t.createPolicy(`ProseMirrorClipboard`,{createHTML:e=>e}),Cs.createHTML(e)):e}function Ts(e){let t=/^(\s*<meta [^>]*>)*/.exec(e);t&&(e=e.slice(t[0].length));let n=Ss(),r=n.body,i=/<([a-z][^>\s]+)/i.exec(e),a;if((a=i&&xs[i[1].toLowerCase()])&&(e=a.map(e=>`<`+e+`>`).join(``)+e+a.map(e=>`</`+e+`>`).reverse().join(``)),r.innerHTML=ws(e),a)for(let e=0;e<a.length;e++)r=r.querySelector(a[e])||r;for(let e=0;e<n.styleSheets.length;e++){let t=n.styleSheets[e];for(let e=0;e<t.rules.length;e++){let n=t.rules[e];if(n instanceof CSSStyleRule){let e=r.querySelectorAll(n.selectorText);for(let t=0;t<e.length;t++)e[t].style.cssText+=n.style.cssText}}}return r}function Es(e){let t=e.querySelectorAll(ma?`span:not([class]):not([style])`:`span.Apple-converted-space`);for(let n=0;n<t.length;n++){let r=t[n];r.childNodes.length==1&&r.textContent==`\xA0`&&r.parentNode&&r.parentNode.replaceChild(e.ownerDocument.createTextNode(` `),r)}}function Ds(e,t){if(!e.size)return e;let n=e.content.firstChild.type.schema,r;try{r=JSON.parse(t)}catch{return e}let{content:i,openStart:a,openEnd:o}=e;for(let e=r.length-2;e>=0;e-=2){let t=n.nodes[r[e]];if(!t||t.hasRequiredAttrs())break;i=P.from(t.create(r[e+1],i)),a++,o++}return new L(i,a,o)}var Os={},ks={},As={touchstart:!0,touchmove:!0},js=class{constructor(){this.shiftKey=!1,this.mouseDown=null,this.lastKeyCode=null,this.lastKeyCodeTime=0,this.lastClick={time:0,x:0,y:0,type:``,button:0},this.lastSelectionOrigin=null,this.lastSelectionTime=0,this.lastIOSEnter=0,this.lastIOSEnterFallbackTimeout=-1,this.lastFocus=0,this.lastTouch=0,this.lastChromeDelete=0,this.composing=!1,this.compositionNode=null,this.composingTimeout=-1,this.compositionNodes=[],this.compositionEndedAt=-2e8,this.compositionID=1,this.badSafariComposition=!1,this.compositionPendingChanges=0,this.domChangeCount=0,this.eventHandlers=Object.create(null),this.hideSelectionGuard=null}};function Ms(e){for(let t in Os){let n=Os[t];e.dom.addEventListener(t,e.input.eventHandlers[t]=t=>{Ls(e,t)&&!Is(e,t)&&(e.editable||!(t.type in ks))&&n(e,t)},As[t]?{passive:!0}:void 0)}ga&&e.dom.addEventListener(`input`,()=>null),Fs(e)}function Ns(e,t){e.input.lastSelectionOrigin=t,e.input.lastSelectionTime=Date.now()}function Ps(e){e.input.mouseDown&&e.input.mouseDown.done(),e.domObserver.stop();for(let t in e.input.eventHandlers)e.dom.removeEventListener(t,e.input.eventHandlers[t]);clearTimeout(e.input.composingTimeout),clearTimeout(e.input.lastIOSEnterFallbackTimeout)}function Fs(e){e.someProp(`handleDOMEvents`,t=>{for(let n in t)e.input.eventHandlers[n]||e.dom.addEventListener(n,e.input.eventHandlers[n]=t=>Is(e,t))})}function Is(e,t){return e.someProp(`handleDOMEvents`,n=>{let r=n[t.type];return r?r(e,t)||t.defaultPrevented:!1})}function Ls(e,t){if(!t.bubbles)return!0;if(t.defaultPrevented)return!1;for(let n=t.target;n!=e.dom;n=n.parentNode)if(!n||n.nodeType==11||n.pmViewDesc&&n.pmViewDesc.stopEvent(t))return!1;return!0}function Rs(e,t){!Is(e,t)&&Os[t.type]&&(e.editable||!(t.type in ks))&&Os[t.type](e,t)}ks.keydown=(e,t)=>{let n=t;if(e.input.shiftKey=n.keyCode==16||n.shiftKey,!tc(e)&&(e.input.lastKeyCode=n.keyCode,e.input.lastKeyCodeTime=Date.now(),!(ba&&ma&&n.keyCode==13)))if(n.keyCode!=229&&e.domObserver.forceFlush(),_a&&n.keyCode==13&&!n.ctrlKey&&!n.altKey&&!n.metaKey){let t=Date.now();e.input.lastIOSEnter=t,e.input.lastIOSEnterFallbackTimeout=setTimeout(()=>{e.input.lastIOSEnter==t&&(e.someProp(`handleKeyDown`,t=>t(e,ta(13,`Enter`))),e.input.lastIOSEnter=0)},200)}else e.someProp(`handleKeyDown`,t=>t(e,n))||ds(e,n)?n.preventDefault():Ns(e,`key`)},ks.keyup=(e,t)=>{t.keyCode==16&&(e.input.shiftKey=!1)},ks.keypress=(e,t)=>{let n=t;if(tc(e)||!n.charCode||n.ctrlKey&&!n.altKey||va&&n.metaKey)return;if(e.someProp(`handleKeyPress`,t=>t(e,n))){n.preventDefault();return}let r=e.state.selection;if(!(r instanceof J)||!r.$from.sameParent(r.$to)){let t=String.fromCharCode(n.charCode),i=()=>e.state.tr.insertText(t).scrollIntoView();!/[\r\n]/.test(t)&&!e.someProp(`handleTextInput`,n=>n(e,r.$from.pos,r.$to.pos,t,i))&&e.dispatch(i()),n.preventDefault()}};function zs(e){return{left:e.clientX,top:e.clientY}}function Bs(e,t){let n=t.x-e.clientX,r=t.y-e.clientY;return n*n+r*r<100}function Vs(e,t,n,r,i){if(r==-1)return!1;let a=e.state.doc.resolve(r);for(let r=a.depth+1;r>0;r--)if(e.someProp(t,t=>r>a.depth?t(e,n,a.nodeAfter,a.before(r),i,!0):t(e,n,a.node(r),a.before(r),i,!1)))return!0;return!1}function Hs(e,t,n){if(e.focused||e.focus(),e.state.selection.eq(t))return;let r=e.state.tr.setSelection(t);n==`pointer`&&r.setMeta(`pointer`,!0),e.dispatch(r)}function Us(e,t){if(t==-1)return!1;let n=e.state.doc.resolve(t),r=n.nodeAfter;return r&&r.isAtom&&Y.isSelectable(r)?(Hs(e,new Y(n),`pointer`),!0):!1}function Ws(e,t){if(t==-1)return!1;let n=e.state.selection,r,i;n instanceof Y&&(r=n.node);let a=e.state.doc.resolve(t);for(let e=a.depth+1;e>0;e--){let t=e>a.depth?a.nodeAfter:a.node(e);if(Y.isSelectable(t)){i=r&&n.$from.depth>0&&e>=n.$from.depth&&a.before(n.$from.depth+1)==n.$from.pos?a.before(n.$from.depth):a.before(e);break}}return i==null?!1:(Hs(e,Y.create(e.state.doc,i),`pointer`),!0)}function Gs(e,t,n,r,i){return Vs(e,`handleClickOn`,t,n,r)||e.someProp(`handleClick`,n=>n(e,t,r))||(i?Ws(e,n):Us(e,n))}function Ks(e,t,n,r){return Vs(e,`handleDoubleClickOn`,t,n,r)||e.someProp(`handleDoubleClick`,n=>n(e,t,r))}function qs(e,t,n,r){return Vs(e,`handleTripleClickOn`,t,n,r)||e.someProp(`handleTripleClick`,n=>n(e,t,r))||Js(e,n,r)}function Js(e,t,n){if(n.button!=0)return!1;let r=Ys(e,t,!0),i=e.state.doc;return r?(Hs(e,r,`pointer`),r instanceof J&&i.eq(e.state.doc)&&(e.input.mouseDown=new ec(e,r)),!0):!1}function Ys(e,t,n){let r=e.state.doc;if(t==-1)return r.inlineContent?J.create(r,0,r.content.size):null;let i=r.resolve(t);for(let e=i.depth+1;e>0;e--){let t=e>i.depth?i.nodeAfter:i.node(e),a=i.before(e);if(t.inlineContent)return J.create(r,a+1,a+1+t.content.size);if(n&&Y.isSelectable(t))return Y.create(r,a)}return null}function Xs(e){return sc(e)}var Zs=va?`metaKey`:`ctrlKey`;Os.mousedown=(e,t)=>{let n=t;e.input.shiftKey=n.shiftKey;let r=Xs(e),i=Date.now(),a=`singleClick`;i-e.input.lastClick.time<500&&Bs(n,e.input.lastClick)&&!n[Zs]&&e.input.lastClick.button==n.button&&(e.input.lastClick.type==`singleClick`?a=`doubleClick`:e.input.lastClick.type==`doubleClick`&&(a=`tripleClick`)),e.input.lastClick={time:i,x:n.clientX,y:n.clientY,type:a,button:n.button},e.input.mouseDown&&e.input.mouseDown.done();let o=e.posAtCoords(zs(n));o&&(a==`singleClick`?e.input.mouseDown=new $s(e,o,n,!!r):(a==`doubleClick`?Ks:qs)(e,o.pos,o.inside,n)?n.preventDefault():Ns(e,`pointer`))};var Qs=class{constructor(e){this.view=e,this.mightDrag=null,e.root.addEventListener(`mouseup`,this.up=this.up.bind(this)),e.root.addEventListener(`mousemove`,this.move=this.move.bind(this))}up(e){this.done()}move(e){e.buttons==0&&this.done()}done(){this.view.root.removeEventListener(`mouseup`,this.up),this.view.root.removeEventListener(`mousemove`,this.move),this.view.input.mouseDown==this&&(this.view.input.mouseDown=null)}delaySelUpdate(){return!1}},$s=class extends Qs{constructor(e,t,n,r){super(e),this.pos=t,this.event=n,this.flushed=r,this.delayedSelectionSync=!1,this.startDoc=e.state.doc,this.selectNode=!!n[Zs],this.allowDefault=n.shiftKey;let i,a;if(t.inside>-1)i=e.state.doc.nodeAt(t.inside),a=t.inside;else{let n=e.state.doc.resolve(t.pos);i=n.parent,a=n.depth?n.before():0}let o=r?null:n.target,s=o?e.docView.nearestDesc(o,!0):null;this.target=s&&s.nodeDOM.nodeType==1?s.nodeDOM:null;let{selection:c}=e.state;n.button==0&&(i.type.spec.draggable&&i.type.spec.selectable!==!1||c instanceof Y&&c.from<=a&&c.to>a)&&(this.mightDrag={node:i,pos:a,addAttr:!!(this.target&&!this.target.draggable),setUneditable:!!(this.target&&fa&&!this.target.hasAttribute(`contentEditable`))}),this.target&&this.mightDrag&&(this.mightDrag.addAttr||this.mightDrag.setUneditable)&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&(this.target.draggable=!0),this.mightDrag.setUneditable&&setTimeout(()=>{this.view.input.mouseDown==this&&this.target.setAttribute(`contentEditable`,`false`)},20),this.view.domObserver.start()),Ns(e,`pointer`)}done(){super.done(),this.mightDrag&&this.target&&(this.view.domObserver.stop(),this.mightDrag.addAttr&&this.target.removeAttribute(`draggable`),this.mightDrag.setUneditable&&this.target.removeAttribute(`contentEditable`),this.view.domObserver.start()),this.delayedSelectionSync&&setTimeout(()=>{this.view.isDestroyed||No(this.view)})}up(e){if(this.done(),!this.view.dom.contains(e.target))return;let t=this.pos;this.view.state.doc!=this.startDoc&&(t=this.view.posAtCoords(zs(e))),this.updateAllowDefault(e),this.allowDefault||!t?Ns(this.view,`pointer`):Gs(this.view,t.pos,t.inside,e,this.selectNode)?e.preventDefault():e.button==0&&(this.flushed||ga&&this.mightDrag&&!this.mightDrag.node.isAtom||ma&&!this.view.state.selection.visible&&Math.min(Math.abs(t.pos-this.view.state.selection.from),Math.abs(t.pos-this.view.state.selection.to))<=2)?(Hs(this.view,q.near(this.view.state.doc.resolve(t.pos)),`pointer`),e.preventDefault()):Ns(this.view,`pointer`)}move(e){this.updateAllowDefault(e),Ns(this.view,`pointer`),super.move(e)}updateAllowDefault(e){!this.allowDefault&&(Math.abs(this.event.x-e.clientX)>4||Math.abs(this.event.y-e.clientY)>4)&&(this.allowDefault=!0)}delaySelUpdate(){return this.allowDefault?(this.delayedSelectionSync=!0,!0):!1}},ec=class extends Qs{constructor(e,t){super(e),this.startSelection=t,this.startDoc=e.state.doc}move(e){if(e.buttons==0||this.view.isDestroyed||!this.view.state.doc.eq(this.startDoc)){this.done();return}e.preventDefault(),Ns(this.view,`pointer`);let t=this.view.posAtCoords(zs(e)),n=t&&Ys(this.view,t.inside,!1);if(!n)return;let{doc:r}=this.view.state,i=this.startSelection,[a,o]=n.from<i.from?[i.to,n.from]:[i.from,n.to];Hs(this.view,J.create(r,a,o),`pointer`)}};Os.touchstart=e=>{e.input.lastTouch=Date.now(),Xs(e),Ns(e,`pointer`)},Os.touchmove=e=>{e.input.lastTouch=Date.now(),Ns(e,`pointer`)},Os.contextmenu=e=>Xs(e);function tc(e,t){return e.composing?!0:ga&&Math.abs(Date.now()-e.input.compositionEndedAt)<500?(e.input.compositionEndedAt=-2e8,!0):!1}var nc=ba?5e3:-1;ks.compositionstart=ks.compositionupdate=e=>{if(!e.composing){e.domObserver.flush();let{state:t}=e,n=t.selection.$to;if(t.selection instanceof J&&(t.storedMarks||!n.textOffset&&n.parentOffset&&n.nodeBefore.marks.some(e=>e.type.spec.inclusive===!1)||ma&&ya&&rc(e)))e.markCursor=e.state.storedMarks||n.marks(),sc(e,!0),e.markCursor=null;else if(sc(e,!t.selection.empty),fa&&t.selection.empty&&n.parentOffset&&!n.textOffset&&n.nodeBefore.marks.length){let t=e.domSelectionRange();for(let n=t.focusNode,r=t.focusOffset;n&&n.nodeType==1&&r!=0;){let t=r<0?n.lastChild:n.childNodes[r-1];if(!t)break;if(t.nodeType==3){let n=e.domSelection();n&&n.collapse(t,t.nodeValue.length);break}else n=t,r=-1}}e.input.composing=!0}ic(e,nc)};function rc(e){let{focusNode:t,focusOffset:n}=e.domSelectionRange();if(!t||t.nodeType!=1||n>=t.childNodes.length)return!1;let r=t.childNodes[n];return r.nodeType==1&&r.contentEditable==`false`}ks.compositionend=(e,t)=>{e.composing&&(e.input.composing=!1,e.input.compositionEndedAt=Date.now(),e.input.compositionPendingChanges=e.domObserver.pendingRecords().length?e.input.compositionID:0,e.input.compositionNode=null,e.input.badSafariComposition?e.domObserver.forceFlush():e.input.compositionPendingChanges&&Promise.resolve().then(()=>e.domObserver.flush()),e.input.compositionID++,ic(e,20))};function ic(e,t){clearTimeout(e.input.composingTimeout),t>-1&&(e.input.composingTimeout=setTimeout(()=>sc(e),t))}function ac(e){for(e.composing&&(e.input.composing=!1,e.input.compositionEndedAt=Date.now());e.input.compositionNodes.length>0;)e.input.compositionNodes.pop().markParentsDirty()}function oc(e){let t=e.domSelectionRange();if(!t.focusNode)return null;let n=Xi(t.focusNode,t.focusOffset),r=Zi(t.focusNode,t.focusOffset);if(n&&r&&n!=r){let t=r.pmViewDesc,i=e.domObserver.lastChangedTextNode;if(n==i||r==i)return i;if(!t||!t.isText(r.nodeValue))return r;if(e.input.compositionNode==r){let e=n.pmViewDesc;if(!(!e||!e.isText(n.nodeValue)))return r}}return n||r}function sc(e,t=!1){if(!(ba&&e.domObserver.flushingSoon>=0)){if(e.domObserver.forceFlush(),ac(e),t||e.docView&&e.docView.dirty){let n=jo(e),r=e.state.selection;return n&&!n.eq(r)?e.dispatch(e.state.tr.setSelection(n)):(e.markCursor||t)&&!r.$from.node(r.$from.sharedDepth(r.to)).inlineContent?e.dispatch(e.state.tr.deleteSelection()):e.updateState(e.state),!0}return!1}}function cc(e,t){if(!e.dom.parentNode)return;let n=e.dom.parentNode.appendChild(document.createElement(`div`));n.appendChild(t),n.style.cssText=`position: fixed; left: -10000px; top: 10px`;let r=getSelection(),i=document.createRange();i.selectNodeContents(t),e.dom.blur(),r.removeAllRanges(),r.addRange(i),setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n),e.focus()},50)}var lc=ua&&da<15||_a&&Sa<604;Os.copy=ks.cut=(e,t)=>{let n=t,r=e.state.selection,i=n.type==`cut`;if(r.empty)return;let a=lc?null:n.clipboardData,{dom:o,text:s}=fs(e,r.content());a?(n.preventDefault(),a.clearData(),a.setData(`text/html`,o.innerHTML),a.setData(`text/plain`,s)):cc(e,o),i&&e.dispatch(e.state.tr.deleteSelection().scrollIntoView().setMeta(`uiEvent`,`cut`))};function uc(e){return e.openStart==0&&e.openEnd==0&&e.content.childCount==1?e.content.firstChild:null}function dc(e,t){if(!e.dom.parentNode)return;let n=e.input.shiftKey||e.state.selection.$from.parent.type.spec.code,r=e.dom.parentNode.appendChild(document.createElement(n?`textarea`:`div`));n||(r.contentEditable=`true`),r.style.cssText=`position: fixed; left: -10000px; top: 10px`,r.focus();let i=e.input.shiftKey&&e.input.lastKeyCode!=45;setTimeout(()=>{e.focus(),r.parentNode&&r.parentNode.removeChild(r),n?fc(e,r.value,null,i,t):fc(e,r.textContent,r.innerHTML,i,t)},50)}function fc(e,t,n,r,i){let a=ps(e,t,n,r,e.state.selection.$from);if(e.someProp(`handlePaste`,t=>t(e,i,a||L.empty)))return!0;if(!a)return!1;let o=uc(a),s=o?e.state.tr.replaceSelectionWith(o,r):e.state.tr.replaceSelection(a);return e.dispatch(s.scrollIntoView().setMeta(`paste`,!0).setMeta(`uiEvent`,`paste`)),!0}function pc(e){let t=e.getData(`text/plain`)||e.getData(`Text`);if(t)return t;let n=e.getData(`text/uri-list`);return n?n.replace(/\r?\n/g,` `):``}ks.paste=(e,t)=>{let n=t;if(e.composing&&!ba)return;let r=lc?null:n.clipboardData,i=e.input.shiftKey&&e.input.lastKeyCode!=45;r&&fc(e,pc(r),r.getData(`text/html`),i,n)?n.preventDefault():dc(e,n)};var mc=class{constructor(e,t,n){this.slice=e,this.move=t,this.node=n}},hc=va?`altKey`:`ctrlKey`;function gc(e,t){let n;return e.someProp(`dragCopies`,e=>{n||=e(t)}),n==null?!t[hc]:!n}Os.dragstart=(e,t)=>{let n=t,r=e.input.mouseDown;if(r&&r.done(),!n.dataTransfer)return;let i=e.state.selection,a=i.empty?null:e.posAtCoords(zs(n)),o;if(!(a&&a.pos>=i.from&&a.pos<=(i instanceof Y?i.to-1:i.to))){if(r&&r.mightDrag)o=Y.create(e.state.doc,r.mightDrag.pos);else if(n.target&&n.target.nodeType==1){let t=e.docView.nearestDesc(n.target,!0);t&&t.node.type.spec.draggable&&t!=e.docView&&(o=Y.create(e.state.doc,t.posBefore))}}let{dom:s,text:c,slice:l}=fs(e,(o||e.state.selection).content());(!n.dataTransfer.files.length||!ma||ha>120)&&n.dataTransfer.clearData(),n.dataTransfer.setData(lc?`Text`:`text/html`,s.innerHTML),n.dataTransfer.effectAllowed=`copyMove`,lc||n.dataTransfer.setData(`text/plain`,c),e.dragging=new mc(l,gc(e,n),o)},Os.dragend=e=>{let t=e.dragging;window.setTimeout(()=>{e.dragging==t&&(e.dragging=null)},50)},ks.dragover=ks.dragenter=(e,t)=>t.preventDefault(),ks.drop=(e,t)=>{try{_c(e,t,e.dragging)}finally{e.dragging=null}};function _c(e,t,n){if(!t.dataTransfer)return;let r=e.posAtCoords(zs(t));if(!r)return;let i=e.state.doc.resolve(r.pos),a=n&&n.slice;a?e.someProp(`transformPasted`,t=>{a=t(a,e,!1)}):a=ps(e,pc(t.dataTransfer),lc?null:t.dataTransfer.getData(`text/html`),!1,i);let o=!!(n&&gc(e,t));if(e.someProp(`handleDrop`,n=>n(e,t,a||L.empty,o))){t.preventDefault();return}if(!a)return;t.preventDefault();let s=a?Zr(e.state.doc,i.pos,a):i.pos;s??=i.pos;let c=e.state.tr;if(o){let{node:e}=n;e?e.replace(c):c.deleteSelection()}let l=c.mapping.map(s),u=a.openStart==0&&a.openEnd==0&&a.content.childCount==1,d=c.doc;if(u?c.replaceRangeWith(l,l,a.content.firstChild):c.replaceRange(l,l,a),c.doc.eq(d))return;let f=c.doc.resolve(l);if(u&&Y.isSelectable(a.content.firstChild)&&f.nodeAfter&&f.nodeAfter.sameMarkup(a.content.firstChild))c.setSelection(new Y(f));else{let t=c.mapping.map(s);c.mapping.maps[c.mapping.maps.length-1].forEach((e,n,r,i)=>t=i),c.setSelection(Ho(e,f,c.doc.resolve(t)))}e.focus(),e.dispatch(c.setMeta(`uiEvent`,`drop`))}Os.focus=e=>{e.input.lastFocus=Date.now(),e.focused||(e.domObserver.stop(),e.dom.classList.add(`ProseMirror-focused`),e.domObserver.start(),e.focused=!0,setTimeout(()=>{e.docView&&e.hasFocus()&&!e.domObserver.currentSelection.eq(e.domSelectionRange())&&No(e)},20))},Os.blur=(e,t)=>{let n=t;e.focused&&=(e.domObserver.stop(),e.dom.classList.remove(`ProseMirror-focused`),e.domObserver.start(),n.relatedTarget&&e.dom.contains(n.relatedTarget)&&e.domObserver.currentSelection.clear(),!1)},Os.beforeinput=(e,t)=>{if(ma&&ba&&t.inputType==`deleteContentBackward`){e.domObserver.flushSoon();let{domChangeCount:t}=e.input;setTimeout(()=>{if(e.input.domChangeCount!=t||(e.dom.blur(),e.focus(),e.someProp(`handleKeyDown`,t=>t(e,ta(8,`Backspace`)))))return;let{$cursor:n}=e.state.selection;n&&n.pos>0&&e.dispatch(e.state.tr.delete(n.pos-1,n.pos).scrollIntoView())},50)}};for(let e in ks)Os[e]=ks[e];function vc(e,t){if(e==t)return!0;for(let n in e)if(e[n]!==t[n])return!1;for(let n in t)if(!(n in e))return!1;return!0}var yc=class e{constructor(e,t){this.toDOM=e,this.spec=t||wc,this.side=this.spec.side||0}map(e,t,n,r){let{pos:i,deleted:a}=e.mapResult(t.from+r,this.side<0?-1:1);return a?null:new Sc(i-n,i-n,this)}valid(){return!0}eq(t){return this==t||t instanceof e&&(this.spec.key&&this.spec.key==t.spec.key||this.toDOM==t.toDOM&&vc(this.spec,t.spec))}destroy(e){this.spec.destroy&&this.spec.destroy(e)}},bc=class e{constructor(e,t){this.attrs=e,this.spec=t||wc}map(e,t,n,r){let i=e.map(t.from+r,this.spec.inclusiveStart?-1:1)-n,a=e.map(t.to+r,this.spec.inclusiveEnd?1:-1)-n;return i>=a?null:new Sc(i,a,this)}valid(e,t){return t.from<t.to}eq(t){return this==t||t instanceof e&&vc(this.attrs,t.attrs)&&vc(this.spec,t.spec)}static is(t){return t.type instanceof e}destroy(){}},xc=class e{constructor(e,t){this.attrs=e,this.spec=t||wc}map(e,t,n,r){let i=e.mapResult(t.from+r,1);if(i.deleted)return null;let a=e.mapResult(t.to+r,-1);return a.deleted||a.pos<=i.pos?null:new Sc(i.pos-n,a.pos-n,this)}valid(e,t){let{index:n,offset:r}=e.content.findIndex(t.from),i;return r==t.from&&!(i=e.child(n)).isText&&r+i.nodeSize==t.to}eq(t){return this==t||t instanceof e&&vc(this.attrs,t.attrs)&&vc(this.spec,t.spec)}destroy(){}},Sc=class e{constructor(e,t,n){this.from=e,this.to=t,this.type=n}copy(t,n){return new e(t,n,this.type)}eq(e,t=0){return this.type.eq(e.type)&&this.from+t==e.from&&this.to+t==e.to}map(e,t,n){return this.type.map(e,this,t,n)}static widget(t,n,r){return new e(t,t,new yc(n,r))}static inline(t,n,r,i){return new e(t,n,new bc(r,i))}static node(t,n,r,i){return new e(t,n,new xc(r,i))}get spec(){return this.type.spec}get inline(){return this.type instanceof bc}get widget(){return this.type instanceof yc}},Cc=[],wc={},Tc=class e{constructor(e,t){this.local=e.length?e:Cc,this.children=t.length?t:Cc}static create(e,t){return t.length?Nc(t,e,0,wc):Ec}find(e,t,n){let r=[];return this.findInner(e??0,t??1e9,r,0,n),r}findInner(e,t,n,r,i){for(let a=0;a<this.local.length;a++){let o=this.local[a];o.from<=t&&o.to>=e&&(!i||i(o.spec))&&n.push(o.copy(o.from+r,o.to+r))}for(let a=0;a<this.children.length;a+=3)if(this.children[a]<t&&this.children[a+1]>e){let o=this.children[a]+1;this.children[a+2].findInner(e-o,t-o,n,r+o,i)}}map(e,t,n){return this==Ec||e.maps.length==0?this:this.mapInner(e,t,0,0,n||wc)}mapInner(t,n,r,i,a){let o;for(let e=0;e<this.local.length;e++){let s=this.local[e].map(t,r,i);s&&s.type.valid(n,s)?(o||=[]).push(s):a.onRemove&&a.onRemove(this.local[e].spec)}return this.children.length?Oc(this.children,o||[],t,n,r,i,a):o?new e(o.sort(Pc),Cc):Ec}add(t,n){return n.length?this==Ec?e.create(t,n):this.addInner(t,n,0):this}addInner(t,n,r){let i,a=0;t.forEach((e,t)=>{let o=t+r,s;if(s=jc(n,e,o)){for(i||=this.children.slice();a<i.length&&i[a]<t;)a+=3;i[a]==t?i[a+2]=i[a+2].addInner(e,s,o+1):i.splice(a,0,t,t+e.nodeSize,Nc(s,e,o+1,wc)),a+=3}});let o=kc(a?Mc(n):n,-r);for(let e=0;e<o.length;e++)o[e].type.valid(t,o[e])||o.splice(e--,1);return new e(o.length?this.local.concat(o).sort(Pc):this.local,i||this.children)}remove(e){return e.length==0||this==Ec?this:this.removeInner(e,0)}removeInner(t,n){let r=this.children,i=this.local;for(let e=0;e<r.length;e+=3){let i,a=r[e]+n,o=r[e+1]+n;for(let e=0,n;e<t.length;e++)(n=t[e])&&n.from>a&&n.to<o&&(t[e]=null,(i||=[]).push(n));if(!i)continue;r==this.children&&(r=this.children.slice());let s=r[e+2].removeInner(i,a+1);s==Ec?(r.splice(e,3),e-=3):r[e+2]=s}if(i.length){for(let e=0,r;e<t.length;e++)if(r=t[e])for(let e=0;e<i.length;e++)i[e].eq(r,n)&&(i==this.local&&(i=this.local.slice()),i.splice(e--,1))}return r==this.children&&i==this.local?this:i.length||r.length?new e(i,r):Ec}forChild(t,n){if(this==Ec)return this;if(n.isLeaf)return e.empty;let r,i;for(let e=0;e<this.children.length;e+=3)if(this.children[e]>=t){this.children[e]==t&&(r=this.children[e+2]);break}let a=t+1,o=a+n.content.size;for(let e=0;e<this.local.length;e++){let t=this.local[e];if(t.from<o&&t.to>a&&t.type instanceof bc){let e=Math.max(a,t.from)-a,n=Math.min(o,t.to)-a;e<n&&(i||=[]).push(t.copy(e,n))}}if(i){let t=new e(i.sort(Pc),Cc);return r?new Dc([t,r]):t}return r||Ec}eq(t){if(this==t)return!0;if(!(t instanceof e)||this.local.length!=t.local.length||this.children.length!=t.children.length)return!1;for(let e=0;e<this.local.length;e++)if(!this.local[e].eq(t.local[e]))return!1;for(let e=0;e<this.children.length;e+=3)if(this.children[e]!=t.children[e]||this.children[e+1]!=t.children[e+1]||!this.children[e+2].eq(t.children[e+2]))return!1;return!0}locals(e){return Fc(this.localsInner(e))}localsInner(e){if(this==Ec)return Cc;if(e.inlineContent||!this.local.some(bc.is))return this.local;let t=[];for(let e=0;e<this.local.length;e++)this.local[e].type instanceof bc||t.push(this.local[e]);return t}forEachSet(e){e(this)}};Tc.empty=new Tc([],[]),Tc.removeOverlap=Fc;var Ec=Tc.empty,Dc=class e{constructor(e){this.members=e}map(t,n){let r=this.members.map(e=>e.map(t,n,wc));return e.from(r)}forChild(t,n){if(n.isLeaf)return Tc.empty;let r=[];for(let i=0;i<this.members.length;i++){let a=this.members[i].forChild(t,n);a!=Ec&&(a instanceof e?r=r.concat(a.members):r.push(a))}return e.from(r)}eq(t){if(!(t instanceof e)||t.members.length!=this.members.length)return!1;for(let e=0;e<this.members.length;e++)if(!this.members[e].eq(t.members[e]))return!1;return!0}locals(e){let t,n=!0;for(let r=0;r<this.members.length;r++){let i=this.members[r].localsInner(e);if(i.length)if(!t)t=i;else{n&&=(t=t.slice(),!1);for(let e=0;e<i.length;e++)t.push(i[e])}}return t?Fc(n?t:t.sort(Pc)):Cc}static from(t){switch(t.length){case 0:return Ec;case 1:return t[0];default:return new e(t.every(e=>e instanceof Tc)?t:t.reduce((e,t)=>e.concat(t instanceof Tc?t:t.members),[]))}}forEachSet(e){for(let t=0;t<this.members.length;t++)this.members[t].forEachSet(e)}};function Oc(e,t,n,r,i,a,o){let s=e.slice();for(let e=0,t=a;e<n.maps.length;e++){let r=0;n.maps[e].forEach((e,n,i,a)=>{let o=a-i-(n-e);for(let i=0;i<s.length;i+=3){let a=s[i+1];if(a<0||e>a+t-r)continue;let c=s[i]+t-r;n>=c?s[i+1]=e<=c?-2:-1:e>=t&&o&&(s[i]+=o,s[i+1]+=o)}r+=o}),t=n.maps[e].map(t,-1)}let c=!1;for(let t=0;t<s.length;t+=3)if(s[t+1]<0){if(s[t+1]==-2){c=!0,s[t+1]=-1;continue}let l=n.map(e[t]+a),u=l-i;if(u<0||u>=r.content.size){c=!0;continue}let d=n.map(e[t+1]+a,-1)-i,{index:f,offset:p}=r.content.findIndex(u),m=r.maybeChild(f);if(m&&p==u&&p+m.nodeSize==d){let r=s[t+2].mapInner(n,m,l+1,e[t]+a+1,o);r==Ec?(s[t+1]=-2,c=!0):(s[t]=u,s[t+1]=d,s[t+2]=r)}else c=!0}if(c){let c=Nc(Ac(s,e,t,n,i,a,o),r,0,o);t=c.local;for(let e=0;e<s.length;e+=3)s[e+1]<0&&(s.splice(e,3),e-=3);for(let e=0,t=0;e<c.children.length;e+=3){let n=c.children[e];for(;t<s.length&&s[t]<n;)t+=3;s.splice(t,0,c.children[e],c.children[e+1],c.children[e+2])}}return new Tc(t.sort(Pc),s)}function kc(e,t){if(!t||!e.length)return e;let n=[];for(let r=0;r<e.length;r++){let i=e[r];n.push(new Sc(i.from+t,i.to+t,i.type))}return n}function Ac(e,t,n,r,i,a,o){function s(e,t){for(let a=0;a<e.local.length;a++){let s=e.local[a].map(r,i,t);s?n.push(s):o.onRemove&&o.onRemove(e.local[a].spec)}for(let n=0;n<e.children.length;n+=3)s(e.children[n+2],e.children[n]+t+1)}for(let n=0;n<e.length;n+=3)e[n+1]==-1&&s(e[n+2],t[n]+a+1);return n}function jc(e,t,n){if(t.isLeaf)return null;let r=n+t.nodeSize,i=null;for(let t=0,a;t<e.length;t++)(a=e[t])&&a.from>n&&a.to<r&&((i||=[]).push(a),e[t]=null);return i}function Mc(e){let t=[];for(let n=0;n<e.length;n++)e[n]!=null&&t.push(e[n]);return t}function Nc(e,t,n,r){let i=[],a=!1;t.forEach((t,o)=>{let s=jc(e,t,o+n);if(s){a=!0;let e=Nc(s,t,n+o+1,r);e!=Ec&&i.push(o,o+t.nodeSize,e)}});let o=kc(a?Mc(e):e,-n).sort(Pc);for(let e=0;e<o.length;e++)o[e].type.valid(t,o[e])||(r.onRemove&&r.onRemove(o[e].spec),o.splice(e--,1));return o.length||i.length?new Tc(o,i):Ec}function Pc(e,t){return e.from-t.from||e.to-t.to}function Fc(e){let t=e;for(let n=0;n<t.length-1;n++){let r=t[n];if(r.from!=r.to)for(let i=n+1;i<t.length;i++){let a=t[i];if(a.from==r.from){a.to!=r.to&&(t==e&&(t=e.slice()),t[i]=a.copy(a.from,r.to),Ic(t,i+1,a.copy(r.to,a.to)));continue}else{a.from<r.to&&(t==e&&(t=e.slice()),t[n]=r.copy(r.from,a.from),Ic(t,i,r.copy(a.from,r.to)));break}}}return t}function Ic(e,t,n){for(;t<e.length&&Pc(n,e[t])>0;)t++;e.splice(t,0,n)}function Lc(e){let t=[];return e.someProp(`decorations`,n=>{let r=n(e.state);r&&r!=Ec&&t.push(r)}),e.cursorWrapper&&t.push(Tc.create(e.state.doc,[e.cursorWrapper.deco])),Dc.from(t)}var Rc={childList:!0,characterData:!0,characterDataOldValue:!0,attributes:!0,attributeOldValue:!0,subtree:!0},zc=ua&&da<=11,Bc=class{constructor(){this.anchorNode=null,this.anchorOffset=0,this.focusNode=null,this.focusOffset=0}set(e){this.anchorNode=e.anchorNode,this.anchorOffset=e.anchorOffset,this.focusNode=e.focusNode,this.focusOffset=e.focusOffset}clear(){this.anchorNode=this.focusNode=null}eq(e){return e.anchorNode==this.anchorNode&&e.anchorOffset==this.anchorOffset&&e.focusNode==this.focusNode&&e.focusOffset==this.focusOffset}},Vc=class{constructor(e,t){this.view=e,this.handleDOMChange=t,this.queue=[],this.flushingSoon=-1,this.observer=null,this.currentSelection=new Bc,this.onCharData=null,this.suppressingSelectionUpdates=!1,this.lastChangedTextNode=null,this.observer=window.MutationObserver&&new window.MutationObserver(t=>{for(let e=0;e<t.length;e++)this.queue.push(t[e]);ua&&da<=11&&t.some(e=>e.type==`childList`&&e.removedNodes.length||e.type==`characterData`&&e.oldValue.length>e.target.nodeValue.length)?this.flushSoon():ga&&e.composing&&t.some(e=>e.type==`childList`&&e.target.nodeName==`TR`)?(e.input.badSafariComposition=!0,this.flushSoon()):this.flush()}),zc&&(this.onCharData=e=>{this.queue.push({target:e.target,type:`characterData`,oldValue:e.prevValue}),this.flushSoon()}),this.onSelectionChange=this.onSelectionChange.bind(this)}flushSoon(){this.flushingSoon<0&&(this.flushingSoon=window.setTimeout(()=>{this.flushingSoon=-1,this.flush()},20))}forceFlush(){this.flushingSoon>-1&&(window.clearTimeout(this.flushingSoon),this.flushingSoon=-1,this.flush())}start(){this.observer&&(this.observer.takeRecords(),this.observer.observe(this.view.dom,Rc)),this.onCharData&&this.view.dom.addEventListener(`DOMCharacterDataModified`,this.onCharData),this.connectSelection()}stop(){if(this.observer){let e=this.observer.takeRecords();if(e.length){for(let t=0;t<e.length;t++)this.queue.push(e[t]);window.setTimeout(()=>this.flush(),20)}this.observer.disconnect()}this.onCharData&&this.view.dom.removeEventListener(`DOMCharacterDataModified`,this.onCharData),this.disconnectSelection()}connectSelection(){this.view.dom.ownerDocument.addEventListener(`selectionchange`,this.onSelectionChange)}disconnectSelection(){this.view.dom.ownerDocument.removeEventListener(`selectionchange`,this.onSelectionChange)}suppressSelectionUpdates(){this.suppressingSelectionUpdates=!0,setTimeout(()=>this.suppressingSelectionUpdates=!1,50)}onSelectionChange(){if(Uo(this.view)){if(this.suppressingSelectionUpdates)return No(this.view);if(ua&&da<=11&&!this.view.state.selection.empty){let e=this.view.domSelectionRange();if(e.focusNode&&Ki(e.focusNode,e.focusOffset,e.anchorNode,e.anchorOffset))return this.flushSoon()}this.flush()}}setCurSelection(){this.currentSelection.set(this.view.domSelectionRange())}ignoreSelectionChange(e){if(!e.focusNode)return!0;let t=new Set,n;for(let n=e.focusNode;n;n=Hi(n))t.add(n);for(let r=e.anchorNode;r;r=Hi(r))if(t.has(r)){n=r;break}let r=n&&this.view.docView.nearestDesc(n);if(r&&r.ignoreMutation({type:`selection`,target:n.nodeType==3?n.parentNode:n}))return this.setCurSelection(),!0}pendingRecords(){if(this.observer)for(let e of this.observer.takeRecords())this.queue.push(e);return this.queue}flush(){let{view:e}=this;if(!e.docView||this.flushingSoon>-1)return;let t=this.pendingRecords();t.length&&(this.queue=[]);let n=e.domSelectionRange(),r=!this.suppressingSelectionUpdates&&!this.currentSelection.eq(n)&&Uo(e)&&!this.ignoreSelectionChange(n),i=-1,a=-1,o=!1,s=[];if(e.editable)for(let e=0;e<t.length;e++){let n=this.registerMutation(t[e],s);n&&(i=i<0?n.from:Math.min(n.from,i),a=a<0?n.to:Math.max(n.to,a),n.typeOver&&(o=!0))}if(s.some(e=>e.nodeName==`BR`)&&(e.input.lastKeyCode==8||e.input.lastKeyCode==46||ma&&(e.composing||e.input.compositionEndedAt>Date.now()-50)&&t.some(e=>e.type==`childList`&&e.removedNodes.length))){for(let e of s)if(e.nodeName==`BR`&&e.parentNode){let t=e.nextSibling;for(;t&&t.nodeType==1;){if(t.contentEditable==`false`){e.parentNode.removeChild(e);break}t=t.firstChild}}}else if(fa&&s.length){let t=s.filter(e=>e.nodeName==`BR`);if(t.length==2){let[e,n]=t;e.parentNode&&e.parentNode.parentNode==n.parentNode?n.remove():e.remove()}else{let{focusNode:n}=this.currentSelection;for(let r of t){let t=r.parentNode;t&&t.nodeName==`LI`&&(!n||qc(e,n)!=t)&&r.remove()}}}let c=null;i<0&&r&&e.input.lastFocus>Date.now()-200&&Math.max(e.input.lastTouch,e.input.lastClick.time)<Date.now()-300&&ea(n)&&(c=jo(e))&&c.eq(q.near(e.state.doc.resolve(0),1))?(e.input.lastFocus=0,No(e),this.currentSelection.set(n),e.scrollToSelection()):(i>-1||r)&&(i>-1&&(e.docView.markDirty(i,a),Wc(e)),e.input.badSafariComposition&&(e.input.badSafariComposition=!1,Jc(e,s)),this.handleDOMChange(i,a,o,s),e.docView&&e.docView.dirty?e.updateState(e.state):this.currentSelection.eq(n)||No(e),this.currentSelection.set(n))}registerMutation(e,t){if(t.indexOf(e.target)>-1)return null;let n=this.view.docView.nearestDesc(e.target);if(e.type==`attributes`&&(n==this.view.docView||e.attributeName==`contenteditable`||e.attributeName==`style`&&!e.oldValue&&!e.target.getAttribute(`style`))||!n||n.ignoreMutation(e))return null;if(e.type==`childList`){for(let n=0;n<e.addedNodes.length;n++){let r=e.addedNodes[n];t.push(r),r.nodeType==3&&(this.lastChangedTextNode=r)}if(n.contentDOM&&n.contentDOM!=n.dom&&!n.contentDOM.contains(e.target))return{from:n.posBefore,to:n.posAfter};let r=e.previousSibling,i=e.nextSibling;if(ua&&da<=11&&e.addedNodes.length)for(let t=0;t<e.addedNodes.length;t++){let{previousSibling:n,nextSibling:a}=e.addedNodes[t];(!n||Array.prototype.indexOf.call(e.addedNodes,n)<0)&&(r=n),(!a||Array.prototype.indexOf.call(e.addedNodes,a)<0)&&(i=a)}let a=r&&r.parentNode==e.target?Vi(r)+1:0,o=n.localPosFromDOM(e.target,a,-1),s=i&&i.parentNode==e.target?Vi(i):e.target.childNodes.length;return{from:o,to:n.localPosFromDOM(e.target,s,1)}}else if(e.type==`attributes`)return{from:n.posAtStart-n.border,to:n.posAtEnd+n.border};else return this.lastChangedTextNode=e.target,{from:n.posAtStart,to:n.posAtEnd,typeOver:e.target.nodeValue==e.oldValue}}},Hc=new WeakMap,Uc=!1;function Wc(e){if(!Hc.has(e)&&(Hc.set(e,null),[`normal`,`nowrap`,`pre-line`].indexOf(getComputedStyle(e.dom).whiteSpace)!==-1)){if(e.requiresGeckoHackNode=fa,Uc)return;console.warn(`ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package.`),Uc=!0}}function Gc(e,t){let n=t.startContainer,r=t.startOffset,i=t.endContainer,a=t.endOffset,o=e.domAtPos(e.state.selection.anchor);return Ki(o.node,o.offset,i,a)&&([n,r,i,a]=[i,a,n,r]),{anchorNode:n,anchorOffset:r,focusNode:i,focusOffset:a}}function Kc(e,t){if(t.getComposedRanges){let n=t.getComposedRanges(e.root)[0];if(n)return Gc(e,n)}let n;function r(e){e.preventDefault(),e.stopImmediatePropagation(),n=e.getTargetRanges()[0]}return e.dom.addEventListener(`beforeinput`,r,!0),document.execCommand(`indent`),e.dom.removeEventListener(`beforeinput`,r,!0),n?Gc(e,n):null}function qc(e,t){for(let n=t.parentNode;n&&n!=e.dom;n=n.parentNode){let t=e.docView.nearestDesc(n,!0);if(t&&t.node.isBlock)return n}return null}function Jc(e,t){let{focusNode:n,focusOffset:r}=e.domSelectionRange();for(let i of t)if(i.parentNode?.nodeName==`TR`){let t=i.nextSibling;for(;t&&t.nodeName!=`TD`&&t.nodeName!=`TH`;)t=t.nextSibling;if(t){let a=t;for(;;){let e=a.firstChild;if(!e||e.nodeType!=1||e.contentEditable==`false`||/^(BR|IMG)$/.test(e.nodeName))break;a=e}a.insertBefore(i,a.firstChild),n==i&&e.domSelection().collapse(i,r)}else i.parentNode.removeChild(i)}}function Yc(e,t,n){let{node:r,fromOffset:i,toOffset:a,from:o,to:s}=e.docView.parseRange(t,n),c=e.domSelectionRange(),l,u=c.anchorNode;if(u&&e.dom.contains(u.nodeType==1?u:u.parentNode)&&(l=[{node:u,offset:c.anchorOffset}],ea(c)||l.push({node:c.focusNode,offset:c.focusOffset})),ma&&e.input.lastKeyCode===8)for(let e=a;e>i;e--){let t=r.childNodes[e-1],n=t.pmViewDesc;if(t.nodeName==`BR`&&!n){a=e;break}if(!n||n.size)break}let d=e.state.doc,f=e.someProp(`domParser`)||it.fromSchema(e.state.schema),p=d.resolve(o),m=null,h=f.parse(r,{topNode:p.parent,topMatch:p.parent.contentMatchAt(p.index()),topOpen:!0,from:i,to:a,preserveWhitespace:p.parent.type.whitespace!=`pre`||`full`,findPositions:l,ruleFromNode:Xc,context:p});if(l&&l[0].pos!=null){let e=l[0].pos,t=l[1]&&l[1].pos;t??=e,m={anchor:e+o,head:t+o}}return{doc:h,sel:m,from:o,to:s}}function Xc(e){let t=e.pmViewDesc;if(t)return t.parseRule();if(e.nodeName==`BR`&&e.parentNode){if(ga&&/^(ul|ol)$/i.test(e.parentNode.nodeName)){let e=document.createElement(`div`);return e.appendChild(document.createElement(`li`)),{skip:e}}else if(e.parentNode.lastChild==e||ga&&/^(tr|table)$/i.test(e.parentNode.nodeName))return{ignore:!0}}else if(e.nodeName==`IMG`&&e.getAttribute(`mark-placeholder`))return{ignore:!0};return null}var Zc=/^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;function Qc(e,t,n,r,i){let a=e.input.compositionPendingChanges||(e.composing?e.input.compositionID:0);if(e.input.compositionPendingChanges=0,t<0){let t=e.input.lastSelectionTime>Date.now()-50?e.input.lastSelectionOrigin:null,n=jo(e,t);if(n&&!e.state.selection.eq(n)){if(ma&&ba&&e.input.lastKeyCode===13&&Date.now()-100<e.input.lastKeyCodeTime&&e.someProp(`handleKeyDown`,t=>t(e,ta(13,`Enter`))))return;let r=e.state.tr.setSelection(n);t==`pointer`?r.setMeta(`pointer`,!0):t==`key`&&r.scrollIntoView(),a&&r.setMeta(`composition`,a),e.dispatch(r)}return}let o=e.state.doc.resolve(t),s=o.sharedDepth(n);t=o.before(s+1),n=e.state.doc.resolve(n).after(s+1);let c=e.state.selection,l=Yc(e,t,n),u=e.state.doc,d=u.slice(l.from,l.to),f,p;e.input.lastKeyCode===8&&Date.now()-100<e.input.lastKeyCodeTime?(f=e.state.selection.to,p=`end`):(f=e.state.selection.from,p=`start`),e.input.lastKeyCode=null;let m=rl(d.content,l.doc.content,l.from,f,p);if(m&&e.input.domChangeCount++,(_a&&e.input.lastIOSEnter>Date.now()-225||ba)&&i.some(e=>e.nodeType==1&&!Zc.test(e.nodeName))&&(!m||m.endA>=m.endB)&&e.someProp(`handleKeyDown`,t=>t(e,ta(13,`Enter`)))){e.input.lastIOSEnter=0;return}if(!m)if(r&&c instanceof J&&!c.empty&&c.$head.sameParent(c.$anchor)&&!e.composing&&!(l.sel&&l.sel.anchor!=l.sel.head))m={start:c.from,endA:c.to,endB:c.to};else{if(l.sel){let t=$c(e,e.state.doc,l.sel);if(t&&!t.eq(e.state.selection)){let n=e.state.tr.setSelection(t);a&&n.setMeta(`composition`,a),e.dispatch(n)}}return}e.state.selection.from<e.state.selection.to&&m.start==m.endB&&e.state.selection instanceof J&&(m.start>e.state.selection.from&&m.start<=e.state.selection.from+2&&e.state.selection.from>=l.from?m.start=e.state.selection.from:m.endA<e.state.selection.to&&m.endA>=e.state.selection.to-2&&e.state.selection.to<=l.to&&(m.endB+=e.state.selection.to-m.endA,m.endA=e.state.selection.to)),ua&&da<=11&&m.endB==m.start+1&&m.endA==m.start&&m.start>l.from&&l.doc.textBetween(m.start-l.from-1,m.start-l.from+1)==` \xA0`&&(m.start--,m.endA--,m.endB--);let h=l.doc.resolveNoCache(m.start-l.from),g=l.doc.resolveNoCache(m.endB-l.from),_=u.resolve(m.start),v=h.sameParent(g)&&h.parent.inlineContent&&_.end()>=m.endA;if((_a&&e.input.lastIOSEnter>Date.now()-225&&(!v||i.some(e=>e.nodeName==`DIV`||e.nodeName==`P`))||!v&&h.pos<l.doc.content.size&&(!h.sameParent(g)||!h.parent.inlineContent)&&h.pos<g.pos&&!/\S/.test(l.doc.textBetween(h.pos,g.pos,``,``)))&&e.someProp(`handleKeyDown`,t=>t(e,ta(13,`Enter`)))){e.input.lastIOSEnter=0;return}if(e.state.selection.anchor>m.start&&tl(u,m.start,m.endA,h,g)&&e.someProp(`handleKeyDown`,t=>t(e,ta(8,`Backspace`)))){ba&&ma&&e.domObserver.suppressSelectionUpdates();return}ma&&m.endB==m.start&&(e.input.lastChromeDelete=Date.now()),ba&&!v&&h.start()!=g.start()&&g.parentOffset==0&&h.depth==g.depth&&l.sel&&l.sel.anchor==l.sel.head&&l.sel.head==m.endA&&(m.endB-=2,g=l.doc.resolveNoCache(m.endB-l.from),setTimeout(()=>{e.someProp(`handleKeyDown`,function(t){return t(e,ta(13,`Enter`))})},20));let y=m.start,b=m.endA,x=t=>{let n=t||e.state.tr.replace(y,b,l.doc.slice(m.start-l.from,m.endB-l.from));if(l.sel){let t=$c(e,n.doc,l.sel);t&&!(ma&&e.composing&&t.empty&&(m.start!=m.endB||e.input.lastChromeDelete<Date.now()-100)&&(t.head==y||t.head==n.mapping.map(b)-1)||ua&&t.empty&&t.head==y)&&n.setSelection(t)}return a&&n.setMeta(`composition`,a),n.scrollIntoView()},S;if(v)if(h.pos==g.pos){ua&&da<=11&&h.parentOffset==0&&(e.domObserver.suppressSelectionUpdates(),setTimeout(()=>No(e),20));let t=x(e.state.tr.delete(y,b)),n=u.resolve(m.start).marksAcross(u.resolve(m.endA));n&&t.ensureMarks(n),e.dispatch(t)}else if(m.endA==m.endB&&(S=el(h.parent.content.cut(h.parentOffset,g.parentOffset),_.parent.content.cut(_.parentOffset,m.endA-_.start())))){let t=x(e.state.tr);S.type==`add`?t.addMark(y,b,S.mark):t.removeMark(y,b,S.mark),e.dispatch(t)}else if(h.parent.child(h.index()).isText&&h.index()==g.index()-+!g.textOffset){let t=h.parent.textBetween(h.parentOffset,g.parentOffset),n=()=>x(e.state.tr.insertText(t,y,b));e.someProp(`handleTextInput`,r=>r(e,y,b,t,n))||e.dispatch(n())}else e.dispatch(x());else e.dispatch(x())}function $c(e,t,n){return Math.max(n.anchor,n.head)>t.content.size?null:Ho(e,t.resolve(n.anchor),t.resolve(n.head))}function el(e,t){let n=e.firstChild.marks,r=t.firstChild.marks,i=n,a=r,o,s,c;for(let e=0;e<r.length;e++)i=r[e].removeFromSet(i);for(let e=0;e<n.length;e++)a=n[e].removeFromSet(a);if(i.length==1&&a.length==0)s=i[0],o=`add`,c=e=>e.mark(s.addToSet(e.marks));else if(i.length==0&&a.length==1)s=a[0],o=`remove`,c=e=>e.mark(s.removeFromSet(e.marks));else return null;let l=[];for(let e=0;e<t.childCount;e++)l.push(c(t.child(e)));if(P.from(l).eq(e))return{mark:s,type:o}}function tl(e,t,n,r,i){if(n-t<=i.pos-r.pos||nl(r,!0,!1)<i.pos)return!1;let a=e.resolve(t);if(!r.parent.isTextblock){let e=a.nodeAfter;return e!=null&&n==t+e.nodeSize}if(a.parentOffset<a.parent.content.size||!a.parent.isTextblock)return!1;let o=e.resolve(nl(a,!0,!0));return!o.parent.isTextblock||o.pos>n||nl(o,!0,!1)<n?!1:r.parent.content.cut(r.parentOffset).eq(o.parent.content)}function nl(e,t,n){let r=e.depth,i=t?e.end():e.pos;for(;r>0&&(t||e.indexAfter(r)==e.node(r).childCount);)r--,i++,t=!1;if(n){let t=e.node(r).maybeChild(e.indexAfter(r));for(;t&&!t.isLeaf;)t=t.firstChild,i++}return i}function rl(e,t,n,r,i){let a=e.findDiffStart(t,n),o=n+e.size,s=n+t.size;if(a==null)return null;let{a:c,b:l}=e.findDiffEnd(t,o,s);if(i==`end`){let e=Math.max(0,a-Math.min(c,l));r-=c+e-a}if(c<a&&o<s){let e=r<=a&&r>=c?a-r:0;a-=e,l=a+(l-c),c=a}else if(l<a){let e=r<=a&&r>=l?a-r:0;a-=e,c=a+(c-l),l=a}return{start:a,endA:c,endB:l}}var il=class{constructor(e,t){this._root=null,this.focused=!1,this.trackWrites=null,this.mounted=!1,this.markCursor=null,this.cursorWrapper=null,this.lastSelectedViewDesc=void 0,this.input=new js,this.prevDirectPlugins=[],this.pluginViews=[],this.requiresGeckoHackNode=!1,this.dragging=null,this._props=t,this.state=t.state,this.directPlugins=t.plugins||[],this.directPlugins.forEach(dl),this.dispatch=this.dispatch.bind(this),this.dom=e&&e.mount||document.createElement(`div`),e&&(e.appendChild?e.appendChild(this.dom):typeof e==`function`?e(this.dom):e.mount&&(this.mounted=!0)),this.editable=sl(this),ol(this),this.nodeViews=ll(this),this.docView=uo(this.state.doc,al(this),Lc(this),this.dom,this),this.domObserver=new Vc(this,(e,t,n,r)=>Qc(this,e,t,n,r)),this.domObserver.start(),Ms(this),this.updatePluginViews()}get composing(){return this.input.composing}get props(){if(this._props.state!=this.state){let e=this._props;this._props={};for(let t in e)this._props[t]=e[t];this._props.state=this.state}return this._props}update(e){e.handleDOMEvents!=this._props.handleDOMEvents&&Fs(this);let t=this._props;this._props=e,e.plugins&&(e.plugins.forEach(dl),this.directPlugins=e.plugins),this.updateStateInner(e.state,t)}setProps(e){let t={};for(let e in this._props)t[e]=this._props[e];t.state=this.state;for(let n in e)t[n]=e[n];this.update(t)}updateState(e){this.updateStateInner(e,this._props)}updateStateInner(e,t){let n=this.state,r=!1,i=!1;e.storedMarks&&this.composing&&(ac(this),i=!0),this.state=e;let a=n.plugins!=e.plugins||this._props.plugins!=t.plugins;if(a||this._props.plugins!=t.plugins||this._props.nodeViews!=t.nodeViews){let e=ll(this);ul(e,this.nodeViews)&&(this.nodeViews=e,r=!0)}(a||t.handleDOMEvents!=this._props.handleDOMEvents)&&Fs(this),this.editable=sl(this),ol(this);let o=Lc(this),s=al(this),c=n.plugins!=e.plugins&&!n.doc.eq(e.doc)?`reset`:e.scrollToSelection>n.scrollToSelection?`to selection`:`preserve`,l=r||!this.docView.matchesNode(e.doc,s,o);(l||!e.selection.eq(n.selection))&&(i=!0);let u=c==`preserve`&&i&&this.dom.style.overflowAnchor==null&&Da(this);if(i){this.domObserver.stop();let t=l&&(ua||ma)&&!this.composing&&!n.selection.empty&&!e.selection.empty&&cl(n.selection,e.selection);if(l){let n=ma?this.trackWrites=this.domSelectionRange().focusNode:null;this.composing&&(this.input.compositionNode=oc(this)),(r||!this.docView.update(e.doc,s,o,this))&&(this.docView.updateOuterDeco(s),this.docView.destroy(),this.docView=uo(e.doc,s,o,this.dom,this)),n&&(!this.trackWrites||!this.dom.contains(this.trackWrites))&&(t=!0)}let i=this.input.mouseDown;t||!(i&&this.domObserver.currentSelection.eq(this.domSelectionRange())&&Go(this)&&i.delaySelUpdate())?No(this,t):(Bo(this,e.selection),this.domObserver.setCurSelection()),this.domObserver.start()}this.updatePluginViews(n),this.dragging?.node&&!n.doc.eq(e.doc)&&this.updateDraggedNode(this.dragging,n),c==`reset`?this.dom.scrollTop=0:c==`to selection`?this.scrollToSelection():u&&ka(u)}scrollToSelection(){let e=this.domSelectionRange().focusNode;if(!(!e||!this.dom.contains(e.nodeType==1?e:e.parentNode))&&!this.someProp(`handleScrollToSelection`,e=>e(this)))if(this.state.selection instanceof Y){let t=this.docView.domAfterPos(this.state.selection.from);t.nodeType==1&&Ea(this,t.getBoundingClientRect(),e)}else Ea(this,this.coordsAtPos(this.state.selection.head,1),e)}destroyPluginViews(){let e;for(;e=this.pluginViews.pop();)e.destroy&&e.destroy()}updatePluginViews(e){if(!e||e.plugins!=this.state.plugins||this.directPlugins!=this.prevDirectPlugins){this.prevDirectPlugins=this.directPlugins,this.destroyPluginViews();for(let e=0;e<this.directPlugins.length;e++){let t=this.directPlugins[e];t.spec.view&&this.pluginViews.push(t.spec.view(this))}for(let e=0;e<this.state.plugins.length;e++){let t=this.state.plugins[e];t.spec.view&&this.pluginViews.push(t.spec.view(this))}}else for(let t=0;t<this.pluginViews.length;t++){let n=this.pluginViews[t];n.update&&n.update(this,e)}}updateDraggedNode(e,t){let n=e.node,r=-1;if(n.from<this.state.doc.content.size&&this.state.doc.nodeAt(n.from)==n.node)r=n.from;else{let e=n.from+(this.state.doc.content.size-t.doc.content.size);(e>0&&e<this.state.doc.content.size&&this.state.doc.nodeAt(e))==n.node&&(r=e)}this.dragging=new mc(e.slice,e.move,r<0?void 0:Y.create(this.state.doc,r))}someProp(e,t){let n=this._props&&this._props[e],r;if(n!=null&&(r=t?t(n):n))return r;for(let n=0;n<this.directPlugins.length;n++){let i=this.directPlugins[n].props[e];if(i!=null&&(r=t?t(i):i))return r}let i=this.state.plugins;if(i)for(let n=0;n<i.length;n++){let a=i[n].props[e];if(a!=null&&(r=t?t(a):a))return r}}hasFocus(){if(ua){let e=this.root.activeElement;if(e==this.dom)return!0;if(!e||!this.dom.contains(e))return!1;for(;e&&this.dom!=e&&this.dom.contains(e);){if(e.contentEditable==`false`)return!1;e=e.parentElement}return!0}return this.root.activeElement==this.dom}focus(){this.domObserver.stop(),this.editable&&Ma(this.dom),No(this),this.domObserver.start()}get root(){let e=this._root;if(e==null){for(let e=this.dom.parentNode;e;e=e.parentNode)if(e.nodeType==9||e.nodeType==11&&e.host)return e.getSelection||(Object.getPrototypeOf(e).getSelection=()=>e.ownerDocument.getSelection()),this._root=e}return e||document}updateRoot(){this._root=null}posAtCoords(e){return Ba(this,e)}coordsAtPos(e,t=1){return Wa(this,e,t)}domAtPos(e,t=0){return this.docView.domFromPos(e,t)}nodeDOM(e){let t=this.docView.descAt(e);return t?t.nodeDOM:null}posAtDOM(e,t,n=-1){let r=this.docView.posFromDOM(e,t,n);if(r==null)throw RangeError(`DOM position not inside the editor`);return r}endOfTextblock(e,t){return eo(this,t||this.state,e)}pasteHTML(e,t){return fc(this,``,e,!1,t||new ClipboardEvent(`paste`))}pasteText(e,t){return fc(this,e,null,!0,t||new ClipboardEvent(`paste`))}serializeForClipboard(e){return fs(this,e)}destroy(){this.docView&&(Ps(this),this.destroyPluginViews(),this.mounted?(this.docView.update(this.state.doc,[],Lc(this),this),this.dom.textContent=``):this.dom.parentNode&&this.dom.parentNode.removeChild(this.dom),this.docView.destroy(),this.docView=null,Gi())}get isDestroyed(){return this.docView==null}dispatchEvent(e){return Rs(this,e)}domSelectionRange(){let e=this.domSelection();return e?ga&&this.root.nodeType===11&&na(this.dom.ownerDocument)==this.dom&&Kc(this,e)||e:{focusNode:null,focusOffset:0,anchorNode:null,anchorOffset:0}}domSelection(){return this.root.getSelection()}};il.prototype.dispatch=function(e){let t=this._props.dispatchTransaction;t?t.call(this,e):this.updateState(this.state.apply(e))};function al(e){let t=Object.create(null);return t.class=`ProseMirror`,t.contenteditable=String(e.editable),e.someProp(`attributes`,n=>{if(typeof n==`function`&&(n=n(e.state)),n)for(let e in n)e==`class`?t.class+=` `+n[e]:e==`style`?t.style=(t.style?t.style+`;`:``)+n[e]:!t[e]&&e!=`contenteditable`&&e!=`nodeName`&&(t[e]=String(n[e]))}),t.translate||=`no`,[Sc.node(0,e.state.doc.content.size,t)]}function ol(e){if(e.markCursor){let t=document.createElement(`img`);t.className=`ProseMirror-separator`,t.setAttribute(`mark-placeholder`,`true`),t.setAttribute(`alt`,``),e.cursorWrapper={dom:t,deco:Sc.widget(e.state.selection.from,t,{raw:!0,marks:e.markCursor})}}else e.cursorWrapper=null}function sl(e){return!e.someProp(`editable`,t=>t(e.state)===!1)}function cl(e,t){let n=Math.min(e.$anchor.sharedDepth(e.head),t.$anchor.sharedDepth(t.head));return e.$anchor.start(n)!=t.$anchor.start(n)}function ll(e){let t=Object.create(null);function n(e){for(let n in e)Object.prototype.hasOwnProperty.call(t,n)||(t[n]=e[n])}return e.someProp(`nodeViews`,n),e.someProp(`markViews`,n),t}function ul(e,t){let n=0,r=0;for(let r in e){if(e[r]!=t[r])return!0;n++}for(let e in t)r++;return n!=r}function dl(e){if(e.spec.state||e.spec.filterTransaction||e.spec.appendTransaction)throw RangeError(`Plugins passed directly to the view must not have a state component`)}var fl=794,pl=1123;function ml(e,t,n){let r=Math.round(n??30+28*t);e.dataset.w=String(r),e.style.setProperty(`--solidity`,String(.3+.65*t));let i=Math.round(pl/fl*r),a=e.querySelector(`.thumb`),o=e.querySelector(`.thumb-inner`),s=e.querySelector(`.ghost-label`);a&&(a.style.width=`${r}px`,a.style.height=`${i}px`),o&&(o.style.transform=`scale(${r/fl})`),s&&(s.style.maxWidth=``)}function hl(e,t){let n=e.querySelector(`.ghost-clip`);n&&(n.style.display=t.length?``:`none`,n.title=t.length?`answered by ${t.join(`, `)}`:``)}function gl(e,n,r){let i=document.createElement(`button`);i.type=`button`,i.className=`ghost`;let a=document.createElement(`div`);if(a.className=`thumb`,e.drafts){let e=document.createElement(`span`);e.className=`workings-dot`,e.title=`this leaf has drafts in its workings`,a.appendChild(e)}let o=document.createElement(`div`);if(o.className=`thumb-inner`,e.previewLines.some(e=>e.trim())){let t=document.createElement(`div`);t.className=`thumb-text`;for(let n of e.previewLines){let e=document.createElement(`p`);e.textContent=n||` `,t.appendChild(e)}o.appendChild(t)}if(e.strokes.length){let t=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t.classList.add(`thumb-ink`),t.setAttribute(`viewBox`,`0 0 ${fl} ${pl}`);for(let n of e.strokes){if(!n.length)continue;let e=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);e.setAttribute(`d`,`M ${n[0][0]} ${n[0][1]} `+n.slice(1).map(([e,t])=>`L ${e} ${t}`).join(` `)),t.appendChild(e)}o.appendChild(t)}a.appendChild(o);let s=document.createElement(`div`);s.className=`ghost-label`;let c=document.createElement(`span`);c.className=`ghost-clip`,c.textContent=`📎`,c.style.display=`none`;let l=document.createElement(`span`);return l.className=`ghost-label-text`,l.textContent=e.firstLine,s.appendChild(c),s.appendChild(l),a.appendChild(s),i.appendChild(a),ml(i,n),t(i,()=>{r(e.docId)}),i}var _l=`phloem.slip`;function vl(e,n){let r=document.createElement(`div`);r.className=`slip-cloud`;let i=e=>e.endsWith(`es`)&&e.length>4?e.slice(0,-2):e.endsWith(`s`)&&e.length>3?e.slice(0,-1):e,a=new Map;for(let{word:t,weight:n}of e){let e=a.get(i(t));e?(e.weight=Math.max(e.weight,n),t.length<e.word.length&&(e.word=t)):a.set(i(t),{word:t,weight:n})}let o=[...a.values()].sort((e,t)=>t.weight-e.weight),s=Math.max(o[0]?.weight??0,1),c=o.filter(e=>e.weight>=s*.18).slice(0,12),l=[];for(let{word:e,weight:i}of c){let a=Math.min(1,i/s),o=document.createElement(n?`button`:`span`);o.className=n?`slip-word`:`slip-word static`,o.textContent=e,o.style.fontSize=`${(12+14*a).toFixed(1)}px`,o.style.opacity=String(.4+.55*a),n&&(o.type=`button`,o.title=`find “${e}” in this leaf`,t(o,()=>{n(e)})),r.appendChild(o),l.push({word:e,el:o})}return{cloud:r,buttons:l}}function yl(e,t,n=()=>{}){let r=document.createElement(`div`);r.id=`slip`;let i=document.createElement(`div`);i.className=`slip-title`,i.textContent=`found on these words`,r.appendChild(i);let{cloud:a,buttons:o}=vl(e,t);r.appendChild(a),document.body.appendChild(r);let s=!1;function c(){if(s)return;let e=r.getBoundingClientRect();n({left:e.left,right:e.right,top:e.top,bottom:e.bottom})}requestAnimationFrame(c);function l(){s||(s=!0,n(null),r.style.pointerEvents=`none`,r.style.opacity=`0`,window.setTimeout(()=>r.remove(),520))}return{setSolidity(e){s||(r.style.opacity=String(Math.max(0,Math.min(1,e))),e<=.06&&l())},prune(e){if(s)return;let t=!1;for(let n=o.length-1;n>=0;n--)e(o[n].word)||(o[n].el.remove(),o.splice(n,1),t=!0);o.length===0?l():t&&requestAnimationFrame(c)}}}var bl=300,xl=80,Sl=6,Cl=46,wl={standing:3,full:18,strictness:1.5,boost:1.4,commonFrac:.35,withinReach:.25,properness:0},Tl={...wl},El=16,Dl=new Set(`the.and.was.with.who.whom.they.that.this.from.for.are.can.you.had.has.have.not.but.all.any.she.him.her.his.our.out.get.got.one.two.here.there.then.than.into.onto.over.under.about.goes.were.will.would.could.should.what.when.how.why`.split(`.`));function Ol(e,t,n){let r=/[\p{L}'][\p{L}']{2,}/gu,i;for(;i=r.exec(e);){let r=i[0],a=r.toLowerCase();if(Dl.has(a))continue;let o=i.index-1,s=!1;for(;o>=0&&/\s/.test(e[o]);)e[o]===`
`&&(s=!0),o--;for(;o>=0&&/["'“‘(\[]/.test(e[o]);)o--;let c=o>=0?e[o]:``;s||c===``||/[.!?…:;]/.test(c)||(t.set(a,(t.get(a)??0)+1),/^\p{Lu}/u.test(r)&&n.set(a,(n.get(a)??0)+1))}}function kl(e){let t=e.toLowerCase().match(/[\p{L}']{3,}/gu)??[];return[...new Set(t.filter(e=>!Dl.has(e)))]}function Al(e){let t=new Map,n=e.toLowerCase().match(/[\p{L}']{3,}/gu)??[];for(let e of n)Dl.has(e)||t.set(e,(t.get(e)??0)+1);return t}function jl(e){let t=new Map,n=/[\p{L}']{3,}/gu,r;for(;r=n.exec(e);){let n=r[0],i=n.toLowerCase();if(/^\p{Lu}/u.test(n)){let n=r.index-1;for(;n>=0&&e[n]===` `;)n--;let a=n>=0?e[n]:``;if(!(a===``||a===`.`||a===`!`||a===`?`||a===`
`||a===`"`||a===`‘`||a===`“`)){t.set(i,1.8);continue}}if(t.get(i)===1.8)continue;let a=1;i.length>=5&&(i.endsWith(`ed`)||i.endsWith(`ly`))?a=.15:i.length>=6&&i.endsWith(`ing`)&&(a=.25),t.set(i,Math.max(t.get(i)??0,a))}return t}function Ml(e,t=()=>{}){let n=document.createElement(`div`);n.id=`ghosts`,document.body.appendChild(n);let r=document.createElement(`div`);r.id=`ghost-preview`,document.body.appendChild(r);let i,a,o=null;function s(){window.clearTimeout(a)}function c(){window.clearTimeout(a),a=window.setTimeout(u,220)}function l(e){let n=te.get(e);if(!n||!n.weighted.length)return;s(),o&&o!==e&&O.get(o)?.classList.remove(`slip-source`),o=e,O.get(e)?.classList.add(`slip-source`),r.textContent=``;let i=document.createElement(`div`);i.className=`slip-title`,i.textContent=`found on these words`,r.appendChild(i);let a=vl(n.weighted,e=>{u(),t(n.leaf,e,n.weighted)}).cloud;r.appendChild(a),r.classList.add(`show`)}function u(){window.clearTimeout(i),s(),o&&O.get(o)?.classList.remove(`slip-source`),o=null,r.classList.remove(`show`)}r.addEventListener(`mouseenter`,s),r.addEventListener(`mouseleave`,c);let d=W(),f=[],p,m=null,h=0,g={leaves:0,queryWords:0,cleared:0,withinReach:0,standing:0,top:0,cut:0,ms:0},_=[],v=new Map,y=new Map,b=new Map,x=new Map;function S(){return .5+Math.max(2,f.length*Tl.commonFrac)}function C(e){let t=v.get(e)??0;return Math.max(0,Math.log(S()/(.5+t)))}function w(e){let t=Tl.properness;if(t<=0)return 1;let n=y.get(e)??0,r=n>0?(b.get(e)??0)/n:0;return 1-t+t*r}let T=e=>/(?:s|x|z|ch|sh)$/.test(e);function E(e,t){return e.has(t)?t:e.has(t+`s`)?t+`s`:T(t)&&e.has(t+`es`)?t+`es`:t.endsWith(`es`)&&t.length>4&&T(t.slice(0,-2))&&e.has(t.slice(0,-2))?t.slice(0,-2):t.endsWith(`s`)&&t.length>3&&e.has(t.slice(0,-1))?t.slice(0,-1):null}sr().then(({leaves:e})=>{f=e.filter(e=>e.docId!==d&&!e.workingsOf),e.some(e=>e.docId===d&&e.workingsOf)&&(f=[]),x=new Map(f.map(e=>[e.docId,Al(e.text)]));for(let e of x.values())for(let t of e.keys())v.set(t,(v.get(t)??0)+1);for(let e of f)Ol(e.text,y,b);m&&ae(m.docText,m.nearlyEmpty)});let D=[],ee=null;window.addEventListener(`resize`,()=>ie(D));let O=new Map,k=new Map,te=new Map,ne=new Map,A=2e3;function j(e,t,n,r){let i=e.dataset.x?parseFloat(e.dataset.x):t,a=e.dataset.y?parseFloat(e.dataset.y):n;e.dataset.x=String(t),e.dataset.y=String(n);let o=Math.hypot(t-i,n-a);if((ne.get(e)??[]).forEach(window.clearTimeout),ne.delete(e),!e.dataset.placed||o<8){e.dataset.placed=`1`,e.style.left=`${t}px`,e.style.top=`${n}px`;return}let s=(r*(1-.82*Math.min(1,o/260))).toFixed(3);e.style.transition=`opacity 320ms ease`,e.style.opacity=s;let c=window.setTimeout(()=>{e.style.transition=`opacity 320ms ease, left ${A}ms ease, top ${A}ms ease`,e.style.left=`${t}px`,e.style.top=`${n}px`},320),l=window.setTimeout(()=>{e.style.transition=`opacity 520ms ease`,e.style.opacity=``},2320),u=window.setTimeout(()=>{e.style.transition=``,ne.delete(e)},2840);ne.set(e,[c,l,u])}function re(t){te.set(t.leaf.docId,t);let r=O.get(t.leaf.docId);if(r){let e=k.get(t.leaf.docId);e!==void 0&&(window.clearTimeout(e),k.delete(t.leaf.docId)),r.style.opacity=``,r.style.pointerEvents=``}else{r=gl(t.leaf,t.relevance,n=>{let r=te.get(n)??t;e(r.leaf,r.weighted)});let a=t.leaf.docId;r.addEventListener(`mouseenter`,()=>{s(),window.clearTimeout(i);let e=o?90:300;i=window.setTimeout(()=>l(a),e)}),r.addEventListener(`mouseleave`,()=>{window.clearTimeout(i),o===a&&c()}),r.addEventListener(`mousedown`,()=>u()),O.set(t.leaf.docId,r),r.style.opacity=`0`,n.appendChild(r);let d=r;requestAnimationFrame(()=>d.style.opacity=``),window.setTimeout(()=>d.style.opacity=``,80)}return hl(r,t.via),r}function ie(e){D=e;let t=document.querySelector(`.page`);if(!t)return;let n=new Set(e.map(e=>e.leaf.docId));o&&!n.has(o)&&u();for(let[e,t]of O)!n.has(e)&&!k.has(e)&&((ne.get(t)??[]).forEach(window.clearTimeout),ne.delete(t),t.style.transition=``,t.style.opacity=`0`,t.style.pointerEvents=`none`,k.set(e,window.setTimeout(()=>{t.remove(),O.delete(e),k.delete(e)},1600)));if(e.length===0)return;let r=t.getBoundingClientRect(),i=window.innerHeight*.16,a=window.innerHeight*.9,s=Math.round(Cl*1.414)+18,c=(e,t)=>{if(!ee||!(e<ee.right&&e+Cl>ee.left))return t;let n=Math.max(t,ee.bottom+12);return n+s<=window.innerHeight-8?n:t},l=document.body.classList.contains(`split-open`)?r.right-16:Math.min(r.right+10,window.innerWidth-Cl-8),d=c(l,i),f=e.length,p=f>1?Math.min(93,Math.max(12,(a-d-s)/(f-1))):0;e.forEach((e,t)=>{let n=re(e);ml(n,e.relevance,Cl);let r=.3+.65*e.relevance,i=Math.round(Math.max(8,Math.min(d+t*p,window.innerHeight-s-8)));j(n,Math.round(l),i,r),n.style.transform=``,n.style.zIndex=String(50-t)})}function ae(e,t){let n=performance.now();m={docText:e,nearlyEmpty:t};let r=kl(e),i=jl(e),a=Math.log(S()/1.5),o=f.map(e=>{let n=x.get(e.docId),o=[],s=[],c=0;if(n)for(let e of r){let t=E(n,e);if(t){o.push(e);let r=i.get(e)??1,a=1+Math.log(n.get(t)??1),l=e.length*C(t)*r*a*w(t);c+=l,l>0&&s.push({word:e,weight:l})}}let l=e.files.filter(e=>{let t=new Set(e.lower.split(/[^\p{L}\p{N}]+/u));return o.some(e=>E(t,e)!==null)}).map(e=>e.name).slice(0,2),u=Math.min(1,c/(Tl.full*a));t&&(u=Math.min(1,u*Tl.boost));let d=Tl.standing*a*(t?1:Tl.strictness);return{leaf:e,relevance:u,score:c,matched:o,weighted:s,via:l,floor:d}}),s=[];if(r.length){let e=o.filter(e=>e.score>=e.floor);e.sort((e,t)=>t.score-e.score||t.leaf.lastT-e.leaf.lastT);let t=e[0]?.score??0,n=e.filter(e=>e.score>=t*Tl.withinReach);s=n.slice(0,Sl),g={leaves:f.length,queryWords:i.size,cleared:e.length,withinReach:n.length,standing:s.length,top:t,cut:t*Tl.withinReach,ms:0}}else g={...g,leaves:f.length,queryWords:0,cleared:0,withinReach:0,standing:0};let c=performance.now()-n;g.ms=c;for(let e of _)e();c>El&&performance.now()-h>4e3&&(h=performance.now(),console.warn(`[phloem] reach scored ${f.length} leaves in ${c.toFixed(1)}ms (> ${El}ms frame). §5 trigger: build the inverted index (word → docIds, maintained at quiet moments — tree-exit, valves — never per keystroke).`)),ie(s)}let oe=`phloem.reach.tuning`;try{Object.assign(Tl,JSON.parse(localStorage.getItem(oe)??`{}`))}catch{}let se=()=>{m&&ae(m.docText,m.nearlyEmpty)};return{tune:{get:()=>({...Tl}),defaults:()=>({...wl}),set(e){Object.assign(Tl,e);try{localStorage.setItem(oe,JSON.stringify(Tl))}catch{}return se(),{...Tl}},reset(){Object.assign(Tl,wl);try{localStorage.removeItem(oe)}catch{}return se(),{...Tl}},stats:()=>({...g}),watch(e){_.push(e)}},update(e){window.clearTimeout(p),p=window.setTimeout(()=>{let t=e();ae(t,t.trim().length<xl)},bl)},reserve(e){ee=e,ie(D)}}}for(var Nl={8:`Backspace`,9:`Tab`,10:`Enter`,12:`NumLock`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,44:`PrintScreen`,45:`Insert`,46:`Delete`,59:`;`,61:`=`,91:`Meta`,92:`Meta`,106:`*`,107:`+`,108:`,`,109:`-`,110:`.`,111:`/`,144:`NumLock`,145:`ScrollLock`,160:`Shift`,161:`Shift`,162:`Control`,163:`Control`,164:`Alt`,165:`Alt`,173:`-`,186:`;`,187:`=`,188:`,`,189:`-`,190:`.`,191:`/`,192:"`",219:`[`,220:`\\`,221:`]`,222:`'`},Pl={48:`)`,49:`!`,50:`@`,51:`#`,52:`$`,53:`%`,54:`^`,55:`&`,56:`*`,57:`(`,59:`:`,61:`+`,173:`_`,186:`:`,187:`+`,188:`<`,189:`_`,190:`>`,191:`?`,192:`~`,219:`{`,220:`|`,221:`}`,222:`"`},Fl=typeof navigator<`u`&&/Mac/.test(navigator.platform),Il=typeof navigator<`u`&&/MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent),Ll=0;Ll<10;Ll++)Nl[48+Ll]=Nl[96+Ll]=String(Ll);for(var Ll=1;Ll<=24;Ll++)Nl[Ll+111]=`F`+Ll;for(var Ll=65;Ll<=90;Ll++)Nl[Ll]=String.fromCharCode(Ll+32),Pl[Ll]=String.fromCharCode(Ll);for(var Rl in Nl)Pl.hasOwnProperty(Rl)||(Pl[Rl]=Nl[Rl]);function zl(e){var t=!(Fl&&e.metaKey&&e.shiftKey&&!e.ctrlKey&&!e.altKey||Il&&e.shiftKey&&e.key&&e.key.length==1||e.key==`Unidentified`)&&e.key||(e.shiftKey?Pl:Nl)[e.keyCode]||e.key||`Unidentified`;return t==`Esc`&&(t=`Escape`),t==`Del`&&(t=`Delete`),t==`Left`&&(t=`ArrowLeft`),t==`Up`&&(t=`ArrowUp`),t==`Right`&&(t=`ArrowRight`),t==`Down`&&(t=`ArrowDown`),t}var Bl=typeof navigator<`u`&&/Mac|iP(hone|[oa]d)/.test(navigator.platform),Vl=typeof navigator<`u`&&/Win/.test(navigator.platform);function Hl(e){let t=e.split(/-(?!$)/),n=t[t.length-1];n==`Space`&&(n=` `);let r,i,a,o;for(let e=0;e<t.length-1;e++){let n=t[e];if(/^(cmd|meta|m)$/i.test(n))o=!0;else if(/^a(lt)?$/i.test(n))r=!0;else if(/^(c|ctrl|control)$/i.test(n))i=!0;else if(/^s(hift)?$/i.test(n))a=!0;else if(/^mod$/i.test(n))Bl?o=!0:i=!0;else throw Error(`Unrecognized modifier name: `+n)}return r&&(n=`Alt-`+n),i&&(n=`Ctrl-`+n),o&&(n=`Meta-`+n),a&&(n=`Shift-`+n),n}function Ul(e){let t=Object.create(null);for(let n in e)t[Hl(n)]=e[n];return t}function Wl(e,t,n=!0){return t.altKey&&(e=`Alt-`+e),t.ctrlKey&&(e=`Ctrl-`+e),t.metaKey&&(e=`Meta-`+e),n&&t.shiftKey&&(e=`Shift-`+e),e}function Gl(e){return new Li({props:{handleKeyDown:Kl(e)}})}function Kl(e){let t=Ul(e);return function(e,n){let r=zl(n),i,a=t[Wl(r,n)];if(a&&a(e.state,e.dispatch,e))return!0;if(r.length==1&&r!=` `){if(n.shiftKey){let i=t[Wl(r,n,!1)];if(i&&i(e.state,e.dispatch,e))return!0}if((n.altKey||n.metaKey||n.ctrlKey)&&!(Vl&&n.ctrlKey&&n.altKey)&&(i=Nl[n.keyCode])&&i!=r){let r=t[Wl(i,n)];if(r&&r(e.state,e.dispatch,e))return!0}}return!1}}var ql=(e,t)=>e.selection.empty?!1:(t&&t(e.tr.deleteSelection().scrollIntoView()),!0);function Jl(e,t){let{$cursor:n}=e.selection;return!n||(t?!t.endOfTextblock(`backward`,e):n.parentOffset>0)?null:n}var Yl=(e,t,n)=>{let r=Jl(e,n);if(!r)return!1;let i=Ql(r);if(!i){let n=r.blockRange(),i=n&&Ir(n);return i==null?!1:(t&&t(e.tr.lift(n,i).scrollIntoView()),!0)}let a=i.nodeBefore;if(fu(e,i,t,-1))return!0;if(r.parent.content.size==0&&(Xl(a,`end`)||Y.isSelectable(a)))for(let n=r.depth;;n--){let o=Qr(e.doc,r.before(n),r.after(n),L.empty);if(o&&o.slice.size<o.to-o.from){if(t){let n=e.tr.step(o);n.setSelection(Xl(a,`end`)?q.findFrom(n.doc.resolve(n.mapping.map(i.pos,-1)),-1):Y.create(n.doc,i.pos-a.nodeSize)),t(n.scrollIntoView())}return!0}if(n==1||r.node(n-1).childCount>1)break}return a.isAtom&&i.depth==r.depth-1?(t&&t(e.tr.delete(i.pos-a.nodeSize,i.pos).scrollIntoView()),!0):!1};function Xl(e,t,n=!1){for(let r=e;r;r=t==`start`?r.firstChild:r.lastChild){if(r.isTextblock)return!0;if(n&&r.childCount!=1)return!1}return!1}var Zl=(e,t,n)=>{let{$head:r,empty:i}=e.selection,a=r;if(!i)return!1;if(r.parent.isTextblock){if(n?!n.endOfTextblock(`backward`,e):r.parentOffset>0)return!1;a=Ql(r)}let o=a&&a.nodeBefore;return!o||!Y.isSelectable(o)?!1:(t&&t(e.tr.setSelection(Y.create(e.doc,a.pos-o.nodeSize)).scrollIntoView()),!0)};function Ql(e){if(!e.parent.type.spec.isolating)for(let t=e.depth-1;t>=0;t--){if(e.index(t)>0)return e.doc.resolve(e.before(t+1));if(e.node(t).type.spec.isolating)break}return null}function $l(e,t){let{$cursor:n}=e.selection;return!n||(t?!t.endOfTextblock(`forward`,e):n.parentOffset<n.parent.content.size)?null:n}var eu=(e,t,n)=>{let r=$l(e,n);if(!r)return!1;let i=nu(r);if(!i)return!1;let a=i.nodeAfter;if(fu(e,i,t,1))return!0;if(r.parent.content.size==0&&(Xl(a,`start`)||Y.isSelectable(a))){let n=Qr(e.doc,r.before(),r.after(),L.empty);if(n&&n.slice.size<n.to-n.from){if(t){let r=e.tr.step(n);r.setSelection(Xl(a,`start`)?q.findFrom(r.doc.resolve(r.mapping.map(i.pos)),1):Y.create(r.doc,r.mapping.map(i.pos))),t(r.scrollIntoView())}return!0}}return a.isAtom&&i.depth==r.depth-1?(t&&t(e.tr.delete(i.pos,i.pos+a.nodeSize).scrollIntoView()),!0):!1},tu=(e,t,n)=>{let{$head:r,empty:i}=e.selection,a=r;if(!i)return!1;if(r.parent.isTextblock){if(n?!n.endOfTextblock(`forward`,e):r.parentOffset<r.parent.content.size)return!1;a=nu(r)}let o=a&&a.nodeAfter;return!o||!Y.isSelectable(o)?!1:(t&&t(e.tr.setSelection(Y.create(e.doc,a.pos)).scrollIntoView()),!0)};function nu(e){if(!e.parent.type.spec.isolating)for(let t=e.depth-1;t>=0;t--){let n=e.node(t);if(e.index(t)+1<n.childCount)return e.doc.resolve(e.after(t+1));if(n.type.spec.isolating)break}return null}var ru=(e,t)=>{let{$head:n,$anchor:r}=e.selection;return!n.parent.type.spec.code||!n.sameParent(r)?!1:(t&&t(e.tr.insertText(`
`).scrollIntoView()),!0)};function iu(e){for(let t=0;t<e.edgeCount;t++){let{type:n}=e.edge(t);if(n.isTextblock&&!n.hasRequiredAttrs())return n}return null}var au=(e,t)=>{let{$head:n,$anchor:r}=e.selection;if(!n.parent.type.spec.code||!n.sameParent(r))return!1;let i=n.node(-1),a=n.indexAfter(-1),o=iu(i.contentMatchAt(a));if(!o||!i.canReplaceWith(a,a,o))return!1;if(t){let r=n.after(),i=e.tr.replaceWith(r,r,o.createAndFill());i.setSelection(q.near(i.doc.resolve(r),1)),t(i.scrollIntoView())}return!0},ou=(e,t)=>{let n=e.selection,{$from:r,$to:i}=n;if(n instanceof Ci||r.parent.inlineContent||i.parent.inlineContent)return!1;let a=iu(i.parent.contentMatchAt(i.indexAfter()));if(!a||!a.isTextblock)return!1;if(t){let n=(!r.parentOffset&&i.index()<i.parent.childCount?r:i).pos,o=e.tr.insert(n,a.createAndFill());o.setSelection(J.create(o.doc,n+1)),t(o.scrollIntoView())}return!0},su=(e,t)=>{let{$cursor:n}=e.selection;if(!n||n.parent.content.size)return!1;if(n.depth>1&&n.after()!=n.end(-1)){let r=n.before();if(Wr(e.doc,r))return t&&t(e.tr.split(r).scrollIntoView()),!0}let r=n.blockRange(),i=r&&Ir(r);return i==null?!1:(t&&t(e.tr.lift(r,i).scrollIntoView()),!0)};function cu(e){return(t,n)=>{let{$from:r,$to:i}=t.selection;if(t.selection instanceof Y&&t.selection.node.isBlock)return!r.parentOffset||!Wr(t.doc,r.pos)?!1:(n&&n(t.tr.split(r.pos).scrollIntoView()),!0);if(!r.depth)return!1;let a=[],o,s,c=!1,l=!1;for(let t=r.depth;;t--)if(r.node(t).isBlock){c=r.end(t)==r.pos+(r.depth-t),l=r.start(t)==r.pos-(r.depth-t),s=iu(r.node(t-1).contentMatchAt(r.indexAfter(t-1)));let n=e&&e(i.parent,c,r);a.unshift(n||(c&&s?{type:s}:null)),o=t;break}else{if(t==1)return!1;a.unshift(null)}let u=t.tr;(t.selection instanceof J||t.selection instanceof Ci)&&u.deleteSelection();let d=u.mapping.map(r.pos),f=Wr(u.doc,d,a.length,a);if(f||=(a[0]=s?{type:s}:null,Wr(u.doc,d,a.length,a)),!f)return!1;if(u.split(d,a.length,a),!c&&l&&r.node(o).type!=s){let e=u.mapping.map(r.before(o)),t=u.doc.resolve(e);s&&r.node(o-1).canReplaceWith(t.index(),t.index()+1,s)&&u.setNodeMarkup(u.mapping.map(r.before(o)),s)}return n&&n(u.scrollIntoView()),!0}}var lu=cu(),uu=(e,t)=>(t&&t(e.tr.setSelection(new Ci(e.doc))),!0);function du(e,t,n){let r=t.nodeBefore,i=t.nodeAfter,a=t.index();return!r||!i||!r.type.compatibleContent(i.type)?!1:!r.content.size&&t.parent.canReplace(a-1,a)?(n&&n(e.tr.delete(t.pos-r.nodeSize,t.pos).scrollIntoView()),!0):!t.parent.canReplace(a,a+1)||!(i.isTextblock||Kr(e.doc,t.pos))?!1:(n&&n(e.tr.join(t.pos).scrollIntoView()),!0)}function fu(e,t,n,r){let i=t.nodeBefore,a=t.nodeAfter,o,s,c=i.type.spec.isolating||a.type.spec.isolating;if(!c&&du(e,t,n))return!0;let l=!c&&t.parent.canReplace(t.index(),t.index()+1);if(l&&(o=(s=i.contentMatchAt(i.childCount)).findWrapping(a.type))&&s.matchType(o[0]||a.type).validEnd){if(n){let r=t.pos+a.nodeSize,s=P.empty;for(let e=o.length-1;e>=0;e--)s=P.from(o[e].create(null,s));s=P.from(i.copy(s));let c=e.tr.step(new Ar(t.pos-1,r,t.pos,r,new L(s,1,0),o.length,!0)),l=c.doc.resolve(r+2*o.length);l.nodeAfter&&l.nodeAfter.type==i.type&&Kr(c.doc,l.pos)&&c.join(l.pos),n(c.scrollIntoView())}return!0}let u=a.type.spec.isolating||r>0&&c?null:q.findFrom(t,1),d=u&&u.$from.blockRange(u.$to),f=d&&Ir(d);if(f!=null&&f>=t.depth)return n&&n(e.tr.lift(d,f).scrollIntoView()),!0;if(l&&Xl(a,`start`,!0)&&Xl(i,`end`)){let r=i,o=[];for(;o.push(r),!r.isTextblock;)r=r.lastChild;let s=a,c=1;for(;!s.isTextblock;s=s.firstChild)c++;if(r.canReplace(r.childCount,r.childCount,s.content)){if(n){let r=P.empty;for(let e=o.length-1;e>=0;e--)r=P.from(o[e].copy(r));n(e.tr.step(new Ar(t.pos-o.length,t.pos+a.nodeSize,t.pos+c,t.pos+a.nodeSize-c,new L(r,o.length,0),0,!0)).scrollIntoView())}return!0}}return!1}function pu(e){return function(t,n){let r=t.selection,i=e<0?r.$from:r.$to,a=i.depth;for(;i.node(a).isInline;){if(!a)return!1;a--}return i.node(a).isTextblock?(n&&n(t.tr.setSelection(J.create(t.doc,e<0?i.start(a):i.end(a)))),!0):!1}}var mu=pu(-1),hu=pu(1);function gu(e,t=null){return function(n,r){let i=!1;for(let r=0;r<n.selection.ranges.length&&!i;r++){let{$from:{pos:a},$to:{pos:o}}=n.selection.ranges[r];n.doc.nodesBetween(a,o,(r,a)=>{if(i)return!1;if(!(!r.isTextblock||r.hasMarkup(e,t)))if(r.type==e)i=!0;else{let t=n.doc.resolve(a),r=t.index();i=t.parent.canReplaceWith(r,r+1,e)}})}if(!i)return!1;if(r){let i=n.tr;for(let r=0;r<n.selection.ranges.length;r++){let{$from:{pos:a},$to:{pos:o}}=n.selection.ranges[r];i.setBlockType(a,o,e,t)}r(i.scrollIntoView())}return!0}}function _u(...e){return function(t,n,r){for(let i=0;i<e.length;i++)if(e[i](t,n,r))return!0;return!1}}var vu=_u(ql,Yl,Zl),yu=_u(ql,eu,tu),bu={Enter:_u(ru,ou,su,lu),"Mod-Enter":au,Backspace:vu,"Mod-Backspace":vu,"Shift-Backspace":vu,Delete:yu,"Mod-Delete":yu,"Mod-a":uu},xu={"Ctrl-h":bu.Backspace,"Alt-Backspace":bu[`Mod-Backspace`],"Ctrl-d":bu.Delete,"Ctrl-Alt-Backspace":bu[`Mod-Delete`],"Alt-Delete":bu[`Mod-Delete`],"Alt-d":bu[`Mod-Delete`],"Ctrl-a":mu,"Ctrl-e":hu};for(let e in bu)xu[e]=bu[e];var Su=(typeof navigator<`u`?/Mac|iP(hone|[oa]d)/.test(navigator.platform):typeof os<`u`&&os.platform&&os.platform()==`darwin`)?xu:bu,Cu=200,wu=function(){};wu.prototype.append=function(e){return e.length?(e=wu.from(e),!this.length&&e||e.length<Cu&&this.leafAppend(e)||this.length<Cu&&e.leafPrepend(this)||this.appendInner(e)):this},wu.prototype.prepend=function(e){return e.length?wu.from(e).append(this):this},wu.prototype.appendInner=function(e){return new Eu(this,e)},wu.prototype.slice=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=this.length),e>=t?wu.empty:this.sliceInner(Math.max(0,e),Math.min(this.length,t))},wu.prototype.get=function(e){if(!(e<0||e>=this.length))return this.getInner(e)},wu.prototype.forEach=function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=this.length),t<=n?this.forEachInner(e,t,n,0):this.forEachInvertedInner(e,t,n,0)},wu.prototype.map=function(e,t,n){t===void 0&&(t=0),n===void 0&&(n=this.length);var r=[];return this.forEach(function(t,n){return r.push(e(t,n))},t,n),r},wu.from=function(e){return e instanceof wu?e:e&&e.length?new Tu(e):wu.empty};var Tu=function(e){function t(t){e.call(this),this.values=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={length:{configurable:!0},depth:{configurable:!0}};return t.prototype.flatten=function(){return this.values},t.prototype.sliceInner=function(e,n){return e==0&&n==this.length?this:new t(this.values.slice(e,n))},t.prototype.getInner=function(e){return this.values[e]},t.prototype.forEachInner=function(e,t,n,r){for(var i=t;i<n;i++)if(e(this.values[i],r+i)===!1)return!1},t.prototype.forEachInvertedInner=function(e,t,n,r){for(var i=t-1;i>=n;i--)if(e(this.values[i],r+i)===!1)return!1},t.prototype.leafAppend=function(e){if(this.length+e.length<=Cu)return new t(this.values.concat(e.flatten()))},t.prototype.leafPrepend=function(e){if(this.length+e.length<=Cu)return new t(e.flatten().concat(this.values))},n.length.get=function(){return this.values.length},n.depth.get=function(){return 0},Object.defineProperties(t.prototype,n),t}(wu);wu.empty=new Tu([]);var Eu=function(e){function t(t,n){e.call(this),this.left=t,this.right=n,this.length=t.length+n.length,this.depth=Math.max(t.depth,n.depth)+1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.flatten=function(){return this.left.flatten().concat(this.right.flatten())},t.prototype.getInner=function(e){return e<this.left.length?this.left.get(e):this.right.get(e-this.left.length)},t.prototype.forEachInner=function(e,t,n,r){var i=this.left.length;if(t<i&&this.left.forEachInner(e,t,Math.min(n,i),r)===!1||n>i&&this.right.forEachInner(e,Math.max(t-i,0),Math.min(this.length,n)-i,r+i)===!1)return!1},t.prototype.forEachInvertedInner=function(e,t,n,r){var i=this.left.length;if(t>i&&this.right.forEachInvertedInner(e,t-i,Math.max(n,i)-i,r+i)===!1||n<i&&this.left.forEachInvertedInner(e,Math.min(t,i),n,r)===!1)return!1},t.prototype.sliceInner=function(e,t){if(e==0&&t==this.length)return this;var n=this.left.length;return t<=n?this.left.slice(e,t):e>=n?this.right.slice(e-n,t-n):this.left.slice(e,n).append(this.right.slice(0,t-n))},t.prototype.leafAppend=function(e){var n=this.right.leafAppend(e);if(n)return new t(this.left,n)},t.prototype.leafPrepend=function(e){var n=this.left.leafPrepend(e);if(n)return new t(n,this.right)},t.prototype.appendInner=function(e){return this.left.depth>=Math.max(this.right.depth,e.depth)+1?new t(this.left,new t(this.right,e)):new t(this,e)},t}(wu),Du=500,Ou=class e{constructor(e,t){this.items=e,this.eventCount=t}popEvent(t,n){if(this.eventCount==0)return null;let r=this.items.length;for(;;r--)if(this.items.get(r-1).selection){--r;break}let i,a;n&&(i=this.remapping(r,this.items.length),a=i.maps.length);let o=t.tr,s,c,l=[],u=[];return this.items.forEach((t,n)=>{if(!t.step){i||(i=this.remapping(r,n+1),a=i.maps.length),a--,u.push(t);return}if(i){u.push(new Au(t.map));let e=t.step.map(i.slice(a)),n;e&&o.maybeStep(e).doc&&(n=o.mapping.maps[o.mapping.maps.length-1],l.push(new Au(n,void 0,void 0,l.length+u.length))),a--,n&&i.appendMap(n,a)}else o.maybeStep(t.step);if(t.selection)return s=i?t.selection.map(i.slice(a)):t.selection,c=new e(this.items.slice(0,r).append(u.reverse().concat(l)),this.eventCount-1),!1},this.items.length,0),{remaining:c,transform:o,selection:s}}addTransform(t,n,r,i){let a=[],o=this.eventCount,s=this.items,c=!i&&s.length?s.get(s.length-1):null;for(let e=0;e<t.steps.length;e++){let r=t.steps[e].invert(t.docs[e]),l=new Au(t.mapping.maps[e],r,n),u;(u=c&&c.merge(l))&&(l=u,e?a.pop():s=s.slice(0,s.length-1)),a.push(l),n&&=(o++,void 0),i||(c=l)}let l=o-r.depth;return l>Mu&&(s=ku(s,l),o-=l),new e(s.append(a),o)}remapping(e,t){let n=new br;return this.items.forEach((t,r)=>{let i=t.mirrorOffset!=null&&r-t.mirrorOffset>=e?n.maps.length-t.mirrorOffset:void 0;n.appendMap(t.map,i)},e,t),n}addMaps(t){return this.eventCount==0?this:new e(this.items.append(t.map(e=>new Au(e))),this.eventCount)}rebased(t,n){if(!this.eventCount)return this;let r=[],i=Math.max(0,this.items.length-n),a=t.mapping,o=t.steps.length,s=this.eventCount;this.items.forEach(e=>{e.selection&&s--},i);let c=n;this.items.forEach(e=>{let n=a.getMirror(--c);if(n==null)return;o=Math.min(o,n);let i=a.maps[n];if(e.step){let o=t.steps[n].invert(t.docs[n]),l=e.selection&&e.selection.map(a.slice(c+1,n));l&&s++,r.push(new Au(i,o,l))}else r.push(new Au(i))},i);let l=[];for(let e=n;e<o;e++)l.push(new Au(a.maps[e]));let u=this.items.slice(0,i).append(l).append(r),d=new e(u,s);return d.emptyItemCount()>Du&&(d=d.compress(this.items.length-r.length)),d}emptyItemCount(){let e=0;return this.items.forEach(t=>{t.step||e++}),e}compress(t=this.items.length){let n=this.remapping(0,t),r=n.maps.length,i=[],a=0;return this.items.forEach((e,o)=>{if(o>=t)i.push(e),e.selection&&a++;else if(e.step){let t=e.step.map(n.slice(r)),o=t&&t.getMap();if(r--,o&&n.appendMap(o,r),t){let s=e.selection&&e.selection.map(n.slice(r));s&&a++;let c=new Au(o.invert(),t,s),l,u=i.length-1;(l=i.length&&i[u].merge(c))?i[u]=l:i.push(c)}}else e.map&&r--},this.items.length,0),new e(wu.from(i.reverse()),a)}};Ou.empty=new Ou(wu.empty,0);function ku(e,t){let n;return e.forEach((e,r)=>{if(e.selection&&t--==0)return n=r,!1}),e.slice(n)}var Au=class e{constructor(e,t,n,r){this.map=e,this.step=t,this.selection=n,this.mirrorOffset=r}merge(t){if(this.step&&t.step&&!t.selection){let n=t.step.merge(this.step);if(n)return new e(n.getMap().invert(),n,this.selection)}}},ju=class{constructor(e,t,n,r,i){this.done=e,this.undone=t,this.prevRanges=n,this.prevTime=r,this.prevComposition=i}},Mu=20;function Nu(e,t,n,r){let i=n.getMeta(Vu),a;if(i)return i.historyState;n.getMeta(Hu)&&(e=new ju(e.done,e.undone,null,0,-1));let o=n.getMeta(`appendedTransaction`);if(n.steps.length==0)return e;if(o&&o.getMeta(Vu))return o.getMeta(Vu).redo?new ju(e.done.addTransform(n,void 0,r,Bu(t)),e.undone,Fu(n.mapping.maps),e.prevTime,e.prevComposition):new ju(e.done,e.undone.addTransform(n,void 0,r,Bu(t)),null,e.prevTime,e.prevComposition);if(n.getMeta(`addToHistory`)!==!1&&!(o&&o.getMeta(`addToHistory`)===!1)){let i=n.getMeta(`composition`),a=e.prevTime==0||!o&&e.prevComposition!=i&&(e.prevTime<(n.time||0)-r.newGroupDelay||!Pu(n,e.prevRanges)),s=o?Iu(e.prevRanges,n.mapping):Fu(n.mapping.maps);return new ju(e.done.addTransform(n,a?t.selection.getBookmark():void 0,r,Bu(t)),Ou.empty,s,n.time,i??e.prevComposition)}else if(a=n.getMeta(`rebased`))return new ju(e.done.rebased(n,a),e.undone.rebased(n,a),Iu(e.prevRanges,n.mapping),e.prevTime,e.prevComposition);else return new ju(e.done.addMaps(n.mapping.maps),e.undone.addMaps(n.mapping.maps),Iu(e.prevRanges,n.mapping),e.prevTime,e.prevComposition)}function Pu(e,t){if(!t)return!1;if(!e.docChanged)return!0;let n=!1;return e.mapping.maps[0].forEach((e,r)=>{for(let i=0;i<t.length;i+=2)e<=t[i+1]&&r>=t[i]&&(n=!0)}),n}function Fu(e){let t=[];for(let n=e.length-1;n>=0&&t.length==0;n--)e[n].forEach((e,n,r,i)=>t.push(r,i));return t}function Iu(e,t){if(!e)return null;let n=[];for(let r=0;r<e.length;r+=2){let i=t.map(e[r],1),a=t.map(e[r+1],-1);i<=a&&n.push(i,a)}return n}function Lu(e,t,n){let r=Bu(t),i=Vu.get(t).spec.config,a=(n?e.undone:e.done).popEvent(t,r);if(!a)return null;let o=a.selection.resolve(a.transform.doc),s=(n?e.done:e.undone).addTransform(a.transform,t.selection.getBookmark(),i,r),c=new ju(n?s:a.remaining,n?a.remaining:s,null,0,-1);return a.transform.setSelection(o).setMeta(Vu,{redo:n,historyState:c})}var Ru=!1,zu=null;function Bu(e){let t=e.plugins;if(zu!=t){Ru=!1,zu=t;for(let e=0;e<t.length;e++)if(t[e].spec.historyPreserveItems){Ru=!0;break}}return Ru}var Vu=new Bi(`history`),Hu=new Bi(`closeHistory`);function Uu(e={}){return e={depth:e.depth||100,newGroupDelay:e.newGroupDelay||500},new Li({key:Vu,state:{init(){return new ju(Ou.empty,Ou.empty,null,0,-1)},apply(t,n,r){return Nu(n,r,t,e)}},config:e,props:{handleDOMEvents:{beforeinput(e,t){let n=t.inputType,r=n==`historyUndo`?Gu:n==`historyRedo`?Ku:null;return!r||!e.editable?!1:(t.preventDefault(),r(e.state,e.dispatch))}}}})}function Wu(e,t){return(n,r)=>{let i=Vu.getState(n);if(!i||(e?i.undone:i.done).eventCount==0)return!1;if(r){let a=Lu(i,n,e);a&&r(t?a.scrollIntoView():a)}return!0}}var Gu=Wu(!1,!0),Ku=Wu(!0,!0);function qu(e,t){let n=t,r=0;for(let t=0;t<e.childCount;t++){let i=e.child(t),a=i.isText?i.nodeSize:0;if(n<=a)return r+(i.isText?n:0);n-=a,r+=i.nodeSize}return r}function Ju(e,t){return e.textBetween(0,Math.min(t,e.content.size)).length}function Yu(e){let t=e.state.doc,n=[];for(let e=0;e<t.childCount;e++)n.push(t.child(e).textContent);return n}function Xu(e){return Yu(e).join(`
`)}var Zu=new Set(`that.with.from.this.were.have.their.which.been.they.when.also.into.only.more.most.some.such.than.then.there.these.those.will.would.could.should.about.after.before.while.where.other.over.under.between.because.through.during.against.among.itself.being.does.much`.split(`.`)),Qu=e=>e.replace(/^'+|'+$/g,``),$u=e=>e.toLowerCase().split(/[^\p{L}\p{N}']+/u).map(Qu);function ed(e){return new Set($u(e).filter(e=>e.length>=4&&!Zu.has(e)))}var td=new Set(`and.but.the.for.was.are.its.not.nor.yet.all.any.had.has.her.his.him.she.you.our.who.why.how.out.off.per.too.own.may.can`.split(`.`));function nd(e){return new Set($u(e).filter(e=>(e.length>=3||/[0-9]/.test(e))&&!td.has(e)&&!Zu.has(e)))}var rd=.5;function id(e,t,n=-1){let r=e.trim();if(!r)return-1;let i=-1;for(let e=0;e<t.length;e++)t[e].trim()===r&&(i<0||n>=0&&Math.abs(e-n)<Math.abs(i-n))&&(i=e);if(i>=0)return i;let a=ed(e);if(!a.size)return-1;let o=e=>{let n=ed(t[e]),r=0;for(let e of a)n.has(e)&&r++;return r};if(n>=0&&n<t.length&&o(n)/a.size>=rd)return n;let s=-1,c=0;for(let e=0;e<t.length;e++){let t=o(e),n=t/a.size;t>=2&&n>=rd&&n>c&&(s=e,c=n)}return s}var ad=new Map;function X(e){if(e.type===`text-splice`)for(let t of ad.values())t.at=Qn(t.at,e.at,e.del,e.ins);else if(e.type===`block-image`||e.type===`block-image-place`){let t=ad.get(e.id);ad.set(e.id,{at:e.at,inline:!!e.inline||!!t?.inline})}else e.type===`block-image-gone`&&ad.delete(e.id);return Nn(e)}var od,sd=!1,cd=0,ld=0,ud=-1,dd=-1,fd=``,pd=Promise.resolve();function md(e){let t=pd.then(e);return pd=t.then(()=>void 0,()=>void 0),t}var hd=null,gd=null,_d=()=>``,vd=null,yd=!1,bd=!1,xd=!1,Sd=!1,Cd=!1,wd=!1,Td=4;function Ed(){bd=!1,xd=!1,Sd=!1,Cd=!1,wd=!1}function Dd(e){let t=[];for(let n=0;n<e.childCount;n++)t.push(e.child(n).textContent);return t.join(`
`)}function Od(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];)n++;let r=e.length,i=t.length;for(;r>n&&i>n&&e[r-1]===t[i-1];)r--,i--;return{at:n,del:r-n,ins:t.slice(n,i)}}function kd(e,t,n){let r=[];if(n<=0)return r;let i=Dd(e),a=(t,n)=>{if(n<0||n>=i.length||i[n]===`
`)return!1;let r=Ad(e,n);return!!e.rangeHasMark(r,r+1,Kt.marks[t])};for(let e of[`strong`,`em`,`code`,`strike`]){let i=0;for(;i<n;){let o=a(e,t+i),s=i+1;for(;s<n&&a(e,t+s)===o;)s++;o?r.push({kind:e,at:t+i,len:s-i,on:!0}):a(e,t+i-1)&&a(e,t+s)&&r.push({kind:e,at:t+i,len:s-i,on:!1}),i=s}}return r}function Ad(e,t){let n=t,r=0;for(let t=0;t<e.childCount;t++){let i=e.child(t),a=i.textContent.length;if(n<=a)return r+1+qu(i,n);n-=a+1,r+=i.nodeSize}return Math.min(r,e.content.size)}function jd(e=!1){sd=!1;let t=cd&&!e?Math.max(0,ld-cd):0;cd=0,ud=dd=-1;let n=_d();if(n===fd)return Ed(),Promise.resolve();let r=Od(fd,n);fd=n;let i=!e&&/[^\n]/.test(r.ins)&&(yd||bd||xd)&&!Sd;Ed();let a=vd?kd(vd(),r.at,r.ins.length):[];return md(()=>X({type:`text-splice`,...r,...e?{pasted:!0}:{},...i?{unkeyed:!0}:{},...t>0?{span:t}:{}}).then(async()=>{for(let e of a)await X({type:`mark`,...e});await vf()}))}async function Z(){window.clearTimeout(od),sd&&await jd(),await pd}function Md(e,t,n){if(n===e)return t;let r=e?n.indexOf(e):-1;if(r>=0)return`h`.repeat(r)+t+`h`.repeat(n.length-r-e.length);let i=e.indexOf(n);return i>=0?t.slice(i,i+n.length):null}function Nd(e,t){let n=[];if(!e)return n;let r=-1;for(let i=0;i<=e.length;i++){let a=i<e.length&&e[i]===t;a&&r<0&&(r=i),!a&&r>=0&&(n.push([r,i-r]),r=-1)}return n}var Pd=e=>{let t=Nd(e,`e`),n=Nd(e,`p`),r=Nd(e,`u`),i=Nd(e,`w`);return{...t.length?{engineRuns:t}:{},...n.length?{pastedRuns:n}:{},...r.length?{unkeyedRuns:r}:{},...i.length?{broughtRuns:i}:{}}},Fd=null;function Id(e){let t=e.state.selection;if(t.empty)return;window.clearTimeout(od),sd&&jd();let n=e.state.doc,r=Bd(n,t.from),i=Bd(n,t.to),a=Dd(n).slice(r,i);a&&(Fd={text:a,kinds:md(async()=>{try{let e=await ar(W());return e.length>=i?e.slice(r,i):null}catch{return null}})})}function Ld(){let e=Fd;if(!e)return jd(!0);let t=_d();if(t===fd)return jd(!0);let n=Od(fd,t);if(n.del!==0||!n.ins||Md(e.text,e.text,n.ins)===null)return jd(!0);fd=t,sd=!1,Ed();let r=vd?kd(vd(),n.at,n.ins.length):[];return md(async()=>{let t=await e.kinds,i=t?Md(e.text,t,n.ins):null;i===null&&console.warn(`[phloem] paste-within kinds could not be aligned`),await X({type:`text-splice`,at:n.at,del:0,ins:n.ins,via:`move`,...Pd(i)});for(let e of r)await X({type:`mark`,...e})})}function Rd(e,t,n,r,i=!1){if(r===e)return;let a=e.slice(t,n),o=Od(i?e:e.slice(0,t)+e.slice(n),r);if(o.del!==0||!o.ins){console.warn(`[phloem] move-within fell back to a plain splice`);let t=Od(e,r);md(()=>X({type:`text-splice`,...t}));return}let s=vd?kd(vd(),o.at,o.ins.length):[];md(async()=>{let r=null;try{let i=await ar(W());if(i.length===e.length){let e=i.slice(t,n);r=Md(a,e,o.ins)}r===null&&console.warn(`[phloem] move-within kinds could not be aligned`)}catch(e){console.warn(`[phloem] move-within sources could not be read`,e)}i||await X({type:`text-splice`,at:t,del:n-t,ins:``,via:`move`}),await X({type:`text-splice`,at:o.at,del:0,ins:o.ins,via:`move`,...Pd(r)});for(let e of s)await X({type:`mark`,...e})})}async function zd(e,t,n){await Z();let r=e.state.doc,i=Math.min(Math.max(t,1),r.content.size),a=0,o=0;for(let e=0;e<r.childCount;e++){let t=r.child(e),n=o+1;if(i<=n+t.content.size){a+=Ju(t,Math.max(0,i-n));break}a+=t.textContent.length+1,o+=t.nodeSize}await X({type:`text-splice`,at:a,del:0,ins:n,source:`engine`}),e.dispatch(e.state.tr.insertText(n,i)),fd=Dd(e.state.doc),sd=!1}function Bd(e,t){let n=e.resolve(Math.min(Math.max(t,0),e.content.size)),r=n.index(0),i=0;for(let t=0;t<r;t++)i+=e.child(t).textContent.length+1;return i+(n.depth===0?0:Ju(n.parent,n.parentOffset))}function Vd(e){return Bd(e.state.doc,e.state.selection.from)}function Hd(e,t){return Bd(e.state.doc,t)}async function Ud(e,t){let{from:n,to:r,empty:i}=e.state.selection;if(i){let n=Kt.marks[t],r=e.state.storedMarks??e.state.selection.$from.marks(),i=e.state.tr;e.dispatch(n.isInSet(r)?i.removeStoredMark(n):i.addStoredMark(n.create())),e.focus();return}let a=Kt.marks[t],o=!e.state.doc.rangeHasMark(n,r,a);await Z();let s=Bd(e.state.doc,n),c=Bd(e.state.doc,r),l=e.state.tr;o?l.addMark(n,r,a.create()):l.removeMark(n,r,a),e.dispatch(l),await X({type:`mark`,kind:t,at:s,len:c-s,on:o})}function Wd(e,t){let n=e.state.storedMarks??e.state.selection.$from.marks();return!!Kt.marks[t].isInSet(n)}function Gd(e){let t=e.state.selection.$from.parent.type.name;return t===`heading`?`heading`:t===`aside`?`aside`:`body`}async function Kd(e,t,n=1){let r=t===`heading`?Kt.nodes.heading:t===`aside`?Kt.nodes.aside:Kt.nodes.paragraph,i=t===`heading`?{level:n}:null;await Z();let a=Bd(e.state.doc,e.state.selection.$from.start());gu(r,i)(e.state,e.dispatch)&&await X({type:`block-style`,kind:t,...t===`heading`?{level:n}:{},at:a})}function qd(e){let t=e.state.selection.$from.parent.attrs.align;return t===`center`||t===`right`?t:`left`}async function Jd(e){await Z();let t=Kt.nodes.horizontal_rule;if(!t)return;let n=e.state.tr.replaceSelectionWith(t.create());if(n.doc.lastChild?.type===t){let e=Kt.nodes.paragraph.createAndFill();e&&(n=n.insert(n.doc.content.size,e),n=n.setSelection(J.create(n.doc,n.doc.content.size-1)))}e.dispatch(n.scrollIntoView()),await Z();let r=e.state.selection.from,i=0,a=-1,o=1/0;e.state.doc.forEach((e,n)=>{if(e.type===t){let e=Math.abs(n-r);e<o&&(o=e,a=i)}i+=e.textContent.length+1}),a>=0&&await X({type:`block-rule`,at:a})}async function Yd(e,t){await Z();let{from:n,to:r}=e.state.selection,i=e.state.tr,a=[];if(e.state.doc.nodesBetween(n,r,(n,r)=>n.isTextblock?(i.setNodeMarkup(r,void 0,{...n.attrs,align:t===`left`?null:t}),a.push(Bd(e.state.doc,r+1)),!1):!0),a.length){e.dispatch(i);for(let e of a)await X({type:`block-align`,align:t,at:e})}}function Xd(e){let t=e.state.selection.$from.parent.attrs.list;return t===`bullet`||t===`dash`||t===`ordered`?t:`none`}function Zd(e){let t=Number(e.state.selection.$from.parent.attrs.indent??0);return Number.isFinite(t)&&t>0?t:0}function Qd(e,t){let{from:n,to:r}=e.state.selection,i=e.state.tr,a=[];return e.state.doc.nodesBetween(n,r,(n,r)=>n.isTextblock?(i.setNodeMarkup(r,void 0,t({...n.attrs})),a.push(Bd(e.state.doc,r+1)),!1):!0),a.length&&e.dispatch(i),a}async function $d(e,t){await Z();let n=Qd(e,e=>({...e,list:t===`none`?null:t}));if(n.length)for(let e of n)await X({type:`block-list`,kind:t,at:e})}async function ef(e,t){await Z();let n=[],r=Qd(e,e=>{let r=Number(e.indent??0)||0,i=Math.max(0,Math.min(8,r+t));return n.push(i),{...e,indent:i>0?i:null}});if(r.length)for(let e=0;e<r.length;e++)await X({type:`block-indent`,level:n[e],at:r[e]})}function tf(e){let t=e.state.selection.$from.parent.attrs.spacing;return t===`single`||t===`double`?t:`natural`}async function nf(e,t){await Z();let n=Qd(e,e=>({...e,spacing:t===`natural`?null:t}));if(n.length)for(let e of n)await X({type:`block-spacing`,kind:t,at:e})}function rf(e){return e.state.selection.$from.parent.attrs.table===`row`?`row`:`none`}async function af(e,t){await Z();let n=Qd(e,e=>({...e,table:t===`row`?`row`:null}));if(n.length)for(let e of n)await X({type:`block-table`,kind:t,at:e})}async function of(e){if(await Z(),e.state.selection.$from.depth!==1)return;e.state.selection.$from.parent.type.name!==`paragraph`&&await Kd(e,`body`);let t=e.state.selection.$from;if(t.parent.type.name!==`paragraph`)return;let n=t.before(1),r=e.state.doc.nodeAt(n);if(!r)return;let i=t.end(),a=r.textContent.includes(`	`),o=e.state.tr;a||(o=o.insertText(`	`,i)),o=o.setNodeMarkup(n,void 0,{...r.attrs,table:`row`}),a||(o=o.setSelection(J.create(o.doc,i+1))),e.dispatch(o.scrollIntoView()),await Z(),await X({type:`block-table`,kind:`row`,at:Bd(e.state.doc,n+1)})}async function sf(e){await Z();let t=e.state.selection.$from.before(1),n=e.state.doc.nodeAt(t);if(!n)return;let r=e.state.tr;n.content.size&&(r=r.delete(t+1,t+1+n.content.size)),r=r.setNodeMarkup(t,void 0,{...n.attrs,table:null}),r=r.setSelection(J.create(r.doc,t+1)),e.dispatch(r),await Z(),await X({type:`block-table`,kind:`none`,at:Bd(e.state.doc,t+1)})}var cf=1600,lf=4e5;async function uf(e){let t;try{t=await createImageBitmap(e)}catch{return null}let n=Math.min(1,cf/Math.max(t.width,t.height)),r=Math.max(1,Math.round(t.width*n)),i=Math.max(1,Math.round(t.height*n)),a=async e=>{let t=new Uint8Array(await e.arrayBuffer()),n=``;for(let e=0;e<t.length;e+=32768)n+=String.fromCharCode(...t.subarray(e,e+32768));return btoa(n)};if(n===1&&e.size<=lf&&e.type.startsWith(`image/`))return t.close(),{mime:e.type,data:await a(e),w:r,h:i};let o=document.createElement(`canvas`);o.width=r,o.height=i;let s=o.getContext(`2d`);if(!s)return null;s.drawImage(t,0,0,r,i),t.close();let c=e.type===`image/png`&&e.size<=lf?`image/png`:`image/jpeg`,l=o.toDataURL(c,.85),u=l.indexOf(`,`);return{mime:c,data:l.slice(u+1),w:r,h:i}}function df(){return`i${Date.now().toString(36)}${Math.floor(Math.random()*1e4).toString(36)}`}async function ff(e,t,n,r){let i=await uf(t);if(!i)return!1;await Z();let a=Kt.nodes.figure,o=e.state.doc.resolve(Math.min(Math.max(r??e.state.selection.from,0),e.state.doc.content.size));if(o.parent.attrs.table===`row`)return!1;let s=o.parent.isTextblock&&o.parent.textContent.length>0,c=a.create({id:df(),src:`data:${i.mime};base64,${i.data}`,name:n.slice(0,120),w:i.w,h:i.h,size:s?`tiny`:`medium`,place:s?`inline`:`left`,inl:!0}),l=r===void 0||!o.parent.isTextblock?e.state.tr.replaceSelectionWith(c):e.state.tr.insert(o.pos,c);return e.dispatch(l.scrollIntoView()),!0}function pf(e){let t=null,n=!1,r=!1,i=null,a=document.createElement(`div`);a.className=`carry-caret`;let o=document.createElement(`div`);o.className=`carry-hint`,o.textContent=`now click where you want it to go · Esc to cancel`;let s=()=>{t=null,n=!1,r=!1,i=null,a.remove(),o.remove(),document.body.classList.remove(`carrying`),window.removeEventListener(`mousemove`,p,!0),window.removeEventListener(`mouseup`,m,!0),window.removeEventListener(`mousedown`,h,!0),window.removeEventListener(`keydown`,g,!0)},c=(n,r)=>{let i=e.posAtCoords({left:n,top:r});if(!i)return null;let a=e.state.doc.resolve(i.pos);return!a.parent.isTextblock||t?.kind===`pic`&&a.parent.attrs.table===`row`?null:i.pos},l=(t,n)=>{if(i=c(t,n),i===null)a.style.display=`none`;else{let t=e.coordsAtPos(i);a.style.display=`block`,a.style.left=`${t.left-1}px`,a.style.top=`${t.top}px`,a.style.height=`${Math.max(12,t.bottom-t.top)}px`}r&&(o.style.left=`${t+14}px`,o.style.top=`${n+18}px`)},u=()=>{n=!0,document.body.classList.add(`carrying`),document.body.appendChild(a)},d=()=>{r||(r=!0,n||u(),document.body.appendChild(o),window.addEventListener(`mousedown`,h,!0))},f=(n,r)=>{let i=t;if(s(),!i||n===null)return;if(i.kind===`pic`){let t=e.state.doc.nodeAt(i.pos);if(!t||t.type.name!==`figure`||n===i.pos||n===i.pos+1)return;let r=e.state.tr.delete(i.pos,i.pos+1),a=r.mapping.map(n);r=r.insert(a,t),r=r.setSelection(Y.create(r.doc,a)),e.dispatch(r.scrollIntoView()),e.focus();return}let a=e.state.selection;if(a.empty||a.from!==i.from||a.to!==i.to||n>=i.from&&n<=i.to)return;let o=a.content(),c=Zr(e.state.doc,n,o)??n,l=e.state.tr;r||(l=l.deleteSelection());let u=l.mapping.map(c);l=l.replaceRange(u,u,o);let d=u;l.mapping.maps[l.mapping.maps.length-1].forEach((e,t,n,r)=>{d=r});let f=l.doc.resolve(Math.min(u,l.doc.content.size)),p=l.doc.resolve(Math.min(d,l.doc.content.size));l=l.setSelection(J.between(f,p)),hd={from:i.from,to:i.to,copy:r},e.dispatch(l.setMeta(`uiEvent`,`drop`).scrollIntoView()),e.focus()},p=e=>{if(t){if(e.buttons===0&&!r){if(!n&&Math.hypot(e.clientX-t.x,e.clientY-t.y)<5)return s();d()}if(!n){if(Math.hypot(e.clientX-t.x,e.clientY-t.y)<5)return;u()}e.preventDefault(),l(e.clientX,e.clientY)}},m=a=>{if(!(!t||r)){if(!n){let n=t;if(s(),n.kind===`text`){let t=e.posAtCoords({left:a.clientX,top:a.clientY});t&&e.dispatch(e.state.tr.setSelection(J.near(e.state.doc.resolve(t.pos))))}else{let t=n.pos,r=e.state.doc;setTimeout(()=>{e.state.doc===r&&e.state.doc.nodeAt(t)?.type.name===`figure`&&e.dispatch(e.state.tr.setSelection(Y.create(e.state.doc,t)))},0)}return}a.preventDefault(),l(a.clientX,a.clientY),f(i,a.altKey&&t.kind===`text`)}},h=e=>{!t||!r||e.button!==0||(e.preventDefault(),e.stopPropagation(),l(e.clientX,e.clientY),f(i,e.altKey&&t.kind===`text`))},g=e=>{e.key===`Escape`&&(e.preventDefault(),s())};e.dom.addEventListener(`mousedown`,n=>{if(n.button!==0||t||n.shiftKey||n.metaKey||n.ctrlKey)return;let r=n.target?.closest?.(`.page-image`);if(r&&e.dom.contains(r)){let i=-1;try{i=e.posAtDOM(r,0)}catch{return}let a=[i,i-1].find(t=>t>=0&&e.state.doc.nodeAt(t)?.type.name===`figure`);if(a===void 0)return;t={kind:`pic`,pos:a,x:n.clientX,y:n.clientY}}else{let r=e.state.selection;if(!(r instanceof J)||r.empty||n.detail>1)return;let i=e.posAtCoords({left:n.clientX,top:n.clientY});if(!i||i.pos<r.from||i.pos>r.to)return;t={kind:`text`,from:r.from,to:r.to,x:n.clientX,y:n.clientY}}n.preventDefault(),e.focus(),window.addEventListener(`mousemove`,p,!0),window.addEventListener(`mouseup`,m,!0),window.addEventListener(`keydown`,g,!0)}),e.dom.addEventListener(`dragstart`,n=>{t&&(n.preventDefault(),e.dragging=null)})}function mf(e){let t=e.state.selection;return!(t instanceof Y)||t.node.type.name!==`figure`?null:{id:String(t.node.attrs.id),size:Ut(t.node.attrs.size),place:Wt(t.node.attrs.place),pos:t.from}}async function hf(e,t){let n=mf(e);if(!n)return;let r=e.state.doc.nodeAt(n.pos);if(!r)return;let i=e.state.tr.setNodeMarkup(n.pos,void 0,{...r.attrs,...t});i=i.setSelection(Y.create(i.doc,n.pos)),e.dispatch(i),await X({type:`block-image-style`,id:n.id,...t})}var gf=new Set;function _f(e){let t=new Map,n=0;return e.forEach(e=>{let r=0,i=0;e.forEach(e=>{e.type.name===`figure`&&i++});let a=e.textContent.length>0||i>1;e.forEach(e=>{e.type.name===`figure`&&e.attrs.id?t.set(String(e.attrs.id),{at:n+r,attrs:e.attrs,amongWords:a}):e.isText&&(r+=e.nodeSize)}),n+=e.textContent.length+1}),t}async function vf(){if(!(sd||!vd||!ad.size))for(let[e,t]of _f(vd())){let n=ad.get(e);n&&(n.at===t.at&&(n.inline||!t.amongWords)||await X({type:`block-image-place`,id:e,at:t.at,inline:!0}))}}function yf(e,t){let n=_f(e),r=_f(t),i=[...n.keys()].filter(e=>!r.has(e)),a=[...r.entries()].filter(([e])=>!n.has(e)),o=Dd(e)===Dd(t)&&[...r.entries()].some(([e,t])=>n.has(e)&&n.get(e).at!==t.at),s=[...r.entries()].some(([e,t])=>t.amongWords&&ad.has(e)&&!ad.get(e).inline);!i.length&&!a.length&&!o&&!s||(async()=>{await Z();for(let e of i)gf.has(e)&&await X({type:`block-image-gone`,id:e});for(let[e,{at:t,attrs:n}]of a){if(gf.has(e)){await X({type:`block-image-place`,id:e,at:t,inline:!0});continue}let r=String(n.src??``),i=/^data:([^;,]+);base64,(.*)$/s.exec(r);if(!i)continue;let a=await A(i[1],i[2]);await X({type:`block-image`,id:e,at:t,name:String(n.name??``),mime:i[1],w:Number(n.w??0)||0,h:Number(n.h??0)||0,ref:a.ref,bytes:a.bytes,inline:!0});let o=Ut(n.size),s=Wt(n.place);(o!==`medium`||s!==`left`)&&await X({type:`block-image-style`,id:e,size:o,place:s}),gf.add(e)}await vf()})()}function bf(e){let t=[];return e.forEach((e,n)=>{if(e.type.name!==`paragraph`||e.attrs.table!==`row`)return;let r=e.textContent,i=n+1,a=[],o=0;for(let e=0;e<=r.length;e++)(e===r.length||r[e]===`	`)&&(a.push([o,e]),e<r.length&&t.push(Sc.inline(i+e,i+e+1,{class:`tabsep`})),o=e+1);for(let[e,n]of a)n>e?t.push(Sc.inline(i+e,i+n,{class:`cell`})):t.push(Sc.widget(i+e,()=>{let e=document.createElement(`span`);return e.className=`cell cell-empty`,e},{side:0,key:`cell-${i+e}`}));t.push(Sc.node(n,n+e.nodeSize,{style:`grid-template-columns:repeat(${a.length},minmax(0,1fr))`}))}),Tc.create(e,t)}var xf=new Li({props:{decorations:e=>bf(e.doc)},filterTransaction:e=>{if(!e.docChanged)return!0;let t=!0;return e.doc.forEach(e=>{e.attrs.table===`row`&&e.forEach(e=>{e.type.name===`figure`&&(t=!1)})}),t}}),Sf=new Li({props:{decorations:e=>{let t=[];return e.doc.forEach((e,n)=>{if(!e.isTextblock||e.textContent.length||!e.childCount)return;let r=!0;e.forEach(e=>{e.type.name!==`figure`&&(r=!1)}),r&&t.push(Sc.node(n,n+e.nodeSize,{class:`pic-only`}))}),Tc.create(e.doc,t)}}});async function Cf(e,t){await Z();let n=e.state.selection.$from,r=n.before(n.depth),i=e.state.doc.nodeAt(r);if(!i)return;let a={...i.attrs};t.list&&(a.list=t.list.kind,a.indent=t.list.indent>0?t.list.indent:null),t.spacing&&(a.spacing=t.spacing),t.table&&(a.table=`row`);let o=e.state.tr.setNodeMarkup(r,void 0,a);t.table&&t.table>1&&(o=o.insertText(`	`.repeat(t.table-1),r+1),o=o.setSelection(J.create(o.doc,r+1))),e.dispatch(o),t.table&&await Z();let s=Bd(e.state.doc,r+1);t.table&&await X({type:`block-table`,kind:`row`,at:s}),t.list&&(await X({type:`block-list`,kind:t.list.kind,at:s}),t.list.indent>0&&await X({type:`block-indent`,level:t.list.indent,at:s})),t.spacing&&await X({type:`block-spacing`,kind:t.spacing,at:s})}function wf(e,t,n,r=[]){let i;if(t)try{i=Me.fromJSON(Kt,t)}catch{i=void 0}if(gf.clear(),ad.clear(),i)for(let[e,t]of _f(i))gf.add(e),ad.set(e,{at:t.at,inline:!!t.attrs.inl});function a(e,t){let n=e.selection;if(!(n instanceof J)||!n.$cursor)return!1;let r=n.$cursor;return r.depth!==1||r.before(1)!==0||r.parent.content.size!==0||e.doc.childCount<2?!1:(t?.(e.tr.delete(0,r.after(1)).scrollIntoView()),!0)}let o=new il(e,{state:Fi.create({schema:Kt,doc:i,plugins:[Uu(),Gl({"Mod-z":Gu,"Mod-Shift-z":Ku,"Mod-y":Ku,"Mod-b":(e,t,n)=>(n&&Ud(n,`strong`),!0),"Mod-i":(e,t,n)=>(n&&Ud(n,`em`),!0),"Mod-e":(e,t,n)=>(n&&Ud(n,`code`),!0),"Mod-Shift-x":(e,t,n)=>(n&&Ud(n,`strike`),!0),Enter:(e,t,n)=>{if(!n)return!1;let{$from:r,empty:i}=e.selection;if(!i)return!1;let a=r.parent.attrs.list,o=r.parent.attrs.spacing,s=o===`single`||o===`double`?o:void 0;if(r.parent.attrs.table===`row`){let t=r.parent.textContent;if(!t.replace(/\t/g,``).trim())return sf(n),!0;let i=t.split(`	`).length;return n.dispatch(e.tr.setSelection(J.create(e.doc,r.end()))),lu(n.state,n.dispatch,n)?(Cf(n,{table:i,spacing:s}),!0):!1}if(a){let i=Number(r.parent.attrs.indent??0)||0;return r.parent.textContent.trim()?lu(e,t,n)?(Cf(n,{list:{kind:a,indent:i},spacing:s}),!0):!1:($d(n,`none`).then(()=>{i>0&&ef(n,-1)}),!0)}return!s||!lu(e,t,n)?!1:(Cf(n,{spacing:s}),!0)},Tab:(e,t,n)=>{if(!n||e.selection.$from.parent.attrs.table!==`row`)return!1;let r=e.selection.$from,i=r.parent.textContent,a=r.start(),o=i.indexOf(`	`,r.parentOffset);if(o>=0)t?.(e.tr.setSelection(J.create(e.doc,a+o+1)));else{let n=e.tr.insertText(`	`,r.end());n=n.setSelection(J.create(n.doc,r.end()+1)),t?.(n.scrollIntoView())}return!0},"Shift-Tab":(e,t,n)=>{if(!n||e.selection.$from.parent.attrs.table!==`row`)return!1;let r=e.selection.$from,i=r.parent.textContent,a=r.start(),o=i.lastIndexOf(`	`,r.parentOffset-1)+1;if(o===0)return!0;let s=i.lastIndexOf(`	`,o-2)+1;return t?.(e.tr.setSelection(J.create(e.doc,a+s))),!0},Backspace:(e,t,n)=>{let{$from:r,empty:i}=e.selection;return n&&i&&r.parentOffset===0&&r.parent.attrs.table===`row`?(af(n,`none`),!0):a(e,t)}}),Gl(Su),xf,Sf,...r]}),attributes:{spellcheck:`true`,autocorrect:`off`},handlePaste(e,t){let n=[...t.clipboardData?.files??[]].find(e=>e.type.startsWith(`image/`));return n?(ff(e,n,n.name||`pasted image`),!0):!1},handleDrop(e,t,n,r){let i=gd??(r&&!e.state.selection.empty?{from:e.state.selection.from,to:e.state.selection.to}:null);return gd=null,hd=i?{...i,copy:!r}:null,!1},dispatchTransaction(e){let t=hd;if(hd=null,t&&e.docChanged&&e.getMeta(`uiEvent`)===`drop`){window.clearTimeout(od),sd&&jd();let r=o.state.doc,i=Dd(r),a=Bd(r,t.from),s=Bd(r,t.to),c=o.state.apply(e);o.updateState(c),yf(r,c.doc);let l=Dd(c.doc);fd=l,sd=!1,Ed(),a!==s&&Rd(i,a,s,l,t.copy),n?.(!0);return}let r=e.docChanged&&(e.getMeta(`uiEvent`)===`paste`||e.getMeta(`uiEvent`)===`drop`);r&&(window.clearTimeout(od),sd&&jd());let i=1/0,a=-1/0;if(e.docChanged&&!r)for(let t of e.steps)t.getMap().forEach((e,t)=>{i=Math.min(i,e),a=Math.max(a,t)});e.docChanged&&!r&&sd&&ud>=0&&(a<ud-1||i>dd+1)&&(window.clearTimeout(od),jd());let s=o.state.doc.childCount,c=o.state.doc,l=o.state.apply(e);if(o.updateState(l),r)sd=!0,e.getMeta(`uiEvent`)===`paste`?Ld():jd(!0);else if(e.docChanged){ld=Date.now(),sd||(cd=ld);let t=e.mapping.map(i,-1),n=e.mapping.map(a,1);!sd||ud<0?(ud=t,dd=n):(ud=Math.min(e.mapping.map(ud,-1),t),dd=Math.max(e.mapping.map(dd,1),n)),sd=!0,window.clearTimeout(od),l.doc.childCount>s?jd():od=window.setTimeout(()=>{sd&&jd()},3e3)}e.docChanged&&yf(c,l.doc),n?.(e.docChanged)}});return o.dom.addEventListener(`dragstart`,()=>{let e=o.state.selection;gd=e.empty?null:{from:e.from,to:e.to}}),pf(o),o.dom.addEventListener(`dragend`,()=>{gd=null}),o.dom.addEventListener(`copy`,()=>Id(o)),o.dom.addEventListener(`cut`,()=>Id(o)),o.dom.addEventListener(`compositionstart`,()=>{yd=!0,bd=!0}),o.dom.addEventListener(`compositionupdate`,()=>{yd=!0,bd=!0}),o.dom.addEventListener(`compositionend`,()=>{yd=!1}),o.dom.addEventListener(`beforeinput`,e=>{let t=e,n=t.inputType||``;n.startsWith(`insert`)&&(n===`insertFromPaste`||n===`insertFromDrop`||n===`insertParagraph`||n===`insertLineBreak`||(t.isComposing||n===`insertCompositionText`||n===`insertFromComposition`||n===`insertReplacementText`?(sd&&Sd&&!Cd&&jd(),xd=!0,t.data&&(t.data.includes(` `)||t.data.length>=Td)&&(wd=!0)):(sd&&xd&&!Sd&&wd&&jd(),Sd=!0,(!t.data||/[\p{L}\p{N}]/u.test(t.data))&&(Cd=!0,yd=!1))))}),_d=()=>Dd(o.state.doc),vd=()=>o.state.doc,fd=_d(),sd=!1,yd=!1,Ed(),o.focus(),o}function Tf(e){if(e.length===0)return``;let t=`M ${e[0][0]} ${e[0][1]}`;for(let n=1;n<e.length;n++)t+=` L ${e[n][0]} ${e[n][1]}`;return t}function Ef(e,t){let n=document.createElementNS(`http://www.w3.org/2000/svg`,`svg`);n.classList.add(`ink`),e.appendChild(n);for(let[e,r]of t){let t=document.createElementNS(`http://www.w3.org/2000/svg`,`path`);t.setAttribute(`d`,Tf(r)),t.dataset.strokeId=e,n.appendChild(t)}}function Df(e=()=>!0){let t=document.createElement(`canvas`);t.id=`trail`,document.body.appendChild(t);let n=t.getContext(`2d`);function r(){let e=t.getBoundingClientRect();t.width=Math.max(1,Math.floor(e.width*devicePixelRatio)),t.height=Math.max(1,Math.floor(e.height*devicePixelRatio)),n.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0)}r(),window.addEventListener(`resize`,r);let i=getComputedStyle(document.documentElement).getPropertyValue(`--accent`).trim(),a=[],o=-1,s=-1;window.addEventListener(`pointermove`,t=>{e()&&(o>=0&&Math.hypot(t.clientX-o,t.clientY-s)<9||(o=t.clientX,s=t.clientY,a.push({x:t.clientX,y:t.clientY,life:1}),a.length>40&&a.shift()))});function c(){let e=t.getBoundingClientRect();(t.width!==Math.max(1,Math.floor(e.width*devicePixelRatio))||t.height!==Math.max(1,Math.floor(e.height*devicePixelRatio)))&&r();let o=t.width/Math.max(1,e.width);n.setTransform(o,0,0,o,0,0),n.clearRect(0,0,e.width,e.height);for(let e=a.length-1;e>=0;e--){let t=a[e];if(t.life-=.045,t.life<=0){a.splice(e,1);continue}n.globalAlpha=t.life*.28,n.beginPath(),n.arc(t.x,t.y,1.6+(1-t.life)*1.2,0,Math.PI*2),n.fillStyle=i,n.fill()}n.globalAlpha=1,requestAnimationFrame(c)}requestAnimationFrame(c)}function Of(e,n){let r=document.createElement(`button`);r.className=`chip`,r.type=`button`,document.body.appendChild(r);let i=null;function a(e){if(e===`new`)return{label:`🌿 new leaf`,run:n.newLeaf};if(e===`note`)return{label:`🖋 new margin note`,run:n.noteMargin};if(e===`graft`){let e=n.graftLabel();if(e)return{label:`🌳 graft ${e}`,run:n.graft}}return e===`garden`||e===`show garden`?{label:`🌷 the garden`,run:n.showGarden}:e===`gardens`||e===`show gardens`?{label:`🏡 the gardens`,run:n.chooseGardens}:e===`report`||e===`show report`?{label:`🧾 the report`,run:n.showReport}:(e===`notes`||e===`show notes`)&&n.hasNotes()?{label:`🗒 the notes`,run:n.showNotes}:null}function o(){i=null,r.classList.remove(`show`)}function s(){if(!i)return;let{word:t,run:n}=i;o();let{$from:r}=e.state.selection;r.parent.textContent.trim().toLowerCase()===t&&e.dispatch(e.state.tr.delete(r.start(),r.end())),n()}function c(e){let t=document.querySelector(`.page`),n=t?t.getBoundingClientRect().left:40,i=r.offsetWidth||96;r.style.top=`${Math.round(e-6)}px`,r.style.left=`${Math.round(Math.max(6,n-i-16))}px`}function l(){let t=e.state.selection;if(!t.empty){o();return}let{$from:n}=t,s=n.depth===1&&n.parent.type.name===`paragraph`&&n.parent.attrs.table!==`row`,l=n.parent.textContent.trim().toLowerCase(),u=s?a(l):null;if(!u){o();return}i={word:l,run:u.run},r.textContent=`${u.label} ⇥`,r.classList.add(`show`),c(e.coordsAtPos(n.start()).top)}return t(r,()=>{s()}),window.addEventListener(`keydown`,e=>{e.key===`Tab`&&i&&(e.preventDefault(),s())},!0),{update:l}}function kf(e,n){let r=document.createElement(`div`);r.id=`formatbar`,document.body.appendChild(r);function i(e,n,r,i){let a=document.createElement(`button`);return a.type=`button`,a.className=n,a.textContent=e,a.title=i,t(a,()=>{r()}),a}function a(){r.classList.remove(`show`)}function o(t,o){r.textContent=``;let s=n=>e.state.doc.rangeHasMark(t,o,Kt.marks[n]),c=i(`B`,`fmt-btn fmt-bold`,()=>n.emphasise(e,`strong`),`bold  ⌘B`);s(`strong`)&&c.classList.add(`on`);let l=i(`I`,`fmt-btn fmt-ital`,()=>n.emphasise(e,`em`),`italic  ⌘I`);s(`em`)&&l.classList.add(`on`);let u=i(`code`,`fmt-btn fmt-code`,()=>n.emphasise(e,`code`),`code — exactly what you type or press  ⌘E`);s(`code`)&&u.classList.add(`on`);let d=i(`strike`,`fmt-btn fmt-strike`,()=>n.emphasise(e,`strike`),`strike through — the words stay, struck  ⌘⇧X`);s(`strike`)&&d.classList.add(`on`),r.append(c,l,u,d);let f=document.createElement(`span`);if(f.className=`fmt-div`,r.appendChild(f),r.appendChild(i(`Format`,`fmt-btn fmt-format`,()=>{n.openFormat(),a()},`style and layout for this line`)),n.engineAwake()){let a=document.createElement(`span`);a.className=`fmt-div`,r.appendChild(a);let s=e.state.doc.textBetween(t,o,` `).trim(),c=e.state.selection,l=c.$from.index(0),u=c.$to.parentOffset===0&&c.$to.index(0)>l?c.$to.index(0)-1:c.$to.index(0);r.appendChild(i(`ask the margin about this`,`fmt-btn fmt-ask`,()=>n.ask(l,u,s),`ask the margin about the passage you have selected — it sends that passage and nothing else`))}if(n.bringOffered?.()){let a=e.state.doc.textBetween(t,o,`
`);a.trim()&&r.appendChild(i(`bring to the front page`,`fmt-btn fmt-bring`,()=>n.bring?.(a,t,o),`carry this passage to the front page — the crossing is recorded on both leaves`))}}function s(t,n){let i,o;try{i=e.coordsAtPos(t),o=e.coordsAtPos(n)}catch{a();return}let s=(i.left+o.right)/2,c=r.getBoundingClientRect(),l=Math.max(8,Math.min(s-c.width/2,window.innerWidth-c.width-8)),u=i.top-c.height-8;u<8&&(u=o.bottom+8),r.style.left=`${Math.round(l)}px`,r.style.top=`${Math.round(u)}px`}function c(){if(n.formatOpen()){a();return}let t=e.state.selection,i=t.empty?``:e.state.doc.textBetween(t.from,t.to,` `).trim();if(t.empty||i.length<1){a();return}o(t.from,t.to),r.classList.add(`show`),s(t.from,t.to)}return window.addEventListener(`resize`,c),e.dom.addEventListener(`blur`,()=>a()),{update:c}}var Af=[{key:`avenir`,label:`Avenir Next`,stack:`"Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`},{key:`montserrat`,label:`Montserrat`,stack:`"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`},{key:`georgia`,label:`Georgia`,stack:`Georgia, "Iowan Old Style", "Times New Roman", serif`},{key:`palatino`,label:`Palatino`,stack:`Palatino, "Palatino Linotype", "Book Antiqua", serif`},{key:`times`,label:`Times`,stack:`"Times New Roman", Times, serif`},{key:`helvetica`,label:`Helvetica`,stack:`"Helvetica Neue", Helvetica, Arial, sans-serif`},{key:`charter`,label:`Charter`,stack:`Charter, "Bitstream Charter", Georgia, serif`},{key:`courier`,label:`Courier`,stack:`"Courier New", Courier, monospace`}],jf=[10,11,12,13,14,16,18],Mf=`avenir`;function Nf(e){return(Af.find(t=>t.key===e)??Af[0]).stack}var Pf=[{key:`long`,opts:{day:`numeric`,month:`long`,year:`numeric`}},{key:`numeric`,opts:{day:`2-digit`,month:`2-digit`,year:`numeric`}},{key:`weekday`,opts:{weekday:`long`,day:`numeric`,month:`long`,year:`numeric`}},{key:`medium`,opts:{day:`numeric`,month:`short`,year:`numeric`}},{key:`iso`,opts:{}},{key:`time`,opts:{hour:`numeric`,minute:`2-digit`}},{key:`long-time`,opts:{day:`numeric`,month:`long`,year:`numeric`,hour:`numeric`,minute:`2-digit`}},{key:`numeric-time`,opts:{day:`2-digit`,month:`2-digit`,year:`numeric`,hour:`numeric`,minute:`2-digit`}}];function Ff(e,t){if(e.key===`iso`){let e=e=>String(e).padStart(2,`0`);return`${t.getFullYear()}-${e(t.getMonth()+1)}-${e(t.getDate())}`}return new Intl.DateTimeFormat(void 0,e.opts).format(t)}function If(e){let t=Pf.findIndex(t=>t.key===e);return t>0?[Pf[t],...Pf.filter((e,n)=>n!==t)]:Pf}var Lf=`phloem.app.learned`;function Rf(){let e=navigator.userAgentData?.platform??navigator.platform??navigator.userAgent;return/mac|iphone|ipad/i.test(e)?`Option (⌥)`:`Alt`}var zf=`phloem.app.launches`;function Bf(){let e=Number(localStorage.getItem(zf)??`0`)+1;return e<=4&&localStorage.setItem(zf,String(e)),e}function Vf(){return Number(localStorage.getItem(zf)??`0`)}function Hf(){try{let e=localStorage.getItem(Lf),t=e?JSON.parse(e):null;return t&&typeof t==`object`?t:{}}catch{return{}}}function Uf(e){return Hf()[e]??0}function Wf(e){return Uf(e)>=3}function Gf(e){let t=Hf(),n=t[e]??0;if(!(n>=3)){t[e]=n+1;try{localStorage.setItem(Lf,JSON.stringify(t))}catch{}}}function Kf(e,n){let r=document.createElement(`div`);r.id=`formatpanel`,document.body.appendChild(r);let i=!1;function a(){return r.classList.contains(`show`)}function o(){a()&&(r.classList.remove(`show`),n.onToggle())}function s(e,n,r,i,a){let o=document.createElement(`button`);return o.type=`button`,o.className=`fmt-btn ${n}`,o.textContent=e,o.title=a,r&&o.classList.add(`on`),t(o,i),o}function c(e,t){let n=document.createElement(`div`);n.className=`fmtp-row`;let r=document.createElement(`span`);r.className=`fmtp-cap`,r.textContent=e;let i=document.createElement(`span`);return i.className=`fmtp-group`,i.append(...t),n.append(r,i),n}function l(e){let t=document.createElement(`div`);return t.className=`fmtp-reg`,t.textContent=e,t}function u(e,t,n){let r=document.createElement(`select`);r.className=`fmtp-select`;for(let n of e){let e=document.createElement(`option`);e.value=n.value,e.textContent=n.label,n.face&&(e.style.fontFamily=n.face),n.value===t&&(e.selected=!0),r.appendChild(e)}return r.addEventListener(`change`,()=>n(r.value)),r}let d=!1;function f(){r.textContent=``;let i=document.createElement(`div`);i.className=`fmtp-title`,i.textContent=`format`,r.appendChild(i);{let{from:t,to:n}=e.state.selection;if(n>t){let i=e.state.doc.textBetween(t,n,`
`),a=[...i.replace(/\n/g,``)].length,o=i.split(/\s+/).filter(Boolean).length,s=document.createElement(`div`);s.className=`fmtp-count`,s.textContent=`${o} ${o===1?`word`:`words`} · ${a} ${a===1?`character`:`characters`} selected`,r.appendChild(s)}}let a=n.selectedImage(e);if(a&&(r.appendChild(l(`this picture`)),r.appendChild(c(`size`,[[`tiny`,`tiny`,`an eighth of the page — a picture in the line`],[`small`,`small`,`a third of the page`],[`medium`,`medium`,`about half the page`],[`full`,`full`,`the whole width`]].map(([t,r,i])=>s(r,`fmtp-kind`,a.size===t,()=>{n.setImageStyle(e,{size:t}),f()},i)))),r.appendChild(c(`alignment`,[[`left`,`left`,`L`,`at the left, the words kept clear above and below`],[`center`,`center`,`C`,`centred, the words kept clear above and below`],[`right`,`right`,`R`,`at the right, the words kept clear above and below`]].map(([t,r,i,o])=>s(i,`fmt-align fmt-align-${r}`,a.place===t,()=>{n.setImageStyle(e,{place:t}),f()},o)))),r.appendChild(c(`text`,[[`inline`,`left`,`in line`,`in the line, like a large letter — press again to keep the words clear`],[`wrap-left`,`left`,`⇤ text`,`at the left, with the text flowing round it — press again to keep the words clear`],[`wrap-right`,`right`,`text ⇥`,`at the right, with the text flowing round it — press again to keep the words clear`]].map(([t,r,i,o])=>s(i,`fmtp-kind`,a.place===t,()=>{n.setImageStyle(e,{place:a.place===t?r:t}),f()},o))))),!a){r.appendChild(l(`the pen — what you type next`)),r.appendChild(c(`emphasis`,[s(`B`,`fmtp-kind fmt-bold`,n.penActive(e,`strong`),()=>{n.setPen(e,`strong`),f()},`bold — what you type next  ⌘B`),s(`I`,`fmtp-kind fmt-ital`,n.penActive(e,`em`),()=>{n.setPen(e,`em`),f()},`italic — what you type next  ⌘I`),s(`code`,`fmtp-kind fmt-code`,n.penActive(e,`code`),()=>{n.setPen(e,`code`),f()},`code — what you type next  ⌘E`),s(`strike`,`fmtp-kind fmt-strike`,n.penActive(e,`strike`),()=>{n.setPen(e,`strike`),f()},`strike through — what you type next  ⌘⇧X`)])),r.appendChild(l(`this line`));let t=n.blockStyle(e);r.appendChild(c(`style`,[s(`Body`,`fmtp-kind`,t===`body`,()=>n.setBlock(e,`body`),`body text`),s(`Heading`,`fmtp-kind`,t===`heading`,()=>n.setBlock(e,`heading`),`make this line a heading`),s(`Aside`,`fmtp-kind`,t===`aside`,()=>n.setBlock(e,`aside`),`set this line apart — a note or a warning`)]));let i=n.blockAlign(e);r.appendChild(c(`alignment`,[[`left`,`L`,`align left`],[`center`,`C`,`align centre`],[`right`,`R`,`align right`]].map(([t,r,a])=>s(r,`fmt-align fmt-align-${t}`,i===t,()=>n.setAlign(e,t),a))));let a=n.blockList(e),o=(t,r,i)=>s(r,`fmtp-kind`,a===t,()=>n.setList(e,a===t?`none`:t),i);r.appendChild(c(`list`,[o(`bullet`,`•`,`bulleted list — press again to remove`),o(`dash`,`–`,`dashed list — press again to remove`),o(`ordered`,`1.`,`numbered list — press again to remove`)]));let u=n.blockIndent(e),d=s(`⇤`,`fmtp-kind`,!1,()=>n.setIndent(e,-1),`move this line back toward the margin`);d.disabled=u<=0,r.appendChild(c(`indent`,[d,s(`⇥`,`fmtp-kind`,!1,()=>n.setIndent(e,1),`move this line in`)]));let p=n.blockSpacing(e),m=(t,r,i)=>s(r,`fmtp-kind`,p===t,()=>n.setSpacing(e,t),i);r.appendChild(c(`line spacing`,[m(`single`,`single`,`close-set lines`),m(`natural`,`natural`,`the page's own spacing`),m(`double`,`double`,`double-spaced, with room to write between the lines`)]))}r.appendChild(l(`insert`));let p=c(`date & time`,[s(d?`close`:`choose…`,`fmtp-kind`,d,()=>{d=!d,f()},`insert the date or the time at the caret`)]);if(r.appendChild(p),d){let i=new Date,a=document.createElement(`div`);a.className=`fmtp-stamps`;for(let r of If(n.lastStamp())){let s=document.createElement(`button`);s.type=`button`,s.className=`fmtp-stamp`,s.textContent=Ff(r,i),t(s,()=>{n.insert(e,Ff(r,i)),n.rememberStamp(r.key),d=!1,o()}),a.appendChild(s)}r.appendChild(a)}r.appendChild(c(`horizontal line`,[s(`insert`,`fmtp-kind`,!1,()=>{n.insertRule(e),o()},`insert a horizontal line at the caret`)]));let m=n.blockTable(e)===`row`;r.appendChild(c(`table`,[s(m?`remove row`:`insert`,`fmtp-kind`,!1,()=>{m?n.setTable(e,`none`):n.insertTable(e),o()},m?`turn this row back into an ordinary line — its words stay`:`start a table at the caret: two cells, and Tab adds more`)])),r.appendChild(c(`image`,[s(`insert`,`fmtp-kind`,!1,()=>{n.insertImage(e),o()},`insert a picture at the caret — copied into this leaf's record`)]));let h=n.leafStyle();r.appendChild(l(`the whole leaf`));let g=n.hideStruck();r.appendChild(c(`struck text`,[s(`shown`,`fmtp-kind`,!g,()=>{n.setHideStruck(!1),f()},`show struck-through text on the page`),s(`hidden`,`fmtp-kind`,g,()=>{n.setHideStruck(!0),f()},`hide struck-through text on the page — it stays in the record`)])),r.appendChild(c(`typeface`,[u(Af.map(e=>({value:e.key,label:e.label,face:e.stack})),h.font,e=>n.setLeafStyle(e,n.leafStyle().size))])),r.appendChild(c(`body size`,[u(jf.map(e=>({value:String(e),label:`${e} pt`})),String(h.size),e=>n.setLeafStyle(n.leafStyle().font,Number(e)))]))}function p(e=!0){d=!1,f(),r.classList.add(`show`),i=e,n.onToggle()}function m(){a()&&f()}window.addEventListener(`contextmenu`,e=>{e.target.closest(`.ProseMirror`)&&(e.preventDefault(),Gf(`paper-menu`),p(!1))}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&a()&&(e.preventDefault(),e.stopImmediatePropagation(),o())});let h=!1;return r.addEventListener(`mousedown`,()=>{h=!0}),window.addEventListener(`mousedown`,()=>{let e=h;if(h=!1,a()){if(i){i=!1;return}e||o()}}),{open:p,visible:a,refresh:m}}var qf=`phloem.nav`;function Jf(){try{let e=JSON.parse(sessionStorage.getItem(qf)??`null`);return Array.isArray(e)?e:[]}catch{return[]}}function Yf(e){sessionStorage.setItem(qf,JSON.stringify(e.slice(-50)))}function Xf(e,t){return e.at===t.at?e.at===`leaf`&&t.at===`leaf`?e.docId===t.docId:e.at===`trunk`&&t.at===`trunk`?e.matterId===t.matterId:e.at===`garden`:!1}function Zf(){return sessionStorage.getItem(qf)!==null}function Qf(e){Yf(e)}function $f(){let e=Jf();return e[e.length-1]??null}function ep(){let e=Jf();return e[e.length-2]??null}function tp(e){let t=Jf(),n=t[t.length-1];n&&Xf(n,e)||(t.push(e),Yf(t))}function np(){let e=Jf();if(e.length===0){let t=W();t&&(e.push({at:`leaf`,docId:t,matter:G()}),Yf(e))}}function rp(e){let t=Jf();t.length===0?t.push(e):t[t.length-1]=e,Yf(t)}function ip(){let e=Jf();return e.pop(),Yf(e),e[e.length-1]??null}var ap=`phloem.beheld`;function op(){try{let e=JSON.parse(sessionStorage.getItem(ap)??`[]`);return Array.isArray(e)?e:[]}catch{return[]}}function sp(e){let t=op(),n=t[t.length-1];n&&n.kind===e.kind&&n.id===e.id||(t.push(e),sessionStorage.setItem(ap,JSON.stringify(t.slice(-30))))}function cp(e){e&&sp({kind:`leaf`,id:e})}function lp(e){e&&sp({kind:`tree`,id:e})}function up(e){let t=op();for(let n=t.length-1;n>=0;n--){let r=t[n];if(!(r.kind===`leaf`&&r.id===e))return r}return null}function dp(e,t,n=()=>null,r=()=>e.length>0){let i=document.createElement(`div`);i.id=`whence`,document.body.appendChild(i);function a(e,t){return{docId:e,matter:null,firstLine:t,text:``,firstT:0,lastT:0,previewLines:[],strokes:[],files:[]}}function o(t){return e.find(e=>e.docId===t)??a(t,`(a blank leaf)`)}function s(e){return e.at===`garden`?`the garden`:e.at===`trunk`?`the tree · ${n(e.matterId??G())||`a tree`}`:o(e.docId).firstLine||`(a blank leaf)`}function c(e){return e.at===`leaf`?o(e.docId):a(``,``)}function l(){let e=$f();return e&&e.at!==`leaf`?null:ep()||(r()?{at:`garden`}:null)}function u(){if(i.textContent=``,i.style.left=``,i.style.right=``,i.style.top=``,localStorage.getItem(U(`workings.front.${W()}`)))return;let e=l();if(!e)return;let t=gl(c(e),.5,()=>f());t.classList.add(`door`);let n=t.querySelector(`.ghost-label-text`);n&&(n.textContent=`⮐ ${s(e)}`),ml(t,.5),t.style.setProperty(`--solidity`,`0.55`),t.title=`the door you came through — click to walk back`,i.appendChild(t),queueMicrotask(d),window.setTimeout(d,350)}function d(){let e=i.firstElementChild;if(!e)return;let t=document.querySelector(`.page`)?.getBoundingClientRect();if(!t)return;let n=e.getBoundingClientRect(),r=i.getBoundingClientRect(),a=e=>{i.style.right=`auto`,i.style.left=`${Math.round(r.left+(e-n.left))}px`},o=document.getElementById(`shade`),s=o?.classList.contains(`show`)?o.getBoundingClientRect():null;if(s){let e=s.left-8-n.width;e>=2?(i.style.top=``,a(e)):(a(6),i.style.top=`${Math.round(s.bottom+12)}px`)}else document.body.classList.contains(`split-open`)?(i.style.top=``,a(t.left+16-n.width)):(i.style.top=``,a(Math.max(2,t.left-12-n.width)))}function f(){t()}function p(e){let t=i.firstElementChild;t&&t.style.setProperty(`--solidity`,String(.55*Math.max(e,.35)))}return u(),window.addEventListener(`resize`,d),{label:()=>{let e=l();return e?s(e).slice(0,22):null},back:f,setSolidity:p,visible:()=>i.childElementCount>0,refresh:u}}function fp(e){let t=/<pre id="phloem-leaf">([\s\S]*?)<\/pre>/.exec(e)||/<script type="application\/json" id="phloem-leaf">([\s\S]*?)<\/script>/.exec(e);return t?t[1]:null}var pp=null;function mp(e){pp=e}function hp(e){return e?document.elementFromPoint(e.x,e.y)?.closest(`.garden-tree`)?.dataset.matter??null:null}var gp=null;function _p(e){let t=hp(e),n=t?document.querySelector(`.garden-tree[data-matter="${CSS.escape(t)}"]`):null;n!==gp&&(gp?.classList.remove(`taking`),gp=n,gp?.classList.add(`taking`))}function vp(e=null){let t=$f();if(t?.at===`garden`){let t=hp(e);return t?{docId:tn(),matter:t,at:0,where:`tree`}:{docId:tn(),matter:null,at:0,where:`free`}}if(t?.at===`trunk`){let e=t.matterId??G();return e?{docId:tn(),matter:e,at:0,where:`tree`}:{docId:tn(),matter:null,at:0,where:`free`}}return{docId:W(),matter:G(),at:pp?pp():0,where:`leaf`}}function yp(e,t){let n=t===`tree`?`planted as a new leaf in this tree`:t===`free`?`planted as a new leaf, standing free`:`replanted into this leaf, where you left the cursor`;return e.ok?`this file’s seals verify — ${n}`:`this file’s seals do NOT verify — its record was altered (broken at event ${e.brokenAt}); ${n} anyway, as a new planting`}var bp=`phloem.dropVerdict`;async function xp(e,t=null,n){_p(null),await Z(),n&&await ie(n);let r=await Gn(e),i=vp(t);return await Kn(e,r,{docId:i.docId,matter:i.matter,at:i.at}),r.sealed&&sessionStorage.setItem(bp,yp(r,i.where)),i}var Sp=`modulepreload`,Cp=function(e){return`/write/`+e},wp={},Q=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=Cp(t,n),t=s(t),t in wp)return;wp[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:Sp,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Tp=new Set([`txt`,`md`,`markdown`,`csv`,`json`,`html`,`htm`,`xml`,`js`,`ts`,`css`,`php`,`py`,`rb`,`sh`,`yaml`,`yml`,`log`]),Ep=2e5,Dp=2e6,Op=400;function kp(){return`__TAURI_INTERNALS__`in window}function Ap(e){return e.split(/[/\\]/).pop()??e}function jp(e){let t=e.lastIndexOf(`.`);return t>0?e.slice(t+1).toLowerCase():``}async function Mp(e,t){let n=Ap(t),r=jp(n),i=0,a=0;try{let n=await e.stat(t);i=Number(n.size??0),a=n.mtime?new Date(n.mtime).getTime():0}catch{}let o=``;if(Tp.has(r)&&i<=Dp)try{o=(await e.readTextFile(t)).slice(0,Ep)}catch{}return{type:`file-ref`,path:t,name:n,kind:r,size:i,mtime:a,text:o}}async function Np(e,t){let n=[],r;try{r=await e.readDir(t)}catch{return n}for(let i of r){if(i.name.startsWith(`.`))continue;let r=`${t.replace(/[/\\]$/,``)}/${i.name}`;i.isDirectory?n.push(...await Np(e,r)):i.isFile&&n.push(r)}return n}async function Pp(e,t,n){let r=await Np(e,t);if(r.length===0)return n(`that folder has nothing to adopt`),null;let i=r.slice(0,Op);r.length>i.length&&n(`large folder: adopted the first ${Op} of ${r.length} files`);let a=rn();await K(a,{type:`matter-adopt`,path:t,name:Ap(t)},a);let o=``;for(let t of i){let n=an(t);o||=n,await K(n,await Mp(e,t),a)}return{matterId:a,firstLeaf:o}}var Fp={png:`image/png`,jpg:`image/jpeg`,jpeg:`image/jpeg`,gif:`image/gif`,webp:`image/webp`,bmp:`image/bmp`,heic:`image/heic`,avif:`image/avif`};function Ip(e,t,n){let r=document.createElement(`div`);r.className=`drop-ask`;let i=document.createElement(`div`);i.className=`drop-ask-what`,i.textContent=`a picture — where does it go?`;let a=document.createElement(`button`);a.type=`button`,a.className=`chip show`,a.textContent=`put it on the page — copied into this leaf's record`;let o=document.createElement(`button`);o.type=`button`,o.className=`chip show`,o.textContent=`attach it as a tag — the file stays where it is`,r.append(i,a,o);let s=()=>{r.remove(),window.removeEventListener(`keydown`,c,!0),window.removeEventListener(`mousedown`,l,!0)},c=e=>{e.key===`Escape`&&(e.preventDefault(),s())},l=e=>{r.contains(e.target)||s()};a.addEventListener(`click`,()=>{s(),t()}),o.addEventListener(`click`,()=>{s(),n()}),document.body.appendChild(r);let u=Math.min(window.innerWidth-r.offsetWidth-12,Math.max(12,(e?.x??200)-20)),d=Math.min(window.innerHeight-r.offsetHeight-12,Math.max(12,(e?.y??200)-20));r.style.left=`${u}px`,r.style.top=`${d}px`,window.addEventListener(`keydown`,c,!0),window.addEventListener(`mousedown`,l,!0)}function Lp(e,t){kp()&&(async()=>{let{getCurrentWebview:n}=await Q(async()=>{let{getCurrentWebview:e}=await import(`./webview-CZd6PrpL.js`);return{getCurrentWebview:e}},__vite__mapDeps([0,1,2,3])),r=await Q(()=>import(`./dist-js-DMhqZ8pp.js`),__vite__mapDeps([4,1,5])),i=e=>e?{x:e.x/window.devicePixelRatio,y:e.y/window.devicePixelRatio}:null;await n().onDragDropEvent(async n=>{if(n.payload.type===`over`){_p(i(n.payload.position));return}if(n.payload.type===`leave`){_p(null);return}if(n.payload.type!==`drop`)return;_p(null);let a=i(n.payload.position),o=n.payload.paths??[],s=0,c=null;for(let n of o){let i=Ap(n);try{if((await r.stat(n)).isDirectory){c=await Pp(r,n,e)??c,c&&s++;continue}}catch{}if(i.endsWith(`.json`))try{let e=JSON.parse(await r.readTextFile(n));if(e?.phloem===1&&e.garden&&Array.isArray(e.events)){await Z();let t=h(e.garden.name??null),n=m().find(e=>e.id===t);await Jn(n.dbName,e.events,e.blobs);let r,i=-1;for(let t of e.events)t.docId&&(t.t??0)>=i&&(i=t.t??0,r=t.docId);r&&localStorage.setItem(n.keys+`currentDoc`,r),S(t);return}if(e?.phloem===1&&Array.isArray(e.events)){await xp(e.events,a,e.blobs),s++;continue}}catch{}if(/\.html?$/i.test(i))try{let e=fp(await r.readTextFile(n));if(e){let t=JSON.parse(e);if(t?.phloem===1&&Array.isArray(t.events)){await xp(t.events,a,t.blobs),s++;continue}}}catch{}if(i.endsWith(`.phloem.json`))try{let e=JSON.parse(await r.readTextFile(n)),t=Array.isArray(e)?e:e.events;if(Array.isArray(t)){await xp(t,a,Array.isArray(e)?void 0:e.blobs),s++;continue}}catch{e(`that file is not a phloem leaf`);continue}let o=Fp[jp(i).toLowerCase().replace(/^\./,``)];if(o&&t){Ip(a,()=>void r.readFile(n).then(n=>t(n,i,o,a??void 0).then(t=>{t||e(`that file is not a picture this app can read`)}),()=>e(`could not read that picture`)),()=>void Mp(r,n).then(e=>Nn(e)).then(()=>location.reload()));continue}await Nn(await Mp(r,n)),s++}c&&(np(),tp({at:`trunk`,matterId:c.matterId}),on(c.firstLeaf,c.matterId)),s>0&&location.reload()})})()}async function Rp(){if(!kp())return 0;let e=await Q(()=>import(`./dist-js-DMhqZ8pp.js`),__vite__mapDeps([4,1,5])),t=await Bn(),n=0;for(let{docId:r,matter:i,leaf:a}of t)try{let t=await e.stat(a.path),o=t.mtime?new Date(t.mtime).getTime():0,s=Number(t.size??0);if(o===a.mtime&&s===a.size)continue;let c=await Mp(e,a.path);c.text||=a.text,await K(r,c,i),n++}catch{}return n}function zp(){kp()&&(async()=>{let e=await Q(()=>import(`./dist-js-DMhqZ8pp.js`),__vite__mapDeps([4,1,5])),{matters:t}=await sr(),n=[...t.values()].filter(e=>!!e.root);if(n.length===0)return;let r=!1;async function i(t,n){if(!r){r=!0;try{let r=new Map((await Bn()).filter(e=>e.matter===t).map(e=>[e.leaf.path,e])),i=await Np(e,n),a=new Set(i),o=[...r.values()].filter(e=>!a.has(e.leaf.path));for(let n of i.slice(0,Op)){let i=r.get(n);if(i){let r=await e.stat(n).catch(()=>null);if(!r||(r.mtime?new Date(r.mtime).getTime():0)===i.leaf.mtime&&Number(r.size??0)===i.leaf.size)continue;await K(i.docId,await Mp(e,n),t)}else{let r=await Mp(e,n),i=o.findIndex(e=>e.leaf.mtime===r.mtime&&e.leaf.size===r.size&&e.leaf.text===r.text);if(i>=0){let e=o.splice(i,1)[0];await K(e.docId,r,t)}else await K(an(n),r,t)}}}finally{r=!1}}}for(let t of n){await i(t.id,t.root);try{await e.watch(t.root,()=>void i(t.id,t.root),{recursive:!0,delayMs:900})}catch{}}})()}async function Bp(e){if(!kp())return;let t=[...e.querySelectorAll(`.leaf[data-path]`)];if(t.length===0)return;let n=await Q(()=>import(`./dist-js-DMhqZ8pp.js`),__vite__mapDeps([4,1,5]));for(let e of t){let t=e.dataset.path;t&&(await n.stat(t).then(()=>!0,()=>!1)||(e.classList.add(`leaf-withered`),e.title=`${t}\n— moved or removed; the file is no longer here`))}}async function Vp(e,t){if(!kp()){t(`opening files natively needs the desktop app`);return}try{let{openPath:t}=await Q(async()=>{let{openPath:e}=await import(`./dist-js-UCi8EyMo.js`);return{openPath:e}},__vite__mapDeps([6,1]));await t(e)}catch{t(`could not open — has the file moved?`)}}var Hp=`phloem-palette`,Up=`default.css`,Wp=`phloem.app.theme`,Gp=``;function Kp(){return document.getElementById(Hp)}var qp=`~/`;async function Jp(){let{invoke:e}=await Q(async()=>{let{invoke:e}=await import(`./core-D8n9Wfto.js`);return{invoke:e}},[]);return e}function Yp(){return localStorage.getItem(Wp)||Up}var Xp=e=>e.replace(/\/\*[\s\S]*?\*\//g,``).replace(/\n{2,}/g,`
`).trim();async function Zp(e){try{let t=Xp(await(await fetch(`/write/themes/${Up}`)).text());if(!e.startsWith(qp)){let n=await fetch(`/write/themes/${e}`);if(!n.ok)return;Gp=e===Up?t:`${t}\n${Xp(await n.text())}`;return}let n=await(await Jp())(`read_disk_theme`,{name:e.slice(2)});n&&(Gp=`${t}\n${Xp(n)}`)}catch{}}async function Qp(e){let t=Kp();if(!t)return;let n=`phloem-palette-disk`;if(document.getElementById(n)?.remove(),!e.startsWith(qp)){t.href=`/write/themes/${e}`;return}t.href=`/write/themes/${Up}`;try{let t=await(await Jp())(`read_disk_theme`,{name:e.slice(2)});if(!t)return;let r=document.createElement(`style`);r.id=n,r.textContent=t,document.head.appendChild(r)}catch{}}function $p(){return`:root{--desk:#eceff1;--paper:#fff;--ink-text:#1f2428;--accent:#2f6f4e;--muted:rgba(0,0,0,.42);--line-soft:rgba(128,128,128,.18);--shadow:0 2px 14px rgba(0,0,0,.1);--rep-panel:rgba(255,255,255,.55);--rep-stripe:rgba(31,36,40,.07)}@media(prefers-color-scheme:dark){:root{--desk:#16181a;--paper:#23272a;--ink-text:#e8e6e3;--accent:#6cc295;--muted:rgba(255,255,255,.44);--shadow:0 2px 14px rgba(0,0,0,.5);--rep-panel:rgba(255,255,255,.045);--rep-stripe:rgba(255,255,255,.065)}}`}function em(){return Gp||$p()}async function tm(){await Zp(Yp())}async function nm(){let e=Yp();e!==Up&&await Qp(e),await Zp(e)}function rm(e){let t=e.toLowerCase(),n=new Set([t,`${t}s`,`${t}es`]);t.endsWith(`es`)&&t.length>4&&n.add(t.slice(0,-2)),t.endsWith(`s`)&&t.length>3&&n.add(t.slice(0,-1));let r=[...n].map(e=>e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`));return RegExp(`\\b(?:${r.join(`|`)})\\b`,`gi`)}function im(){let e=document.createElement(`div`);e.id=`compare`,document.body.appendChild(e);let n=!1;function r(){n&&(n=!1,e.classList.remove(`show`),window.setTimeout(()=>{n||(e.textContent=``)},260))}function i(e,n,i){let o=document.createElement(`div`);o.className=`compare-pane compare-${i}`;let c=document.createElement(`div`);c.className=`compare-head`;let l=document.createElement(e.onGo?`button`:`span`);if(l.className=`compare-head-title`,l.textContent=e.title||(i===`left`?`your page`:`a leaf`),e.onGo){l.type=`button`,l.title=i===`left`?`back to this leaf`:`go to this leaf`;let n=e.onGo;t(l,()=>{r(),n()})}let u=document.createElement(`span`);u.className=`compare-head-role`,u.textContent=i===`left`?` — current leaf`:` — related leaf`,c.append(l,u),o.appendChild(c);let d=document.createElement(`div`);d.className=`compare-body`,o.appendChild(d);let f=[];for(let t of e.paras){let e=document.createElement(`p`);if(e.className=`compare-para`,!t.trim())e.classList.add(`compare-blank`);else{n.lastIndex=0;let r=0,i;for(;i=n.exec(t);){i.index>r&&e.appendChild(document.createTextNode(t.slice(r,i.index)));let a=document.createElement(`mark`);a.className=`compare-hit`,a.textContent=i[0],e.appendChild(a),f.push(a),r=i.index+i[0].length,i.index===n.lastIndex&&n.lastIndex++}r<t.length&&e.appendChild(document.createTextNode(t.slice(r)))}d.appendChild(e)}if(!f.length&&e.files&&e.files.length){let t=document.createElement(`div`);t.className=`compare-filenote`,t.textContent=`the shared word is in an attached file — ${e.files.join(`, `)} — not on this page`,d.insertBefore(t,d.firstChild)}if(f.length){let e=document.createElement(`div`);e.className=`compare-occ`;let t=document.createElement(`span`);t.className=`compare-occ-count`;let n=0,r=()=>{t.textContent=`${n+1} / ${f.length}`,f.forEach((e,t)=>e.classList.toggle(`compare-hit-current`,t===n))},i=e=>{n=(e+f.length)%f.length,r(),a(d,f[n])};e.append(s(`‹`,`previous occurrence`,()=>i(n-1)),t,s(`›`,`next occurrence`,()=>i(n+1))),o.insertBefore(e,d),r()}return{col:o,body:d,firstHit:f[0]??null}}function a(t,n){let r=e.clientHeight*.3,i=n.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop;t.scrollTop=Math.max(0,i-r)}function o(e){for(let t of e)t.firstHit&&a(t.body,t.firstHit)}function s(e,n,r){let i=document.createElement(`button`);return i.type=`button`,i.className=`compare-occ-nav`,i.textContent=e,i.title=n,t(i,e=>{e.stopPropagation(),r()}),i}function c(t,r,a){e.textContent=``;let s=rm(t),c=i(r,s,`left`),l=i(a,s,`right`);e.append(c.col,l.col),e.classList.add(`show`),n=!0,requestAnimationFrame(()=>o([c,l]))}return window.addEventListener(`keydown`,e=>{e.key===`Escape`&&n&&(e.preventDefault(),e.stopImmediatePropagation(),r())},!0),e.addEventListener(`mousedown`,t=>{t.target===e&&r()}),{open:c,visible:()=>n,close:r}}function am(e){let n=document.createElement(`button`);n.id=`shade`,n.type=`button`,n.title=`the tree this leaf grows on — click to see it whole`,document.body.appendChild(n);function r(){let e=document.querySelector(`.page`);if(!e)return;let t=e.getBoundingClientRect();n.style.left=`${Math.max(4,Math.round(t.left-42))}px`}return window.addEventListener(`resize`,r),t(n,()=>e()),{set(e){e?(n.textContent=e,n.classList.add(`show`),r()):(n.textContent=``,n.classList.remove(`show`))},arrive(){n.classList.contains(`show`)&&(n.classList.remove(`arriving`),n.offsetWidth,n.classList.add(`arriving`),n.addEventListener(`animationend`,()=>n.classList.remove(`arriving`),{once:!0}))}}}var om=118;function sm(e,t){let n=2166136261^t;for(let t=0;t<e.length;t++)n^=e.charCodeAt(t),n=Math.imul(n,16777619);return(n>>>0)%1e3/1e3}function cm(e,n,r){let i=document.createElement(`div`);i.id=`trunk`,document.body.appendChild(i);let a=null;function o(){a=null,i.classList.remove(`show`),window.setTimeout(()=>{i.classList.contains(`show`)||(i.textContent=``)},400)}async function s(r){let s=r??G();if(!s)return;a=s;let{leaves:c,matters:l}=await sr(),u=c.filter(e=>e.matter===s&&!e.workingsOf).sort((e,t)=>t.lastT-e.lastT);s===G()&&!u.some(e=>e.docId===W())&&u.push({docId:W(),matter:s,firstLine:`(this leaf)`,text:``,firstT:0,lastT:0,previewLines:[],strokes:[],files:[]}),i.textContent=``;let d=document.createElement(`button`);d.type=`button`,d.className=`place-shade`,d.textContent=`the garden`,d.title=`the garden this tree stands in — click to climb`,t(d,()=>{o(),n()}),i.appendChild(d);let f=l.get(s),p=document.createElement(`div`);p.className=`trunk-name`,p.textContent=f?.name??`(a young tree)`,i.appendChild(p);let m=f?.root?.replace(/[/\\]$/,``);function h(e){let t=e.files[0]?.path.replace(/\\/g,`/`),n=m?.replace(/\\/g,`/`);if(!t||!n||!t.startsWith(n+`/`))return``;let r=t.slice(n.length+1),i=r.lastIndexOf(`/`);return i>0?r.slice(0,i):``}let g=new Map;for(let e of u){let t=h(e),n=g.get(t);n||g.set(t,n=[]),n.push(e)}let _=[...g.keys()].sort((e,t)=>e===``?-1:t===``?1:e.localeCompare(t));for(let t of _){if(t!==``){let e=document.createElement(`div`);e.className=`trunk-branch`,e.textContent=t,i.appendChild(e)}let n=document.createElement(`div`);n.className=`trunk-leaves`;for(let r of g.get(t)){let t=gl(r,.9,()=>{o(),e(r)});ml(t,.9,om),t.style.setProperty(`--solidity`,`0.96`),t.style.transform=`rotate(${((sm(r.docId,3)-.5)*4).toFixed(1)}deg)`,r.docId===W()&&t.classList.add(`here`),n.appendChild(t)}i.appendChild(n)}if(!u.length){let e=document.createElement(`div`);e.className=`trunk-hint`,e.textContent=`empty tree`,i.appendChild(e)}i.classList.add(`show`)}return t(i,e=>{e.target.closest(`.ghost, .place-shade`)||(o(),n())},{keepDefault:!0}),window.addEventListener(`keydown`,e=>{document.body.classList.contains(`revealing`)||document.body.classList.contains(`askingphloem`)||document.body.classList.contains(`feedbacking`)||e.key===`Escape`&&i.classList.contains(`show`)&&(e.preventDefault(),e.stopImmediatePropagation(),o(),r())},!0),{show:e=>void s(e),visible:()=>i.classList.contains(`show`),matterId:()=>a,hide:o}}var lm=46,um=64,dm=4,fm=336*60*60*1e3,pm=1008*60*60*1e3,mm=.95,hm=.3;function gm(e){let t=[128,128,128],n=[150,96,42],r=t.map((t,r)=>Math.round(t+(n[r]-t)*e)),i=.35+e*.45;return`rgba(${r[0]}, ${r[1]}, ${r[2]}, ${i.toFixed(2)})`}function _m(e){if(!e)return`not yet tended`;let t=Math.floor((Date.now()-e)/864e5);if(t<1)return`tended today`;if(t===1)return`last tended yesterday`;if(t<14)return`last tended ${t} days ago`;let n=Math.floor(t/7);if(n<9)return`last tended ${n} weeks ago`;let r=Math.floor(t/30);return`last tended ${r} month${r>1?`s`:``} ago`}function vm(e){let n=document.createElement(`div`);n.id=`garden`,document.body.appendChild(n);function r(){n.classList.remove(`show`),window.setTimeout(()=>{n.classList.contains(`show`)||(n.textContent=``)},400)}let i=null;function a(){i?.remove(),i=null}function o(e,t,r){a();let i=n.querySelector(`.pile-heading`);if(!i)return;let o=e.trim()||`burn`,s=document.createElement(`div`);s.className=`burn-ask`;let c=document.createElement(`div`);c.className=`burn-said`,c.textContent=`You have chosen to burn “${o}”${t?` and the ${t} ${t===1?`leaf`:`leaves`} it holds`:``}. This deletes it permanently and cannot be undone. Type ‘${o}’ below to confirm, or press Esc to leave it standing.`;let l=document.createElement(`input`);l.className=`burn-input`,l.placeholder=o,l.addEventListener(`mousedown`,e=>e.stopPropagation()),l.addEventListener(`keydown`,e=>{if(e.stopPropagation(),e.key===`Enter`){if(l.value.trim().toLowerCase()!==o.toLowerCase()){s.classList.add(`refused`);return}a(),r()}else e.key===`Escape`?(e.preventDefault(),e.stopImmediatePropagation(),a()):s.classList.remove(`refused`)}),s.append(c,l),i.before(s),s.scrollIntoView({block:`center`,behavior:`smooth`}),l.focus()}function s(e,n,r){let i=document.createElement(`div`);i.className=`pile-row`;let a=document.createElement(`span`);a.className=`pile-what`,a.textContent=n?`${e} · ${n} ${n===1?`leaf`:`leaves`}`:e;let o=document.createElement(`span`);o.className=`pile-verbs`;for(let e of r){let n=document.createElement(`button`);n.type=`button`,n.className=e.burn?`pile-verb pile-burn`:`pile-verb`,n.textContent=e.label,t(n,t=>{t.stopPropagation(),e.run()}),o.appendChild(n)}return i.append(a,o),i}function c(e,t){let n=document.elementFromPoint(e,t);return n?.closest(`.garden-tree`)??n?.closest(`#garden .trunk-leaves .ghost[data-doc]`)??null}function l(n,i){t(n,t=>{let a=t.clientX,o=t.clientY,s=!1,l=null,u=e=>{e!==l&&(l?.classList.remove(`taking`),l=e,l?.classList.add(`taking`))},d=e=>{let t=e.clientX-a,r=e.clientY-o;!s&&Math.hypot(t,r)>6&&(s=!0,n.classList.add(`dragging`)),s&&(n.style.transform=`translate(${t}px, ${r}px)`,u(c(e.clientX,e.clientY)))},f=()=>{if(document.removeEventListener(`mousemove`,d),document.removeEventListener(`mouseup`,f),!s){r(),e.openLeaf(i);return}n.classList.remove(`dragging`),n.style.transform=``;let t=l;u(null);let a=t?.dataset.matter,o=t?.dataset.doc;a?e.graftInto(i.docId,a):o&&o!==i.docId&&e.graftOnto(i.docId,o)};document.addEventListener(`mousemove`,d),document.addEventListener(`mouseup`,f)})}async function u(){let i=await sr(),a=i.leaves.filter(e=>!e.workingsOf),{matters:c,pile:u}=i;n.textContent=``;let f=document.createElement(`div`);f.className=`trunk-name`;let p=d().name;f.textContent=p?`the garden · ${p}`:`the garden`,n.appendChild(f);let m=a.filter(e=>!e.matter).sort((e,t)=>t.lastT-e.lastT);if(m.length){let e=document.createElement(`div`);e.className=`trunk-branch`,e.textContent=`standing free`,n.appendChild(e);let t=document.createElement(`div`);t.className=`trunk-leaves`;let r=Date.now();for(let e of m){let n=gl(e,.85,()=>{});n.dataset.doc=e.docId,l(n,e),ml(n,.85,um);let i=e.lastT?r-e.lastT:0,a=Math.min(1,Math.max(0,(i-fm)/(pm-fm))),o=mm-a*(mm-hm);if(n.style.setProperty(`--solidity`,o.toFixed(2)),a>0){let e=n.querySelector(`.thumb`);e&&(e.style.borderColor=gm(a))}n.title=_m(e.lastT),e.docId===W()&&n.classList.add(`here`),t.appendChild(n)}n.appendChild(t)}let h=new Map;for(let e of a){if(!e.matter)continue;let t=h.get(e.matter);t||h.set(e.matter,t=[]),t.push(e)}let g=[...c.values()].map(e=>{let t=(h.get(e.id)??[]).sort((e,t)=>e.firstT-t.firstT);return{m:e,leaves:t,lastT:Math.max(0,...t.map(e=>e.lastT))}}).sort((e,t)=>t.lastT-e.lastT);if(g.length){let i=document.createElement(`div`);i.className=`garden-trees`;for(let n of g){let a=document.createElement(`div`);a.className=`garden-tree`,a.dataset.matter=n.m.id,n.m.id===G()&&a.classList.add(`here`),a.title=`click to see this tree whole`;let o=document.createElement(`div`);if(o.className=`garden-tree-name`,o.textContent=`🌳 ${n.m.name}`,a.appendChild(o),!n.leaves.length){a.classList.add(`empty`);let e=document.createElement(`div`);e.className=`garden-tree-empty`,e.textContent=`empty tree`,a.appendChild(e)}let s=document.createElement(`div`);s.className=`tree-sheaf`;for(let e of n.leaves.slice(0,dm)){let t=gl(e,.8,()=>{});ml(t,.8,lm),t.style.setProperty(`--solidity`,`0.92`),t.tabIndex=-1,s.appendChild(t)}if(n.leaves.length>dm){let e=document.createElement(`span`);e.className=`garden-more`,e.textContent=`+${n.leaves.length-dm}`,s.appendChild(e)}a.appendChild(s),t(a,()=>{r(),e.openTrunk(n.m.id)}),i.appendChild(a)}n.appendChild(i)}let _=[...u.matters.values()];if(u.leaves.length||_.length){let t=document.createElement(`div`);t.className=`trunk-branch pile-heading`,t.textContent=`the pile`,n.appendChild(t);let r=document.createElement(`div`);r.className=`pile-zone`;for(let t of _){let n=u.treeLeaves.filter(e=>e.matter===t.id);r.appendChild(s(`🌳 ${t.name}`,n.length,[{label:`replant`,run:()=>e.replantTree(t.id)},{label:`burn`,burn:!0,run:()=>o(t.name,n.length,()=>e.burnTree(t.id,t.name,n.map(e=>e.docId)))}]))}for(let t of u.leaves){let n=t.matter?c.get(t.matter):void 0,i=t.matter?[{label:`replant into ${(n?.name??`its tree`).slice(0,22)}`,run:()=>e.replantLeaf(t.docId)},{label:`replant standing free`,run:()=>e.replantFree(t.docId,t.matter,n&&n.nameLeaf===t.docId?n.name:null)}]:[{label:`replant`,run:()=>e.replantLeaf(t.docId)}];r.appendChild(s(t.firstLine,0,[...i,{label:`burn`,burn:!0,run:()=>o(t.firstLine,0,()=>e.burnLeaf(t.docId,t.firstLine))}]))}n.appendChild(r)}if(!g.length&&!m.length){let e=document.createElement(`div`);e.className=`trunk-hint`,e.textContent=`nothing has taken root yet`,n.appendChild(e)}n.classList.add(`show`)}return window.addEventListener(`keydown`,t=>{document.body.classList.contains(`revealing`)||document.body.classList.contains(`askingphloem`)||document.body.classList.contains(`feedbacking`)||t.key===`Escape`&&n.classList.contains(`show`)&&(t.preventDefault(),t.stopImmediatePropagation(),r(),e.onRetreat())},!0),{show:()=>u(),visible:()=>n.classList.contains(`show`),hide:r}}function ym(){let e=new Li({state:{init:()=>Tc.empty,apply(e,t){let n=e.getMeta(`flash`);return n?Tc.create(e.doc,[Sc.inline(n.from,n.to,{class:`reach-wash`})]):t.map(e.mapping,e.doc)}},props:{decorations(t){return e.getState(t)}}});return e}function bm(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function xm(e,t){let n=new Set([t,t+`s`,t+`es`]);t.endsWith(`es`)&&t.length>4&&n.add(t.slice(0,-2)),t.endsWith(`s`)&&t.length>3&&n.add(t.slice(0,-1));let r=RegExp(`\\b(?:${[...n].map(bm).join(`|`)})\\b`,`i`),i=null;if(e.state.doc.descendants((e,t)=>{if(i||!e.isText||!e.text)return;let n=r.exec(e.text);n&&(i={from:t+n.index,to:t+n.index+n[0].length})}),!i)return!1;let{from:a,to:o}=i;return e.dispatch(e.state.tr.setSelection(J.create(e.state.doc,a,o)).scrollIntoView().setMeta(`flash`,i)),e.focus(),!0}function Sm(e,t,n=``){let r=t.trim();if(!r)return!1;let i=r.toLowerCase(),a=null;if(e.state.doc.descendants((e,t)=>{if(a||!e.isTextblock)return!a;let n=e.textContent.toLowerCase().indexOf(i);return n!==-1&&(a={node:e,inside:t+1,idx:n,line:e.textContent.substr(n,r.length)}),!1}),!a){let t=[],n=[],i=0;for(let r=0;r<e.state.doc.childCount;r++){let a=e.state.doc.child(r);t.push(a.textContent),n.push(i+1),i+=a.nodeSize}let o=id(r,t);o>=0&&(a={node:e.state.doc.child(o),inside:n[o],idx:0,line:t[o]})}if(!a)return!1;let{node:o,inside:s,idx:c,line:l}=a,u=Cm(l,n)??wm(l),d=s+qu(o,c+u.from),f=s+qu(o,c+u.to);e.dispatch(e.state.tr.setMeta(`flash`,{from:d,to:f}));let p=e.domAtPos(d);return(p.node.nodeType===Node.TEXT_NODE?p.node.parentElement:p.node)?.scrollIntoView({block:`center`,behavior:`smooth`}),!0}function Cm(e,t){let n=e=>e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,` `).replace(/\s+/g,` `).trim(),r=` ${n(t)} `;if(!r.trim())return null;let i=[],a=/\S+/g,o;for(;o=a.exec(e);){let e=n(o[0]);e&&i.push({w:e,from:o.index,to:o.index+o[0].length})}let s=null,c=0;for(let e=0;e<i.length;e++)for(let t=e;t<i.length;t++){let n=i.slice(e,t+1).map(e=>e.w).join(` `);if(!r.includes(` ${n} `))break;t-e+1>c&&(c=t-e+1,s={from:i[e].from,to:i[t].to})}return s&&i.some(e=>e.from>=s.from&&e.to<=s.to&&e.w.length>3)?s:null}function wm(e){let t=/^[\s\S]*?[.?!](?=\s|$)/.exec(e);return{from:0,to:t?t[0].length:Math.min(e.length,60)}}var Tm=new Bi(`find`);function Em(){return new Li({key:Tm,state:{init:()=>({matches:[],current:-1}),apply(e,t){let n=e.getMeta(Tm);if(n)return n;if(!t.matches.length)return t;let r=t.matches.map(t=>({from:e.mapping.map(t.from),to:e.mapping.map(t.to,-1)})).filter(e=>e.to>e.from);return{matches:r,current:Math.min(Math.max(t.current,0),r.length-1)}}},props:{decorations(e){let t=Tm.getState(e);return!t||!t.matches.length?Tc.empty:Tc.create(e.doc,t.matches.map((e,n)=>Sc.inline(e.from,e.to,{class:n===t.current?`find-match find-current`:`find-match`})))}}})}function Dm(e){let n=document.createElement(`div`);n.id=`findbar`;let r=document.createElement(`input`);r.className=`find-input`,r.type=`text`,r.placeholder=`find in this leaf`,r.spellcheck=!1;let i=document.createElement(`span`);i.className=`find-count`;let a=c(`‹`,`previous match`,()=>m(-1)),o=c(`›`,`next match`,()=>m(1));n.append(r,i,a,o),document.body.appendChild(n);let s=!1;function c(e,n,r){let i=document.createElement(`button`);return i.type=`button`,i.className=`find-nav`,i.textContent=e,i.title=n,t(i,e=>{e.stopPropagation(),r()}),i}function l(){return Tm.getState(e.state)??{matches:[],current:-1}}function u(t){let n=t.toLowerCase();if(!n)return[];let r=[];return e.state.doc.descendants((e,t)=>{if(!e.isTextblock)return!0;let i=e.textContent.toLowerCase(),a=0;for(;(a=i.indexOf(n,a))!==-1;){let i=t+1+qu(e,a);r.push({from:i,to:t+1+qu(e,a+n.length)}),a+=n.length}return!1}),r}function d(t,n){e.dispatch(e.state.tr.setMeta(Tm,{matches:t,current:n})),f(t.length,n)}function f(e,t){r.value?e?i.textContent=`${t+1} / ${e}`:i.textContent=`no matches`:i.textContent=``}function p(t){let n=e.domAtPos(t);(n.node.nodeType===Node.TEXT_NODE?n.node.parentElement:n.node)?.scrollIntoView({block:`center`,behavior:`smooth`})}function m(e){let{matches:t,current:n}=l();if(!t.length)return;let r=(n+e+t.length)%t.length;d(t,r),p(t[r].from)}function h(){let t=u(r.value);if(!t.length){d([],-1);return}let n=e.state.selection.from,i=t.findIndex(e=>e.from>=n);i===-1&&(i=0),d(t,i),p(t[i].from)}function g(){let t=s;s=!0,n.classList.add(`show`);let i=e.state.selection;if(!t&&!i.empty){let t=e.state.doc.textBetween(i.from,i.to,` `).trim();t&&!t.includes(`
`)&&(r.value=t)}r.focus(),r.select(),h()}function _(t=!0){if(!s)return;s=!1,n.classList.remove(`show`);let r=l(),i=t&&r.current>=0?r.matches[r.current]?.from:null,a=e.state.tr.setMeta(Tm,{matches:[],current:-1});i!=null&&(a=a.setSelection(J.create(a.doc,i))),e.dispatch(a),f(0,-1),t&&e.focus()}return r.addEventListener(`input`,h),r.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),m(e.shiftKey?-1:1)):e.key===`Escape`?(e.preventDefault(),_(!0)):(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`f`?(e.preventDefault(),r.select()):(e.metaKey||e.ctrlKey)&&e.key.toLowerCase()===`g`&&(e.preventDefault(),m(e.shiftKey?-1:1))}),window.addEventListener(`mousedown`,e=>{s&&(e.target.closest(`#findbar`)||_(!1))},!0),{open:g,close:()=>_(!1),visible:()=>s}}var Om=e=>U(`workings.of.${e}`),km=e=>U(`workings.front.${e}`),Am=e=>U(`split.${e}`),jm=`phloem.app.workings.side`;function Mm(e){let n=W(),r=localStorage.getItem(km(n)),i=!!r,a=r??n,o=()=>localStorage.getItem(jm)===`left`?`left`:`right`,s=document.createElement(`button`);s.type=`button`,s.id=`workings-door`,document.body.appendChild(s),t(s,()=>void S());function c(){return!!localStorage.getItem(Am(a))}function l(){let e=i||c();s.textContent=e?`front page`:`workings`,s.title=c()?`back to the front page, alone — closes the split`:i?`this draft’s front page — opens beside it`:`this page’s private draft space — opens beside it, never shared with this page`,s.classList.add(`show`)}let u=null;async function d(){let e=i?r:n,[t,a]=await Promise.all([sr(),or(e)]),o=t.leaves.find(t=>t.docId===e);u={id:e,matter:o?.matter??null,firstLine:o?.firstLine??``,paras:a.split(`
`)}}i&&(document.body.classList.add(`workings-open`),d());let f=null,p=null,m=null,h=!1;async function g(){if(!f||!m)return;let e=await Vn(m),{doc:t}=cr(e),n=Mf,r=12;for(let t of e)t.type===`leaf-style`&&(t.font&&(n=t.font),t.size&&(r=t.size));f.style.setProperty(`--leaf-font`,Nf(n)),f.style.setProperty(`--leaf-size`,`${r}pt`),f.dataset.font=n;let i=document.createElement(`div`);if(i.className=`paint-inner`,t)try{let e=Me.fromJSON(Kt,t);i.appendChild(vt.fromSchema(Kt).serializeFragment(e.content))}catch{}f.textContent=``,f.appendChild(i),p&&f.appendChild(p)}function _(){let e=document.querySelector(`.page`);if(!e||!f)return;let t=o()===`right`,n=!i,r=+(n===t);f.style.order=String(r),e.style.order=String(1-r),f.classList.toggle(`workings-paper`,n),document.body.classList.toggle(`workings-left`,!t)}function v(){if(!f&&(m=i?r:localStorage.getItem(Om(n)),m)){if(f=document.createElement(`div`),f.className=`paint-page`,t(f,()=>{if(h){D();return}m&&e.swapTo(m,i?u?.matter??null:G())}),p=document.createElement(`button`),p.type=`button`,p.className=`paint-flip`,p.textContent=`switch sides`,p.title=`move the workings to the other side`,p.addEventListener(`mousedown`,e=>e.stopPropagation()),t(p,()=>{localStorage.setItem(jm,o()===`right`?`left`:`right`),_(),window.dispatchEvent(new Event(`resize`))}),f.appendChild(p),i){let t=document.createElement(`div`);t.className=`paint-dropline`;let n=-1,r=e=>{let t=f?.querySelector(`.paint-inner`),n=t?[...t.children]:[],r=f.getBoundingClientRect(),i=n.length,a=n.length?n[n.length-1].getBoundingClientRect().bottom-r.top:72;for(let t=0;t<n.length;t++){let o=n[t].getBoundingClientRect();if(e<o.top+o.height/2){i=t,a=o.top-r.top;break}}return{idx:i,y:a}};f.addEventListener(`dragover`,e=>{if(h||!e.dataTransfer||[...e.dataTransfer.types].includes(`Files`))return;e.preventDefault(),e.dataTransfer.dropEffect=`copy`;let{idx:i,y:a}=r(e.clientY);n=i,t.style.top=`${Math.round(a)}px`,t.parentElement||f?.appendChild(t)}),f.addEventListener(`dragleave`,e=>{let r=e.relatedTarget;(!(r instanceof Node)||!f?.contains(r))&&(t.remove(),n=-1)}),window.addEventListener(`dragend`,()=>{t.remove(),n=-1}),f.addEventListener(`drop`,e=>{if(h||!e.dataTransfer||[...e.dataTransfer.types].includes(`Files`))return;e.preventDefault(),t.remove();let r=n;n=-1,!(r<0)&&i(r)});function i(t,n=e.liveSelection()){n.then(e=>{!e||!e.text.trim()||(T=e.text,E=[e.from,e.to],u?k(t):d().then(()=>k(t)))})}if(`__TAURI_INTERNALS__`in window){let a=null;document.addEventListener(`dragstart`,o=>{if(h||!f)return;let s=o.target,c=document.querySelector(`.page .ProseMirror`);if(!(s instanceof Node)||!c||!c.contains(s))return;o.preventDefault();let l=e.liveSelection(),u=window.getSelection()?.toString()??``;document.body.style.userSelect=`none`,a=document.createElement(`div`),a.className=`carry-ghost`,a.textContent=u.trim().slice(0,60)||`…`,document.body.appendChild(a);let d=e=>{e.preventDefault(),a&&(a.style.left=`${e.clientX+10}px`,a.style.top=`${e.clientY+12}px`);let i=f.getBoundingClientRect();if(e.clientX>=i.left&&e.clientX<=i.right&&e.clientY>=i.top&&e.clientY<=i.bottom){let{idx:i,y:a}=r(e.clientY);n=i,t.style.top=`${Math.round(a)}px`,t.parentElement||f?.appendChild(t)}else t.remove(),n=-1},p=()=>{document.removeEventListener(`mousemove`,d),document.removeEventListener(`mouseup`,p),document.body.style.userSelect=``,a?.remove(),a=null,t.remove();let e=n;n=-1,!(e<0)&&i(e,l)};document.addEventListener(`mousemove`,d),document.addEventListener(`mouseup`,p)})}}document.getElementById(`app`)?.appendChild(f),document.body.classList.add(`split-open`),window.addEventListener(`keydown`,y),_(),g(),window.dispatchEvent(new Event(`resize`))}}function y(e){if(e.key!==`Escape`||e.defaultPrevented||document.body.classList.contains(`revealing`)||document.body.classList.contains(`notereading`)||document.body.classList.contains(`askingphloem`)||document.querySelector(`#pad.show, #gardenchooser.show, #formatpanel.show, #workbench.show, #compare.show, #findbar.show, #crossing.show, .paint-landing, .notereader-veil, .askphloem-veil`))return;let t=document.activeElement;t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement||t instanceof HTMLElement&&t.isContentEditable||(e.preventDefault(),S())}function b(){f?.remove(),f=null,p=null,h=!1,document.body.classList.remove(`split-open`),document.body.classList.remove(`workings-left`),window.removeEventListener(`keydown`,y);let e=document.querySelector(`.page`);e&&(e.style.order=``),window.dispatchEvent(new Event(`resize`))}function x(){i&&(localStorage.removeItem(Am(a)),e.swapTo(a,u?.matter??null))}async function S(){if(c()){if(localStorage.removeItem(Am(a)),i){e.swapTo(a,u?.matter??null);return}b(),l();return}if(!i&&!localStorage.getItem(Om(n))){let e=tn();localStorage.setItem(Om(n),e),localStorage.setItem(km(e),n)}localStorage.setItem(Am(a),`1`),v(),l()}let C=document.createElement(`div`);C.id=`crossing`;let w=!1,T=``,E=[0,0];function D(){w&&(w=!1,C.classList.remove(`show`),C.textContent=``),h&&(h=!1,g()),document.removeEventListener(`keydown`,ee,!0)}function ee(e){e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),D())}async function O(e){try{let t=await ar(W()),[n,r]=E;if(r<=n||r>t.length)return;let i=t.slice(n,r),a=t=>{let n=[],r=-1;for(let a=0;a<=i.length;a++){let o=a<i.length&&i[a]===t;o&&r<0&&(r=a),!o&&r>=0&&(n.push([r+e,a-r]),r=-1)}return n},o=a(`e`),s=a(`p`);return!o.length&&!s.length?void 0:{...o.length?{engineRuns:o}:{},...s.length?{pastedRuns:s}:{}}}catch(e){console.warn(`[phloem] crossing marks could not be read`,e);return}}function k(t){if(!u)return;let n=u,r=n.paras,i=r.join(`
`).length,a,o;t>=r.length?(a=i,o=(i?`
`:``)+T):(a=r.slice(0,t).reduce((e,t)=>e+t.length+1,0),o=T+`
`);let s={docId:W(),matter:G()};O(o.indexOf(T)).then(e=>An({docId:n.id,matter:n.matter},s,a,o,e)).then(()=>(D(),e.flash(`brought to the front page`),d().then(()=>g()))).catch(()=>e.flash(`the crossing could not be written`))}function te(){let e=document.createElement(`div`);e.className=`crossing-sheet`;let n=e=>{let n=document.createElement(`button`);return n.type=`button`,n.className=`crossing-slot`,n.title=`the passage lands here`,n.addEventListener(`mousedown`,e=>e.stopPropagation()),t(n,()=>k(e)),n},r=u?.paras??[],i=!0;for(let t=0;t<r.length;t++){if(!r[t].trim())continue;e.appendChild(n(t));let a=document.createElement(`p`);a.className=`crossing-para`,a.textContent=r[t],e.appendChild(a),i=!1}if(i){let t=document.createElement(`p`);t.className=`crossing-para crossing-empty`,t.textContent=`(the front page is empty)`,e.appendChild(t)}return e.appendChild(n(r.length)),e}function ne(){if(!u)return;document.addEventListener(`keydown`,ee,!0);let t=document.createElement(`div`);if(t.className=`crossing-head`,t.textContent=`bring to the front page — choose where it lands`,f){h=!0,f.textContent=``;let n=document.createElement(`div`);n.className=`paint-landing`,n.append(t,te()),f.appendChild(n),n.scrollIntoView({block:`start`,behavior:`smooth`}),e.flash(`picked up — click where it lands on the front page`);return}w=!0,C.textContent=``,C.classList.add(`show`);let n=document.createElement(`div`);n.className=`crossing-panel`,n.append(t,te()),C.appendChild(n)}return t(C,e=>{e&&e.target?.id===`crossing`&&D()}),document.body.appendChild(C),{dressed:()=>i,leaveToFront:x,bring:(e,t,n)=>{!e.trim()||!i||(T=e,E=[t,n],u?ne():d().then(ne))},refreshDoor:l,mount:async()=>{if(l(),c()){if(!(i?r:localStorage.getItem(Om(n)))){localStorage.removeItem(Am(a));return}v(),l()}}}}function Nm(e){let n=document.createElement(`div`);n.id=`lamp`,document.body.appendChild(n);let r=document.createElement(`div`);r.id=`reveal`,document.body.appendChild(r);let i=document.createElement(`div`);i.id=`greeting`,i.textContent=`When in doubt, press ${Rf()}`;let a=!1;function o(){a||Wf(`manual`)||Vf()>3||e.placeOffers()===null&&(a=!0,document.body.appendChild(i),requestAnimationFrame(()=>i.classList.add(`show`)))}function s(){a&&(a=!1,i.classList.remove(`show`),setTimeout(()=>i.remove(),400))}function c(){Gf(`manual`),s()}window.addEventListener(`keydown`,e=>{e.key!==`Alt`&&(e.key.length===1||e.key===`Enter`||e.key===`Backspace`)&&!e.metaKey&&!e.ctrlKey&&s()});let l=!1;function u(){let t=e.placeOffers();if(t)return t;let n=[];n.push({id:`new-leaf`,long:`create a new leaf`,label:`new leaf`,run:e.newLeaf}),n.push({id:`margin-note`,long:`create a new margin note`,label:`new margin note`,run:e.noteMargin});let r=e.graftLabel();return r&&n.push({label:`graft ${r}`,run:e.graft}),n.push({id:`name-leaf`,label:`name this leaf`,run:e.nameLeaf}),e.hasTree()&&n.push({id:`name-tree`,label:`name this tree`,run:e.nameTree}),n.push({id:`garden`,long:`view this whole garden`,label:`this garden`,run:e.showGarden}),n.push({id:`gardens`,long:`view the other gardens`,label:`other gardens`,run:e.chooseGardens}),e.hasNotes()&&n.push({id:`notes`,long:`view all notes`,label:`notes`,run:e.showNotes}),n.push({id:`report`,long:`view the report — how this leaf came to be`,label:`report`,run:e.showReport}),n.push({id:`save`,long:`save / share this leaf`,label:`save / share`,run:e.saveLeaf}),n.push({id:`save-plain`,long:`save the words alone — plain text, no record`,label:`words alone`,run:e.savePlain}),n.push({id:`uproot`,label:`uproot this leaf`,run:e.uprootLeaf}),n}let d=!1;function f(){r.textContent=``;let n=document.createElement(`div`);n.className=`reveal-doors`;let i=document.createElement(`button`);i.type=`button`,i.className=`reveal-help`,i.textContent=`get help`,i.title=`ask Phloem a question about the app`,t(i,()=>{g(),e.askPhloem()}),n.appendChild(i);let a=document.createElement(`button`);if(a.type=`button`,a.className=`reveal-feedback`,a.textContent=`send feedback`,a.title=`a message straight to the person who builds Phloem`,t(a,()=>{g(),e.sendFeedback()}),n.appendChild(a),r.appendChild(n),e.placeOffers()===null&&!Wf(`paper-menu`)){let e=document.createElement(`div`);e.className=`reveal-hint`,e.textContent=`right-click the page to format it`,r.appendChild(e)}for(let e of u()){let n=document.createElement(`button`);n.type=`button`,n.className=`chip show reveal-chip`,n.textContent=e.long&&e.id&&!Wf(e.id)?e.long:e.label,t(n,()=>{e.id&&Gf(e.id),g(),e.run()}),r.appendChild(n)}let o=document.createElement(`div`);o.className=`reveal-info`,r.appendChild(o),e.info().then(e=>{if(!l||!o.isConnected)return;o.textContent=``;for(let t of e.top){let e=document.createElement(`div`);e.className=`reveal-info-line`,e.textContent=t,o.appendChild(e)}if(e.leaves){let n=document.createElement(`p`);n.className=`reveal-disclosure`,n.textContent=e.leaves,n.hidden=!0;let r=document.createElement(`button`);r.type=`button`,r.className=`reveal-more reveal-privacy`,r.textContent=`Privacy information…`,t(r,()=>{n.hidden=!n.hidden,r.textContent=n.hidden?`Privacy information…`:`Hide…`}),o.appendChild(r),o.appendChild(n)}if(!e.more.length)return;let n=document.createElement(`div`);n.className=`reveal-more-body`,n.hidden=!0;for(let t of e.more){let e=document.createElement(`div`);e.className=`reveal-info-line`,e.textContent=t,n.appendChild(e)}let r=document.createElement(`button`);r.type=`button`,r.className=`reveal-more`,r.textContent=`More…`,t(r,()=>{n.hidden=!n.hidden,r.textContent=n.hidden?`More…`:`Less…`}),o.appendChild(r),o.appendChild(n)})}function p(){l||(c(),l=!0,d=!1,r.classList.remove(`at-pointer`),r.style.left=``,r.style.top=``,document.body.classList.add(`revealing`),f())}function m(e,t){c(),l=!0,d=!0,document.body.classList.add(`revealing`),r.classList.add(`at-pointer`),f();let n=r.getBoundingClientRect(),i=Math.min(e,window.innerWidth-n.width-8),a=Math.min(t,window.innerHeight-n.height-8);r.style.left=`${Math.max(8,i)}px`,r.style.top=`${Math.max(8,a)}px`}function h(){if(!d)return;let e=r.getBoundingClientRect(),t=window.innerHeight-e.height-8,n=Math.max(8,Math.min(parseFloat(r.style.top)||8,t));r.style.top=`${n}px`}new ResizeObserver(h).observe(r),window.addEventListener(`resize`,h);function g(){l&&(l=!1,d=!1,document.body.classList.remove(`revealing`),r.classList.remove(`at-pointer`),r.style.left=``,r.style.top=``,r.textContent=``)}return window.addEventListener(`keydown`,e=>{e.key===`Alt`&&!d&&p()}),window.addEventListener(`keyup`,e=>{e.key===`Alt`&&!d&&g()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&d&&(e.preventDefault(),e.stopImmediatePropagation(),g())},!0),window.addEventListener(`blur`,g),window.addEventListener(`contextmenu`,e=>{e.target.closest(`.ProseMirror`)||(e.preventDefault(),d&&g(),m(e.clientX,e.clientY))}),window.addEventListener(`mousedown`,e=>{!d||e.button!==0||e.target.closest(`#reveal`)||g()}),{greet:o}}var Pm={$schema:`../node_modules/@tauri-apps/cli/config.schema.json`,productName:`Phloem`,version:`0.1.0`,identifier:`nz.phloem.desktop`,build:{frontendDist:`../dist`,devUrl:`http://localhost:5199`,beforeDevCommand:``,beforeBuildCommand:`npm run build`},app:{windows:[{title:`Phloem`,width:1200,height:800,resizable:!0,fullscreen:!1,dragDropEnabled:!0,backgroundColor:`#eceff1`}],security:{csp:null}},bundle:{active:!0,targets:`all`,icon:[`icons/32x32.png`,`icons/128x128.png`,`icons/128x128@2x.png`,`icons/icon.icns`,`icons/icon.ico`],android:{debugApplicationIdSuffix:`.debug`}}},Fm={pdf:`📕`,doc:`📘`,docx:`📘`,xls:`📗`,xlsx:`📗`,ppt:`📙`,pptx:`📙`,txt:`📄`,md:`📄`,csv:`📊`,jpg:`🖼`,jpeg:`🖼`,png:`🖼`,heic:`🖼`,gif:`🖼`,mp4:`🎞`,mov:`🎞`,mp3:`🎵`,zip:`🗜`};function Im(e,n,r,i=[]){if(e.querySelector(`.leaves`)?.remove(),n.size===0)return;let a=document.createElement(`div`);a.className=`leaves`;for(let e of n.values()){let n=document.createElement(`button`);n.type=`button`,n.className=`leaf`,n.title=`${e.path}\n${(e.size/1024).toFixed(0)} KB · ${e.mtime?new Date(e.mtime).toLocaleDateString():``}`,n.textContent=`${Fm[e.kind]??`📎`} ${e.name}`,n.dataset.path=e.path;let o=`${e.name}\n${e.text}`.toLowerCase();i.some(e=>o.includes(e))&&n.classList.add(`leaf-wash`),t(n,()=>{if(n.classList.contains(`leaf-withered`)){r(`this file has moved or been removed — the tag is a record, not a door`);return}Vp(e.path,r)}),a.appendChild(n)}e.appendChild(a)}var Lm=`# The Phloem primer — what Ask Phloem answers from

RULES FOR THIS FILE. This is the ground truth for ⌥⇧? (Ask Phloem): the
answering model may say only what this file supports, quoting its
sentences, and must demur past its edge. It ships inside the app bundle,
so it always describes the build it travels with — and whoever changes
writer-facing behaviour updates this file IN THE SAME COMMIT, the
disclosure line's own rule. A LABEL, A KEY, OR A PLACE NAMED HERE IS
BEHAVIOUR (learned 2026-09-11, when a door's label changed and this
file lagged a commit behind the build). Writer-facing content only: no
dev hatches, no workbench, no console.

## What Phloem is

Phloem is a writing surface — a blank, endless A4 page — where the
document's history is the document. Everything that happens on the page
is an event in an append-only log: nothing is ever lost, and undo is
part of the history rather than an eraser. Because the document knows
how it came to be, it can produce a sealed, tamper-evident report of its
own making. Phloem records; it never scores, grades, or judges — the
motto is "witness, not police."

Words: a **leaf** is one page. A **tree** (or matter) is a group of
leaves. A **garden** is a whole world — its own store of leaves, its
own margin, its own ghosts; the app holds many gardens, one open at a
time.

## The manual is a key

**Right-click on the desk beside the page**, or hold **⌥**, and the
margins light up with every offer available where you stand — that is
the entire in-app manual. A right-click pins it open until you choose
or click away; ⌥ shows it for as long as you hold. There are no
toolbars and no buttons: capability arrives through the manual, the
cursor, and the selection.

What the manual offers, by name (each offer reads as a longer phrase
until your hand has used it a few times, then shortens to its label):
- *new leaf* — plant a fresh leaf (into the current tree if you're in
  one); from the garden survey, *new leaf, standing free*
- *new margin note* — write your own margin note against this line
- *graft onto …* / *graft into …* — join this leaf and the leaf you
  came from onto one tree (offered while the way-back door stands)
- *this garden* — survey the garden you stand in (*the garden* from
  the survey's own manual)
- *other gardens* — the chooser: other worlds (*the gardens* from the
  survey)
- *report* — how this page came to be, shown to a reader
- *notes* — the notepad: every note the margin has offered here
- *name this leaf*, *name this tree*
- *save / share* (the sealed leaf file), and *words alone* — save the
  words alone (a plain text file of this leaf — the words and only the
  words, no record attached)
- last, deliberately — *uproot this leaf*

At the very top of the manual stand two doors. **get help** (left) is
the same door as ⌥⇧?: ask Phloem a question about the app. **send
feedback** (right) is a message that goes straight to the person who
builds Phloem — add your email so a reply can find you.

Right-clicking the **page itself** opens the format panel instead (see
Shaping the page).

An aside for keyboard hands: a few of these verbs can also be reached
by typing a word alone on a line, then Tab or a click on the chip that
appears — \`new\`, \`note\`, \`graft\`, \`garden\`, \`gardens\`, \`report\`,
\`notes\`. They do exactly what the manual's offers do; most writers
never need them.

**Keys**: ⌥ (hold) reveals; ⇥ accepts the standing chip; ⌘[ walks back
through the whence door; ⌘S exports the leaf as a carryable sealed file;
⌘Z / ⌘⇧Z undo and redo; Esc retreats (overlay → page, trunk → page,
garden → page — and with the workings open beside the page, Esc too
returns to the front page alone). ⌘P prints — the desktop app hands the page to your
browser to print. **⌥⇧?** (or *get help* at the top of the manual) opens Ask Phloem:
type a question about Phloem itself and get an answer drawn from this
manual.

## The margins have a grammar

**Left is deliberate** — things addressed to you: the margin's notes,
your own notes, the way-back door. **Right is associative** — things
volunteered: the ghosts and the slip. Solidity means relevance;
anything that moves reports true state, and nothing moves to be pretty.

**Ghosts**: other leaves from this garden drift into the right margin
when your writing summons them — sized and solidified by how much they
share with the page. Click a ghost to walk into that leaf. Hover and
rest, and the librarian's slip shows the words that summoned it; click a
word in the slip to see the two leaves side by side without walking.
Ghosts reach only within the garden you stand in — what is relevant in
one world may not be in another — and never on a workings page, which
is private in both directions: nothing drifts in, and it never drifts
out.

**The comet trail** is the one moving mark: it traces a real request in
flight to the margin's engine, and nothing else — motion means the
margin is actually reaching.

## The margin (the AI) — speaks only when asked

The margin answers questions of fact and shows where the answer came
from; it does not read your writing, comment on your style, or speak
unbidden. Three ways to ask:

1. **Select a passage** — the bar offers *ask the margin about this*.
   The selection is exactly what is sent, nothing around it.
2. **Ask in a note** — write a margin note that is a question and use
   *ask the margin* (or, on a standing note, *ask the margin to answer
   this*). The question is sent whole; the writing it sits beside is not.
3. **⌥⇧? — Ask Phloem** (also *get help* at the top of the manual) —
   questions about the app itself, answered from this manual. These questions never enter your document's record.

An answer arrives as a note beside the line, quoting its **sources** —
real web pages, linked. An answer that cannot show where it looked is
never shown at all. A question the margin doesn't answer (style, craft,
"is this clear?") gets told plainly what the margin is for — a direct
gesture is never answered by silence.

**What leaves your machine**: only what you ask — a selected passage, a
question you wrote, or an Ask Phloem question — and nothing else: not
your other writing, not your notes, not the log. Nothing you write
leaves unless you ask a question about it or export the work yourself.
The ⌥ colophon shows the margin's state (awake · resting · asleep) and
holds the full privacy note behind *Privacy information…*. Under *More…*
it counts the garden's leaves and sealed events, gives the size of the
whole store on disk (every garden together), and, while you stand on a
leaf, that leaf's own sealed events and rough size.

**What to do with a note**: click = just reading, no side effects.
Drag it onto the page = claim it — its words land at the marker under
your hand, recorded as the engine's words. Drag it away = withdrawn
(recoverable from the notepad — the bank keeps every note ever shown
here, and lends them back by drag). Rewrite the line it sits beside =
the note withdraws; your own words have said their piece. A note you
haven't dealt with re-stands next time you open the leaf.

## The record, and the report

Every stretch of text carries its true origin: **typed**, **pasted**
(arrived whole in one gesture — a paste, or a drag in from outside the
app; the page can't see where it came from), **unkeyed** (dictated),
or **claimed** (the engine's words, taken by your own drag). Origins
survive rearrangement: text moved or copied within the page — by drag,
or by cut or copy and paste — or brought across from the workings,
keeps the origin it already carried, however many times it travels.
Only words the page never held arrive as pasted. The report also shows one marked inference — **derived**,
text of your own whose kinship to a shown note the report can measure —
always displayed as an inference with its evidence, never folded into
the facts. The ledger tells the fate of every note the margin offered,
including the one no other tool can show: help offered and declined.

The log is sealed — every event chained to the one before, so the
report can vouch that the record is intact, and says so plainly in red
if it is not. Type \`report\` to read it; export it as one HTML file that
carries its own sealed record and verifies without Phloem. Nothing in it
is a score, a verdict, or a percentage of suspicion — judgement belongs
to the human reader.

## The workings — your private drafts

A faint **workings** tag stands at the top right of the desk: behind
every front page sits a private drafts page, with its own sealed log.
Click the tag and the drafts open BESIDE your page — two pages on one
desk, the workings on its own yellow paper (on the right at first;
hover over the other page and *switch sides* appears). Each page
scrolls on its own, so a long draft can be scrolled to its depths while
the front page stays at the paragraph you are aiming for. While you write
on the workings, the ⌥ manual and the format menu wear the same yellow
— they act on the page the pen is on. One pen: you
write on one page at a time, and the other stands as a true picture of
itself — click it to write there instead. While both pages stand, the
tag at the top right reads **front page**: click it to come back to
the front page alone, whichever page you were writing on.

Wherever a leaf's icon stands — the garden's survey, the tree, a
ghost — a leaf whose workings holds drafts wears a small yellow dot at
the icon's top right. The workings itself never stands as an icon and
never drifts in as a ghost: the front page is its only door. For the
same reason a workings page has no way-back door; the *front page* tag,
Esc and ⌘[ all return you to the front page alone. Uprooting a leaf
takes its workings to the pile with it, and burning the leaf burns the
workings too.

Plan, sketch, and draft there freely — the front page and its report
know nothing of the workings unless you bring something across
(*bring to the front page*, on the selection bar; the front page then
shows the slots where the passage can land — or simply drag the
selected passage across the divider and drop it where it belongs; the
draft keeps its own copy either way). When you do, provenance
travels with the words: the engine's words stay marked as the engine's.
The workings is yours; if you ever choose to show your process, your
roughest drafts become your strongest evidence — but only ever by your
own choice.

## Shaping the page

Select text for **B**, *I*, \`code\`, strike and the **Format** door;
right-clicking the paper opens the same format panel. \`code\` is the
third inline mark: monospace, meaning exactly what you type or press — a
control's label, a typed word, a key (⌘E, beside ⌘B and ⌘I). Strike
(⌘⇧X) is the fourth: struck-through words stay on the page and in the
record, and the report shows them struck. The panel's *struck text*
row can hide them on this leaf to read the draft clean — a reading
convenience for this page only; nothing is removed. With words selected it counts
them (words and characters) under its title. It holds body, heading or
aside (a note or a warning set apart from the flow, in a light wash), alignment,
lists (bullet · dash · numbered) and indent, line spacing (single ·
double), insert date & time, insert a horizontal line, insert a table,
and insert a picture. A table is text in rows and columns and nothing more — no
formulas. *Insert* starts a row of two cells at the caret; Tab moves to
the next cell and adds one at the row's end, Shift-Tab goes back, Enter
adds a row below, Enter on an empty row ends the table, and Backspace
at a row's start turns it back into an ordinary line. Typed words stay
plain prose inside a cell. A picture is copied into the leaf's record
(shrunk to at most 1600 pixels on its long side) and goes in where the
caret is: on an empty line it stands alone, and among words it sits in
the line. It arrives by the panel's *insert*, by pasting an image, or by
dropping an image file on the page, where it lands at the spot it was
dropped — on the desktop a dropped picture first asks whether to put it
on the page or attach it as a tag. A picture can be dragged to a new
place — press on it, move, and a caret shows where it will land — and it
is copied along with a passage that holds it. A selected passage moves
the same way: press inside the selection, move, release (hold ⌥ at the
release to copy it instead). If you let go early, a note beside the
pointer says *now click where you want it to go*; Esc cancels. It cannot go
inside a table row. Click a picture and open the panel to choose its
size (tiny · small · medium · full) and what the words do: *alignment*
L · C · R keeps the words clear, above and below the picture; *text*
either sets it *in line* like a large letter or flows the words round
it on the left or right. While a picture is
selected the panel shows the picture's rows in place of the pen's and
the line's (press a lit *text* choice again to keep the words clear).
A picture never counts as a character, and a line that holds only a
picture takes no number in a numbered list and does not restart it. Backspace removes a selected picture. A leaf's typeface and size (*leaf font*) are
dress, not record — they live apart from the log. Emphasis, headings,
lists, tables, pictures and alignment all replay in the report.

## Gardens, files, and leaving

\`gardens\` opens the chooser; each garden is sealed off from the others.
A whole garden exports as one sealed file and can be carried elsewhere.
A leaf or tree can be uprooted to the pile at the garden's edge and
replanted freely. If two leaves have the same name — a leaf exported and
dropped back in, say — the one that arrived later wears a number
(*Name 2*) wherever leaves are listed. The number is a label only: it is
never written into the leaf, its report or its export. A piled leaf that belonged to a tree has two ways
home: *replant into* its tree, or *replant standing free*, which ends
its membership. A tree whose leaves have all left stays in the garden
marked *empty tree* until a leaf is dragged into it or it is uprooted.
In the garden, drag a free leaf onto a tree to graft it there, or onto
another free leaf to start a tree with both. Only the pile can be
burned, behind a typed-name confirmation — records are never editable,
but they are yours to destroy entirely.

The chooser also offers **the show garden**: a small world written for
real by the person who built Phloem, every report in it genuine — plant
it, walk its leaves in order (each one shows one thing and says how to
do it), and burn it from the chooser when you are done. It is a separate
garden; nothing in it touches your own.

On the desktop: drop a folder onto the app to adopt it as a tree (its
files become leaves, watched while the app is awake); drop a file onto a
leaf to attach it as a paper tag (click the tag to open it natively);
drop a \`.phloem.json\` to import that leaf. The browser build carries a
little less — no live folders, and exports arrive as downloads.

## Past this manual's edge

If the answer isn't in this file, say so — "the manual doesn't cover
that" — and offer the way to a person: *write, and it reaches the
person who built it.* Never guess, never invent behaviour, and never
describe features this file does not describe.
`,Rm=`claude-opus-4-8`,zm=1024,Bm={pauseMs:3e3,minNew:400,minClaim:40,echoRun:5,ambientCap:0,askedCap:100,tokenCap:4e5,searchCap:12,searchMaxUses:2},Vm=[`note`,`quoted`],$={...Bm,model:Rm,answerShape:`quoted`},Hm=`phloem.engine.key`,Um=`phloem.engine.meter`,Wm=`phloem.engine.tuning`,Gm=new Set([`ambientCap`,`askedCap`,`tokenCap`,`searchCap`]),Km=(e,t)=>typeof t==`number`&&Number.isFinite(t)&&(Gm.has(e)?t>=0:t>0),qm=2,Jm=[{at:1,keys:[`ambientCap`],what:`the ambient margin is at rest — ambientCap 0, ruled 2026-08-09`},{at:2,keys:[`answerShape`],what:`the margin quotes its sources — answerShape "quoted", ruled 2026-08-10`}],Ym=(e,t)=>Jm.find(n=>n.at>t&&n.keys.includes(e));function Xm(e,t,n,r){console.info(`[phloem] engine: stored ${e}=${JSON.stringify(t)} ignored — ${r.what}. ${e} is ${JSON.stringify(n)}; phloem.engine.set({ ${e}: … }) sets it again deliberately.`)}function Zm(){try{let e=JSON.parse(localStorage.getItem(Wm)??`{}`),t=typeof e._v==`number`&&Number.isFinite(e._v)?e._v:0;for(let n of Object.keys(Bm)){if(!Km(n,e[n]))continue;let r=Ym(n,t);r?Xm(n,e[n],$[n],r):$[n]=e[n]}if(typeof e.model==`string`&&Qm.includes(e.model)){let n=Ym(`model`,t);n?Xm(`model`,e.model,$.model,n):$.model=e.model}if(Vm.includes(e.answerShape)){let n=Ym(`answerShape`,t);n?Xm(`answerShape`,e.answerShape,$.answerShape,n):$.answerShape=e.answerShape}}catch{}}var Qm=[`claude-opus-4-8`,`claude-sonnet-5`,`claude-haiku-4-5`],$m=()=>({calls:0,spoke:0,notes:0,offered:0,input:0,output:0,cacheRead:0,cacheWrite:0,searches:0}),eh={"claude-opus-4-8":{in:5,out:25},"claude-sonnet-5":{in:3,out:15},"claude-haiku-4-5":{in:1,out:5}};function th(e,t=$.model){let n=eh[t]??eh[Rm];return(e.input*n.in+e.cacheRead*n.in*.1+e.cacheWrite*n.in*2+e.output*n.out)/1e6}var nh=()=>en(),rh=`phloem.app.engine.ledger`;function ih(){try{let e=JSON.parse(localStorage.getItem(rh)??`[]`);return Array.isArray(e)?e:[]}catch{return[]}}function ah(e){if(e.calls)try{let t=ih().filter(t=>t.day!==e.day);t.push(e),localStorage.setItem(rh,JSON.stringify(t.slice(-90)))}catch{}}function oh(){return{today:uh(),days:ih()}}function sh(){try{localStorage.removeItem(rh)}catch{}}function ch(e){for(let t of Object.keys(Bm))Km(t,e[t])&&($[t]=e[t]);e.answerShape&&Vm.includes(e.answerShape)&&($.answerShape=e.answerShape),typeof e.model==`string`&&(Qm.includes(e.model)?e.model!==$.model&&($.model=e.model,Ch=null):console.warn(`[phloem] engine: unknown model ${e.model} — one of ${Qm.join(`, `)}`));try{localStorage.setItem(Wm,JSON.stringify({...$,_v:qm}))}catch{}return{...$}}function lh(){Object.assign($,Bm,{model:Rm,answerShape:`quoted`}),Ch=null;try{localStorage.removeItem(Wm)}catch{}return{...$}}function uh(){let e=()=>({day:nh(),calls:0,input:0,output:0,ambient:$m(),asked:$m()});try{let t=JSON.parse(localStorage.getItem(Um)??`null`);if(t&&t.day===nh())return t.ambient??=$m(),t.asked??=$m(),t;t&&t.day&&ah({...e(),...t})}catch{}return e()}function dh(e){try{localStorage.setItem(Um,JSON.stringify(e))}catch{}}function fh(e,t){let n=uh(),r=n[e],i=t.cache_read_input_tokens??0,a=t.cache_creation_input_tokens??0;r.calls+=1,r.input+=t.input_tokens,r.output+=t.output_tokens,r.cacheRead+=i,r.cacheWrite+=a,r.searches=(r.searches??0)+(t.server_tool_use?.web_search_requests??0),n.calls+=1,n.input+=t.input_tokens+i+a,n.output+=t.output_tokens,dh(n),Mh()}function ph(e,t){if(t<=0)return;let n=uh();n[e].notes+=t,n[e].spoke+=1,dh(n)}function mh(e,t){if(t<=0)return;let n=uh();n[e].offered+=t,dh(n)}function hh(e,t){return e.input+e.output>=$.tokenCap?!1:t===`ambient`?e.ambient.calls<$.ambientCap:t===`asked`?e.asked.calls<$.askedCap:e.ambient.calls<$.ambientCap||e.asked.calls<$.askedCap}var gh=null,_h=null,vh=null,yh=`phloem-proxy-no-key`;function bh(e){try{return new URL(e,window.location.origin).toString()}catch{return e}}async function xh(){let e=localStorage.getItem(Hm);if(e){gh=e,_h=`set`;return}if(kp()){try{let{invoke:e}=await Q(async()=>{let{invoke:e}=await import(`./core-D8n9Wfto.js`);return{invoke:e}},[]),t=(await e(`read_api_key`))?.trim();t&&(gh=t,_h=`file`)}catch(e){console.warn(`[phloem] engine: could not read ~/.phloem/api-key`,e)}if(gh)return}vh=bh(`/engine`),gh=yh,_h=`proxy`}function Sh(e){return[{type:`text`,text:e,cache_control:{type:`ephemeral`,ttl:`1h`}}]}var Ch=null;async function wh(){if(!gh)return null;if(!Ch)try{let{default:e}=await Q(async()=>{let{default:e}=await import(`./sdk-DRMZQJE7.js`);return{default:e}},__vite__mapDeps([7,8]));Ch=new e({apiKey:gh,...vh?{baseURL:vh}:{},dangerouslyAllowBrowser:!0})}catch{return null}return Ch}var Th=!1;window.addEventListener(`offline`,()=>{Th=!0}),window.addEventListener(`online`,()=>{Th=!1});var Eh=!1,Dh=!1,Oh=0,kh=2;function Ah(e){let t=e;if(!t||t.status!==404)return;let n=String(t.message??``);/model/i.test(n)&&(Dh=!0,console.error(`[phloem] engine: the model "${$.model}" was NOT FOUND (404). If it has been retired, the margin stays asleep until MODEL is changed in engine.ts (and PHLOEM_ENGINE_MODEL on the hosted box). Upstream said: ${n.slice(0,160)}`))}function jh(e){Ah(e);let t=e?.status;(t===401||t===403)&&(Eh=!0),Oh+=1}function Mh(){Oh=0}function Nh(){return gh!==null&&!Eh&&!Th&&hh(uh())}function Ph(e){return gh!==null&&!Eh&&!Th&&hh(uh(),e)}function Fh(){if(gh===null)return`margin - asleep, no key`;if(Eh)return`margin - asleep, key refused`;if(Dh)return`margin - asleep, model retired`;if(Th)return`margin - asleep, offline`;let e=uh();return hh(e)?Yh(e)?$.ambientCap===0?`margin - awake — answers when asked`:hh(e,`ambient`)?Oh>=kh?`margin - not answering`:`margin - awake`:`margin - resting, but it will answer`:`margin - resting, search budget spent for today`:`margin - resting, capped for today`}function Ih(){let e=$.ambientCap===0;return _h===`proxy`?e?`The margin speaks only when you ask it to, so nothing you write leaves your browser unless you ask. When you do, what you asked about is sent to Anthropic to be read, by way of Phloem’s own server — only so it can answer you, never for anything else, and under commercial terms that do not permit your writing to be used for training. Phloem’s server passes your words on and keeps no copy of them. Ask it about a passage and it sends that passage and nothing else. Ask it to answer a note you wrote in the margin and it sends that note and nothing else — not even the writing it stands beside. To answer you it always searches the web: it turns your question into search terms of its own and reads public web pages, then shows you underneath its answer which pages it read. Those search terms are the margin’s own words, not your page. It answers only from what it finds there — if it cannot find a source, it says nothing rather than answering from its own memory. Ask Phloem itself a question about the app (the ⌥⇧? panel) and the question — and nothing else — travels the same way, but it is answered from Phloem’s own built-in manual, with no web search, and it never enters your document’s record. Nothing else ever leaves your browser — not the rest of this leaf, not your other leaves, not your other notes, not the log.`:`When the margin is awake it sends the part of the page you are working on to Anthropic to be read, by way of Phloem’s own server — only so it can answer you, never for anything else, and under commercial terms that do not permit your writing to be used for training. Phloem’s server passes your words on and keeps no copy of them. Ask it about a passage and it sends that passage and nothing else. Ask it to answer a note you wrote in the margin and it sends that note and nothing else — not even the writing it stands beside. To answer you it always searches the web: it turns your question into search terms of its own and reads public web pages, then shows you underneath its answer which pages it read. Those search terms are the margin’s own words, not your page. It answers only from what it finds there — if it cannot find a source, it says nothing rather than answering from its own memory. Ask Phloem itself a question about the app (the ⌥⇧? panel) and the question — and nothing else — travels the same way, but it is answered from Phloem’s own built-in manual, with no web search, and it never enters your document’s record. Nothing bigger ever leaves your browser, whether the margin speaks on its own or because you asked — not your other leaves, not your other notes, not the log.`:e?`The margin speaks only when you ask it to, so nothing you write leaves this machine unless you ask. When you do, what you asked about is sent to Anthropic to be read — only so it can answer you, never for anything else, and under commercial terms that do not permit your writing to be used for training. Ask it about a passage and it sends that passage and nothing else. Ask it to answer a note you wrote in the margin and it sends that note and nothing else — not even the writing it stands beside. To answer you it always searches the web: it turns your question into search terms of its own and reads public web pages, then shows you underneath its answer which pages it read. Those search terms are the margin’s own words, not your page. It answers only from what it finds there — if it cannot find a source, it says nothing rather than answering from its own memory. Ask Phloem itself a question about the app (the ⌥⇧? panel) and the question — and nothing else — travels the same way, but it is answered from Phloem’s own built-in manual, with no web search, and it never enters your document’s record. Nothing else ever leaves this machine — not the rest of this leaf, not your other leaves, not your other notes, not the log.`:`When the margin is awake it sends the part of the page you are working on to Anthropic to be read — only so it can answer you, never for anything else, and under commercial terms that do not permit your writing to be used for training. Ask it about a passage and it sends that passage and nothing else. Ask it to answer a note you wrote in the margin and it sends that note and nothing else — not even the writing it stands beside. To answer you it always searches the web: it turns your question into search terms of its own and reads public web pages, then shows you underneath its answer which pages it read. Those search terms are the margin’s own words, not your page. It answers only from what it finds there — if it cannot find a source, it says nothing rather than answering from its own memory. Ask Phloem itself a question about the app (the ⌥⇧? panel) and the question — and nothing else — travels the same way, but it is answered from Phloem’s own built-in manual, with no web search, and it never enters your document’s record. Nothing bigger ever leaves this machine, whether the margin speaks on its own or because you asked — not your other leaves, not your other notes, not the log.`}var Lh=0;function Rh(){return Lh>0}function zh(e,t){return t&&t!==`end_turn`?`truncated (stop_reason ${t})`:!e||e.trim().length<8?`shorter than 8 characters`:e.length>500?`longer than 500 characters (${e.length})`:/[\t\x00-\x08\x0b\x0c\x0e-\x1f\\]/.test(e)?`holds a control character or backslash`:/[.!?…]["'”’)\]]*$/.test(e.trim())?e.trim().split(/\s+/).length<4?`fewer than four words`:null:`does not end in terminal punctuation (ends "${e.trim().slice(-24)}")`}function Bh(e,t){if(t&&t!==`end_turn`||!e||e.trim().length<8||e.length>500||/[\t\x00-\x08\x0b\x0c\x0e-\x1f\\]/.test(e))return!1;let n=e.trim();return!(!/[.!?…]["'”’)\]]*$/.test(n)||n.split(/\s+/).length<4)}async function Vh(e,t=[],n){let r=await wh();if(!r)return null;if(!hh(uh(),`ambient`))return console.warn(`[phloem] engine: ambient budget spent — the margin rests`),null;let i=e.split(`
`),a=Math.max(0,n?.from??0),o=Math.min(i.length-1,n?.to??i.length-1),s=i.map((e,t)=>`${t}: ${e}`).filter((e,t)=>t>=a&&t<=o&&i[t].trim()).join(`
`);if(!s)return null;let c=n?`The writer is working HERE. These are the paragraphs around their hand, numbered as they stand in the page (earlier and later paragraphs exist and are not shown; do not treat the first line below as the beginning of the piece):

`:`The page, one paragraph per line, numbered:

`;Lh+=1;try{let e=await r.messages.create({model:$.model,max_tokens:zm,system:Sh(`You are the margin of Phloem, a writing surface. Beside the lines of a writer at work you may offer AT MOST ONE brief thought they could ADOPT INTO THEIR PAGE AS IS. The bar is high and has ONE clause: speak only when the page asserts something DEMONSTRABLY FALSE and you are CERTAIN it is false — certain enough to interrupt a colleague mid-sentence over it. A connection you could draw, a point the writing seems to be reaching for, or merely relevant additional information NEVER clears the bar; only a falsehood does. AND CERTAINTY IS THE FLOOR: your knowledge is least reliable on small facts — who wrote, founded or named something, attributions, local institutions, minor biography. If you cannot be certain a claim is false, you have nothing to say: a wrong correction costs more trust than ten silences. NEVER contradict one of your own earlier notes without saying plainly that the earlier note was wrong. ZERO notes is the usual and correct answer. YOU HAVE NO CLOCK AND NO CALENDAR: you do not know today's date or the time, so NEVER judge whether a date or time on the page is correct, current, stale or overdue, and never do arithmetic between two of them. NEVER RELATE TWO THINGS THE PAGE DOES NOT ITSELF RELATE — two dates, two figures, two names sitting near each other are not connected by proximity, and a connection you supply is not a fact you found. Manufacturing one in order to have something to say is the worst thing you can do here; silence is always available and usually right. THE TEST OF A NOTE IS THAT IT COULD STAND IN THE FINISHED DOCUMENT AS THE WRITER'S OWN SENTENCE. If it tells them to check, consider, confirm or look at something, it is an instruction and not a note, however sound — do not send it. NEVER PROOFREAD: no note whose substance is a spelling, typing, grammar or punctuation slip the writer's own spellchecker would underline. Their machine already offers that, free and instantly, and the writer will proofread when they are ready — while your one note per pause is spent, and the factual error further up goes unsaid. A misspelled NAME or term is a different matter and is fair game: no dictionary can settle whether a person, place or case is the one the writer means. WHEN YOU CORRECT A FACT, set corrects:true and give the correction WITH ITS SUBSTANCE — state what is actually so, and the thing that makes it so (the right figure, the right name, the distinction being missed). corrects:true has ONE meaning: the anchored text ASSERTS SOMETHING FALSE, and the page would have to change to become true. Text that CONTRADICTS ITSELF — the same name, figure or fact rendered two incompatible ways — asserts something false, and pointing at the contradiction IS correcting: declare it. A claim that is true as written — however much more there is to say about it, a sharper date, a nearby fact, what happened next — is NEVER a correction: that is added information, and merely relevant additional information does not clear the bar. Do not merely echo the writer's sentence back with one word swapped: a bare swap tells them they are wrong without telling them anything, and it is the least useful form of the most useful note. DECLARE EVERY NOTE'S GROUNDS: grounds:"page" when its substance comes from the writer's own page (connecting, reorganising, or correcting it from itself); grounds:"margin" when it brings any fact the page does not contain, from your own knowledge. When in doubt, "margin" — the writer uses this to know what to check. Write the note as finished prose in a plain, human voice, NOT a question or instruction — it must read naturally dropped straight onto the page. NEVER address the writer (no "you"), and NEVER comment on the writing itself — its structure, ordering, pacing, clarity, style, what reads as confusing, or the reader's experience: those are editorial notes ABOUT the craft, forbidden however sound. The note is only words FOR the document, its subject matter — a fact or connection that drops into the prose — whatever the document is about. The writer may keep it, rewrite it in their own words, or ignore it. Under 160 characters, anchored to the paragraph number it belongs beside.`),messages:[{role:`user`,content:c+s+(t.length?`

You have previously offered the following on this page (declined or already seen — do not offer these again, nor their substance rephrased):
`+t.map(e=>`- ${e}`).join(`
`):``)}],output_config:{format:{type:`json_schema`,schema:{type:`object`,properties:{notes:{type:`array`,items:{type:`object`,properties:{line:{type:`integer`},note:{type:`string`},corrects:{type:`boolean`},grounds:{type:`string`,enum:[`page`,`margin`]}},required:[`line`,`note`,`corrects`,`grounds`],additionalProperties:!1}}},required:[`notes`],additionalProperties:!1}}}});fh(`ambient`,e.usage);let n=e.content.find(e=>e.type===`text`);if(!n||n.type!==`text`)return null;let a=JSON.parse(n.text).notes.filter(e=>e.line>=0&&e.line<i.length).filter(t=>Bh(t.note,e.stop_reason)).slice(0,1).map(e=>({line:e.line,anchorText:i[e.line],note:e.note,...e.corrects===!0?{corrects:!0}:{},...e.grounds===`page`||e.grounds===`margin`?{grounds:e.grounds}:{}}));return ph(`ambient`,a.length),a}catch(e){return jh(e),console.warn(`[phloem] engine: jot failed`,e),null}finally{--Lh}}var Hh=`web_search_20250305`,Uh={rules:``,silence:`return an EMPTY note`,boundary:`return an EMPTY note AND declare ofTheWriting:true, so the writer is told what you are for rather than left with silence`,declare:` AND SAY WHETHER YOU ARE CORRECTING: corrects:true ONLY when the text you were given asserts something false and your answer states what is actually so — it would have to change to become true. Text that contradicts itself — the same name, figure or fact rendered two incompatible ways — asserts something false, and pointing at the contradiction is correcting: declare it. An answer that ADDS to something true as written is corrects:false, however close to its subject.`,length:`Under 320 characters. `},Wh={rules:``,silence:`say nothing at all`,boundary:`say only that the margin answers questions of fact, not questions about the writing`,declare:``,length:`Under 320 characters. `},Gh={name:`margin_note`,description:`Deliver your finished answer to the writer. This is the ONLY way to answer: never write the answer as ordinary text.`,strict:!0,input_schema:{type:`object`,properties:{note:{type:`string`,description:`One or two sentences of finished prose the writer could drop straight onto the page. Empty if you have nothing to say.`},corrects:{type:`boolean`},ofTheWriting:{type:`boolean`}},required:[`note`,`corrects`,`ofTheWriting`],additionalProperties:!1}},Kh={name:`declare_correction`,description:`File the declaration for the answer you have already given. This is the ONLY way to respond on this turn: call it exactly once.`,strict:!0,input_schema:{type:`object`,properties:{corrects:{type:`boolean`}},required:[`corrects`],additionalProperties:!1}},qh={name:`declare_boundary`,description:`File whether the question was about the writing itself. This is the ONLY way to respond on this turn: call it exactly once.`,strict:!0,input_schema:{type:`object`,properties:{ofTheWriting:{type:`boolean`}},required:[`ofTheWriting`],additionalProperties:!1}},Jh=`YOU MUST SEARCH THE WEB BEFORE ANSWERING. Your own memory is not a source and may not be used as one, however certain it feels: answer ONLY from what a search actually returned on this request. If you did not search, or the searches did not settle the question, return an EMPTY note — silence is the correct answer to a question you cannot source, and an unsourced answer will be discarded before the writer ever sees it. DELIVER THE ANSWER ONLY by calling the margin_note tool; never write it as ordinary text. The note field must be PLAIN PROSE ONLY: no citation markup, no <cite> tags, no reference numbers, no brackets pointing at sources — the writer is shown the pages separately, and a tag in the sentence is something they would have to delete by hand.`,Yh=e=>(e.asked.searches??0)<$.searchCap;Uh.rules=Jh,Wh.rules=`YOU MUST SEARCH THE WEB BEFORE ANSWERING. Your own memory is not a source and may not be used as one, however certain it feels: answer ONLY from what a search actually returned on this request. If you did not search, or the searches did not settle the question, say nothing at all — an answer you cannot source will be discarded before the writer sees it, so silence is the correct reply to a question the web does not settle. Write ONE or TWO sentences of finished prose in a plain, human voice, and nothing else: no preamble, no restating the question, no offer of further help.`;var Xh=e=>{let t=e.replace(/\s+/g,` `).trim();return t?/[.!?…]["'”’)\]]*$/.test(t)?t:`${t}…`:``},Zh=e=>e.replace(/<\/?cit\w*\b[^>]*>/gi,``).replace(/\b(corrects|ofTheWriting|grounds)\s*:\s*("?\w+"?)/gi,``).replace(/\s+/g,` `).trim();function Qh(e){let t=e;if(!t||t.status!==400)return;let n=String(t.message??``);/web_search|tool/i.test(n)&&console.error(`[phloem] engine: the search tool "${Hh}" was REFUSED by the API (400). If it has been withdrawn, every grounded summons stops until SEARCH_TOOL is changed here and in proxy/server.mjs — check the current tool versions and pick the newest your model supports. Upstream said: ${n.slice(0,200)}`)}async function $h(e,t,n){let r=await wh();if(!r)return null;let i=uh();if(!hh(i,`asked`))return console.warn(`[phloem] engine: summons allowance spent for today`),null;if(!Yh(i))return{note:``,outOfSearches:!0};let a=$.answerShape===`quoted`,o={model:$.model,max_tokens:zm,system:Sh(t(a?Wh:Uh)),tools:[{type:Hh,name:`web_search`,max_uses:$.searchMaxUses},...a?[]:[Gh]]},s=[{role:`user`,content:n}],c=e=>r.messages.create(e);Lh+=1;let l;try{let e=0;for(;l=await c({...o,messages:s}),fh(`asked`,l.usage),!(l.stop_reason!==`pause_turn`||e>=3);)e+=1,s.push({role:`assistant`,content:l.content})}catch(t){throw jh(t),Qh(t),console.warn(`[phloem] engine: ${e} failed`,t),t}finally{--Lh}let u=l.content??[],d=new Set,f=[];for(let e of u)if(!(e.type!==`web_search_tool_result`||!Array.isArray(e.content)))for(let t of e.content){if(t.type!==`web_search_result`||typeof t.url!=`string`||!t.url||d.has(t.url))continue;d.add(t.url);let e=typeof t.title==`string`&&t.title.trim()?t.title.trim():t.url;f.push({title:e,url:t.url})}if(a){let t=[],r=``,i=u.findIndex(e=>e.type===`web_search_tool_result`);if(i<0){let t=u.filter(e=>e.type===`text`&&typeof e.text==`string`).map(e=>e.text).join(` `).trim(),r=!1;Lh+=1;try{let e=await c({model:$.model,max_tokens:128,system:o.system,tools:[qh],tool_choice:{type:`tool`,name:qh.name},messages:[{role:`user`,content:n},{role:`assistant`,content:t||`(no answer)`},{role:`user`,content:`You returned without searching. Declare why by calling ${qh.name} exactly once — say nothing else. ofTheWriting:true ONLY when what you were given asks about the WRITING rather than about the world — is it clear, well put, does it flow, how should this be phrased, is this the right word. A question of fact you could not source is ofTheWriting:false.`}]});fh(`asked`,e.usage),r=((e.content??[]).find(e=>e.type===`tool_use`&&e.name===qh.name)?.input??{}).ofTheWriting===!0}catch(t){jh(t),console.warn(`[phloem] engine: ${e} boundary turn failed — reading as silence`,t)}finally{--Lh}return r?{note:``,ofTheWriting:!0}:(console.warn(`[phloem] engine: ${e} returned without searching — dropped`),null)}for(let e of u.slice(i)){if(e.type!==`text`)continue;let n=typeof e.text==`string`?e.text:``;r+=n;let i=e.citations;if(Array.isArray(i))for(let e of i){let r=e;if(typeof r.url!=`string`||!r.url)continue;let i=Xh(typeof r.cited_text==`string`?r.cited_text:``);i&&t.push({claim:n.trim(),quote:i,title:typeof r.title==`string`&&r.title.trim()?r.title.trim():r.url,url:r.url})}}let a=Zh(r),s=zh(a,`end_turn`);if(s)return console.warn(`[phloem] engine: ${e} note rejected — ${s}`),null;if(t.length===0)return console.warn(`[phloem] engine: ${e} answered with no citations — dropped`),null;ph(`asked`,1);let l=!1;Lh+=1;try{let e=await c({model:$.model,max_tokens:128,system:o.system,tools:[Kh],tool_choice:{type:`tool`,name:Kh.name},messages:[{role:`user`,content:n},{role:`assistant`,content:a},{role:`user`,content:`Your answer is being filed in the record. Declare it by calling ${Kh.name} exactly once — say nothing else. corrects:true ONLY when the text you were given asserts something false and your answer states what is actually so — it would have to change to become true. Text that contradicts itself — the same name, figure or fact rendered two incompatible ways — asserts something false, and pointing at the contradiction is correcting: declare it. An answer that ADDS to something true as written is corrects:false, however close to its subject.`}]});fh(`asked`,e.usage),l=((e.content??[]).find(e=>e.type===`tool_use`&&e.name===Kh.name)?.input??{}).corrects===!0}catch(t){jh(t),console.warn(`[phloem] engine: ${e} declare turn failed — filing undeclared`,t)}finally{--Lh}return{note:a,sources:f,citations:t,...l?{corrects:!0}:{}}}let p=u.find(e=>e.type===`tool_use`&&e.name===Gh.name);if(!p)return console.warn(`[phloem] engine: ${e} answered without calling ${Gh.name}`),null;let m=p.input??{};if(m.ofTheWriting===!0)return{note:``,ofTheWriting:!0};let h=Zh(m.note??``),g=zh(h,`end_turn`);return g?(console.warn(`[phloem] engine: ${e} note rejected — ${g}`),null):f.length===0?(console.warn(`[phloem] engine: ${e} answered with no sources — dropped`),null):(ph(`asked`,1),{note:h,...m.corrects===!0?{corrects:!0}:{},sources:f})}async function eg(e){let t=e.trim();return t?$h(`summon`,e=>`You are the margin of Phloem, a writing surface. The writer has SELECTED a passage and asked you directly — a summons, the deliberate register. THE SELECTED PASSAGE IS ALL YOU ARE GIVEN: the document continues before and after it and you cannot see it, so do not read the first words you are shown as the opening of the piece, and do not guess at what surrounds them. If the passage cannot be answered without context you have not been given, `+e.silence+` rather than answer resting on a guess. IF THE PASSAGE ASSERTS SOMETHING YOU CANNOT VERIFY — a name, a date, a founder, a local or little-documented fact — never elaborate on it, embellish it, or supply invented detail around it: state only what you are CERTAIN is actually so, and if that is nothing, `+e.silence+`. Inventing a plausible-sounding fact is the worst answer a summons can give; an empty one is honest. YOU ANSWER QUESTIONS OF FACT AND NOTHING ELSE (2026-08-09): the margin does not read the writing. Here you were ASKED, so answer generously and specifically about the selected passage — correct a factual mistake in it, or supply the fact, source, or real-world connection it is reaching for — words FOR the document, its subject matter. If what is being asked is about the WRITING rather than about the world — is this clear, is it well put, does it flow, how should I say this — that is outside what you do: `+e.boundary+`. "Is this sentence truthful?" is yours; "is this sentence clear?" is not. NEVER give advice ABOUT the writing: no remark on its structure, ordering, pacing, clarity, style, what reads as confusing or disorienting, when something is introduced, or the reader's experience, and never address the writer (no "you"). Those are editorial and forbidden however sound; if all you could offer is editorial, `+e.silence+` — better to add nothing than to comment on the craft. Reply with ONE response written as finished prose in a plain, human voice — a sentence or two the writer could drop straight onto the page beneath the passage. Not a question, not instructions about how to write: the words themselves. `+e.length+e.rules+e.declare,`The writer has selected this passage and asks the margin about it. It is all you are given:

“`+t+`”`):null}async function tg(e){let t=e.trim();return t?$h(`answer-note`,e=>`You are the margin of Phloem, a writing surface. The writer has WRITTEN A QUESTION IN THE MARGIN of their page and asked you to answer it — a summons, the deliberate register. THE QUESTION IS ALL YOU ARE GIVEN: it stands anchored beside writing you cannot see, and the page is not shown to you, so do not guess at what the question leans on. If it cannot be answered without the writing it stands beside, `+e.silence+` rather than answer resting on a guess. If the question asks after something you cannot verify — a name, a small fact, a local matter — say only what you are CERTAIN of, and if that is nothing, `+e.silence+` rather than guess; never invent detail. You were ASKED, so answer generously and specifically: supply the fact, the figure, the source, or the real-world connection the question asks for. Reply with ONE response written as finished prose in a plain, human voice — a sentence or two the writer could weigh before writing, or carry into their page. Not a question back, not instructions: the words themselves. YOU ANSWER QUESTIONS OF FACT AND NOTHING ELSE (2026-08-09): the margin does not read the writing. If the QUESTION is about the writing rather than about the world — is this clear, is it well put, does it flow, how should I phrase this, is this the right word — that is outside what you do: `+e.boundary+`. "Is this true?" is yours; "is this clear?" is not. NEVER give advice ABOUT the writing or address the writer (no "you"); if all you could offer is editorial, `+e.silence+`. `+e.length+e.rules+e.declare,`The writer has written this question in the margin of their page and asks the margin to answer it. It is all you are given:

“`+t+`”`):null}var ng=`You are Ask Phloem: the built-in help of Phloem, a writing app. The writer has pressed ⌥⇧? inside Phloem and typed a question about how the app itself works. THE MANUAL BELOW IS ALL YOU KNOW. Answer only what its sentences support, staying close to its own words — quote them where they answer best. ANSWER ONLY WHAT WAS ASKED, in the fewest sentences that answer it — usually one or two. Never pad an answer with related facts, neighbouring features, or other verbs the question did not ask about: the writer can always ask a follow-up, and a short true answer serves better than a tour. Plain text only — no headings, no lists, no markdown, and when you quote the manual drop its formatting marks (** and \`). If the answer is not in the manual, say plainly that the manual does not cover it and nothing more — the panel itself offers the way to a person, so never invent an address or a support channel. NEVER GUESS: never invent behaviour, keys, or features the manual does not describe, and never present a guess as how the app works — a wrong answer about the app is worse than a demurral. You are shown only the question, never the writer’s page or their record, so you cannot answer questions about their own writing or their own document’s history: say so if asked, and point them at the manual’s own verbs (the report, the garden) instead.

--- THE MANUAL ---

`;async function rg(e){let t=e.trim();if(!t)return null;let n=await wh();if(!n)return null;if(!hh(uh(),`asked`))return console.warn(`[phloem] engine: summons allowance spent for today`),null;let r={model:$.model,max_tokens:zm,system:Sh(ng+Lm),messages:[{role:`user`,content:t}]},i=e=>n.messages.create(e);Lh+=1;try{let e=await i(r);return fh(`asked`,e.usage),(e.content??[]).filter(e=>e.type===`text`&&typeof e.text==`string`).map(e=>e.text).join(``).trim()||null}catch(e){return jh(e),console.warn(`[phloem] engine: ask-phloem failed`,e),null}finally{--Lh}}async function ig(){Zm(),await xh();let e=window;if((e.phloem??={}).engine={status:()=>({awake:Nh(),keySource:_h,model:$.model,meter:uh(),tuning:{...$}}),ledger:()=>oh(),spend(){let{today:e,days:t}=oh(),n=e=>({day:e.day,ambient:e.ambient.calls,spoke:e.ambient.spoke,offered:e.ambient.offered,asked:e.asked.calls,usd:Number((th(e.ambient)+th(e.asked)).toFixed(4))}),r=[...t,e];return{days:r.map(n),usdPerDay:Number((r.reduce((e,t)=>e+th(t.ambient)+th(t.asked),0)/Math.max(1,r.filter(e=>e.calls>0).length)).toFixed(4))}},forgetLedger:sh,set:ch,reset:lh,setKey(e){return localStorage.setItem(Hm,e),gh=e,_h=`set`,vh=null,Ch=null,`the engine has its key`},clearKey(){return localStorage.removeItem(Hm),Ch=null,vh=bh(`/engine`),gh=yh,_h=`proxy`,`the engine speaks through the house`},jot:e=>Vh(e??document.querySelector(`.ProseMirror`)?.innerText??``),summon:e=>eg(e)},gh){let e=uh(),t=`${e.ambient.calls}/${$.ambientCap} ambient · ${e.asked.calls}/${$.askedCap} asked · $${(th(e.ambient)+th(e.asked)).toFixed(3)} today`;hh(e,`ambient`)?console.info(`[phloem] engine awake (key: ${_h}) · ${$.model} · ${t}`):hh(e,`asked`)?console.info(`[phloem] engine RESTING (key: ${_h}) · ${$.model} · ${t} — the margin will answer, but no longer speaks unbidden; raise with phloem.engine.set({ambientCap: …})`):console.warn(`[phloem] engine CAPPED (key: ${_h}) · ${t} · ${e.input+e.output}/${$.tokenCap} tokens — quietly mute until local midnight; raise with phloem.engine.set({ambientCap: …, askedCap: …})`)}}var ag=`askingphloem`,og=`peter@henley.net.nz`;function sg(e){let t=null,n=``,r=``;function i(){t&&(t.remove(),t=null,document.body.classList.remove(ag),window.removeEventListener(`keydown`,a,!0))}function a(e){e.key!==`Escape`||!t||(e.stopImmediatePropagation(),e.preventDefault(),i())}function o(){if(t){i();return}t=document.createElement(`div`),t.className=`askphloem-veil`;let o=document.createElement(`div`);o.className=`askphloem`,t.appendChild(o);let s=document.createElement(`div`);s.className=`askphloem-head`,s.textContent=`ask Phloem`,o.appendChild(s);let c=document.createElement(`div`);c.className=`askphloem-caption`,c.textContent=`a question about how Phloem works — answered from its own manual, and it never enters your document’s record`,o.appendChild(c);let l=document.createElement(`textarea`);l.className=`askphloem-q`,l.rows=2,l.placeholder=`what would you like to know?`,l.value=n,o.appendChild(l);let u=document.createElement(`div`);u.className=`askphloem-a`,u.hidden=!0,o.appendChild(u),r&&(u.textContent=r,u.hidden=!1);function d(e,t){u.hidden=!1,u.classList.toggle(`askphloem-asking`,!t),u.textContent=e,t&&(r=e)}let f=!1;async function p(){let r=l.value.trim();if(!r||f)return;if(n=r,!e.awake()){d(e.state(),!0);return}f=!0,d(`asking…`,!1);let i=null;try{i=await e.ask(r)}catch{i=null}f=!1,t&&d(i||`no answer arrived — ${e.state()}`,!0)}l.addEventListener(`keydown`,e=>{e.key!==`Enter`||e.shiftKey||(e.preventDefault(),p())});let m=document.createElement(`div`);m.className=`askphloem-foot`,m.append(`something the manual doesn’t answer? `);let h=document.createElement(`a`);h.className=`askphloem-write`;let g=`mailto:${og}?subject=A%20question%20about%20Phloem`;h.href=g,h.textContent=`write — it reaches the person who built it`,h.addEventListener(`click`,e=>{`__TAURI_INTERNALS__`in window&&(e.preventDefault(),Q(()=>import(`./dist-js-UCi8EyMo.js`).then(e=>e.openUrl(g)),__vite__mapDeps([6,1])).catch(()=>{}))}),h.addEventListener(`mousedown`,e=>e.stopPropagation()),m.appendChild(h),o.appendChild(m),t.addEventListener(`mousedown`,e=>{(!(e.target instanceof Node)||!o.contains(e.target))&&i()}),window.addEventListener(`keydown`,a,!0),document.body.classList.add(ag),document.body.appendChild(t),l.focus(),l.select()}return{open:o,visible:()=>t!==null}}var cg=`feedbacking`,lg=`peter@henley.net.nz`;function ug(){let e=null,t=``,n=``;function r(){e&&(e.remove(),e=null,document.body.classList.remove(cg),window.removeEventListener(`keydown`,i,!0))}function i(t){t.key!==`Escape`||!e||(t.stopImmediatePropagation(),t.preventDefault(),r())}function a(){if(e){r();return}let a=`__TAURI_INTERNALS__`in window,o=Date.now();e=document.createElement(`div`),e.className=`feedback-veil`;let s=document.createElement(`div`);s.className=`feedback`,e.appendChild(s);let c=document.createElement(`div`);c.className=`feedback-head`,c.textContent=`send feedback`,s.appendChild(c);let l=document.createElement(`div`);l.className=`feedback-caption`,l.textContent=a?`this goes to the person who builds Phloem — your mail app carries it`:`this goes straight to the person who builds Phloem`,s.appendChild(l);let u=null;a||(u=document.createElement(`input`),u.className=`feedback-mail`,u.type=`email`,u.placeholder=`your email — so a reply can find you`,u.value=n,s.appendChild(u));let d=document.createElement(`textarea`);d.className=`feedback-msg`,d.rows=5,d.placeholder=`what happened, what surprised you, what you wished for…`,d.value=t,s.appendChild(d),d.addEventListener(`input`,()=>t=d.value),u?.addEventListener(`input`,()=>n=u.value);let f=document.createElement(`div`);f.className=`feedback-note`,s.appendChild(f);let p=document.createElement(`button`);p.type=`button`,p.className=`feedback-send`,p.textContent=a?`write it in your mail app`:`send`,s.appendChild(p);let m=!1;async function h(){if(m)return;let e=d.value.trim();if(!e){f.textContent=`a message is the one thing this needs`;return}if(a){let n=`mailto:${lg}?subject=Phloem%20feedback&body=`+encodeURIComponent(e);try{await(await Q(()=>import(`./dist-js-UCi8EyMo.js`),__vite__mapDeps([6,1]))).openUrl(n),f.textContent=`handed to your mail app — press send there`,t=``,d.value=``}catch{f.textContent=`could not open your mail app — write to ${lg}`}return}let n=u?.value.trim()??``;if(!n||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){f.textContent=`an email address is needed, so a reply can find you`;return}m=!0,p.disabled=!0,f.textContent=`sending…`;try{let r=new URLSearchParams({name:``,email:n,message:e,website:``,elapsed:String(Date.now()-o),source:`app`}),i=await fetch(`/contact`,{method:`POST`,body:r});if(!i.ok)throw Error(String(i.status));f.textContent=`sent — thank you`,t=``,d.value=``}catch{f.textContent=`could not send — you can write to ${lg}`}finally{m=!1,p.disabled=!1}}p.addEventListener(`mousedown`,e=>e.stopPropagation()),p.addEventListener(`click`,()=>void h()),e.addEventListener(`mousedown`,e=>{(!(e.target instanceof Node)||!s.contains(e.target))&&r()}),window.addEventListener(`keydown`,i,!0),document.body.classList.add(cg),document.body.appendChild(e),d.focus()}return{open:a}}var dg=null;function fg(){return dg||(dg=document.createElement(`div`),dg.id=`drop-marker`,document.body.appendChild(dg)),dg}function pg(e,t,n){let r=document.querySelector(`.page`)?.getBoundingClientRect();if(!r)return null;let i=Math.min(Math.max(t,r.left+2),r.right-2),a=Math.min(Math.max(n,r.top+2),r.bottom-2),o=e.posAtCoords({left:i,top:a}),s=o?o.pos:e.state.doc.content.size,c=e.state.doc.resolve(Math.min(Math.max(s,0),e.state.doc.content.size));return J.near(c).from}function mg(e,t){try{let n=e.coordsAtPos(t),r=fg();r.style.display=``,r.style.left=`${Math.round(n.left-1)}px`,r.style.top=`${Math.round(n.top)}px`,r.style.height=`${Math.round(n.bottom-n.top)}px`}catch{hg()}}function hg(){dg&&(dg.style.display=`none`)}function gg(e){let t=(e.title||``).trim();if(!t)return e.url;if(/\s/.test(t)||!/%[0-9a-f]{2}/i.test(t))return t;try{return decodeURIComponent(t)}catch{return t}}var _g=/^https?:\/\//i;function vg(e){if(!_g.test(e.trim())){let t=document.createElement(`span`);return t.className=`note-url`,t.textContent=e,t}let t=document.createElement(`a`);return t.className=`note-url`,t.href=e,t.target=`_blank`,t.rel=`noopener noreferrer`,t.textContent=e,t.title=`open this page in your browser`,t.addEventListener(`click`,t=>{`__TAURI_INTERNALS__`in window&&(t.preventDefault(),Q(()=>import(`./dist-js-UCi8EyMo.js`).then(t=>t.openUrl(e)),__vite__mapDeps([6,1])).catch(()=>{}))}),t.addEventListener(`mousedown`,e=>e.stopPropagation()),t}function yg(e){let n=document.createElement(`button`);return n.type=`button`,n.className=`note-expand`,n.textContent=`⤢`,n.title=`read this note whole`,n.addEventListener(`mousedown`,e=>e.stopPropagation()),n.addEventListener(`click`,e=>e.stopPropagation()),t(n,()=>e()),n}var bg=null,xg=`notereading`;function Sg(){bg&&(bg.remove(),bg=null,document.body.classList.remove(xg),window.removeEventListener(`keydown`,Cg,!0))}function Cg(e){e.key!==`Escape`||!bg||(e.stopImmediatePropagation(),e.preventDefault(),Sg())}function wg(e){let t=document.createElement(`div`);return t.className=e,t}function Tg(e){let t=document.createElement(`details`);t.className=`notereader-section`;let n=document.createElement(`summary`);return n.className=`notereader-bar`,n.textContent=e,t.appendChild(n),t}function Eg(e){Sg(),bg=document.createElement(`div`),bg.className=`notereader-veil`;let t=wg(`notereader`);if(bg.appendChild(t),e.head){let n=wg(`notereader-head`);n.textContent=e.head,t.appendChild(n)}let n=wg(`notereader-note`);if(e.mono&&n.classList.add(`notereader-mono`),n.textContent=e.note,t.appendChild(n),e.declared){let n=wg(`notereader-declared`);n.textContent=e.declared,t.appendChild(n)}if(e.citations?.length){let n=Tg(e.citations.length===1?`what the source says`:`what the sources say`);for(let t of e.citations){let e=wg(`notereader-cite`),r=wg(`notereader-quote`);r.textContent=`“${t.quote}”`;let i=wg(`notereader-src`);i.textContent=gg(t);let a=vg(t.url);a.classList.add(`notereader-url`),e.append(r,i,a),n.appendChild(e)}t.appendChild(n)}if(e.sources?.length){let n=Tg(e.sources.length===1?`the page it read`:`the ${e.sources.length} pages it read`);for(let t of e.sources){let e=wg(`notereader-source`),r=wg(`notereader-src`);r.textContent=gg(t);let i=vg(t.url);i.classList.add(`notereader-url`),e.append(r,i),n.appendChild(e)}t.appendChild(n)}bg.addEventListener(`mousedown`,e=>{(!(e.target instanceof Node)||!t.contains(e.target))&&Sg()}),window.addEventListener(`keydown`,Cg,!0),document.body.classList.add(xg),document.body.appendChild(bg)}function Dg(e,n){let r=document.createElement(`div`);r.id=`margin`,document.body.appendChild(r);let i=new Map,a=new Set,o=()=>Yu(e);function s(e,t,n,r){let i=null;if(r?.length?i=`searched the web — what the sources say:`:t?.length?i=`searched the web — the pages it read:`:n===`web`?i=`searched the web`:n===`margin`?i=`not from this page — no source`:n===`page`&&(i=`grounded in this page`),!i)return;let a=document.createElement(`span`);a.className=`jot-grounds`,a.textContent=i,e.appendChild(a)}let c=e=>`“${e.quote}” — ${e.title}`;function l(e,t){if(!t?.length)return;let r=document.createElement(`span`);r.className=`jot-cites`;for(let e of t){let t=document.createElement(`span`);t.className=`jot-cite`;let i=document.createElement(`span`);i.className=`jot-cite-quote`,i.textContent=`“${e.quote}”`;let a=document.createElement(`span`);a.className=`jot-cite-src`,a.textContent=gg(e),a.title=e.url,t.append(i,a),t.title=`drag onto the page to quote it, with its source`,_(t,{onPlace:t=>{n.adopt(t,c(e))},onAway:()=>h()}),r.appendChild(t)}e.appendChild(r)}function u(e,t){if(!t?.length)return;let n=document.createElement(`span`);n.className=`jot-sources`;for(let e of t){let t=document.createElement(`span`);t.className=`jot-source`,t.textContent=gg(e),t.title=e.url,n.appendChild(t)}e.appendChild(n)}function d(t){let n=e.state.doc;if(t<0||t>=n.childCount)return null;let r=0;for(let e=0;e<t;e++)r+=n.child(e).nodeSize;try{return e.coordsAtPos(r+1).top}catch{return null}}let f=null;function p(e){f&&i.get(f)?.el.classList.remove(`open`),f=e,e&&i.get(e)?.el.classList.add(`open`),h()}function m(e){let t=i.get(e);t&&(f===e&&(f=null),t.el.remove(),i.delete(e))}function h(){let e=o(),t=document.querySelector(`.page`),n=t?t.getBoundingClientRect().left:40,r=Math.max(90,Math.min(150,n-24-14)),s=[];for(let[t,n]of i){if(n.el.classList.contains(`dragging`))continue;if(n.el.classList.contains(`editing`)){let t=id(n.anchorText,e,n.idx??-1);t>=0&&(n.idx=t);let r=t>=0?d(t):null;r!==null&&s.push({ln:n,top:r});continue}let r=id(n.anchorText,e,n.idx??-1);if(r<0){n.own||a.add(n.note),m(t);continue}n.idx=r;let i=d(r);if(i===null){n.el.style.display=`none`;continue}s.push({ln:n,top:i})}let c=document.getElementById(`whence`),l=null;if(c){let e=c.getBoundingClientRect();e.height>4&&e.width>4&&(l=e)}let u=document.body.classList.contains(`split-open`)&&t?t.getBoundingClientRect():null;s.sort((e,t)=>e.top-t.top);let f=-1/0;for(let{ln:e,top:t}of s){e.el.style.maxWidth=`${Math.round(r)}px`;let i=e.el.offsetWidth||150,a=e.el.offsetHeight||0,o=Math.max(t-2,f);l&&o<l.bottom&&o+a>l.top&&(o=l.bottom+8),e.el.style.display=``,e.el.style.visibility=u&&(o+a<u.top||o>u.bottom)?`hidden`:``,e.el.style.top=`${Math.round(o)}px`,e.el.style.left=`${Math.round(Math.max(24,n-i-14))}px`,f=o+a+8}}function g(e,t){let n=document.querySelector(`.page`)?.getBoundingClientRect();return n?t.clientX-e>12&&t.clientX>=n.left&&t.clientX<=n.right&&t.clientY>=n.top:!1}function _(n,r){t(n,t=>{let i=t.clientX,a=t.clientY,o=n.offsetLeft,s=n.offsetTop,c=!1,l=t=>{let r=t.clientX-i,l=t.clientY-a;if(!c&&Math.hypot(r,l)>6&&(c=!0,n.classList.add(`dragging`)),c)if(n.style.left=`${o+r}px`,n.style.top=`${s+l}px`,g(i,t)){let n=pg(e,t.clientX,t.clientY);n===null?hg():mg(e,n)}else hg()},u=t=>{if(document.removeEventListener(`mousemove`,l),document.removeEventListener(`mouseup`,u),hg(),!c){r.onRead?.();return}n.classList.remove(`dragging`);let o=Math.hypot(t.clientX-i,t.clientY-a);if(g(i,t)){let n=pg(e,t.clientX,t.clientY);if(n!==null){r.onPlace(n);return}}if(o>40){r.onAway();return}h()};document.addEventListener(`mousemove`,l),document.addEventListener(`mouseup`,u)})}function v(e,t=!1){let c=o(),d=!1;for(let o of e){let e=o.anchorText;if(!e.trim())continue;let g=`${e}::${o.note}`;if(i.has(g)||!t&&a.has(o.note))continue;let v=id(e,c);if(v<0||!t&&[...i.values()].some(e=>id(e.anchorText,c,e.idx??-1)===v))continue;let y=document.createElement(`button`);y.type=`button`,y.className=`jot has-mark`;let b=document.createElement(`span`);b.className=`note-body`,b.textContent=o.note,y.appendChild(yg(()=>Eg({note:o.note,citations:o.citations,sources:o.sources}))),y.appendChild(b),s(b,o.sources,o.grounds,o.citations),o.citations?.length?l(b,o.citations):u(b,o.sources),y.title=`the margin’s offer — click to read it whole, drag it onto the page to keep it there, drag it away to let it go`,_(y,{onPlace:t=>{a.add(o.note),n.dismiss(e,o.note),m(g),h(),n.adopt(t,o.note)},onAway:()=>{a.add(o.note),n.dismiss(e,o.note),m(g),h()},onRead:()=>p(f===g?null:g)}),r.appendChild(y),i.set(g,{anchorText:e,note:o.note,el:y,idx:v}),n.logShown(o),p(g),d=!0}d&&h()}function y(e,a=!1){let s=o(),c=!1;for(let o of e){if(!o.anchorText.trim()||!o.note.trim())continue;let e=`own::${o.anchorText}::${o.note}`;if(i.has(e))continue;let l=id(o.anchorText,s);if(l<0)continue;let u=document.createElement(`button`);if(u.type=`button`,u.className=`jot own`,u.textContent=o.note,u.title=`your note — click to read it whole, drag it onto the page to make it prose, drag it away to remove it`,n.askOwn){let e=document.createElement(`span`);e.className=`own-ask`,e.textContent=`ask the margin to answer this`,e.title=`send this note — the note alone, nothing it stands beside — for the margin to answer`,t(e,e=>{e.stopPropagation(),n.askOwn?.(o.anchorText,o.note)}),u.appendChild(e)}_(u,{onPlace:t=>{m(e),h(),n.placeOwn(t,o.note),n.removeOwn(o.anchorText,o.note)},onAway:()=>{m(e),h(),n.removeOwn(o.anchorText,o.note)},onRead:()=>p(f===e?null:e)}),r.appendChild(u),i.set(e,{anchorText:o.anchorText,note:o.note,el:u,own:!0,idx:l}),a&&p(e),c=!0}c&&h()}function b(e,t,c,d,g){if(!e.trim())return;let v=`${e}::${t}`;if(i.has(v)){p(v);return}let y=id(e,o());if(y<0)return;let b=document.createElement(`button`);b.type=`button`,b.className=`jot has-mark`;let x=document.createElement(`span`);x.className=`note-body`,x.textContent=t,b.appendChild(yg(()=>Eg({note:t,citations:g,sources:d}))),b.appendChild(x),s(x,d,c,g),g?.length?l(x,g):u(x,d),b.title=`the margin’s offer — click to read it whole, drag it onto the page to keep it there, drag it away to let it go`,_(b,{onPlace:r=>{a.add(t),n.dismiss(e,t),m(v),h(),n.adopt(r,t)},onAway:()=>{a.add(t),n.dismiss(e,t),m(v),h()},onRead:()=>p(f===v?null:v)}),r.appendChild(b),i.set(v,{anchorText:e,note:t,el:b,restood:!0,idx:y}),h()}function x(n,a,o){let s=document.createElement(`div`);s.className=`jot own editing composing`;let c=`own-edit::${n}::${performance.now()}`,l=document.createElement(`textarea`);l.className=`own-compose`,l.rows=1,l.placeholder=`write a note…`,l.setAttribute(`spellcheck`,`true`);let u=document.createElement(`div`);u.className=`own-compose-foot`;let d=null;o&&(d=document.createElement(`button`),d.type=`button`,d.className=`own-askbtn`,d.textContent=`ask the margin`,d.title=`keep the note, and ask the margin to answer it — the note is sent, and nothing else`,u.appendChild(d)),s.appendChild(l),d&&s.appendChild(u);let f=!1,p=(t,n=!1)=>{if(f)return;f=!0;let r=l.value.trim();s.remove(),i.delete(c),e.focus(),t&&r&&(a(r),n&&o?.(r))},m=()=>{l.style.height=`auto`,l.style.height=`${l.scrollHeight}px`,h()};l.addEventListener(`input`,m),l.addEventListener(`keydown`,e=>{e.stopPropagation(),e.key===`Escape`?(e.preventDefault(),p(!1)):(e.key===`Enter`||e.key===`Return`)&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),p(!0))}),l.addEventListener(`blur`,()=>p(!0)),d&&t(d,()=>{p(!0,!0)}),r.appendChild(s),i.set(c,{anchorText:n,note:``,el:s,own:!0}),h(),l.focus(),m()}return window.addEventListener(`scroll`,h,{passive:!0,capture:!0}),window.addEventListener(`resize`,h),{offer:v,offerOwn:y,compose:x,standShown:b,refresh:h,retirePrior(e){for(let t of e)a.add(t.note)},takeDown(e,t){m(`${e}::${t}`),m(`own::${e}::${t}`),h()}}}function Og(e,n,r,i,a,o,s,c){let l=document.createElement(`button`);l.type=`button`,l.id=`pad-door`,l.title=`every note the margin has offered on this leaf`,document.body.appendChild(l);let u=document.createElement(`div`);u.id=`pad`,document.body.appendChild(u);let d=!1,f=!1;function p(e){return c().some(t=>t.anchor===e.anchor&&t.note===e.note&&t.own===e.own)}function m(){let e=new Set,t=[];for(let r of n()){let n=r.note;!n.trim()||e.has(n)||(e.add(n),t.push({...r,note:n}))}return t}let h=()=>m().filter(e=>!p(e)),g=()=>m().filter(e=>p(e)),_=()=>Yu(e);function v(e){return id(e,_())>=0}function y(e,n,r,i){let a=document.createElement(`button`);return a.type=`button`,a.className=e,a.textContent=n,a.title=r,t(a,e=>{e.stopPropagation(),i()}),a}function b(n){let{note:s,own:c,anchor:l}=n,d=document.createElement(`div`);d.className=`pad-item`;let f=document.createElement(`button`);if(f.type=`button`,f.className=c?`pad-note own`:`pad-note`,f.textContent=s,f.title=c?`your note — drag onto the page to place it`:`drag onto the page to keep it there`,n.citations?.length||n.sources?.length){let e=document.createElement(`span`);if(e.className=`pad-note-sources`,n.citations?.length)for(let t of n.citations){let n=document.createElement(`span`);n.className=`pad-note-quote`,n.textContent=`“${t.quote}”`;let r=document.createElement(`span`);r.className=`pad-note-src`,r.textContent=gg(t),r.title=t.url,n.appendChild(r),e.appendChild(n)}else for(let t of n.sources??[]){let n=document.createElement(`span`);n.className=`pad-note-src`,n.textContent=gg(t),n.title=t.url,e.appendChild(n)}f.appendChild(e)}let p=null;l.trim()&&v(l)&&(p=y(`pad-pin`,`⇧ pin it back`,`stand this note back in the margin beside its line`,()=>{T(),i(l,s,c)}));let m=y(`pad-copy`,`copy`,`copy this note’s words to the clipboard`,()=>{a(s,n.sources,n.citations).then(e=>{m.textContent=e?`copied ✓`:`couldn’t copy`,m.classList.add(`done`),window.setTimeout(()=>{m.textContent=`copy`,m.classList.remove(`done`)},1400)})}),h=y(`pad-pile`,`to the pile`,`set this note aside — it gathers in the pile below, and can be taken back`,()=>{o(l,s,c),x()});if(t(f,t=>{let n=t.clientX,i=t.clientY,a=null,o=t=>{if(!a&&Math.hypot(t.clientX-n,t.clientY-i)>6&&(a=document.createElement(`div`),a.className=c?`jot own dragging pad-ghost`:`jot dragging pad-ghost`,a.textContent=s,document.body.appendChild(a)),a){a.style.left=`${t.clientX+6}px`,a.style.top=`${t.clientY+6}px`;let n=document.querySelector(`.page`)?.getBoundingClientRect();if(n&&t.clientX>=n.left&&t.clientX<=n.right&&t.clientY>=n.top){let n=pg(e,t.clientX,t.clientY);n===null?hg():mg(e,n)}else hg()}},l=t=>{if(document.removeEventListener(`mousemove`,o),document.removeEventListener(`mouseup`,l),hg(),!a){let e=f.classList.contains(`open`);for(let e of u.querySelectorAll(`.pad-note.open`))e.classList.remove(`open`);e||f.classList.add(`open`);return}a.remove();let n=document.querySelector(`.page`)?.getBoundingClientRect();if(n&&t.clientX>=n.left&&t.clientX<=n.right&&t.clientY>=n.top){let n=pg(e,t.clientX,t.clientY);n!==null&&r(n,s,c)}};document.addEventListener(`mousemove`,o),document.addEventListener(`mouseup`,l)}),c)return d.appendChild(f),p&&d.appendChild(p),d.appendChild(m),d.appendChild(h),d;d.classList.add(`has-mark`);let g=document.createElement(`div`);return g.className=`note-body`,d.appendChild(yg(()=>Eg({note:s,citations:n.citations,sources:n.sources}))),d.appendChild(g),g.appendChild(f),p&&g.appendChild(p),g.appendChild(m),g.appendChild(h),d}function x(){u.textContent=``;for(let e of h())u.appendChild(b(e));let e=g();if(e.length){let n=document.createElement(`button`);if(n.type=`button`,n.className=`pad-pile-door`,n.textContent=`the pile · ${e.length}`,n.title=`notes set aside — open to take one back`,t(n,e=>{e.stopPropagation(),f=!f,x()}),u.appendChild(n),f)for(let n of e){let e=document.createElement(`div`);e.className=`pad-item piled`;let r=document.createElement(`button`);r.type=`button`,r.className=n.own?`pad-note own`:`pad-note`,r.textContent=n.note,r.title=`set aside — take it back to lend it again`,t(r,e=>{e.stopPropagation();let t=r.classList.contains(`open`);for(let e of u.querySelectorAll(`.pad-note.open`))e.classList.remove(`open`);t||r.classList.add(`open`)});let i=y(`pad-unpile`,`take it back`,`return this note to the bank`,()=>{s(n.anchor,n.note,n.own),x()});e.appendChild(r),e.appendChild(i),u.appendChild(e)}}}function S(){let e=h().length,t=g().length;l.textContent=e?`${e} note${e===1?``:`s`}`:t?`the pile`:``,l.classList.toggle(`show`,e+t>0),d&&(e+t?x():T())}function C(e){e.target.closest(`#pad, #pad-door`)||T()}function w(){!(h().length+g().length)||d||(f=!1,x(),d=!0,u.classList.add(`show`),window.setTimeout(()=>{d&&document.addEventListener(`mousedown`,C)},0))}function T(){d=!1,u.classList.remove(`show`),document.removeEventListener(`mousedown`,C)}return t(l,()=>{d?T():w()}),window.addEventListener(`keydown`,e=>{e.key===`Escape`&&d&&T()}),S(),{refresh:S,show:w,hasNotes:()=>h().length+g().length>0}}var kg=()=>Pm.version??``;function Ag(e){return e.claimed?e.survives?`claimed`:e.reworked||e.partlyStands?`edited`:`removed`:e.transcribed?`transcribed`:e.corrected?`corrected`:e.derivedIn.length?`derived`:`untaken`}var jg=130,Mg=.5,Ng=2,Pg=1e4,Fg=15*6e4,Ig=4,Lg=2;function Rg(e,t){if(e.length<Ig)return!1;for(let n of t){if(n.length<Ig)continue;let t=Math.abs(n.length-e.length);if(!(t===0||t>Lg)&&(n.length<e.length?e.startsWith(n):n.startsWith(e)))return!0}return!1}var zg=Ig;function Bg(e,t){if(e===t||e.length<zg||t.length<zg||Math.abs(e.length-t.length)>1)return!1;let[n,r]=e.length<=t.length?[e,t]:[t,e],i=0;for(;i<n.length&&n[i]===r[i];)i+=1;return i===n.length?n.length!==r.length:n.length===r.length?n.slice(i+1)===r.slice(i+1):n.slice(i)===r.slice(i+1)}var Vg=.5,Hg=12,Ug=12;function Wg(e){return e>Ug?2:1}var Gg=2.5,Kg=2.5,qg=500,Jg=3e4,Yg=600,Xg=8,Zg=12,Qg=60,$g=6,e_=1;function t_(e,t,n,r,i){return e>=Gg*t&&n>=Kg*r||n>=$g*r&&e>=e_*t&&i>r}function n_(e){if(!e.length)return 0;let t=[...e].sort((e,t)=>e-t),n=t.reduce((e,t)=>e+t,0);if(n<=0)return 0;let r=0;for(let e of t)if(r+=e,r*2>=n)return e;return t[t.length-1]}function r_(e,t,n){let r=[];for(let n=0;n<e.length;n++){let i=e[n];if(!i.text.trim())continue;let a=new Set,o=0;for(let e=0;e<i.kinds.length;e++){let n=i.sis[e];i.kinds[e]!==`h`||n===void 0||!t[n].keyed||(o++,a.add(n))}if(!o)continue;let s=0;for(let e of a){let n=t[e].dt,r=t[e].span??0;n===null?s+=r:n>0&&(s+=Math.min(Math.max(n-r,0),Jg)+r)}if(s<=0)continue;let c=[...a].sort((e,t)=>e-t);r.push({idx:n,chars:o,active:s,splices:c,burst:n_(c.map(e=>t[e].insLen))})}let i=[],a=new Set;for(;i.length<Xg;){let e=r.map((e,t)=>t).filter(e=>!a.has(e));if(e.length<2)break;let n=e.reduce((e,t)=>e+r[t].chars,0),o=e.reduce((e,t)=>e+r[t].active,0),s=[];{let t=[];for(let n of e)t.length&&n!==t[t.length-1]+1&&(s.push(t),t=[]),t.push(n);t.length&&s.push(t)}let c=null;for(let i of s){let a=[0],s=[0];for(let e of i)a.push(a[a.length-1]+r[e].chars),s.push(s[s.length-1]+r[e].active);for(let l=0;l<i.length;l++){let u=1/0,d=1/0;for(let f=l;f<i.length;f++){let p=r[i[f]];p.chars>=Qg&&(u=Math.min(u,p.chars/p.active),d=Math.min(d,p.burst));let m=a[f+1]-a[l];if(m<qg)continue;let h=n-m;if(h<qg)continue;let g=s[f+1]-s[l],_=o-g;if(g<=0||_<=0)continue;let v=m/g,y=h/_;if(v<e_*y||u<y)continue;let b=new Set;for(let e=l;e<=f;e++)for(let t of r[i[e]].splices)b.add(t);let x=n_([...b].map(e=>t[e].insLen)),S=new Set(i.slice(l,f+1)),C=[];for(let n of e)if(!S.has(n))for(let e of r[n].splices)b.has(e)||C.push(t[e].insLen);let w=n_(C);if(w<Zg||!t_(v,y,x,w,d))continue;let T=(v-y)*1e3,E={S:i,a:l,b:f,score:m*h*T*T};(!c||E.score>c.score||E.score===c.score&&E.b-E.a>c.b-c.a)&&(c=E)}}}if(!c)break;for(let e=c.a;e<=c.b;e++)a.add(c.S[e]);i.push({start:c.S[c.a],end:c.S[c.b]})}if(!i.length)return[];let o=e=>{let t=new Set,n=new Set;for(let i of e)for(let e=i.start;e<=i.end;e++){t.add(e);for(let t of r[e].splices)n.add(t)}return{inPara:t,inSplice:n}},s=i.sort((e,t)=>e.start-t.start);for(let e=!0;e;){e=!1;for(let n=0;n+1<s.length;n++){let i=0;for(let e=s[n].end+1;e<s[n+1].start;e++)i+=r[e].chars;if(i>=Yg)continue;let a={start:s[n].start,end:s[n+1].end},c=s.map((e,t)=>t===n?a:e).filter((e,t)=>t!==n+1),{inPara:l,inSplice:u}=o(c),d=0,f=0,p=new Set;for(let e=a.start;e<=a.end;e++){d+=r[e].chars,f+=r[e].active;for(let t of r[e].splices)p.add(t)}let m=0,h=0,g=[];for(let e=0;e<r.length;e++)if(!l.has(e)){m+=r[e].chars,h+=r[e].active;for(let n of r[e].splices)u.has(n)||g.push(t[n].insLen)}if(d<qg||m<qg||f<=0||h<=0)continue;let _=d/f,v=m/h;if(_<e_*v)continue;let y=n_([...p].map(e=>t[e].insLen)),b=n_(g),x=1/0;for(let e=a.start;e<=a.end;e++)r[e].chars>=Qg&&(x=Math.min(x,r[e].burst));if(!(b<Zg||!t_(_,v,y,b,x))){s=c,e=!0;break}}}for(let e=!0;e;){e=!1;for(let n of s){for(let i of[n.start-1,n.end+1]){if(i<0||i>=r.length||s.some(e=>i>=e.start&&i<=e.end))continue;let a={start:Math.min(n.start,i),end:Math.max(n.end,i)},{inPara:c,inSplice:l}=o(s.map(e=>e===n?a:e)),u=0,d=0,f=new Set;for(let e=a.start;e<=a.end;e++){u+=r[e].chars,d+=r[e].active;for(let t of r[e].splices)f.add(t)}let p=0,m=0,h=[];for(let e=0;e<r.length;e++)if(!c.has(e)){p+=r[e].chars,m+=r[e].active;for(let n of r[e].splices)l.has(n)||h.push(t[n].insLen)}if(u<qg||p<qg||d<=0||m<=0)continue;let g=u/d,_=p/m;if(g<e_*_)continue;let v=r[i];if(!v.active)continue;{let e=v.chars/v.active,n=n_(v.splices.map(e=>t[e].insLen)),r=n_(h);if(!(e>=Gg*_||n>=$g*r&&e>=e_*_))continue}let y=n_([...f].map(e=>t[e].insLen)),b=n_(h),x=1/0;for(let e=a.start;e<=a.end;e++)r[e].chars>=Qg&&(x=Math.min(x,r[e].burst));if(b<Zg||!t_(g,_,y,b,x))continue;let S=!0;for(let e=a.start;e<=a.end;e++){let t=r[e];if(t.chars>=Qg&&t.active>0&&t.chars/t.active<=_){S=!1;break}}if(S){n.start=a.start,n.end=a.end,e=!0;break}}if(e)break}}let{inPara:c,inSplice:l}=o(s),u=0,d=0,f=[];for(let e=0;e<r.length;e++)if(!c.has(e)){u+=r[e].chars,d+=r[e].active;for(let n of r[e].splices)l.has(n)||f.push(t[n].insLen)}let p=d>0?u/d*1e3:0,m=n_(f);return s.map(e=>{let i=0,a=0,o=new Set;for(let t=e.start;t<=e.end;t++){i+=r[t].chars,a+=r[t].active;for(let e of r[t].splices)o.add(e)}return{firstNo:n[r[e.start].idx],lastNo:n[r[e.end].idx],chars:i,runTempo:a>0?i/a*1e3:0,restTempo:p,runBurst:n_([...o].map(e=>t[e].insLen)),restBurst:m}}).sort((e,t)=>e.firstNo-t.firstNo)}var i_=new Set(`just.very.really.quite.rather.almost.nearly.always.never.often.sometimes.still.even.again.perhaps.maybe.actually.simply.merely.truly.clearly.probably.possibly.certainly.usually.generally.particularly.especially.mainly.mostly.hardly.barely.exactly.entirely.completely.totally.fairly.somewhat.therefore.however.moreover.otherwise.anyway.though.although.whether.indeed.think.thinks.thought.said.says.saying.tell.tells.told.make.makes.made.take.takes.took.taken.give.gives.gave.given.gets.got.know.knows.knew.known.want.wants.wanted.need.needs.needed.seem.seems.seemed.look.looks.looked.come.comes.came.going.goes.went.gone.become.becomes.became.doing.done.used.using.having.being.thing.things.ways.kind.kinds.sort.sorts.something.anything.nothing.everything.someone.anyone.everyone.somewhere.anywhere.everywhere`.split(`.`)),a_=/[.?!]["'”’)\]]?$/;function o_(e){let t=``,n=[],r=!1;for(let i=0;i<e.length;i++){let a=e[i];if(a===`–`||a===`—`||a===`‑`||a===`-`?a=` `:a===`’`||a===`‘`?a=`'`:(a===`“`||a===`”`)&&(a=`"`),a===`	`||a===` `||a===`\xA0`){if(r)continue;a=` `,r=!0}else r=!1;t+=a,n.push(i)}return{text:t,map:n}}var s_=e=>o_(e).text.trim();function c_(e){let t=document.createElement(`details`);t.className=`report-note-read report-note-section`;let n=document.createElement(`summary`);return n.className=`report-note-read-label report-note-bar`,n.textContent=e,t.appendChild(n),t}var l_=80;function u_(e){let t=e.trim();if(t.length<=l_)return t;let n=t.slice(0,l_),r=n.lastIndexOf(` `);return(r>l_*.5?n.slice(0,r):n).replace(/[\s,;:.\u2013\u2014-]+$/,``)+`…`}var d_=5,f_=.15,p_=e=>e===` `||e===`
`||e===`\r`;function m_(e){let t=[],n=0;for(;n<e.length;){for(;n<e.length&&p_(e[n]);)n++;let r=n;for(;n<e.length&&!p_(e[n]);)n++;n>r&&t.push({w:e.slice(r,n),a:r})}return t}function h_(e,t){let n=m_(e);if(n.length<d_)return null;let r=m_(t),i=Math.max(1,Math.floor(n.length*f_));for(let e=0;e+n.length<=r.length;e++){let t=0,a=!0;for(let o=0;o<n.length;o++)if(n[o].w!==r[e+o].w){if(t<i&&Bg(n[o].w,r[e+o].w)){t++;continue}a=!1;break}if(a&&t){let t=r[e+n.length-1];return[r[e].a,t.a+t.w.length]}}return null}function g_(e){let t=[],n=[],r=[],i=null,a=[],o=[],s=[],c=[],l=[],u=[],d=[],f=[],p=new Map,m=0,h=``,g=()=>h,_=0;for(let v of e)if(v.type===`text-snapshot`){let e=Yn(v.doc);t.length=0;for(let n of e.split(``))t.push({c:n,kind:`h`,t:v.t??0});h=e,a=[],o.length=0,s.length=0,c.length=0,l.length=0,u.length=0}else if(v.type===`text-splice`){let e=v.source===`engine`?`e`:v.via===`workings`?`w`:v.pasted?`p`:v.unkeyed?`u`:`h`,m=r.length;if(r.push({t:v.t??0,dt:i===null?null:(v.t??0)-i,insLen:v.ins.length,...typeof v.span==`number`&&v.span>0?{span:v.span}:{},keyed:e===`h`&&v.via!==`move`&&v.ins.length>0,...v.via===`workings`?{via:!0}:{}}),i=v.t??0,e===`e`){let e=s_(v.ins);for(let t of n)!t.claimedLive&&e.includes(s_(t.note))&&(t.claimedLive=!0)}let y;if((e===`h`||e===`u`)&&v.via!==`move`&&(v.t??0)-_>=Pg){let e=g();for(let t=n.length-1;t>=0;t--){let r=n[t],i=(v.t??0)-r.t;if(i<=0||i>Fg||!r.anchorText.trim())continue;let a=e.indexOf(r.anchorText);if(a<0)continue;let o=e.lastIndexOf(`
`,a);o=o<0?0:o+1;let s=e.indexOf(`
`,a+r.anchorText.length);s<0&&(s=e.length);let c=s,l=r.summoned&&!r.claimedLive;if(l)for(let t=0;t<2;t++){let t=e.indexOf(`
`,s+1);s=t<0?e.length:t}if(l?v.at>=o&&v.at<=s+1&&!(v.at>=c&&v.ins.startsWith(`

`)):v.at>=o&&v.at<=s&&!(v.at===s&&v.ins.startsWith(`
`))){y=t;break}}}a=$n(a,v.at,v.del,v.ins.length);for(let e of o)e.at=Qn(e.at,v.at,v.del,v.ins);for(let e of s)e.at=Qn(e.at,v.at,v.del,v.ins);for(let e of c)e.at=Qn(e.at,v.at,v.del,v.ins);for(let e of f)e.at=Qn(e.at,v.at,v.del,v.ins);for(let e of p.values())e.at=Qn(e.at,v.at,v.del,v.ins);for(let e of l)e.at=Qn(e.at,v.at,v.del,v.ins);for(let e of u)e.at=Qn(e.at,v.at,v.del,v.ins);for(let e of d)e.at=Qn(e.at,v.at,v.del,v.ins);let b=t=>{let n=e=>!!e?.some(([e,n])=>t>=e&&t<e+n);return e===`w`?n(v.engineRuns)?`e`:n(v.pastedRuns)?`p`:`w`:v.via===`move`?n(v.engineRuns)?`e`:n(v.pastedRuns)?`p`:n(v.unkeyedRuns)?`u`:n(v.broughtRuns)?`w`:`h`:e};t.splice(v.at,v.del,...v.ins.split(``).map((e,t)=>({c:e,kind:b(t),t:v.t??0,si:m,...y===void 0?{}:{kp:y}}))),h=h.slice(0,v.at)+v.ins+h.slice(v.at+v.del);{let e=v.ins.length-v.del;for(let t of n)if(!(t.at<0||t.at<v.at)){if(t.at===v.at){v.del===0&&(t.at+=e);continue}t.at=t.at>=v.at+v.del?t.at+e:v.at}}e!==`e`&&(_=v.t??0)}else if(v.type===`mark`)a=er(a,v.kind,v.at,v.at+v.len,v.on);else if(v.type===`block-style`)o.push({at:v.at,kind:v.kind,level:v.level??1,seq:m++});else if(v.type===`block-align`)s.push({at:v.at,align:v.align,seq:m++});else if(v.type===`block-table`)f.push({at:v.at,kind:v.kind,seq:m++});else if(!nr(p,v,m++)){if(v.type===`block-list`)c.push({at:v.at,kind:v.kind,seq:m++});else if(v.type===`block-indent`)l.push({at:v.at,level:v.level,seq:m++});else if(v.type===`block-spacing`)u.push({at:v.at,kind:v.kind,seq:m++});else if(v.type===`block-rule`)d.push({at:v.at,seq:m++});else if(v.type===`note-shown`){let e=ed(v.note),t=g(),r=ed(t),i=new Set;for(let t of e)!r.has(t)&&!Rg(t,r)&&i.add(t);let a=nd(t),o=new Set;for(let e of nd(v.note))!a.has(e)&&!Rg(e,a)&&o.add(e);let s=-1,c=v.anchorText.trim();if(c){let e=t.indexOf(c);if(e>=0){let n=t.lastIndexOf(`
`,e);s=n<0?0:n+1}}n.push({note:v.note,anchorText:v.anchorText,t:v.t??0,summoned:v.summoned===!0,...v.grounds===`page`||v.grounds===`margin`||v.grounds===`web`?{grounds:v.grounds}:{},...Array.isArray(v.sources)&&v.sources.length?{sources:v.sources}:{},...Array.isArray(v.citations)&&v.citations.length?{citations:v.citations}:{},...v.corrects===!0?{corrects:!0}:{},claimed:!1,claimedLive:!1,transcribed:!1,survives:!1,reworked:!1,partlyStands:!1,derivedIn:[],introduced:i,introducedTokens:o,at:s,standsIn:-1,substanceIn:-1,corrected:!1,correctionWords:[],correctionIn:-1})}}return{chars:t,ledger:n,marks:a,blocks:o,aligns:s,lists:c,indents:l,spacings:u,rules:d,tables:f,images:[...p.values()].filter(e=>!e.gone),spliceMeta:r}}var __=`
  * { box-sizing: border-box; }
  html, body { margin:0; background:var(--desk);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Georgia,serif; }
  body { padding:4rem 5rem 5rem; }
  .report-sheet { max-width:980px; margin:0 auto; }
  .trunk-name { font-size:26px; color:var(--ink-text); opacity:.75; margin:0 0 2.4rem; }
  .report-eyebrow { font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    font-size:12px; letter-spacing:.14em; text-transform:uppercase; color:var(--accent);
    opacity:.85; margin:0 0 .4rem; }
  .report-title { font-size:30px; opacity:.85; margin:0 0 2.2rem; }
  .report-analysis { margin:-1.2rem 0 2.4rem; max-width:620px;
    background:var(--rep-panel); border-radius:8px; padding:.45rem 0;
    overflow:hidden;
    border:1px solid color-mix(in srgb, var(--ink-text) 14%, transparent); }
  .rep-why-slot { display:inline-block; width:15px; }
  .rep-why { appearance:none; padding:0; margin:0; width:12px; height:12px;
    border-radius:50%; background:none; font:inherit; font-size:9px;
    font-style:normal; line-height:1; text-align:center; vertical-align:1px;
    opacity:.5; color:color-mix(in srgb, var(--ink-text) 70%, transparent);
    border:1px solid color-mix(in srgb, var(--ink-text) 30%, transparent); }
  .rep-row-note[hidden] { display:none; }
  .report-analysis .rep-row { padding-left:.9rem; padding-right:.9rem; }
  .report-grid { margin:0; max-width:620px;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    color:var(--ink-text); }
  .report-grid + .report-grid { margin-top:1rem; }
  .report-ledger .rep-row { border-bottom:0; }
  .report-analysis .rep-band { background:var(--rep-stripe); }
  .report-ledger .rep-row-group {
    border-bottom:1px solid color-mix(in srgb, var(--ink-text) 9%, transparent); }
  /* The legibility pass (2026-08-12) — mirror of style.css: rank from
     size and weight, never from opacity; nothing meant to be read sits
     below ~.7. */
  .rep-row { display:grid; grid-template-columns:1fr auto; align-items:baseline;
    column-gap:18px; padding:.34rem 0;
    border-bottom:1px solid color-mix(in srgb, var(--ink-text) 9%, transparent); }
  .rep-row-label { font-size:14.5px; }
  .rep-row-value { font-variant-numeric:tabular-nums; font-size:16px; }
  .rep-row-group > .rep-row-label { font-weight:650; }
  .rep-row-group > .rep-row-value { font-size:20px; font-weight:650; }
  .rep-row-fact > .rep-row-label { font-weight:650; }
  .rep-row-fact > .rep-row-value { font-size:20px; font-weight:650; }
  .rep-row-sub { border-bottom:0; padding:.16rem 0; }
  .rep-row-sub > .rep-row-label { padding-left:24px; font-size:13.5px; opacity:.85; }
  .rep-row-sub > .rep-row-value { font-size:15px; opacity:.92; }
  .rep-row-inference { grid-template-columns:1fr auto; padding:.16rem 0 .5rem;
    border-bottom:1px solid color-mix(in srgb, var(--ink-text) 9%, transparent); }
  .rep-row-inference > .rep-row-label { padding-left:24px; font-size:13.5px;
    font-style:italic; opacity:.85; }
  .rep-row-inference > .rep-row-value { font-size:15px; font-style:italic; opacity:.92; }
  .rep-row-note { grid-column:1 / -1; padding-left:24px; margin-top:.15rem;
    font-size:12.5px; font-style:italic; opacity:.7; }
  /* Each swatch is a MINIATURE OF THE MARK the words wear on the page
     (2026-07-23, the gardener: "make it more clear which marking refers to
     which category") — the same highlight, underline, and left-rule, at
     legend size, so the key reads by resemblance, not by memory. */
  .rep-key::before { content:''; display:inline-block; box-sizing:border-box;
    width:26px; height:15px; margin-right:9px; vertical-align:-3px; }
  .rep-key-typed::before { border:1px solid color-mix(in srgb, var(--ink-text) 40%, transparent);
    border-radius:2px; } /* the unmarked baseline: an empty box */
  .rep-key-claimed::before { background:color-mix(in srgb, var(--accent) 22%, transparent);
    border-radius:2px; } /* the green highlight */
  .rep-key-pasted::before { border-bottom:2px dotted color-mix(in srgb, var(--ink-text) 70%, transparent); } /* dotted underline */
  .rep-key-brought::before { border-bottom:2px solid color-mix(in srgb, var(--ink-text) 70%, transparent); } /* solid underline */
  .rep-key-unkeyed::before { border-bottom:2px dashed color-mix(in srgb, var(--ink-text) 70%, transparent); } /* dashed underline */
  .rep-key-derived::before { border-left:3px dashed var(--accent); } /* the green dashed left-rule */
  .rep-key-tempo::before { border-left:3px dotted color-mix(in srgb, var(--ink-text) 60%, transparent); } /* the dotted rail, plain ink */
  /* THE MARGIN REMEMBERS THE KEY (2026-08-18) — mirror of style.css:
     pasted, unkeyed and the tempo rail have no card beside them, so a
     faint tag in the notes column repeats the key's miniature and word,
     once per contiguous stretch. */
  .rep-margin-tag { font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    font-size:11px; opacity:.7; letter-spacing:.02em;
    color:var(--ink-text); margin:0 0 .35rem; }
  .rep-margin-tag.inf { font-style:italic; }
  .rep-margin-tag .rep-key::before { width:18px; height:11px;
    margin-right:6px; vertical-align:-2px; }
  /* The essay wears the leaf's own paper (2026-08-12) — mirror of
     style.css: the padding is the sheet's margin, the ::before the sheet
     itself, stopping in the column gap so the notes keep the desk. */
  .report-body { display:grid; grid-template-columns:minmax(0,620px) 280px;
    column-gap:44px; align-items:start;
    position:relative; z-index:0; padding:40px 0 46px 40px; }
  .report-body::before { content:''; position:absolute; z-index:-1;
    top:0; left:0; bottom:0; right:290px;
    background:var(--paper); border-radius:2px; box-shadow:var(--shadow); }
  /* THE HORIZONTAL RULE (2026-08-20) — mirror of style.css */
  hr.report-rule { border:0;
    border-top:1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
    margin:1.1em 0 1.1em 10px; }
  .report-para { margin:0 0 .9em; padding-left:10px; border-left:2px solid transparent;
    color:var(--ink-text); font-size:15px; line-height:1.6; }
  /* Inline bold matches the page's semi-bold (2026-07-29) — scoped to the
     essay's paragraphs; the report's furniture keeps its weights. */
  .report-para strong, .report-para b { font-weight:600; }
  /* Inline code on the record matches the page's (2026-09-13): a monospace
     that lacks the key symbols, so ⌥ ⇧ ⌘ fall through to the system face —
     system-ui BEFORE the generic, or the thin Menlo keys come back. */
  .report-para code { font-family:Monaco,"PT Mono",Consolas,system-ui,-apple-system,"Segoe UI",monospace; font-size:0.92em; padding:0 0.25em; border-radius:3px; background:color-mix(in srgb, var(--ink-text) 7%, transparent); }
  /* STRIKE (2026-09-16) — the fourth mark, mirror of style.css: struck,
     still standing; the record never hides it. */
  .report-para s { text-decoration:line-through; text-decoration-thickness:1px;
    text-decoration-color:color-mix(in srgb, var(--ink-text) 60%, transparent); }
  /* LISTS AND INDENT (2026-08-02) — the same rules style.css carries, and
     they RIDE IN BOTH STYLESHEETS as every report rule must: forgetting
     one half silently strips the styling from the travelling record, and
     here that would mean a teacher reading a bulleted plan as flat prose.
     Per-line attributes, so the marker is drawn rather than carried; a
     numbered run counts itself by position among its neighbours. */
  .report-para[data-indent="1"] { padding-left:calc(10px + 2em); }
  .report-para[data-indent="2"] { padding-left:calc(10px + 4em); }
  .report-para[data-indent="3"] { padding-left:calc(10px + 6em); }
  .report-para[data-indent="4"] { padding-left:calc(10px + 8em); }
  .report-para[data-indent="5"] { padding-left:calc(10px + 10em); }
  .report-para[data-indent="6"] { padding-left:calc(10px + 12em); }
  .report-para[data-indent="7"] { padding-left:calc(10px + 14em); }
  .report-para[data-indent="8"] { padding-left:calc(10px + 16em); }
  .report-para[data-list] { position:relative; padding-left:calc(10px + 1.4em); }
  .report-para[data-list][data-indent="1"] { padding-left:calc(10px + 3.4em); }
  .report-para[data-list][data-indent="2"] { padding-left:calc(10px + 5.4em); }
  .report-para[data-list][data-indent="3"] { padding-left:calc(10px + 7.4em); }
  .report-para[data-list][data-indent="4"] { padding-left:calc(10px + 9.4em); }
  .report-para[data-list][data-indent="5"] { padding-left:calc(10px + 11.4em); }
  .report-para[data-list][data-indent="6"] { padding-left:calc(10px + 13.4em); }
  .report-para[data-list][data-indent="7"] { padding-left:calc(10px + 15.4em); }
  .report-para[data-list][data-indent="8"] { padding-left:calc(10px + 17.4em); }
  .report-para[data-list]::before { position:absolute; left:10px; width:1.4em; color:inherit; }
  .report-para[data-list][data-indent="1"]::before { left:calc(10px + 2em); }
  .report-para[data-list][data-indent="2"]::before { left:calc(10px + 4em); }
  .report-para[data-list][data-indent="3"]::before { left:calc(10px + 6em); }
  .report-para[data-list][data-indent="4"]::before { left:calc(10px + 8em); }
  .report-para[data-list][data-indent="5"]::before { left:calc(10px + 10em); }
  .report-para[data-list][data-indent="6"]::before { left:calc(10px + 12em); }
  .report-para[data-list][data-indent="7"]::before { left:calc(10px + 14em); }
  .report-para[data-list][data-indent="8"]::before { left:calc(10px + 16em); }
  .report-para[data-list="bullet"]::before { content:"\\2022"; }
  .report-para[data-list="dash"]::before { content:"\\2013"; }
  .report-para-cell { counter-reset:phloem-li; }
  .report-para-cell > *:not([data-list="ordered"]):not(figure) { counter-reset:phloem-li; }
  .report-para[data-list="ordered"] { counter-increment:phloem-li; }
  .report-para[data-list="ordered"]::before { content:counter(phloem-li) "."; }
  /* LINE SPACING (2026-08-03) — the same two numbers style.css carries,
     and here for the same reason every rule above it is: a teacher opening
     the travelling record of a double-spaced essay must see a
     double-spaced essay. Single is typographic single (1.2), double is
     twice it; 'natural' stores no attr and takes the .report-para leading
     above. Scoped to .report-para so it outranks that rule whatever the
     order — the same pairing style.css keeps. */
  .report-para[data-spacing="single"] { line-height:1.2; }
  .report-para[data-spacing="double"] { line-height:2.4; }
  /* THE TABLE ROW (2026-09-16) — mirror of style.css: cells as equal
     columns, quiet ink-mixed rules, consecutive rows sharing edges. */
  .report-para[data-table="row"] { display:grid; margin:0;
    border-top:1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
    border-left:1px solid color-mix(in srgb, var(--ink-text) 22%, transparent); }
  .report-para[data-table="row"] + .report-para[data-table="row"] { border-top:0; }
  .report-para[data-table="row"] .rep-cell { display:block; min-width:0; min-height:1.4em;
    padding:.25em .55em; overflow-wrap:anywhere;
    border-right:1px solid color-mix(in srgb, var(--ink-text) 22%, transparent);
    border-bottom:1px solid color-mix(in srgb, var(--ink-text) 22%, transparent); }
  .report-para[data-table="row"] .rep-kin-mark { grid-column:1 / -1; }
  .report-para[data-table="row"] + .report-para:not([data-table="row"]) { margin-top:.9em; }
  /* THE IMAGE (2026-09-16) — mirror of style.css: a named size, a named
     placement; a picture with the text beside it floats inside the
     paragraph that follows it. */
  figure.report-image { margin:.6em 0 .9em; padding-left:10px; counter-increment:none; }
  figure.report-image::before { content:none; }
  figure.report-image img, .rep-float img, .rep-pic img { display:block; width:100%; height:auto; border-radius:3px; }
  figure.report-image[data-size="tiny"], .rep-pic[data-size="tiny"], .rep-float[data-size="tiny"] { width:12.5%; }
  figure.report-image[data-size="small"], .rep-pic[data-size="small"] { width:33%; }
  figure.report-image[data-size="medium"], .rep-pic[data-size="medium"] { width:60%; }
  figure.report-image[data-size="full"], .rep-pic[data-size="full"] { width:100%; }
  figure.report-image[data-place="center"], .rep-pic[data-place="center"] { margin-left:auto; margin-right:auto; }
  figure.report-image[data-place="right"], .rep-pic[data-place="right"] { margin-left:auto; }
  .rep-pic { display:block; margin:.6em 0 .9em; }
  .rep-pic[data-place="inline"] { display:inline-block; vertical-align:bottom; margin:.1em .2em; }
  .rep-pic[data-place="wrap-left"] { float:left; margin:.15em 1em .5em 0; }
  .rep-pic[data-place="wrap-right"] { float:right; margin:.15em 0 .5em 1em; }
  .rep-pic[data-place^="wrap"][data-size="tiny"] { width:12.5%; }
  .rep-pic[data-place^="wrap"][data-size="small"] { width:33%; }
  .rep-pic[data-place^="wrap"][data-size="medium"] { width:50%; }
  .rep-pic[data-place^="wrap"][data-size="full"] { width:60%; }
  .rep-float { margin:.15em 0 .5em; }
  .rep-float[data-size="small"] { width:33%; }
  .rep-float[data-size="medium"] { width:50%; }
  .rep-float[data-size="full"] { width:60%; }
  .rep-float[data-place="wrap-left"] { float:left; margin-right:1em; }
  .rep-float[data-place="wrap-right"] { float:right; margin-left:1em; }
  .report-para { display:flow-root; }
  /* A heading on the page is a heading on the record (2026-07-24). Sized
     RELATIVE to the body text and kept below the report's own furniture: the
     record's structure must stay legible above the leaf's. */
  /* AN ASIDE (2026-09-14): a note or a warning set apart — a wash in ink
     that survives a black-and-white print, and never the left edge,
     which the derived rail and the tempo rail own. Same dress as the
     page; rides in BOTH stylesheets. */
  aside.report-para { background:color-mix(in srgb, var(--ink-text) 6%, transparent);
    border-radius:6px; padding:.55em .9em .55em 10px; margin:.4em 0 1.1em; }
  h1.report-para { font-size:21px; }
  h2.report-para { font-size:18px; }
  h3.report-para { font-size:16px; }
  .report-head { font-weight:650; line-height:1.35; margin:1.4em 0 .5em;
    letter-spacing:-.01em; }
  .report-para:first-child.report-head { margin-top:0; }
  .report-note-cell { font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
  .rep-claimed { background:color-mix(in srgb, var(--accent) 22%, transparent); border-radius:2px; }
  .rep-pasted { border-bottom:1px dotted color-mix(in srgb, var(--ink-text) 55%, transparent); }
  .rep-brought { border-bottom:1px solid color-mix(in srgb, var(--ink-text) 45%, transparent); }
  .rep-unkeyed { border-bottom:1px dashed color-mix(in srgb, var(--ink-text) 45%, transparent); }
  .rep-derived-para { border-left-color:var(--accent) !important; border-left-style:dashed !important; }
  /* A CHANGE OF TEMPO WEARS A MARK (2026-08-12, the gardener —
     superseding v1's no-body-mark): a dotted rail in plain ink, the
     writer's-own-hand family, never the engine's green. It stands
     INSIDE the paragraph's padding, its own pseudo-element, so a
     derived paragraph in a run wears both marks side by side. */
  .rep-tempo-para { position:relative; }
  .rep-tempo-para::before { content:''; position:absolute; left:4px;
    top:.15em; bottom:.15em; width:0;
    border-left:2px dotted color-mix(in srgb, var(--ink-text) 35%, transparent); }
  /* EVERY ¶ REFERENCE IS A DOOR (2026-08-12): quiet dotted links, and
     the paragraph a door lands on wears a brief neutral wash — :target
     serves the travelling record scriptlessly; .rep-jumped is the
     in-app glide's transient twin. Plain ink, never the accent: a
     green wash two inches from the claimed highlight would read as a
     fifth band. */
  .rep-jump { color:inherit; text-decoration:underline dotted;
    text-underline-offset:2px; }
  /* A LANDING LEAVES AIR ABOVE (2026-08-12, the gardener: a passage
     start flush with the viewport's top edge reads as the MIDDLE of
     something — the reader must SEE the start to know they are at it).
     One line's height of breathing room, honoured by the in-app glide
     and the export's fragment jump alike. */
  .report-para { scroll-margin-top:2.2rem; }
  .report-para:target, .report-para.rep-jumped {
    background:color-mix(in srgb, var(--ink-text) 6%, transparent);
    border-radius:4px; }
  /* THE WAY BACK (2026-08-12): hidden at rest, standing only on the
     paragraph the reader arrived at — :target serves the travelling
     record with no script (and print, where no :target stands, never
     shows a dead control); .rep-arrived is the in-app glide's mark,
     cleared by the next jump. */
  .rep-back { display:none; }
  .report-para:target .rep-back, .report-para.rep-arrived .rep-back {
    display:block; width:max-content; margin-top:.35em;
    font-size:11px; opacity:.55; }
  .rep-back:hover { opacity:1; }
  .rep-kin-mark { font-size:10px; color:var(--accent); user-select:none; }
  /* A sibling of the body since 2026-08-12 (the paper pass) — the old
     grid-column went with the move. */
  .report-tail { margin-top:2.4rem; padding-top:1.4rem;
    border-top:1px solid color-mix(in srgb, var(--ink-text) 12%, transparent);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; color:var(--ink-text); }
  .report-rail-title { font-size:12px; letter-spacing:.14em; opacity:.5; margin:0 0 .9rem; }
  .report-rail-title + .report-rail-title, .report-note + .report-rail-title { margin-top:1.8rem; }
  .report-rail-empty, .report-note-text { font-size:12.5px; font-style:italic;
    opacity:.75; line-height:1.45; }
  .report-note { margin:0 0 1rem; padding-left:10px;
    border-left:2px solid color-mix(in srgb, var(--accent) 45%, transparent); }
  .report-note-head { font-size:11px; letter-spacing:.04em; opacity:.6; margin-bottom:2px; }
  .report-note-declared { font-size:10.5px; font-style:italic; opacity:.55;
    letter-spacing:.02em; margin:1px 0 2px; }
  /* THE PAGES IT READ (2026-08-10) — upright and unitalicised, which is
     the whole distinction: the declared line above is the note's own
     account and wears the inference dress, this is evidence and wears
     the report's own. Same faintness, so neither shouts. */
  .report-note-read { font-size:11px; opacity:.75; margin:2px 0 3px; }
  .report-note-read-label { letter-spacing:.04em; }
  .report-note-source { margin-left:9px; }
  .report-note-source-title::before { content:'· '; opacity:.6; }
  .report-note-source-url { display:block; margin-left:9px; opacity:.6;
    word-break:break-all; }
  /* the 'quoted' shape's evidence — the source's own sentence, italic
     because it is somebody else's, with its page beneath */
  .report-note-quote { font-size:10.5px; opacity:.7; margin:2px 0 0 9px;
    font-style:italic; }
  .report-note-cite { margin-top:3px; }
  a.note-url { color:inherit; text-decoration:none; cursor:pointer; }
  a.note-url:hover { text-decoration:underline; opacity:1; }
  .report-note-section { border-top:1px solid var(--line,rgba(0,0,0,.08)); margin-top:4px; }
  /* the bar is a control and dresses as one (2026-08-12) — mirror of
     style.css: the arrow LEADS the label (the OS's folder grammar), and
     the bar carries its own size and weight, a step above the rows it
     hides — it is the one part of the block that must be found */
  .report-note-bar { list-style:none; cursor:pointer; display:flex; align-items:center;
    gap:6px; padding:5px 0 4px;
    font-size:12px; font-weight:600; letter-spacing:.03em; opacity:.85; }
  .report-note-bar::-webkit-details-marker { display:none; }
  .report-note-bar::before { content:'\\203A'; font-size:18px; font-weight:400;
    line-height:1; color:color-mix(in srgb, var(--accent) 45%, transparent); }
  .report-note-section[open] > .report-note-bar::before { transform:rotate(90deg); }
  /* THE LEDGER SUMMARY SHIPS SHUT (2026-08-20) — mirror of style.css */
  .rep-ledger-bar { list-style:none; cursor:pointer; display:flex;
    align-items:baseline; gap:8px; padding-left:.9rem; padding-right:.9rem; }
  .rep-ledger-bar::-webkit-details-marker { display:none; }
  .rep-ledger-bar::before { content:'\\203A'; font-size:18px; font-weight:400;
    line-height:1; align-self:center;
    color:color-mix(in srgb, var(--accent) 45%, transparent);
    transition:transform .15s ease-out; }
  .rep-ledger-fold[open] > .rep-ledger-bar::before { transform:rotate(90deg); }
  .rep-ledger-bar > .rep-row { flex:1 1 auto; padding-left:0; padding-right:0;
    border-bottom:0; }
  .rep-ledger-fold[open] > .rep-ledger-bar {
    border-bottom:1px solid color-mix(in srgb, var(--ink-text) 9%, transparent); }
  .report-note.has-mark { display:flex; align-items:flex-start; gap:7px; }
  .note-body { min-width:0; flex:1 1 auto; }
  .report-note-quote-src { display:block; font-style:normal; opacity:.6;
    margin-left:9px; word-break:break-all; }
  .report-note-fold > summary { list-style:none; cursor:pointer; }
  .report-note-fold > summary::-webkit-details-marker { display:none; }
  .report-note-fold:not([open]) > summary > .report-note-text {
    display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;
    overflow:hidden; }
  .report-note-fold:not([open]) > summary::after { content:' \\203A more';
    font-size:13px; font-weight:600; font-style:normal; letter-spacing:.04em;
    color:color-mix(in srgb, var(--accent) 45%, transparent); }
  .report-attest { margin-top:3rem;
    font-family:"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;
    font-size:11px; color:var(--ink-text); opacity:.55; }
  .report-attest.bad { color:#b23c31; opacity:1; font-weight:600;
    margin:0 0 2rem; /* broken leads: it stands at the TOP of the sheet */
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; font-size:13px; }
  .report-foot { margin-top:.6rem;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    font-size:11.5px; color:var(--ink-text); opacity:.4; }
  .report-about { margin:0 0 2.6rem; padding:1.1rem 1.3rem;
    background:color-mix(in srgb, var(--accent) 7%, transparent);
    border:1px solid color-mix(in srgb, var(--accent) 30%, transparent);
    border-radius:8px;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    color:var(--ink-text); max-width:760px; }
  .report-about-title { font-size:12px; letter-spacing:.14em;
    text-transform:uppercase; opacity:.55; margin:0 0 .8rem; }
  .report-about dl { margin:0; display:grid;
    grid-template-columns:max-content 1fr; gap:.5rem 1.1rem; }
  .report-about dt { font-weight:650; font-size:12.5px; opacity:.7; }
  .report-about dd { margin:0; font-size:13px; line-height:1.5; opacity:.85; }
  .report-about code { font-family:"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;
    font-size:.9em; }
  /* Raised from 760px with the paper pass (2026-08-12), mirroring the
     collapse style.css gained the same day: between 760 and 940 the
     fixed notes column was crushing the essay to a ribbon — the one
     column that must never give way giving way first. */
  @media (max-width:940px) { body { padding:2rem 1.2rem; }
    /* one column: the notes flow under their paragraphs, so the paper
       spans the whole grid rather than stopping short of a column that
       no longer stands beside it */
    .report-body { grid-template-columns:1fr; padding:22px 18px 28px; }
    .report-body::before { right:0; }
    .report-note-cell { padding:0 0 .8rem 10px; }
    .report-about dl { grid-template-columns:1fr; gap:.15rem 0; }
    .report-about dt { margin-top:.6rem; } }
  /* THE SEALED-RECORD FOLD (2026-08-12; a <pre> since 2026-08-13, so
     find-in-page can reach it): the embedded JSON block, wrapped in a
     shut <details> so a teacher can READ the evidence the file
     carries — one copy, two readers. The pre wears NO display rule of
     its own at rest — the shut details does the hiding, and
     author-hidden text is invisible to Cmd-F, which must spring this
     fold open on a match. EXPORT-ONLY on purpose: the element exists
     in no other surface, so nothing rides in style.css (the mirror of
     the note reader's recorded exception). */
  .report-evidence-fold { margin-top:2.2rem; }
  .report-evidence-fold > summary { cursor:pointer;
    font-family:"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;
    font-size:11px; color:var(--ink-text); opacity:.55; }
  .report-evidence-fold[open] > summary { opacity:.8; }
  .report-evidence-fold > pre {
    margin:.7rem 0 0; padding:.9rem 1rem;
    font-family:"SF Mono",SFMono-Regular,Menlo,Consolas,monospace;
    font-size:10px; line-height:1.5; color:var(--ink-text); opacity:.8;
    white-space:pre-wrap; overflow-wrap:anywhere;
    background:color-mix(in srgb, var(--ink-text) 4%, transparent);
    border:1px solid color-mix(in srgb, var(--ink-text) 12%, transparent);
    border-radius:6px; }
  @media print { body { background:#fff; padding:0; }
    .report-about { break-inside:avoid; }
    /* the paper panel is for the screen: on a printed page everything
       is already paper, and a printed drop shadow is a grey smear */
    .report-body { padding:0; }
    .report-body::before { display:none; }
    /* the fold stays SHUT on paper even when open on screen (the
       gardener's ruling): the summary line prints, the log does not */
    .report-evidence-fold > pre { display:none !important; }
    /* interaction words die on paper: a shut note prints its two-line
       clip (the priced trade of the 2026-08-12 ships-shut ruling), but
       'more' and the disclosure arrow are instructions to a hand */
    .report-note-fold:not([open]) > summary::after { content:none; }
    .report-note-bar::before { content:none; }
    .rep-ledger-bar::before { content:none; } }
`;function v_(){let e=document.createElement(`div`);e.id=`report`,document.body.appendChild(e);function n(){s++,e.classList.remove(`show`),window.setTimeout(()=>{e.classList.contains(`show`)||(e.textContent=``)},400)}let r=null,i=``,a=[],o=null,s=0;async function c(){tm();let c=++s;e.textContent=``;let l=document.createElement(`div`);l.className=`report-loading`,l.textContent=`reading how it came to be…`,e.appendChild(l),e.classList.add(`show`);let u=await Hn();if(c!==s)return;let{chars:d,ledger:f,marks:p,blocks:m,aligns:h,lists:g,indents:_,spacings:v,rules:y,tables:b,images:x,spliceMeta:S}=g_(u),C=[];{let e=e=>({text:``,kinds:[],kps:[],sis:[],latestHumanT:0,kin:null,kinKind:null,kinWords:[],kinTokens:[],start:e,heading:0,aside:!1,align:null,list:null,indent:0,spacing:null,rule:!1,table:!1,image:null,floatImage:null,pics:[]}),t=e(0),n=0;for(let r of d){if(n++,r.c===`
`){C.push(t),t=e(n);continue}t.text+=r.c,t.kinds.push(r.kind),t.kps.push(r.kp),t.sis.push(r.si),(r.kind===`h`||r.kind===`u`)&&(t.latestHumanT=Math.max(t.latestHumanT,r.t))}C.push(t);let r=e=>{for(let t=0;t<C.length;t++){let n=C[t].start;if(e>=n&&e<=n+C[t].text.length)return t}return e<0?0:C.length-1},i=new Map;for(let e of m){let t=r(e.at);(i.get(t)??-1)<=e.seq&&(i.set(t,e.seq),C[t].heading=e.kind===`heading`?e.level:0,C[t].aside=e.kind===`aside`)}let a=new Map;for(let e of h){let t=r(e.at);(a.get(t)??-1)<=e.seq&&(a.set(t,e.seq),C[t].align=e.align===`left`?null:e.align)}let o=new Map;for(let e of g){let t=r(e.at);(o.get(t)??-1)<=e.seq&&(o.set(t,e.seq),C[t].list=e.kind===`none`?null:e.kind)}let s=new Map;for(let e of _){let t=r(e.at);(s.get(t)??-1)<=e.seq&&(s.set(t,e.seq),C[t].indent=Math.max(0,Math.min(8,Math.floor(e.level))))}let c=new Map;for(let e of v){let t=r(e.at);(c.get(t)??-1)<=e.seq&&(c.set(t,e.seq),C[t].spacing=e.kind===`natural`?null:e.kind)}for(let e of y)C[r(e.at)].rule=!0;let l=new Map;for(let e of b){let t=r(e.at);(l.get(t)??-1)<=e.seq&&(l.set(t,e.seq),C[t].table=e.kind===`row`)}let u=new Map;for(let e of x){let t=r(e.at);if(C[t].text.trim()){e.inline&&C[t].pics.push({img:e,off:Math.max(0,Math.min(C[t].text.length,e.at-C[t].start))});continue}(u.get(t)??-1)<=e.seq&&(u.set(t,e.seq),C[t].image=e)}for(let e=0;e<C.length;e++){let t=C[e].image;if(!t||!t.place.startsWith(`wrap`))continue;let n=C.findIndex((t,n)=>n>e&&t.text.trim()&&!t.table);n<0||(C[n].floatImage=t,C[e].image=null)}}let w=C.map(e=>e.text).join(`
`),T=s_(w),E=[];{let e=0;for(let t of C)E.push(t.text.trim()?++e:0)}let D=[];{let e=0;for(let t of u)t.type===`text-splice`&&(t.source===`engine`&&D.push({si:e,ins:t.ins}),e++)}for(let e of f){let t=s_(e.note);if(!t)continue;let n=new Set(D.filter(({ins:e})=>s_(e).includes(t)).map(({si:e})=>e));if(e.claimed=n.size>0,e.survives=T.includes(t)||h_(t,T)!==null,e.claimed&&!e.survives){for(let t=0;t<C.length&&!e.partlyStands;t++){let r=C[t],i=0;for(let a=0;a<=r.kinds.length;a++)if(a<r.kinds.length&&r.kinds[a]===`e`&&r.sis[a]!==void 0&&n.has(r.sis[a])){if(i++,i>=Hg){e.partlyStands=!0,e.standsIn<0&&(e.standsIn=t);break}}else i=0}let t=ed(e.note),r=0,i=ed(w);for(let e of t)i.has(e)&&r++;if(e.reworked=t.size>0&&r/t.size>=Vg,e.reworked){let n=-1,r=0;for(let e=0;e<C.length;e++){if(!C[e].text.trim())continue;let i=ed(C[e].text),a=0;for(let e of t)i.has(e)&&a++;let o=a/t.size;o>r&&(r=o,n=e)}r>=Vg&&(e.substanceIn=n)}}if(e.survives)for(let n=0;n<C.length;n++){let r=C[n],{text:i,map:a}=o_(r.text),o=(t,n)=>{let i=a[t],o=a[n-1]+1,s=!1;for(let e=i;e<o;e++)r.kinds[e]!==`e`&&(s=!0),r.kinds[e]=`e`;s&&(e.transcribed=!0)},s=i.indexOf(t);if(s>=0){for(e.standsIn<0&&(e.standsIn=n);s>=0;)o(s,s+t.length),s=i.indexOf(t,s+1);continue}let c=h_(t,i);c&&(e.standsIn<0&&(e.standsIn=n),o(c[0],c[1]))}}for(let e of f){if(!e.corrects||e.at<0)continue;let t=-1;for(let n=0;n<C.length;n++)C[n].start<=e.at&&(t=n);if(t<0)continue;let n=C[t].text;if(id(e.anchorText,[n],0)!==0)continue;let r=nd(e.anchorText),i=nd(n),a=[...i].filter(e=>!r.has(e)),o=[];for(let t of nd(e.note)){if(r.has(t))continue;if(i.has(t)){o.push({word:t});continue}let e=a.find(e=>Bg(t,e));e&&o.push({word:t,written:e})}let s=[...nd(e.note)];for(let e=0;e<s.length;e++)for(let t=e+1;t<s.length;t++){let[n,a]=[s[e],s[t]];if(!Bg(n,a)||!r.has(n)||!r.has(a))continue;let c=i.has(n);c!==i.has(a)&&o.push(c?{word:n,settled:a}:{word:a,settled:n})}o.length&&(e.corrected=!0,e.correctionWords=o,e.correctionIn=t)}for(let e=0;e<C.length;e++){let t=C[e];if(!(t.kinds.includes(`h`)||t.kinds.includes(`u`))||t.kinds.includes(`e`))continue;let n=ed(t.text);for(let r=f.length-1;r>=0;r--){let i=f[r];if(i.introduced.size===0||i.corrected||t.latestHumanT<=i.t||s_(t.text).includes(s_(i.note)))continue;let a=[];for(let e of i.introduced)n.has(e)&&a.push(e);if(a.length>=Ng&&a.length/i.introduced.size>=Mg){t.kin=r,t.kinKind=`lexical`,t.kinWords=a,i.derivedIn.push(E[e]);break}}}for(let e=0;e<C.length;e++){let t=C[e];if(!t.text.trim()||t.kin!==null||t.kinds.includes(`e`))continue;let n=new Map;for(let e of t.kps)e!==void 0&&!f[e].corrected&&(f[e].summoned||a_.test(f[e].anchorText.trim()))&&n.set(e,(n.get(e)??0)+1);if(!n.size)continue;let r=[...n.keys()].sort((e,t)=>t-e)[0],i=nd(t.text),a=[...f[r].introducedTokens].filter(e=>i.has(e)&&!i_.has(e));a.length<Wg(f[r].introducedTokens.size)||(t.kin=r,t.kinKind=`positional`,t.kinTokens=a,f[r].derivedIn.push(E[e]))}let ee=0,O=0,k=0,te=0,ne=0,A=0;for(let e of C)for(let t=0;t<e.kinds.length;t++){let n=e.kinds[t];n===`e`?ne++:n===`p`?O++:n===`w`?te++:n===`u`?(k++,e.kin!==null&&A++):(ee++,e.kin!==null&&A++)}let j=ee+O+k+te+ne,re=r_(C,S,E),ie=new Set(S.map((e,t)=>e.via?t:-1).filter(e=>e>=0)),[ae,oe,se,M,ce]=(()=>{let e=[ee,k,O,te,ne],t=[0,0,0,0,0];if(!j)return t;let n=[],r=0;for(let i=0;i<e.length;i++){let a=e[i]*100/j;t[i]=Math.floor(a),r+=t[i],n.push({i,f:a-t[i]})}n.sort((e,t)=>t.f-e.f||e.i-t.i);for(let e=0;e<100-r;e++)t[n[e].i]+=1;return t})(),le=(e,t)=>!j||t<=0?`0%`:e===0?`<1%`:e===100&&t<j?`>99%`:`${e}%`;e.textContent=``;let ue=document.createElement(`button`);ue.type=`button`,ue.className=`place-shade`,ue.textContent=`the leaf`,ue.title=`the page this report speaks for — click to return`,t(ue,()=>{n()}),e.appendChild(ue);let N=document.createElement(`div`);N.className=`report-sheet`,N.id=`rtop`,e.appendChild(N),r=N,a=re.map(e=>({firstNo:e.firstNo,lastNo:e.lastNo}));{let e=u.map(e=>e.t).filter(e=>!!e),t=[...new Set(u.map(e=>typeof e.author==`string`?e.author:``).filter(Boolean))];o={authors:t.length?t:[`the gardener`],firstT:e.length?Math.min(...e):0,lastT:e.length?Math.max(...e):0,events:u.length,head:u[u.length-1]?.hash??null}}let P=``;for(let e of u)e.type===`leaf-rename`&&(P=e.name.trim());let F=P||C.find(e=>e.text.trim())?.text||`(a blank leaf)`;i=F;let de=document.createElement(`div`);de.className=`report-eyebrow`,de.textContent=`how it came to be`,N.appendChild(de);let fe=document.createElement(`div`);fe.className=`trunk-name report-title`,fe.textContent=u_(F),N.appendChild(fe);let I=document.createElement(`div`);I.className=`report-analysis`;let pe=document.createElement(`div`);pe.className=`report-grid`;let L=ee+k,me=(()=>{if(!L||A<=0)return`0%`;let e=Math.round(A/L*100);return e===0?`<1%`:e===100&&A<L?`>99%`:`${e}%`})(),he=e=>{let t=document.createElement(`a`);return t.className=`rep-jump`,t.href=`#rp${e}`,t.textContent=`¶${e}`,t},ge=e=>(t,n,r,i,a)=>{let o=document.createElement(`div`);o.className=`rep-row ${t}`;let s=document.createElement(`span`);s.className=`rep-row-label`;let c=document.createElement(`span`);if(c.className=`rep-why-slot`,s.appendChild(c),i){let e=document.createElement(`span`);e.className=`rep-key rep-key-${i}`,s.appendChild(e)}s.appendChild(document.createTextNode(n));let l=document.createElement(`span`);if(l.className=`rep-row-value`,l.textContent=r,o.append(s,l),a){let e=document.createElement(`span`);e.className=`rep-row-note rep-row-why-note`,e.textContent=a,e.hidden=!0;let t=document.createElement(`button`);t.type=`button`,t.className=`rep-why`,t.textContent=`?`,t.title=a,t.setAttribute(`aria-label`,`what “${n}” means`),t.setAttribute(`aria-expanded`,`false`),t.addEventListener(`click`,n=>{n.preventDefault(),n.stopPropagation();let r=!!e.hidden;e.hidden=!r,t.classList.toggle(`open`,r),t.setAttribute(`aria-expanded`,String(r))}),c.appendChild(t),o.appendChild(e)}return e.appendChild(o),o},_e=e=>(t,n,r,i)=>{let a=document.createElement(`div`);a.className=`rep-row rep-row-inference`;let o=document.createElement(`span`);o.className=`rep-row-label`;let s=document.createElement(`span`);if(s.className=`rep-why-slot`,o.appendChild(s),i){let e=document.createElement(`span`);e.className=`rep-key rep-key-${i}`,o.appendChild(e)}for(let e of typeof t==`string`?[t]:t)o.append(e);let c=document.createElement(`span`);c.className=`rep-row-value`,c.textContent=n;let l=document.createElement(`span`);return l.className=`rep-row-note`,l.textContent=r,a.append(o,c,l),e.appendChild(a),a},ve=ge(pe),ye=()=>{let e=0;return(...t)=>{if(++e%2)for(let e of t)e.classList.add(`rep-band`)}},be=ye(),xe=ee>0&&k>0,Se=[];xe?Se.push(ve(`rep-row-group`,`the writer’s own hand`,le(ae+oe,L)),ve(`rep-row-sub`,`typed`,le(ae,ee),`typed`),ve(`rep-row-sub`,`unkeyed`,le(oe,k),`unkeyed`,`arrived with no keystroke behind it — dictation, or an OS text replacement. A fact about keys, never a claim about the source.`)):k>0?Se.push(ve(`rep-row-fact`,`unkeyed`,le(oe,k),`unkeyed`,`arrived with no keystroke behind it — dictation, or an OS text replacement. A fact about keys, never a claim about the source.`)):Se.push(ve(`rep-row-fact`,`typed`,le(ae,ee),`typed`)),A&&Se.push(_e(pe)(xe?`↳ of these, read as derived`:`↳ of this, read as derived`,`≈${me}`,`an inference, not a fact — shared vocabulary, or writing at a note’s side after a pause; the evidence stands beside each paragraph it marks`,`derived`));for(let e of re){let t=(()=>{let t=Math.round(e.chars/Math.max(1,L)*100);return t===0?`<1%`:t===100&&e.chars<L?`>99%`:`${t}%`})(),n=e.firstNo===e.lastNo?[he(e.firstNo)]:[he(e.firstNo),`–`,he(e.lastNo)];if(e.firstNo!==e.lastNo){let t=document.createElement(`a`);t.className=`rep-jump`,t.href=`#rp${e.firstNo}`,t.dataset.span=`${e.firstNo}-${e.lastNo}`,t.textContent=`the whole passage`,n.push(` · `,t)}Se.push(_e(pe)([`↳ ≈ a change of tempo, `,...n],`≈${t}`,`typed at ${e.runTempo.toFixed(1)} characters a second in bursts of ${Math.round(e.runBurst)} (median), where the rest of this leaf ran ${e.restTempo.toFixed(1)} in bursts of ${Math.round(e.restBurst)} — an inference from the log's burst timing, never a claim about the source`,`tempo`))}if(be(...Se),O&&be(ve(`rep-row-fact`,`pasted — arrived whole, origin unknown`,le(se,O),`pasted`)),te&&be(ve(`rep-row-fact`,`brought — from the workings, the writer’s own draft`,le(M,te),`brought`,`the crossing gesture carried these words from the writer’s own private draft leaf; the crossing is recorded on both leaves, each naming the other’s sealed state. How the words came to be written in that draft is its own sealed record — which stays hers, producible by her choice.`)),be(ve(`rep-row-fact`,`claimed — taken from the margin, still standing`,le(ce,ne),`claimed`)),I.appendChild(pe),f.length){let e=document.createElement(`details`);e.className=`rep-ledger-fold`;let t=document.createElement(`summary`);t.className=`rep-ledger-bar`,e.appendChild(t);let n=document.createElement(`div`);n.className=`report-grid report-ledger`;let r=ge(n),i=_e(n);e.appendChild(n);let a=new Map;for(let e of f){let t=Ag(e);a.set(t,(a.get(t)??0)+1)}let o=e=>a.get(e)??0;ge(t)(`rep-row-group`,`the margin offered`,`${f.length} note${f.length===1?``:`s`}`);let s=f.filter(e=>e.summoned).length;r(`rep-row-sub`,[f.length-s?`${f.length-s} volunteered`:``,s?`${s} summoned`:``].filter(Boolean).join(` · `),``);let c=ye();for(let[e,t,n]of[[`claimed`,`claimed, still standing`],[`transcribed`,`transcribed by hand`,`its words stand on the page, but arrived by typing or pasting rather than a claim gesture — a mechanical string match, not a suspicion`],[`removed`,`claimed, later removed`,`taken, then taken off the page again — an accidental claim never stains the essay`],[`untaken`,`shown, not taken`]])o(e)&&c(r(`rep-row-sub`,t,String(o(e)),void 0,n));o(`edited`)&&c(i(`claimed, later edited`,`≈${o(`edited`)}`,`the claim no longer stands whole — part of it still stands on the page (a fact from the log), or its substance survives in the writer’s own words (an inference, the ≈); each card below says which`)),o(`corrected`)&&c(i(`offered a correction, and the line took it`,`≈${o(`corrected`)}`,`an inference — the note declared itself a correction, and the line it was speaking to now carries a word it did not have before and the note used`)),o(`derived`)&&c(i(`read as derived`,`≈${o(`derived`)}`,`an inference — never taken, but a paragraph beside it shares the words it introduced, or was written at its side after a pause`)),I.appendChild(e)}N.appendChild(I);let Ce=document.createElement(`div`);Ce.className=`report-body`,N.appendChild(Ce);let we=(e,t,n=0)=>{let r=document.createElement(`div`);r.className=`report-note`;let i=document.createElement(`div`);i.className=`report-note-head`;let a=Ag(e),o=a===`claimed`?`claimed`:a===`edited`?e.partlyStands?`claimed, later edited — part of it still standing`:`claimed, later edited — ≈ its substance survives`:a===`removed`?`claimed, later removed`:a===`transcribed`?`transcribed`:a===`corrected`?`the line took it — `+e.correctionWords.map(e=>e.written?`“${e.word}” (written “${e.written}”)`:e.settled?`“${e.word}” (in place of “${e.settled}”)`:`“${e.word}”`).join(`, `):a===`derived`?`derived at `:`shown, not taken`;i.append(`${t+1} · ${e.summoned?`summoned`:`volunteered`} · ${o}`),a===`derived`&&e.derivedIn.forEach((e,t)=>{t&&i.append(`, `),i.append(he(e))}),n&&(i.append(` · shown against `),i.append(he(n)));let s=i.textContent??``,c=document.createElement(`div`);c.className=`note-body`,r.appendChild(c),c.appendChild(i);let l=[],u;if(e.grounds&&!e.sources?.length||e.corrects){let t=document.createElement(`div`);t.className=`report-note-declared`;let n=[];e.grounds&&!e.sources?.length&&n.push(e.grounds===`web`?`grounds: it searched the web`:e.grounds===`margin`?`grounds: not from the page — no source given`:`grounds: the page itself`),e.corrects&&n.push(`a correction`),u=`by its own account — ${n.join(` · `)}`,t.textContent=u,l.push(t)}if(e.citations?.length){let t=c_(e.citations.length===1?`what the source says`:`what the sources say`);for(let n of e.citations){let e=document.createElement(`div`);e.className=`report-note-cite`;let r=document.createElement(`div`);r.className=`report-note-quote`,r.textContent=`“${n.quote}”`;let i=document.createElement(`span`);i.className=`report-note-quote-src`,i.textContent=gg(n);let a=vg(n.url);a.classList.add(`report-note-source-url`),e.append(r,i,a),t.appendChild(e)}l.push(t)}if(e.sources?.length){let t=c_(e.sources.length===1?`the page it read`:`the ${e.sources.length} pages it read`);for(let n of e.sources){let e=document.createElement(`div`);e.className=`report-note-source`;let r=document.createElement(`span`);r.className=`report-note-source-title`,r.textContent=gg(n);let i=vg(n.url);i.classList.add(`report-note-source-url`),e.appendChild(r),e.appendChild(i),t.appendChild(e)}l.push(t)}let d=document.createElement(`div`);if(d.className=`report-note-text`,d.textContent=e.note,r.classList.add(`has-mark`),r.insertBefore(yg(()=>Eg({head:s,note:e.note,declared:u,citations:e.citations,sources:e.sources})),c),e.note.length>jg||l.length){let e=document.createElement(`details`);e.className=`report-note-fold`;let t=document.createElement(`summary`);t.appendChild(d),e.appendChild(t);for(let t of l)e.appendChild(t);c.appendChild(e)}else c.appendChild(d);return r},Te=new Map;C.forEach((e,t)=>{E[t]&&Te.set(E[t],t)});let Ee=[];{let e=0;for(let t of C)Ee.push(e),e+=t.text.length+1}let De=e=>{if(e.standsIn>=0)return e.standsIn;if(e.substanceIn>=0)return e.substanceIn;if(e.derivedIn.length){let t=Te.get(e.derivedIn[0]);if(t!==void 0)return t}if(e.at>=0){let t=-1;for(let n=0;n<C.length;n++)Ee[n]<=e.at&&(t=n);if(t>=0){let n=ed(e.anchorText);if(!n.size)return t;let r=ed(C[t].text);for(let e of n)if(r.has(e))return t}}let t=e.anchorText.trim();if(t){for(let e=0;e<C.length;e++)if(C[e].text.trim()===t)return e}return-1},Oe=new Map,ke=[],Ae=[];f.forEach((e,t)=>{let n=De(e),r=Ag(e)===`untaken`,i=we(e,t,r&&n>=0?E[n]:0);r?Ae.push(i):n<0?ke.push(i):(Oe.get(n)??Oe.set(n,[]).get(n)).push(i)});let je=!1,Me=!1,Ne=!1,Pe=!1;C.forEach((e,t)=>{let n=e.rule&&!e.text.trim(),r=e.text.trim()?null:e.image,i=document.createElement(n?`hr`:r?`figure`:e.heading?`h${Math.min(e.heading,3)}`:e.aside?`aside`:`p`);i.className=n?`report-para report-rule`:r?`report-para report-image`:e.heading?`report-para report-head`:e.aside?`report-para report-aside`:`report-para`;let a=(e,t)=>{t.dataset.size=e.size,t.dataset.place=e.place;let n=document.createElement(`img`);n.src=tr(e),n.alt=e.name,e.w&&(n.width=e.w),e.h&&(n.height=e.h),n.title=e.name?`${e.name} — a picture the writer placed here`:`a picture the writer placed here`,t.appendChild(n)};if(r&&a(r,i),e.floatImage){let t=document.createElement(`figure`);t.className=`rep-float`,a(e.floatImage,t),i.appendChild(t)}let o=E[t];if(o){i.id=`rp${o}`;let e=re.find(e=>o>=e.firstNo&&o<=e.lastNo);e&&(i.classList.add(`rep-tempo-para`),i.dataset.run=String(e.firstNo))}e.align&&(i.style.textAlign=e.align),e.list&&!e.heading&&(i.dataset.list=e.list),e.indent&&(i.dataset.indent=String(e.indent)),e.spacing&&(i.dataset.spacing=e.spacing);let s=e.table&&!e.heading&&!e.aside&&!n;if(s&&(i.dataset.table=`row`,i.style.gridTemplateColumns=`repeat(${e.text.split(`	`).length},minmax(0,1fr))`),!e.text.trim())!n&&!r&&i.classList.add(`report-blank`);else{e.kinds.includes(`e`)?i.classList.add(`rep-claimed-para`):e.kin!==null&&i.classList.add(`rep-derived-para`);let n=[],r=[],o=[],c=[];for(let t=0;t<e.text.length;t++){let i=e.start+t,a=!1,s=!1,l=!1,u=!1;for(let e of p)i<e.start||i>=e.end||(e.kind===`strong`?a=!0:e.kind===`code`?l=!0:e.kind===`strike`?u=!0:s=!0);n.push(a),r.push(s),o.push(l),c.push(u)}let l=(e,t,n,r,i=!1,a=!1)=>{let o=document.createTextNode(e);if(a){let e=document.createElement(`s`);e.appendChild(o),o=e}if(i){let e=document.createElement(`code`);e.appendChild(o),o=e}if(r){let e=document.createElement(`em`);e.appendChild(o),o=e}if(n){let e=document.createElement(`strong`);e.appendChild(o),o=e}if(t===`h`)return o;let s=document.createElement(`span`);return s.className=t===`e`?`rep-claimed`:t===`u`?`rep-unkeyed`:t===`w`?`rep-brought`:`rep-pasted`,s.appendChild(o),s},u=(t,i,a)=>{let s=i;for(let u=i+1;u<=a;u++)u<a&&e.kinds[u]===e.kinds[s]&&n[u]===n[s]&&r[u]===r[s]&&o[u]===o[s]&&c[u]===c[s]||(t.appendChild(l(e.text.slice(s,u),e.kinds[s],n[s],r[s],o[s],c[s])),s=u)};if(s){let t=0;for(let n=0;n<=e.text.length;n++)if(n===e.text.length||e.text[n]===`	`){let e=document.createElement(`span`);e.className=`rep-cell`,n>t&&u(e,t,n),i.appendChild(e),t=n+1}}else if(e.pics.length){let t=0;for(let{img:n,off:r}of[...e.pics].sort((e,t)=>e.off-t.off||e.img.seq-t.img.seq)){r>t&&u(i,t,r),t=Math.max(t,r);let e=document.createElement(`span`);e.className=`rep-pic`,a(n,e),i.appendChild(e)}t<e.kinds.length&&u(i,t,e.kinds.length)}else u(i,0,e.kinds.length);if(e.kin!==null){let n=document.createElement(`sup`);n.className=`rep-kin-mark`,n.textContent=` ${e.kin+1}`;let r=f[e.kin];n.title=Ag(r)===`edited`&&r.substanceIn===t?`note ${e.kin+1}'s own words, edited — the act the ledger records as “claimed, later edited”, shown here from the paragraph's side, not a second finding`:e.kinKind===`lexical`?`derived from note ${e.kin+1} — shares its introduced words: ${e.kinWords.join(`, `)}`:`derived from note ${e.kin+1} — written at its side after a reading pause, and picked up: ${e.kinTokens.join(`, `)}`,i.appendChild(n)}}if(o){let e=document.createElement(`a`);e.className=`rep-jump rep-back`,e.href=`#rtop`,e.textContent=`↑ back to the top of the report`,i.appendChild(e)}Ce.appendChild(i);let c=document.createElement(`div`);if(c.className=`report-note-cell`,e.text.trim()){let t=[],n=o?re.find(e=>o>=e.firstNo&&o<=e.lastNo):void 0;n&&o===n.firstNo&&t.push([`rep-key-tempo`,`≈ a change of tempo`,!0]);let r=t=>{let n=0;for(let r=0;r<e.kinds.length;r++)if(e.kinds[r]===t){if(n++,n>=Hg)return!0}else n=0;return!1},i=r(`p`),a=r(`u`),s=r(`w`);i&&!je&&t.push([`rep-key-pasted`,`pasted`,!1]),a&&!Me&&t.push([`rep-key-unkeyed`,`unkeyed`,!1]),s&&!Ne&&t.push([`rep-key-brought`,`brought — from the workings`,!1]);let l=(()=>{let t=0;for(let n=0;n<e.kinds.length;n++){let r=e.sis[n];if(e.kinds[n]===`e`&&r!==void 0&&ie.has(r)){if(t++,t>=Hg)return!0}else t=0}return!1})();l&&!Pe&&t.push([`rep-key-claimed`,`claimed — from the margin, via the workings`,!1]),je=i,Me=a,Ne=s,Pe=l;for(let[e,n,r]of t){let t=document.createElement(`div`);t.className=r?`rep-margin-tag inf`:`rep-margin-tag`;let i=document.createElement(`span`);i.className=`rep-key ${e}`,t.appendChild(i),t.append(n),c.appendChild(t)}}for(let e of Oe.get(t)??[])c.appendChild(e);Ce.appendChild(c)});let Fe=document.createElement(`div`);if(Fe.className=`report-tail`,N.appendChild(Fe),!f.length){let e=document.createElement(`div`);e.className=`report-rail-empty`,e.textContent=C.some(e=>e.kinds.some((t,n)=>t===`e`&&e.sis[n]!==void 0&&ie.has(e.sis[n])))?`the margin never spoke on this leaf — its claimed text was claimed in the workings, and brought across`:`the margin never spoke on this leaf`,Fe.appendChild(e)}if(ke.length){let e=document.createElement(`div`);e.className=`report-rail-title`,e.textContent=`shown against writing no longer on the page`,Fe.appendChild(e);for(let e of ke)Fe.appendChild(e)}let Ie=Fe,R=new Map;for(let e of u)if(e.type===`file-ref`){for(let[t,n]of R)if(t!==e.path&&n.size===e.size&&n.mtime===e.mtime&&n.text===e.text){R.delete(t);break}R.set(e.path,{name:e.name,size:e.size,mtime:e.mtime,text:e.text})}if(R.size){let e=document.createElement(`div`);e.className=`report-rail-title`,e.textContent=`sources on the page`,Ie.appendChild(e);for(let e of R.values()){let t=document.createElement(`div`);t.className=`report-note-text`,t.textContent=e.name,Ie.appendChild(t)}}if(Ae.length){let e=document.createElement(`div`);e.className=`report-rail-title`,e.textContent=`the margin’s offers, passed over`,Fe.appendChild(e);for(let e of Ae)Fe.appendChild(e)}let z=document.createElement(`div`);z.className=`report-attest report-attest-pending`,z.textContent=`verifying the seal…`,N.appendChild(z);let Le=document.createElement(`button`);Le.type=`button`,Le.className=`report-evidence-link`,Le.textContent=`read the sealed record`,Le.addEventListener(`click`,()=>{Wn().then(e=>{Eg({head:`the sealed record — this leaf’s full event log`,note:e,mono:!0})})}),N.appendChild(Le),Mn(W()).then(e=>{c!==s||!z.isConnected||(z.classList.remove(`report-attest-pending`),e.ok?z.textContent=`hash chain intact — every event sealed to its predecessor · ${e.n} events · head ${e.head?.slice(0,12)??`—`}`:e.anchor===`truncated`?(z.classList.add(`bad`),z.textContent=`⚠ this log does not verify: it is shorter than its last anchor (${e.anchorN} events anchored, ${e.n} present) — events have been removed`):(z.classList.add(`bad`),z.textContent=`⚠ this log does not verify: the chain breaks at event ${e.brokenAt??`?`} of ${e.n} — the record has been altered`),e.ok||N.prepend(z))});{let e=u.filter(e=>e.type===`replant`&&!e.fileOk);for(let t of e){let e=document.createElement(`div`);e.className=`report-attest bad`,e.textContent=`⚠ this leaf contains a replanting whose source file did NOT verify`+(t.fileBrokenAt?` — its chain broke at event ${t.fileBrokenAt}`:``)+` (${t.count} events replanted${t.t?` `+new Date(t.t).toLocaleDateString():``}); the altered record grows here re-sealed as a new planting`,N.prepend(e)}}let Re=document.createElement(`div`);Re.textContent=`typed, pasted, brought, and claimed are read straight from this leaf’s append-only log; derived is an inference and says so — nothing scored, nothing judged`,Re.className=`report-foot`,N.appendChild(Re),e.classList.add(`show`)}e.addEventListener(`click`,t=>{let n=t.target.closest?.(`a.rep-jump`);if(!n)return;t.preventDefault(),e.querySelectorAll(`.rep-arrived`).forEach(e=>e.classList.remove(`rep-arrived`));let r=n.getAttribute(`href`).slice(1);if(r===`rtop`){e.scrollTop=0;return}let i=e.querySelector(`#${r}`);if(!i)return;let a=n.dataset.span,o=[];if(a){let[t,n]=a.split(`-`).map(Number);for(let r=t;r<=n;r++){let t=e.querySelector(`#rp${r}`);t&&o.push(t)}}else o.push(i);i.scrollIntoView({block:a?`start`:`center`}),i.classList.add(`rep-arrived`);for(let e of o)e.classList.add(`rep-jumped`);window.setTimeout(()=>o.forEach(e=>e.classList.remove(`rep-jumped`)),a?2600:1600)}),e.addEventListener(`mousedown`,t=>{t.target===e&&n()}),window.addEventListener(`keydown`,t=>{document.body.classList.contains(`revealing`)||document.body.classList.contains(`notereading`)||document.body.classList.contains(`askingphloem`)||document.body.classList.contains(`feedbacking`)||t.key===`Escape`&&e.classList.contains(`show`)&&(t.preventDefault(),t.stopImmediatePropagation(),n())},!0);function l(t){if(!r||!e.classList.contains(`show`))return null;let n=new Date,s=en(n),c=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),l=e=>e?new Date(e).toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`}):`—`,u=n.toLocaleString(void 0,{year:`numeric`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}),d=o,f=d&&d.authors.length&&d.authors.some(e=>e!==`gardener`)?d.authors.filter(e=>e!==`gardener`).join(`, `):`the writer (this record has a single, unnamed author)`,p=d&&d.firstT&&d.lastT?d.firstT===d.lastT||l(d.firstT)===l(d.lastT)?l(d.firstT):`${l(d.firstT)} – ${l(d.lastT)}`:`—`,m=d?.head?d.head.slice(0,12):`—`,h=d?.events??0,g=`<div class="report-about"><div class="report-about-title">about this record</div><dl><dt>What</dt><dd>An authorship record from Phloem — how a piece of writing came to be, read straight from its append-only log. Typed, pasted, brought, and claimed are mechanical facts from the log; derived is an inference and says so. It attests the process; it does not, and cannot, score or judge the writer — <strong>witness, not police</strong>.</dd><dt>Who</dt><dd>${c(f)}.</dd><dt>When</dt><dd>Written ${c(p)}; exported ${c(u)}.</dd><dt>Where</dt><dd>Phloem ${c(kg())} — local-first, on the author's own device; nothing left it unbidden.</dd><dt>Integrity</dt><dd>${h} events, sealed head <code>${c(m)}</code>. This page is a still photograph of the record as it stood`+(t?` — and it carries the verifiable original within it: the full sealed event log is embedded in this file, readable whole under 'the sealed record' at the foot of this page. Drop this file into Phloem, which checks its seals on arrival and says what it finds, or audit it with <code>tools/audit-leaf.mjs</code>.`:`; the sealed original stays with the leaf in Phloem and verifies there.`)+`</dd></dl></div>`,_=r.cloneNode(!0);_.querySelector(`.report-foot`)?.remove(),_.querySelector(`.report-attest-pending`)?.remove(),_.querySelectorAll(`.rep-why`).forEach(e=>e.remove()),_.querySelectorAll(`.note-expand`).forEach(e=>e.remove()),_.querySelectorAll(`.report-evidence-link`).forEach(e=>e.remove()),_.querySelectorAll(`.rep-row-why-note`).forEach(e=>e.removeAttribute(`hidden`)),_.querySelectorAll(`.report-note-fold, .report-note-section, .rep-ledger-fold`).forEach(e=>e.removeAttribute(`open`));let v=t?`<details class="report-evidence-fold"><summary>the sealed record — the full event log, as this file carries it</summary><pre id="phloem-leaf">`+t.replace(/[&<]/g,e=>e===`&`?`\\u0026`:`\\u003c`)+`</pre></details>
`:``,y=a.filter(e=>e.firstNo!==e.lastNo).map(e=>`#rp${e.firstNo}:target ~ [data-run="${e.firstNo}"] { background:color-mix(in srgb, var(--ink-text) 6%, transparent); border-radius:4px; }`).join(`
`);return{html:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>how it came to be — ${c(i.slice(0,48))}</title>\n<style>${em()}\n${__}</style>\n`+(y?`<style>${y}</style>\n`:``)+`</head>\n<body>\n<div class="report-sheet" id="rtop">${g}${_.innerHTML}${v}</div>\n</body>\n</html>\n`,filename:`${i.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,`-`).replace(/^-+|-+$/g,``).slice(0,40)||`report`}-report-${s}.html`}}return{show:()=>void c(),visible:()=>e.classList.contains(`show`),closeToPage:n,exportHTML:l}}var y_=`phloem.grafted`;async function b_(){let t=performance.now(),r=document.getElementById(`app`),i=!Zf();i&&document.body.classList.add(`booting`),nm(),i&&Bf();let a=document.createElement(`div`);a.className=`page`,r.appendChild(a);try{await Rp()}catch{}jn();{let e=window;(e.phloem??={}).chain={verify:e=>Mn(e??W())}}let o=await Hn(),{doc:s,strokes:c,files:l}=cr(o),u=``;for(let e of o)e.type===`leaf-rename`&&(u=e.name.trim());let f=document.createElement(`div`);f.id=`leaf-name`,document.body.appendChild(f);function p(){f.textContent=u,f.classList.toggle(`show`,!!u)}p();let _=Mf,v=12;for(let e of o)e.type===`leaf-style`&&(e.font&&(_=e.font),e.size&&(v=e.size));function y(){a.style.setProperty(`--leaf-font`,Nf(_)),a.style.setProperty(`--leaf-size`,`${v}pt`),a.dataset.font=_}y(),a.classList.toggle(`hide-struck`,localStorage.getItem(U(`hideStruck.${W()}`))===`1`);let b=o.length?sn(o):G();on(W(),b);let x=await sr(),w=[];try{w=JSON.parse(sessionStorage.getItem(`phloem.slip`)??`[]`)}catch{}sessionStorage.removeItem(_l);let T=w.map(e=>e.word),E={update:()=>{}},D=wf(a,s,e=>E.update(e),[ym(),Em()]),ee=Dm(D);mp(()=>Vd(D)),Ef(a,c),Df(Rh);async function O(e){await Z(),e(),location.reload()}function k(e,t=[]){np(),tp({at:`leaf`,docId:e.docId,matter:e.matter}),t.length&&sessionStorage.setItem(_l,JSON.stringify(t)),O(()=>on(e.docId,e.matter))}function te(e){if(!e||e.at===`leaf`){if(e&&e.at===`leaf`&&e.docId!==W()){O(()=>on(e.docId,e.matter));return}A.hide(),j.hide(),cp(W()),F.refresh();return}e.at===`trunk`?(j.hide(),lp(e.matterId??G()),A.show(e.matterId??void 0)):(A.hide(),j.show()),F.refresh()}function ne(){let e=$f();if(!ep()&&(!e||e.at===`leaf`)){if(!ue())return;Z().then(()=>{tp({at:`garden`}),j.show(),F.refresh()});return}te(ip())}let A=cm(e=>{if(e.docId===W()){tp({at:`leaf`,docId:e.docId,matter:e.matter}),te($f());return}k(e)},()=>{tp({at:`garden`}),A.hide(),j.show(),F.refresh()},()=>ne()),j=vm({openTrunk:e=>{tp({at:`trunk`,matterId:e}),j.hide(),lp(e),A.show(e),F.refresh()},openLeaf:e=>{if(e.docId===W()){tp({at:`leaf`,docId:e.docId,matter:e.matter}),te($f());return}k(e)},onRetreat:()=>ne(),replantLeaf:e=>void In(e,!1).then(()=>j.show()),replantTree:e=>void Ln(e,!1).then(()=>j.show()),replantFree:(e,t,n)=>{(async()=>{try{if(n&&await Pn(t,n),await In(e,!1),await Rn(e,t),e===W()){await O(()=>on(e,null));return}j.show()}catch{V(`could not replant — the log did not take the change`)}})()},burnLeaf:e=>void Me([e]),burnTree:(e,t,n)=>void Me([e,...n]),graftInto:(e,t)=>{(async()=>{try{if(await K(e,{type:`graft`},t),e===W()){await O(()=>on(e,t));return}j.show()}catch{V(`could not graft — the log did not take the change`)}})()},graftOnto:(e,t)=>{(async()=>{try{let n=rn();await K(t,{type:`graft`},n),await K(e,{type:`graft`},n);let r=W();if(r===e||r===t){await O(()=>on(r,n));return}j.show()}catch{V(`could not graft — the log did not take the change`)}})()}}),ie=am(()=>{np(),tp({at:`trunk`,matterId:G()}),lp(G()),A.show(G()??void 0),F.refresh()}),ae=Ml((e,t)=>k(e,t),(e,t,n)=>void ce(e,t,n)),M=im();async function ce(e,t,n){let r=cr(await Vn(e.docId)).doc,i=r?Yn(r):``,a=R(),o=a.split(`
`).find(e=>e.trim())??``;M.open(t,{title:o||`your page`,paras:a.split(`
`),onGo:()=>{}},{title:e.firstLine||`(a leaf)`,paras:i.split(`
`),files:e.files.map(e=>e.name),onGo:()=>k(e,n)})}let le=x.leaves.length===0,ue=()=>!le||!!u.trim()||!!D.state.doc.textContent.trim(),N=ue();function P(){let e=ue();e!==N&&(N=e,F.refresh())}let F=dp(x.leaves,()=>ne(),e=>e?x.matters.get(e)?.name??null:null,ue),de=w.length?yl(w,e=>{xm(D,e)||V(`“${e}” isn’t on this page now — it may be in an attached file, or since edited away`)},e=>ae.reserve(e)):null;function fe(){if(gt()<=.06)return null;let e=up(W());if(!e)return null;if(e.kind===`tree`){if(b)return null;let t=x.matters.get(e.id)?.name;return t?{docId:``,matter:e.id,phrase:`into ${t.slice(0,22)}`}:null}let t=x.leaves.find(t=>t.docId===e.id);if(!t||t.matter&&b)return null;let n=t.matter?x.matters.get(t.matter)?.name??null:null,r=(t.firstLine||`(a blank leaf)`).slice(0,22),i=n?`into ${n.slice(0,22)}`:b?`${r} into this tree`:`onto ${r}`;return{docId:t.docId,matter:t.matter,phrase:i}}function I(){let e=fe();e&&(async()=>{try{if(await Z(),!e.matter&&b)await K(e.docId,{type:`graft`},b),sessionStorage.setItem(y_,`grafted ${e.phrase}`);else{let t=e.matter??rn();e.matter||await K(e.docId,{type:`graft`},t),await K(W(),{type:`graft`},t),on(W(),t),sessionStorage.setItem(y_,`shade`)}location.reload()}catch{V(`could not graft — the log did not take the change`)}})()}let pe={newLeaf:()=>{O(()=>{np();let e=G();tp({at:`leaf`,docId:nn(),matter:e})})},showTree:()=>{np(),tp({at:`trunk`,matterId:G()}),lp(G()),Z().then(()=>A.show(G()??void 0)),F.refresh()},showGarden:()=>{np(),tp({at:`garden`}),Z().then(()=>j.show()),F.refresh()},graft:I,graftLabel:()=>fe()?.phrase??null,nameTree:()=>void ke(G()),nameLeaf:()=>void je(),uprootLeaf:()=>void(async()=>{await Z(),await In(W()),await O(()=>{let e=G();tp({at:`leaf`,docId:nn(),matter:e}),tp({at:`garden`})})})(),hasTree:()=>G()!==null,noteMargin:()=>{let e=R().split(`
`),t=D.state.selection.$from.index(0);for(;t>0&&!(e[t]??``).trim();)t--;let n=e[t];if(!n||!n.trim()){V(`a note anchors to a line — write the line first`);return}B.compose(n,e=>{Nn({type:`margin-note`,anchorText:n,note:e,source:`human`}),B.offerOwn([{anchorText:n,note:e}],!0),Re.push({note:e,own:!0,anchor:n}),et.refresh()},e=>void pt(n,e))},engineAwake:Nh,showReport:()=>void Z().then(()=>L.show()),showNotes:()=>et.show(),hasNotes:()=>et.hasNotes(),chooseGardens:()=>ye.open(),askPhloem:()=>be.open(),sendFeedback:()=>xe.open(),tuneReach:void 0,saveLeaf:()=>void jt(),savePlain:()=>void Mt(),info:async()=>{let e=0,t=0,n=U(`anchor.`);for(let r=0;r<localStorage.length;r++){let i=localStorage.key(r);if(i.startsWith(n)){e++;try{t+=JSON.parse(localStorage.getItem(i)??`{}`)?.n??0}catch{}}}let r=``;try{let e=await navigator.storage?.estimate?.();if(e?.usage){let t=e.usage/(1024*1024);r=`${t>=1?`${t.toFixed(1)} MB`:`${Math.max(1,Math.round(e.usage/1024))} KB`} on disk, all gardens`}}catch{}let i=e=>e.match(/\S+/g)?.length??0,a=`this leaf`,o=i(Xu(D));if(A.visible()){let e=A.matterId(),{leaves:t}=await sr();a=`this tree`,o=t.filter(t=>t.matter===e).reduce((e,t)=>e+i(t.text),0)}else if(j.visible()){let{leaves:e}=await sr();a=`this garden`,o=e.reduce((e,t)=>e+i(t.text),0)}let s=``;if(a===`this leaf`)try{let e=await Vn(W()),t=new Blob([JSON.stringify(e)]).size+await oe(se(e)),n=t/(1024*1024);s=`this leaf: ${e.length.toLocaleString()} sealed events, about ${n>=1?`${n.toFixed(1)} MB`:`${Math.max(1,Math.round(t/1024))} KB`}`}catch{}return{top:[`Phloem v${Pm.version}`,`words in ${a}: ${o.toLocaleString()}`,Fh()],leaves:Ih(),more:[`${e} ${e===1?`leaf`:`leaves`}`,`${t} sealed events`,...r?[r]:[],...s?[s]:[],`built 18 Sept 15:22 · ae6ff67`]}},placeOffers:()=>A.visible()?[{id:`name-tree`,label:`name this tree`,run:()=>void ke(A.matterId())},{id:`uproot-tree`,label:`uproot this tree`,run:()=>void(async()=>{let e=A.matterId();e&&(await Ln(e),await O(()=>{let e=nn();on(e,null),tp({at:`leaf`,docId:e,matter:null}),tp({at:`garden`})}))})()},{id:`garden`,long:`view this whole garden`,label:`the garden`,run:()=>{tp({at:`garden`}),A.hide(),j.show(),F.refresh()}}]:j.visible()?[{id:`new-leaf-free`,long:`create a new leaf, standing free of every tree`,label:`new leaf, standing free`,run:()=>{O(()=>{let e=nn();on(e,null),tp({at:`leaf`,docId:e,matter:null})})}},{id:`gardens`,long:`view all your gardens`,label:`the gardens`,run:()=>ye.open()}]:L.visible()?[{label:`export this report`,run:()=>void Et()},{label:`back to the page`,run:L.closeToPage}]:null},L=v_(),me=Of(D,pe),he=U(`stamp`),ge=Kf(D,{penActive:(e,t)=>Wd(e,t),setPen:(e,t)=>void Ud(e,t),blockStyle:e=>Gd(e),setBlock:(e,t)=>void Kd(e,t),blockAlign:e=>qd(e),setAlign:(e,t)=>void Yd(e,t),blockList:e=>Xd(e),setList:(e,t)=>void $d(e,t).then(()=>ge.refresh()),blockIndent:e=>Zd(e),setIndent:(e,t)=>void ef(e,t).then(()=>ge.refresh()),blockSpacing:e=>tf(e),setSpacing:(e,t)=>void nf(e,t).then(()=>ge.refresh()),leafStyle:()=>({font:_,size:v}),setLeafStyle:(e,t)=>{_=e,v=t,y(),a.classList.toggle(`hide-struck`,localStorage.getItem(U(`hideStruck.${W()}`))===`1`),Nn({type:`leaf-style`,font:e,size:t})},insert:(e,t)=>{e.dispatch(e.state.tr.insertText(t,e.state.selection.from,e.state.selection.to)),e.focus(),B.refresh(),Ne()},insertRule:e=>{Jd(e).then(()=>{e.focus(),B.refresh(),Ne()})},insertTable:e=>{of(e).then(()=>{e.focus(),B.refresh(),Ne()})},blockTable:e=>rf(e),setTable:(e,t)=>void af(e,t).then(()=>{e.focus(),ge.refresh(),B.refresh()}),insertImage:e=>{let t=document.createElement(`input`);t.type=`file`,t.accept=`image/*`,t.addEventListener(`change`,()=>{let n=t.files?.[0];n&&ff(e,n,n.name).then(t=>{t||V(`that file is not a picture this app can read`),e.focus(),B.refresh()})}),t.click()},hideStruck:()=>localStorage.getItem(U(`hideStruck.${W()}`))===`1`,setHideStruck:e=>{let t=U(`hideStruck.${W()}`);e?localStorage.setItem(t,`1`):localStorage.removeItem(t),a.classList.toggle(`hide-struck`,e)},selectedImage:e=>mf(e),setImageStyle:(e,t)=>void hf(e,t).then(()=>{e.focus(),ge.refresh()}),lastStamp:()=>localStorage.getItem(he),rememberStamp:e=>localStorage.setItem(he,e),onToggle:()=>ve.update()}),_e=Mm({swapTo:(e,t)=>{rp({at:`leaf`,docId:e,matter:t}),O(()=>on(e,t))},liveSelection:async()=>{await Z();let e=D.state.selection;return e.empty?null:{text:D.state.doc.textBetween(e.from,e.to,`
`),from:Hd(D,e.from),to:Hd(D,e.to)}},flash:e=>V(e)});_e.mount();let ve=kf(D,{emphasise:(e,t)=>void Ud(e,t),openFormat:()=>ge.open(),formatOpen:()=>ge.visible(),ask:(e,t,n)=>void ft(e,t,n),engineAwake:Nh,bring:(e,t,n)=>void Z().then(()=>_e.bring(e,Hd(D,t),Hd(D,n))),bringOffered:()=>_e.dressed()}),ye=C({switchTo:e=>void Z().then(()=>S(e)),exportGarden:()=>void It(),plantShow:()=>void Ft()}),be=sg({ask:e=>rg(e),awake:Nh,state:Fh}),xe=ug();window.addEventListener(`keydown`,e=>{!e.altKey||!e.shiftKey||e.code!==`Slash`||e.metaKey||e.ctrlKey||(e.preventDefault(),be.open())});let Se=Nm(pe),Ce=b?x.matters.get(b):void 0,we=Ce?.name??null,Te=Ce?.nameLeaf??null;function Ee(){if(!b){ie.set(null);return}let e=we;if(Te===W()||!we){let t=D.state.doc,n=``;for(let e=0;e<t.childCount;e++){let r=t.child(e).textContent.trim();if(r){n=r;break}}e=n||e}ie.set((e??`a young tree`).slice(0,60))}Ee();let De=null;function Oe(e,t,n=`a name for the tree`){De?.remove();let r=document.createElement(`input`);r.className=`tree-name-input`,r.value=e,r.placeholder=n;let i=!1;function a(){i=!0,window.removeEventListener(`keydown`,s,!0),r.removeEventListener(`blur`,o),De===r&&(De=null),r.remove()}function o(){if(i)return;let n=r.value;a(),n.trim()!==e.trim()&&t(n)}function s(e){if(De===r)if(e.key===`Enter`){e.preventDefault(),e.stopImmediatePropagation();let n=r.value;a(),t(n)}else e.key===`Escape`&&(e.preventDefault(),e.stopImmediatePropagation(),a())}window.addEventListener(`keydown`,s,!0),r.addEventListener(`mousedown`,e=>e.stopPropagation()),r.addEventListener(`blur`,o),document.body.appendChild(r),De=r,r.focus(),r.select()}async function ke(e){if(!e)return;let t=(await sr()).matters.get(e)?.name??``;Oe(t,n=>{let r=n.trim();if(!r){V(`a tree keeps its name until you give it another`);return}if(r===t){V(`that is already its name`);return}Pn(e,r).then(()=>{e===b&&(we=r,Te=``,Ee()),A.visible()&&A.matterId()===e&&A.show(e)})})}let Ae=Ce?.nameLeaf===W();async function je(){let e=W();await Z();let t=(await sr()).leaves.find(t=>t.docId===e)?.firstLine??``;Oe(t,n=>{let r=n.trim();if(r===t.trim()){V(`that is already its name`);return}Fn(e,r).then(()=>{u=r,p(),P(),b&&Ae&&(we=r||null,Te=r?``:e,Ee()),A.visible()&&A.show(A.matterId()??void 0)})},`a name for the leaf`)}async function Me(e){let t=[];for(let n of e){t.push(n);let e=localStorage.getItem(U(`workings.of.${n}`));e&&(t.push(e),localStorage.removeItem(U(`workings.of.${n}`)),localStorage.removeItem(U(`workings.front.${e}`)),localStorage.removeItem(U(`split.${n}`)))}let n=t.includes(W());await zn(t),n&&nn(),await j.show()}let Ne=()=>ae.update(()=>Xu(D)),Pe,Fe=!1,Ie=``,R=()=>Xu(D),z=[];for(let e of o)e.type===`note-shown`&&z.push({anchorText:e.anchorText,note:e.note,...e.grounds?{grounds:e.grounds}:{},...e.sources?.length?{sources:e.sources}:{},...e.citations?.length?{citations:e.citations}:{}});let Le=()=>z.map(e=>e.note).slice(-20),Re=[];for(let e of o)if(e.type===`note-shown`)Re.push({note:e.note,own:!1,anchor:e.anchorText,...e.sources?.length?{sources:e.sources}:{},...e.citations?.length?{citations:e.citations}:{}});else if(e.type===`margin-note`&&!e.gone){let t=Re.find(t=>t.own&&t.note===e.note);t?t.anchor=e.anchorText:Re.push({note:e.note,own:!0,anchor:e.anchorText})}let ze=new Map;function Be(e,t,n){let r=R().split(`
`),i=id(e,r);if(i<0)return;let a=i+1;for(;a<r.length&&!r[a].trim();)a++;if(a>=r.length||!r[a].includes(n.split(`
`)[0]))return;let o=r[a];if(o===e)return;Nn({type:`margin-note`,anchorText:e,note:t,gone:!0,source:`human`}),Nn({type:`margin-note`,anchorText:o,note:t,source:`human`}),B.takeDown(e,t),B.offerOwn([{anchorText:o,note:t}]);let s=Re.find(e=>e.own&&e.note===t);s&&(s.anchor=o),et.refresh()}async function Ve(e,t){await zd(D,e,t);let n=ze.get(t);n&&(ze.delete(t),Be(n.qAnchor,n.qNote,t)),Ie=R(),B.refresh(),Ne(),Ee()}function He(e,t){D.dispatch(D.state.tr.insertText(t,e)),B.refresh(),Ne(),Ee()}let Ue=U(`piled.${W()}`);function We(){try{let e=JSON.parse(localStorage.getItem(Ue)??`[]`);return Array.isArray(e)?e:[]}catch{return[]}}function Ge(e){localStorage.setItem(Ue,JSON.stringify(e))}function Ke(e,t,n){let r=We();r.some(r=>r.anchor===e&&r.note===t&&r.own===n)||Ge([...r,{anchor:e,note:t,own:n}]),n?Nn({type:`margin-note`,anchorText:e,note:t,gone:!0,source:`human`}):Ze(e,t),B.takeDown(e,t)}function qe(e,t,n){Ge(We().filter(r=>!(r.anchor===e&&r.note===t&&r.own===n)))}let Je=U(`dismissed.${W()}`);function Ye(){try{let e=JSON.parse(localStorage.getItem(Je)??`[]`);return Array.isArray(e)?e:[]}catch{return[]}}function Xe(e){e.length?localStorage.setItem(Je,JSON.stringify(e)):localStorage.removeItem(Je)}function Ze(e,t){let n=Ye();n.some(n=>n.anchor===e&&n.note===t)||(n.push({anchor:e,note:t}),Xe(n))}function Qe(e,t){Xe(Ye().filter(n=>!(n.anchor===e&&n.note===t)))}let B=Dg(D,{adopt:Ve,logShown:e=>{z.push({anchorText:e.anchorText,note:e.note,...e.grounds?{grounds:e.grounds}:{},...e.sources?.length?{sources:e.sources}:{},...e.citations?.length?{citations:e.citations}:{}}),Re.push({note:e.note,own:!1,anchor:e.anchorText,...e.sources?.length?{sources:e.sources}:{},...e.citations?.length?{citations:e.citations}:{}}),et.refresh(),Nn({type:`note-shown`,line:e.line,anchorText:e.anchorText,note:e.note,source:`engine`,...e.summoned?{summoned:!0}:{},...e.grounds?{grounds:e.grounds}:{},...e.sources?.length?{sources:e.sources}:{},...e.citations?.length?{citations:e.citations}:{},...e.corrects?{corrects:!0}:{}})},removeOwn:(e,t)=>{Nn({type:`margin-note`,anchorText:e,note:t,gone:!0,source:`human`})},placeOwn:(e,t)=>{D.dispatch(D.state.tr.insertText(t,e))},dismiss:(e,t)=>Ze(e,t),askOwn:(e,t)=>void pt(e,t)});B.retirePrior(z);{let e=new Map;for(let t of o){if(t.type!==`margin-note`)continue;let n=`${t.anchorText}::${t.note}`;t.gone?e.delete(n):e.set(n,{anchorText:t.anchorText,note:t.note})}e.size&&B.offerOwn([...e.values()])}function $e(e,t,n){if(n)Nn({type:`margin-note`,anchorText:e,note:t,source:`human`}),Re.some(n=>n.own&&n.note===t&&n.anchor===e)||Re.push({note:t,own:!0,anchor:e}),B.offerOwn([{anchorText:e,note:t}],!0);else{Qe(e,t);let n=z.find(n=>n.anchorText===e&&n.note===t);B.standShown(e,t,n?.grounds,n?.sources,n?.citations)}et.refresh(),Sm(D,e,t)}{let e=new Set(Ye().map(e=>`${e.anchor}::${e.note}`)),t=R(),n=new Set;for(let r of z){let i=`${r.anchorText}::${r.note}`;n.has(i)||e.has(i)||(n.add(i),!t.includes(r.note.trim())&&B.standShown(r.anchorText,r.note,r.grounds,r.sources,r.citations))}}let et=Og(D,()=>Re,(e,t,n)=>{n?He(e,t):Ve(e,t)},(e,t,n)=>$e(e,t,n),(e,t,n)=>{let r=e;return n?.length?r+=`

`+n.map(e=>`“${e.quote}”\n— ${e.title} · ${e.url}`).join(`

`):t?.length&&(r+=`

Sources:
`+t.map(e=>`— ${e.title} · ${e.url}`).join(`
`)),navigator.clipboard.writeText(r).then(()=>!0,()=>!1)},(e,t,n)=>Ke(e,t,n),(e,t,n)=>qe(e,t,n),()=>We());async function tt(){let e=await Hn(),t=[],n=[],r=``;for(let i of e)if(i.type===`text-snapshot`)r=Yn(i.doc),t=Array.from(r,()=>`h`),n=Array.from(r,()=>!1);else if(i.type===`text-splice`){let e=i.source===`engine`?`e`:`h`,a=i.pasted===!0;r=r.slice(0,i.at)+i.ins+r.slice(i.at+i.del),t.splice(i.at,i.del,...Array.from(i.ins,()=>e)),n.splice(i.at,i.del,...Array.from(i.ins,()=>a))}let i=new Set,a=0,o=0;for(let e=0;e<=r.length;e++)if(e===r.length||r[e]===`
`){let r=t.slice(o,e),s=n.slice(o,e);r.length&&(r.every(e=>e===`e`)||s.every(Boolean))&&i.add(a),a++,o=e+1}return i}let nt=U(`looked.${W()}`);function rt(e,t){t!==null&&localStorage.setItem(nt,String(e))}function it(e,t){let n=e.split(`
`),r=n.length-1,i,a;if(!t)i=a=r;else{let{at:n,ins:r}=Od(t,e);i=e.slice(0,n).split(`
`).length-1,a=e.slice(0,n+r.length).split(`
`).length-1}let o=0;for(;i>0&&o<150;)i--,o+=n[i].match(/\S+/g)?.length??0;return{from:i,to:Math.min(Math.max(a,0),r)}}async function at(){let e=R();if(e===Ie)return;let t=e.length-Ie.length;if(!(/(?:[.?!]["'”’)\]]?|\n)\s*$/.test(e)?t>=$.minClaim:t>=$.minNew))return;Fe=!0;let n=Date.now();try{let t=await Vh(e,Le(),it(e,Ie));t!==null&&(Ie=e),rt(n,t);let r=lt(await ot(t));mh(`ambient`,r.length),r.length&&B.offer(r)}finally{Fe=!1}}async function ot(e){if(!e||!e.length)return[];let t=await tt();return e.filter(e=>!t.has(e.line))}let st=e=>e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,` `).replace(/\s+/g,` `).trim();function ct(e,t,n,r=!1){let i=st(e).split(` `).filter(Boolean);if(!i.length)return!0;let a=$.echoRun,o=t.trim(),s=o?n.split(`
`).filter(e=>e.trim()!==o).join(`
`):n,c=` ${st(s)} `,l=0;for(let e=0;e<i.length&&l<a;e++){let t=e;for(;t<i.length&&c.includes(` ${i.slice(e,t+1).join(` `)} `);)t++;l=Math.max(l,t-e)}if(l>=a)return!0;let u=e=>new Set(st(e).split(` `).filter(e=>e.length>3)),d=[...u(e)],f=u(t);if(d.length>=2&&f.size){let e=d.filter(e=>!f.has(e)).length;if(r&&e>=1)return!1;if(e<=1)return!0}return!1}function lt(e){if(!e.length)return e;let t=R();return e.filter(e=>!ct(e.note,e.anchorText,t,e.corrects===!0))}function ut(){Ph(`ambient`)&&(window.clearTimeout(Pe),Pe=window.setTimeout(()=>{if(Fe){ut();return}at()},$.pauseMs))}async function dt(){if(!Ph(`ambient`))return null;let e=R(),t=Date.now(),n=await Vh(e,Le(),it(e,Ie));n!==null&&(Ie=e),rt(t,n);let r=lt(await ot(n));return mh(`ambient`,r.length),r.length&&B.offer(r),r}async function ft(e,t,n){if(!Nh())return;let r=R().split(`
`),i=Math.max(0,Math.min(e,t)),a=Math.min(r.length-1,Math.max(e,t)),o=[];for(let e=i;e<=a;e++)(r[e]??``).trim()&&o.push(e);if(!o.length)return;let s=o[0],c=r[s];yt.textContent=`asking the margin…`,bt=!1;let l=null,u=!1;try{l=await eg(n)}catch{u=!0}if(l?.outOfSearches){V(`the margin’s search budget is spent for today`);return}if(l?.ofTheWriting){V(`the margin answers questions of fact — it doesn’t comment on your writing`);return}l?(mh(`asked`,1),B.offer([{line:s,anchorText:c,note:l.note,summoned:!0,...l.corrects?{corrects:!0}:{},...l.sources?.length?{sources:l.sources}:{},...l.citations?.length?{citations:l.citations}:{}}],!0),xt()):V(u?`the margin could not be reached`:`the margin had nothing to add`)}async function pt(e,t){if(!Nh()){V(Fh());return}yt.textContent=`asking the margin…`,bt=!1;let n=null,r=!1;try{n=await tg(t)}catch{r=!0}if(n?.outOfSearches){V(`the margin’s search budget is spent for today`);return}if(n?.ofTheWriting){V(`the margin answers questions of fact — it doesn’t comment on your writing`);return}if(n){let r=R().split(`
`),i=id(e,r);if(i<0){V(`the margin answered, but the question’s line has gone`),xt();return}mh(`asked`,1),ze.set(n.note,{qAnchor:e,qNote:t}),B.offer([{line:i,anchorText:r[i],note:n.note,summoned:!0,...n.corrects?{corrects:!0}:{},...n.sources?.length?{sources:n.sources}:{},...n.citations?.length?{citations:n.citations}:{}}],!0),xt()}else V(r?`the margin could not be reached`:`the margin had nothing to add`)}let mt=0,ht=D.state.doc.content.size;function gt(){return 1-Math.max(0,Math.min(1,(mt-40)/210))**1.6}E.update=e=>{if(me.update(),ve.update(),ge.refresh(),e){let e=D.state.doc.content.size;mt+=Math.abs(e-ht)||1,ht=e;let t=gt();if(F.setSolidity(t),de?.setSolidity(t),Ne(),Ee(),B.refresh(),de){let e=D.state.doc.textContent.toLowerCase();de.prune(t=>e.includes(t)||e.includes(t.replace(/s$/,``)))}ut(),P()}},Ne();let _t=performance.now()-t,vt=x.matters.size;console.info(`[phloem] boot ${_t.toFixed(0)}ms · ${x.leaves.length} leaves · ${vt} trees`),(_t>100||vt>50)&&console.warn(`[phloem] §5 trigger: boot ${_t.toFixed(0)}ms / ${vt} trees crossed the line (~100ms or ~50 trees). Build the summaries store so estate() stops replaying the whole garden at boot.`);let yt=document.createElement(`div`);yt.id=`hint`,document.body.appendChild(yt);let bt=!1;function xt(){yt.classList.remove(`show`),document.body.classList.remove(`answering`),bt=!1,window.setTimeout(()=>{yt.classList.contains(`show`)||(yt.textContent=``)},500)}xt(),window.addEventListener(`keydown`,e=>{if(!(!(e.metaKey||e.ctrlKey)||e.key!==`[`)){if(_e.dressed()){e.preventDefault(),_e.leaveToFront();return}F.visible()&&(e.preventDefault(),F.back())}});let St=0;function V(e){yt.textContent=e,yt.classList.add(`show`),document.body.classList.add(`answering`),bt=!0,St=0}function Ct(){bt&&(bt=!1,xt())}window.addEventListener(`mousedown`,Ct,!0),window.addEventListener(`keydown`,e=>{if(bt){if(e.key===`Escape`){Ct();return}e.key.length===1&&!e.metaKey&&!e.ctrlKey&&!e.altKey&&++St>=8&&Ct()}},!0),fn(()=>V(`could not save — the log did not take the last change`));{let e=sessionStorage.getItem(y_);e&&(sessionStorage.removeItem(y_),e===`shade`?ie.arrive():V(e))}{let e=sessionStorage.getItem(bp);e&&(sessionStorage.removeItem(bp),V(e))}{let e=o.filter(e=>e.type===`replant`&&!e.fileOk&&typeof e.hash==`string`&&!localStorage.getItem(`phloem.replantAck.`+e.hash));if(e.length){let t=e[e.length-1],n=document.createElement(`div`);n.className=`seal-notice`,n.textContent=`⚠ a replanted file's seals did not verify — its record was altered`+(t.fileBrokenAt?` (broken at event ${t.fileBrokenAt})`:``)+`; it grows here as a new planting, and the report will say so · click to note`,n.addEventListener(`click`,()=>{for(let t of e)localStorage.setItem(`phloem.replantAck.`+t.hash,String(Date.now()));n.remove()}),document.body.appendChild(n)}}let wt=e=>D.posAtCoords({left:e.x,top:e.y})?.pos;if(Im(a,l,V,T),Bp(a),Lp(V,(e,t,n,r)=>ff(D,new Blob([e.slice().buffer],{type:n}),t,r?wt(r):void 0).then(e=>(e&&(D.focus(),B.refresh()),e))),zp(),ig().then(()=>{let e=window;e.phloem?.engine&&(e.phloem.engine.jotNow=dt);let t=-1;for(let e=0;e<o.length;e++)o[e].type===`note-shown`&&(t=e);let n=o.slice(t+1).some(e=>e.type===`text-splice`&&e.source!==`engine`),r=o.reduce((e,t)=>t.type===`text-splice`&&t.source!==`engine`?Math.max(e,t.t??0):e,0),i=Number(localStorage.getItem(nt)??0);n&&r>i?dt():Ie=R()}),!Zf())x.leaves.length?(tp({at:`garden`}),await j.show(),F.refresh()):(Qf([]),cp(W()));else{let e=$f();e?.at===`trunk`?(lp(e.matterId??G()),A.show(e.matterId??void 0)):e?.at===`garden`?j.show():cp(W())}i&&requestAnimationFrame(()=>requestAnimationFrame(()=>document.body.classList.remove(`booting`))),Se.greet();function Tt(e,t,n){let r=new Blob([t],{type:n}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=e,document.body.appendChild(a),a.click(),a.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),1e4),V(`handed to your browser — check its downloads`)}async function Et(){let e=await Wn(),t=L.exportHTML(e);if(t){if(kp()){try{let{save:e}=await Q(async()=>{let{save:e}=await import(`./dist-js-jY0DqCR8.js`);return{save:e}},__vite__mapDeps([9,1])),{writeTextFile:n}=await Q(async()=>{let{writeTextFile:e}=await import(`./dist-js-DMhqZ8pp.js`);return{writeTextFile:e}},__vite__mapDeps([4,1,5])),r=await e({defaultPath:t.filename,filters:[{name:`Phloem report`,extensions:[`html`]}]});if(!r)return;await n(r.endsWith(`.html`)?r:`${r}.html`,t.html)}catch{V(`could not save the report`)}return}Tt(t.filename,t.html,`text/html`)}}async function Dt(e,t){if(kp()){try{let{tempDir:n,join:r}=await Q(async()=>{let{tempDir:e,join:t}=await import(`./path-DESb_8ZM.js`);return{tempDir:e,join:t}},__vite__mapDeps([5,1])),{writeTextFile:i}=await Q(async()=>{let{writeTextFile:e}=await import(`./dist-js-DMhqZ8pp.js`);return{writeTextFile:e}},__vite__mapDeps([4,1,5])),{openPath:a}=await Q(async()=>{let{openPath:e}=await import(`./dist-js-UCi8EyMo.js`);return{openPath:e}},__vite__mapDeps([6,1])),o=await r(await n(),`${t}.html`);await i(o,e),await a(o)}catch{V(`could not open the print view`)}return}let n=window.open(``,`_blank`);n&&(n.document.write(e),n.document.close())}function Ot(){let e=L.exportHTML();e&&Dt(e.html,`phloem-report`)}function kt(){let t=D.dom;if(!t.textContent?.trim())return;let n=document.querySelector(`.page`),r=n?getComputedStyle(n):null,i=r?.fontFamily||`Georgia, "Times New Roman", serif`,a=r?.fontSize||`17px`,o=e=>e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),s=(R().split(`
`)[0]||`leaf`).slice(0,48),c=em().replace(/@media \(prefers-color-scheme: dark\)[\s\S]*$/,``),l=t.innerHTML.replace(/\s*ProseMirror-selectednode/g,``),u=`
/* paper */
@page { margin: 18mm; }
html, body { background: #fff !important; margin: 0; }
.page { width: auto; max-width: 46rem; min-height: 0; margin: 0 auto; padding: 0; box-shadow: none; border-radius: 0; background: #fff; font-family: ${i}; font-size: ${a}; }\n.page .ProseMirror { padding: 0; min-height: 0; }\n.ProseMirror-trailingBreak:last-child { display: none; }\n`;Dt(`<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>${o(s)}</title>\n<style>${c}\n${e}${u}</style>\n</head>\n<body>\n<div class="page"><div class="ProseMirror">${l}</div></div>\n</body>\n</html>\n`,`phloem-leaf`)}function At(){let e=e=>e.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,`-`).replace(/^-+|-+$/g,``);return e(R().split(`
`)[0]??``).slice(0,40)||e(d().name??``)||`phloem`}async function jt(){let e=await Wn(),t=`${At()}-${en()}.phloem.json`;if(kp()){try{let{save:n}=await Q(async()=>{let{save:e}=await import(`./dist-js-jY0DqCR8.js`);return{save:e}},__vite__mapDeps([9,1])),{writeTextFile:r}=await Q(async()=>{let{writeTextFile:e}=await import(`./dist-js-DMhqZ8pp.js`);return{writeTextFile:e}},__vite__mapDeps([4,1,5])),i=await n({defaultPath:t,filters:[{name:`Phloem leaf`,extensions:[`phloem.json`,`json`]}]});i&&await r(i,e)}catch{V(`could not save the leaf`)}return}Tt(t,e,`application/json`)}window.addEventListener(`keydown`,e=>{!(e.metaKey||e.ctrlKey)||e.key.toLowerCase()!==`s`||(e.preventDefault(),jt())});async function Mt(){await Z();let e=R(),t=`${At()}-${en()}.txt`;if(kp()){try{let{save:n}=await Q(async()=>{let{save:e}=await import(`./dist-js-jY0DqCR8.js`);return{save:e}},__vite__mapDeps([9,1])),{writeTextFile:r}=await Q(async()=>{let{writeTextFile:e}=await import(`./dist-js-DMhqZ8pp.js`);return{writeTextFile:e}},__vite__mapDeps([4,1,5])),i=await n({defaultPath:t,filters:[{name:`Plain text`,extensions:[`txt`]}]});i&&await r(i,e)}catch{V(`could not save the words`)}return}Tt(t,e,`text/plain`)}window.addEventListener(`keydown`,e=>{!(e.metaKey||e.ctrlKey)||e.key.toLowerCase()!==`f`||A.visible()||j.visible()||L.visible()||(e.preventDefault(),ee.open())}),window.addEventListener(`keydown`,e=>{!(e.metaKey||e.ctrlKey)||e.key.toLowerCase()!==`p`||(L.visible()?(e.preventDefault(),Ot()):!A.visible()&&!j.visible()&&!M.visible()&&(e.preventDefault(),kt()))});async function Nt(){let e=await qn(),t={};for(let n of e){if(!n.docId)continue;let e=t[n.docId]??={scheme:`phloem-chain-1`,head:null,events:0};e.events++,typeof n.hash==`string`&&(e.head=n.hash)}let n=d(),r={},i=n.keys+`workings.of.`;for(let e=0;e<localStorage.length;e++){let n=localStorage.key(e);if(!n||!n.startsWith(i))continue;let a=localStorage.getItem(n);a&&t[a]&&(r[n.slice(i.length)]=a)}let a=await re(se(e));return JSON.stringify({phloem:1,garden:{name:n.name,exported:Date.now(),leaves:Object.keys(t).length,events:e.length,...Object.keys(r).length?{workings:r}:{}},chains:t,events:e,...Object.keys(a).length?{blobs:a}:{}},null,1)}async function Pt(e,t){await Z();let n=h(e.garden.name??null,t),r=m().find(e=>e.id===n);await Jn(r.dbName,e.events,e.blobs);let i=new Set,a,o=-1;for(let t of e.events)t.docId&&(i.add(t.docId),(t.t??0)>=o&&(o=t.t??0,a=t.docId));let s={...e.garden.workings??{}};if(!Object.keys(s).length)for(let t of e.events)t.type===`crossing`&&t.docId&&t.to?.doc&&!s[t.to.doc]&&(s[t.to.doc]=t.docId);for(let[e,t]of Object.entries(s))!i.has(e)||!i.has(t)||(localStorage.setItem(r.keys+`workings.of.${e}`,t),localStorage.setItem(r.keys+`workings.front.${t}`,e));let c=e.garden.open&&i.has(e.garden.open)?e.garden.open:a;c&&localStorage.setItem(r.keys+`currentDoc`,c),S(n)}async function Ft(){let e=g();if(e){await Z(),S(e);return}V(`planting ${n}…`);try{let e=await fetch(`/write/show-garden.phloem-garden.json`);if(!e.ok)throw Error(String(e.status));let t=await e.json();if(!(t?.phloem===1&&t.garden&&Array.isArray(t.events)))throw Error(`not a garden file`);await Pt({...t,garden:{...t.garden,name:n}},{demo:!0})}catch(e){console.warn(`[phloem] the show garden could not be planted:`,e),V(`${n} could not be fetched`)}}async function It(){let e=await Nt(),t=`${(d().name??`garden`).toLowerCase().replace(/[^\p{L}\p{N}]+/gu,`-`).replace(/^-+|-+$/g,``)||`garden`}-${en()}.phloem-garden.json`;if(kp()){try{let{save:n}=await Q(async()=>{let{save:e}=await import(`./dist-js-jY0DqCR8.js`);return{save:e}},__vite__mapDeps([9,1])),{writeTextFile:r}=await Q(async()=>{let{writeTextFile:e}=await import(`./dist-js-DMhqZ8pp.js`);return{writeTextFile:e}},__vite__mapDeps([4,1,5])),i=await n({defaultPath:t,filters:[{name:`Phloem garden`,extensions:[`phloem-garden.json`,`json`]}]});i&&await r(i,e)}catch{V(`could not save the garden`)}return}Tt(t,e,`application/json`)}document.addEventListener(`visibilitychange`,()=>{document.visibilityState===`hidden`&&Z()}),kp()&&(async()=>{try{let{getCurrentWindow:e}=await Q(async()=>{let{getCurrentWindow:e}=await import(`./window-DR7R9fyd.js`);return{getCurrentWindow:e}},__vite__mapDeps([3,1,2])),t=e(),n=!1;await t.onCloseRequested(async e=>{if(!n){n=!0,e.preventDefault();try{await Z()}finally{await t.destroy()}}});let{listen:r}=await Q(async()=>{let{listen:e}=await import(`./event-BTCPJux0.js`);return{listen:e}},__vite__mapDeps([2,1])),{invoke:i}=await Q(async()=>{let{invoke:e}=await import(`./core-D8n9Wfto.js`);return{invoke:e}},[]);await r(`phloem:quit-requested`,async()=>{try{await Z()}finally{i(`confirm_quit`)}})}catch{}})(),window.addEventListener(`dragover`,e=>{e.preventDefault(),_p({x:e.clientX,y:e.clientY})}),window.addEventListener(`dragleave`,e=>{e.relatedTarget||_p(null)}),window.addEventListener(`drop`,async e=>{e.preventDefault();let t={x:e.clientX,y:e.clientY};_p(null);let n=e.dataTransfer?.files?.[0];if(n){if(n.type.startsWith(`image/`)){await ff(D,n,n.name,wt(t))?(D.focus(),B.refresh()):V(`that file is not a picture this app can read`);return}try{let e=await n.text(),r;try{r=JSON.parse(e)}catch(t){let n=fp(e);if(!n)throw t;r=JSON.parse(n)}if(r?.phloem===1&&r.garden&&Array.isArray(r.events)){await Pt(r);return}let i=Array.isArray(r)?r:r.events;if(!Array.isArray(i))throw Error(`not a phloem file`);await xp(i,t,Array.isArray(r)?void 0:r.blobs),location.reload()}catch{V(kp()?`that file is not a phloem leaf or garden`:`attaching files needs the desktop app (browser drops import phloem leaves, gardens and exported reports only)`)}}})}b_();export{Q as t};