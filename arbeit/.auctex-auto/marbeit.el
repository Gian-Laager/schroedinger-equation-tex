(TeX-add-style-hook
 "marbeit"
 (lambda ()
   (TeX-add-to-alist 'LaTeX-provided-class-options
                     '(("scrreprt" "11pt" "DIV=10" "final")))
   (TeX-add-to-alist 'LaTeX-provided-package-options
                     '(("inputenc" "utf8") ("mathdesign" "bitstream-charter") ("DejaVuSansMono" "scaled=.82") ("fontenc" "T1") ("babel" "ngerman") ("natbib" "round")))
   (add-to-list 'LaTeX-verbatim-environments-local "lstlisting")
   (add-to-list 'LaTeX-verbatim-environments-local "cppcode")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "lstinline")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-braces-local "path")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "lstinline")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "url")
   (add-to-list 'LaTeX-verbatim-macros-with-delims-local "path")
   (TeX-run-style-hooks
    "latex2e"
    "scrreprt"
    "scrreprt11"
    "inputenc"
    "mathdesign"
    "DejaVuSansMono"
    "fontenc"
    "amsfonts"
    "amsmath"
    "graphicx"
    "float"
    "url"
    "babel"
    "natbib"
    "listings"
    "tikz")
   (TeX-add-symbols
    "cppinline")
   (LaTeX-add-labels
    "sec:meinspecialabschnitt"
    "fig:kugelschreiberfeder"
    "fig:neuronalesnetzwerk")
   (LaTeX-add-bibliographies
    "literatur"))
 :latex)

