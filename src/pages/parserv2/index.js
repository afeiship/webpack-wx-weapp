import { $route } from '#';
import gtbJson from './gtb.json';

nx.Page({
  data: {
    nodes: {
      "type": "element",
      "tagName": "section",
      "attrs": {
        "class": "root-container"
      },
      "children": [
        {
          "type": "comment",
          "content": " wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h2",
          "children": [
            {
              "type": "text",
              "content": "1.",
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "贝斯达医疗：公司简介",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "公司简介。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "a",
              "children": [
                {
                  "type": "text",
                  "content": "公司成立于 2000 年",
                  "attrs": {}
                }
              ],
              "attrs": {
                "href": "https://www.baidu.com"
              }
            },
            {
              "type": "text",
              "content": "，总部位于深圳。贝斯达医疗是一家集医学影像与放射治疗产品的研发、制造、销售和服务为一体的国家高新技术企业。",
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "span",
              "children": [
                {
                  "type": "text",
                  "content": "公司主要",
                  "attrs": {}
                }
              ],
              "attrs": {
                "style": "color:#30363d",
                "class": "tss-color"
              }
            },
            {
              "type": "text",
              "content": "产品包括磁共振成像系统、医用 X 射线设备、彩色超声诊断系统、",
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "span",
              "children": [
                {
                  "type": "element",
                  "tagName": "span",
                  "children": [
                    {
                      "type": "text",
                      "content": "核医学设备、医疗",
                      "attrs": {}
                    }
                  ],
                  "attrs": {
                    "style": "background-color:",
                    "class": "tss-background-color"
                  }
                }
              ],
              "attrs": {
                "style": "color:#30363d",
                "class": "tss-color"
              }
            },
            {
              "type": "text",
              "content": "信息化软件五大系列，主要应用于医院、基层医疗卫生机构、专业公共卫生机构等各级医疗机构，目前主要客户为民营医院和中小医院。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "主要产品。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "text",
              "content": "公司产品主要包含五大系列：磁共振成像系统、医用&nbsp;X 射线设备、彩色超声诊断系统、核医学设备、医疗信息化软件。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;5",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：公司各业务收入（亿元）",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4162\",\"dataJson\":\"eyJ0aWQiOiI0MTYyIiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4162",
                "data-json": "eyJ0aWQiOiI0MTYyIiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4162",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading {\"level\":3} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h3",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "1.1 股权结构",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;6",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：公司股东架构",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4163\",\"dataJson\":\"eyJ0aWQiOiI0MTYzIiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4163",
                "data-json": "eyJ0aWQiOiI0MTYzIiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4163",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h2",
          "children": [
            {
              "type": "text",
              "content": "2. 业务分析",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "业务构成",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "text",
              "content": "。公司主营业务主要包括：磁共振成像系统、医用&nbsp;X 射线设备、彩色超声诊断系统、医疗信息化软件、保修及服务。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;8",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：子业务占主营业务收入百分比",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4164\",\"dataJson\":\"eyJ0aWQiOiI0MTY0IiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4164",
                "data-json": "eyJ0aWQiOiI0MTY0IiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4164",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "2.1 ",
                  "attrs": {}
                }
              ],
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "业务一：磁共振成像系统",
                  "attrs": {}
                }
              ],
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "系统介绍。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "text",
              "content": "磁共振成像系统主要应用于临床大型医学影像诊断，具有分辨率高、多方向扫描、多参数成像、兼具解剖与信息成像功能以及无电离辐射等优点。2016 年至&nbsp;2018 年，磁共振成像系统业务营业收入分别为2.16 亿元、2.32 亿元和&nbsp;2.98 亿元，历年营收占比均超过&nbsp;50%，是公司的核心业务。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h2",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "5、财务分析",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading {\"level\":4} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h4",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "5.1 营业收入和净利润",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;28",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：营业收入",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4114\",\"dataJson\":\"eyJ0aWQiOiI0MTE0IiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4114",
                "data-json": "eyJ0aWQiOiI0MTE0IiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4114",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;29",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：归母净利润",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4115\",\"dataJson\":\"eyJ0aWQiOiI0MTE1IiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4115",
                "data-json": "eyJ0aWQiOiI0MTE1IiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4115",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading {\"level\":4} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h4",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "5.2 ",
                  "attrs": {}
                }
              ],
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "毛利率和净利率",
                  "attrs": {}
                }
              ],
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "净利率高且稳定。",
                  "attrs": {}
                }
              ],
              "attrs": {}
            },
            {
              "type": "text",
              "content": "2016 年至&nbsp;2018 年，公司毛利分别为&nbsp;1.66 亿元、1.96",
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "sup",
              "children": [],
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "text",
              "content": "亿元和&nbsp;2.21 万元，公司毛利率分别为&nbsp;46.6%、47.1%和&nbsp;46.8%；净利润率为&nbsp;26.2%、24.8%和&nbsp;22.9%。我们可以看到，公司净利润高，且较为稳定。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;30",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：毛利、毛利率和净利润率",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4161\",\"dataJson\":\"eyJ0aWQiOiI0MTYxIiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4161",
                "data-json": "eyJ0aWQiOiI0MTYxIiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4161",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading {\"level\":4} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h4",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "5.3 ",
                  "attrs": {}
                }
              ],
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "费用分析：销售费用和管理费用",
                  "attrs": {}
                }
              ],
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;33",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：期间费用率",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4117\",\"dataJson\":\"eyJ0aWQiOiI0MTE3IiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4117",
                "data-json": "eyJ0aWQiOiI0MTE3IiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4117",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "销售费用逐年增加。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "text",
              "content": "2016 年至&nbsp;2018 年，公司销售费用分别为&nbsp;4474 万元、4720 万元和&nbsp;5247 万元，主要由职工薪酬、业务推广费、差旅费、产品质保期服务费等构成。2016 年至&nbsp;2018 年，公司加大市场开拓力度，因此销售人员薪酬、差旅费以及业务推广费不断上升，因此销售费用相应增加。",
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "销售费用率小幅下滑。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "text",
              "content": "2016 年至&nbsp;2018 年，公司销售费用占营业收入比例分别为&nbsp;12.56%、11.37%和&nbsp;11.14%，销售费用率小幅下滑。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;34",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：销售费用",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4158\",\"dataJson\":\"eyJ0aWQiOiI0MTU4IiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4158",
                "data-json": "eyJ0aWQiOiI0MTU4IiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4158",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "管理费用逐年增加。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "text",
              "content": "2016 年至&nbsp;2018 年，公司管理费用分别为&nbsp;2203 万元、3053 万元和&nbsp;2997 万元，主要由专业服务费、职工薪酬、折旧与摊销等构成。职工薪酬系管理人员的工资、奖金及社保等，专业服务费主要包括新三板挂牌、挂牌后的运行成本以及&nbsp;IPO 相关的中介机构费用。",
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "管理费用率小幅上升。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "text",
              "content": "2016 年至&nbsp;2018 年，公司管理费用占营业收入的比例分别为&nbsp;6.18%、7.35%和&nbsp;6.36%，管理费用率小幅上升。我们认为，公司管理费用率上升的原因是：2017 年、2018 年公司专业服务费的大幅增加。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;35",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：管理费用",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4159\",\"dataJson\":\"eyJ0aWQiOiI0MTU5IiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4159",
                "data-json": "eyJ0aWQiOiI0MTU5IiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4159",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading {\"level\":4} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h4",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "5.4 研发费用",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "研发投入占比不断提升。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "text",
              "content": "2016 年至&nbsp;2018 年，公司研发费用分别为&nbsp;2090 万元、2558 万元和&nbsp;4477 万元，2017 年度和&nbsp;2018 年度研发费用增幅分别为&nbsp;22.4%和&nbsp;75.0%，研发费用占营业收入比分别为&nbsp;5.9%、6.2%和&nbsp;9.5%，研发投入占营业收入的比例不断提升。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "图表",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "&nbsp;36",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "element",
                  "tagName": "em",
                  "children": [
                    {
                      "type": "element",
                      "tagName": "strong",
                      "children": [
                        {
                          "type": "element",
                          "tagName": "em",
                          "children": [
                            {
                              "type": "text",
                              "content": "：研发费用",
                              "attrs": {}
                            }
                          ],
                          "attrs": {
                            "class": "tss-italic"
                          }
                        }
                      ],
                      "attrs": {
                        "class": "tss-bold"
                      }
                    }
                  ],
                  "attrs": {
                    "class": "tss-italic"
                  }
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:data/tu-block {\"tid\":\"4160\",\"dataJson\":\"eyJ0aWQiOiI0MTYwIiwiaXNTdGF0aWMiOmZhbHNlfQ==\"} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "div",
          "children": [
            {
              "type": "element",
              "tagName": "tu-chart",
              "children": [],
              "attrs": {
                "tid": "4160",
                "data-json": "eyJ0aWQiOiI0MTYwIiwiaXNTdGF0aWMiOmZhbHNlfQ==",
                "data-is-static": "false",
                "dataJson": {
                  "tid": "4160",
                  "isStatic": false
                }
              }
            }
          ],
          "attrs": {
            "class": "wp-block-data-tu-block"
          }
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:data/tu-block ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h2",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "6、募集资金投向",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "项目简介。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            },
            {
              "type": "text",
              "content": "该项目计划建立含&nbsp;EMC 实验室、电气实验室、机械实验室、安规与可靠性实验室的测试中心，在大型医学影像诊断、放射治疗、软件信息化等领域突破关键技术和关键部件，重点开发具有自主知识产权的、高性能、高品质、低成本的高端医疗器械产品。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading {\"level\":4} ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h4",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "6.4 补充营运资金项目简介。",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "text",
              "content": "这部分资金主要用于增加营运资金、偿还银行借款、市场营销等主营业务相关的支出。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h2",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "7、投资建议",
                  "attrs": {}
                }
              ],
              "attrs": {
                "class": "tss-bold"
              }
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "p",
          "children": [
            {
              "type": "text",
              "content": "公司毛利率稳定，净利率高，盈利能力强。技术实力强劲，核心技术多源于自研，创新能力强。此外，近三年，公司研发投入占营业收入的比例不断提升、技术人员占员工总数的比例不断上升，公司愈加重视研发创新。2017 年公司磁共振成像系统产品市场销量排名国产品牌第二位，市场保有量排名国产品牌第二位，其中公司永磁型&nbsp;MRI 设备销量在市场全部品牌中排名第一位。我们认为，公司是国产磁共振成像系统领先者，值得重点关注。",
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:paragraph ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "element",
          "tagName": "h2",
          "children": [
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "8",
                  "attrs": {}
                }
              ],
              "attrs": {}
            },
            {
              "type": "element",
              "tagName": "strong",
              "children": [
                {
                  "type": "text",
                  "content": "、风险提示",
                  "attrs": {}
                }
              ],
              "attrs": {}
            }
          ],
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        },
        {
          "type": "comment",
          "content": " /wp:heading ",
          "attrs": {}
        },
        {
          "type": "text",
          "content": "\n",
          "attrs": {}
        }
      ]
    }
  },
  methods: {
    back() {
      $route.back();
    }
  },
  lifetimes: {
    load() {
      console.log('load parsers page!!!');
    }
  }
});
