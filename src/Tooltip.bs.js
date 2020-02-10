// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css/src/Css.js";
import * as List from "bs-platform/lib/es6/list.js";
import * as React from "react";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Tooltip from "@reach/tooltip";

((import('@reach/tooltip/styles.css')));

function defaultStyle(param) {
  return Css.style(List.map(Css.important, /* :: */[
                  Css.backgroundColor(/* `rgba */[
                        -878128972,
                        /* tuple */[
                          0,
                          0,
                          0,
                          0.75
                        ]
                      ]),
                  /* :: */[
                    Css.color(/* `rgb */[
                          5692173,
                          /* tuple */[
                            255,
                            255,
                            255
                          ]
                        ]),
                    /* :: */[
                      Css.borderStyle(/* none */-922086728),
                      /* :: */[
                        Css.borderRadius(/* `px */[
                              25096,
                              5
                            ]),
                        /* :: */[
                          Css.paddingLeft(/* `px */[
                                25096,
                                10
                              ]),
                          /* :: */[
                            Css.paddingRight(/* `px */[
                                  25096,
                                  10
                                ]),
                            /* :: */[
                              Css.paddingTop(/* `px */[
                                    25096,
                                    5
                                  ]),
                              /* :: */[
                                Css.paddingBottom(/* `px */[
                                      25096,
                                      5
                                    ]),
                                /* [] */0
                              ]
                            ]
                          ]
                        ]
                      ]
                    ]
                  ]
                ]));
}

var Imported = {
  defaultStyle: defaultStyle
};

function Tooltip$1(Props) {
  var ariaLabel = Props.ariaLabel;
  var style = Props.style;
  var $staropt$star = Props.className;
  var id = Props.id;
  var label = Props.label;
  var children = Props.children;
  var className = $staropt$star !== undefined ? $staropt$star : defaultStyle(/* () */0);
  var tmp = {
    className: className,
    label: label,
    children: children
  };
  if (ariaLabel !== undefined) {
    tmp.ariaLabel = Caml_option.valFromOption(ariaLabel);
  }
  if (style !== undefined) {
    tmp.style = Caml_option.valFromOption(style);
  }
  if (id !== undefined) {
    tmp.id = Caml_option.valFromOption(id);
  }
  return React.createElement(Tooltip.default, tmp);
}

var make = Tooltip$1;

export {
  Imported ,
  make ,
  
}
/*  Not a pure module */
