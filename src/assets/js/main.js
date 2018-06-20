const create = tagname => document.createElement(tagname);

const div = create("div");
const span = create("span");
const nav = create("nav");
const ul = create("ul");
const li = create("li");
const strong = create("strong");
const a = create("a");
const h3 = create("h3");
const p = create("p");
const img = create("img");
const button = create("button");

const snakeLink = a.cloneNode(true);
snakeLink.className = "snake";

const dot = span.cloneNode();
dot.className = "dot";

const pageShapeUrl = span.cloneNode();
pageShapeUrl.className = "page-shape-url";

const pageShape = div.cloneNode();
pageShape.className = "page-shape";

pageShape.append(dot.cloneNode());
pageShape.append(dot.cloneNode());
pageShape.append(dot.cloneNode());

// const grnStyle = () => {
//   let s = Math.floor(Math.random() * 10);
//   let t = Math.floor(Math.random() * 4000 + 1000);
//   let x = Math.random() * 80;
//   let y = Math.random() * 80;
//   return {
//     s,
//     t,
//     x,
//     y
//   };
// };

const setStyle = (selector, styles = {}) => {
  console.log(styles);
  for (let [key, value] of Object.entries(styles)) {
    selector.style[key] = value;
  }
};
// const icons = [
//   `react`,
//   `babel`,
//   `bootstrap`,
//   "css3",
//   "html5",
//   "gulp",
//   "vue",
//   "github_alt",
//   "bitbucket",
//   "jira",
//   "npm",
//   "nodejs",
//   "sass",
//   "less",
//   "stylus",
//   "linux",
//   "android",
//   "apple",
//   "vscode",
//   "atom"
// ];
// const blossom = () => {
//   for (let i = 0; i < icons.length; i++) {
//     let icon = document.createElement("i");
//     icon.className = `devicons devicons-${icons[i]}`;
//     icon.style.fontSize = `80px`;
//     const { s, t, x, y } = grnStyle();

//     requestAnimationFrame(() =>
//       setStyle(
//         {
//           s,
//           t,
//           x,
//           y
//         },
//         icon
//       )
//     );
//     setInterval(() => setStyle(grnStyle(), icon), t * 4);
//     const about = document.querySelector("#nav");
//     about.append(icon);
//   }
// };

// blossom();

const navLinks = document.querySelectorAll("#nav ul.list li a");

const ScrollControl = class {
  constructor({ links = [] }) {
    this.hash = null;

    this.links = [...links].map(link => ({
      selector: link,
      hash: link.getAttribute("href")
    }));
    this.nodeList = [
      ...this.links.map(link => ({
        selector: document.querySelector(link.hash),
        hash: link.hash
      }))
    ];

    window.addEventListener("scroll", _ => this.sectionHandler());
    this.linksHandler();
  }

  sectionHandler() {
    const windowHeight = document.documentElement.clientHeight;
    for (let node of this.nodeList) {
      const coords = node.selector.getBoundingClientRect();
      const isCurrent = coords.top >= 0 || coords.bottom - 23 > 0;
      if (isCurrent) {
        this.hash = node.hash;
        this.updateNavigation();
        break;
      }
    }
  }

  linksHandler() {
    this.links.forEach(link => {
      link.selector.addEventListener("click", event => {
        event.preventDefault();
        this.hash = link.hash;
        this.updateSections();
      });
    });
  }
  updateNavigation() {
    this.links.forEach(
      link =>
        link.hash === this.hash
          ? link.selector.classList.add("btn-primary")
          : link.selector.classList.remove("btn-primary")
    );
  }

  updateSections() {
    window.scrollTo({
      top: this.nodeList.find(node => node.hash === this.hash).selector
        .offsetTop,
      behavior: "smooth"
    });
  }
};
const yyy = new ScrollControl({ links: navLinks });

// examples

const json = JSON.stringify({
  sortKeys: ["all", "extension", "desktop", "mobile", "web"],
  examples: [
    {
      label: `NormalGame`,
      url: `https://normalgame.net`,
      sortKey: `web,react`,
      img: `normalgame.png`,
      use: [
        { label: "React", url: "https://reactjs.org/" },
        { label: "redux", url: "https://redux.js.org/" },
        {
          label: "redux-saga",
          url: "https://github.com/redux-saga/redux-saga"
        },
        { label: "webpack", url: "https://webpack.js.org/" },
        {
          label: "styled-components",
          url: "https://www.styled-components.com/"
        },
        { label: "Laravel", url: "http://laravel.su/" }
      ],
      description: `Using: React, Redux, Webpack, recompose, styled-components, redux-saga`
    },
    {
      label: `JustLabelMe`,
      url: `https://just-label.me`,
      sortKey: `web`,
      img: `justlabelme.png`,
      use: [
        { label: "JavaScript", url: "https://www.javascript.com/" },
        { label: "stylus", url: "http://stylus-lang.com/" },
        { label: "gulp", url: "https://gulpjs.com/" }
      ],
      description: `With JustLabelMe service, you’ll save a lot of time because you can print perfectly onto 4”x6” sticker labels, peel them and place them right on the package!`
    },
    {
      label: `JustLabelMe Extension`,
      url: `https://chrome.google.com/webstore/detail/justlabelme/bpfpmjjojjekdeliaeepcnccikcjpiph`,
      sortKey: `web,extension`,
      img: `justlabelme_ext.jpg`,
      use: [
        { label: "React", url: "https://reactjs.org/" },
        { label: "redux", url: "https://redux.js.org/" },
        { label: "webpack", url: "https://webpack.js.org/" },
        {
          label: "styled-components",
          url: "https://www.styled-components.com/"
        }
      ],
      description: `Provides the ability to transform & print FBA shipping and product labels while you are on Amazon Seller Central with a single click`
    },
    {
      label: `Widin`,
      url: `https://codingchipmunks.com/widin/`,
      sortKey: `web`,
      img: `widin.png`,
      use: [
        { label: "JavaScript", url: "https://www.javascript.com/" },
        { label: "stylus", url: "http://stylus-lang.com/" },
        {
          label: "pug (jade)",
          url: "https://pugjs.org/api/getting-started.html"
        },
        { label: "gulp", url: "https://gulpjs.com/" }
      ],
      description: `WidinOnline is a decentralized multifaceted market place set to unify the entire commerce landscape of Africa into a sigle inegrated e-commerce platform`
    },
    {
      label: `nomis`,
      url: `https://nomis.com.ua/`,
      sortKey: `web`,
      img: `nomis.png`,
      use: [
        { label: "JavaScript", url: "https://www.javascript.com/" },
        { label: "jQuery", url: "https://jquery.com/" },
        { label: "sass", url: "https://sass-lang.com/" },
        { label: "blade", url: "http://laravel.su/docs/5.3/blade" },
        { label: "gulp", url: "https://gulpjs.com/" },
        { label: "Laravel", url: "http://laravel.su/" }
      ],
      description: `Check the reliability and solvency of the counterparty`
    }
  ]
});

const data = JSON.parse(json);
const _example = document.querySelector("#examples");

// const _sortBtn = _example.querySelectorAll('nav ul li btn.btn')

// _sortBtn.forEach( btn => {
//     btn.addEventListener('click', function() {
//         const sortKey = this.dataset.sort
//     })
// } )

const _sortExamples = (sortKey = "") =>
  JSON.parse(json).filter(item =>
    item.sortKey.split(",").some(key => key === sortKey)
  );

const _renderExamples = json => {
  const examplesNode = document.querySelector("#examples .examples");
  const exampleNavigation = nav.cloneNode(true);
  exampleNavigation.className = "flex flex-align-center flex-justify-sa";
  const exampleNavigationControl = ul.cloneNode(true);
  exampleNavigationControl.className =
    "flex flex-align-center flex-justify-sa mb-20";
  const exampleNavigationControlItem = li.cloneNode(true);
  const exampleNavigationControlButton = button.cloneNode(true);
  exampleNavigationControlButton.className = "btn text-uppercase";

  const exampleList = ul.cloneNode(true);
  exampleList.className =
    "examples-content flex flex-align-start flex-justify-sa";

  const exampleListItem = li.cloneNode(true);
  exampleListItem.className = `card`;

  const exampleListItemMedia = div.cloneNode(true);
  exampleListItemMedia.className = "card-media";

  const exampleListItemContent = div.cloneNode(true);
  exampleListItemContent.className = `card-content`;

  const cardLink = snakeLink.cloneNode(true);
  cardLink.className = "card-label snake";

  const cardDescription = p.cloneNode(true);
  cardDescription.className = "card-description";

  data.examples.forEach(example => {
    const _cardDescription = cardDescription.cloneNode(true);
    _cardDescription.innerHTML = example.description;

    const _cardLink = cardLink.cloneNode(true);
    _cardLink.href = example.url;
    _cardLink.innerHTML = example.label;

    // const _cardDescription = cardDescription.cloneNode(true)

    const _strong = strong.cloneNode(true);
    _strong.append(_cardLink);

    const _use = strong.cloneNode(true);

    const _useWrapper = p.cloneNode();
    _use.innerHTML = "Use: ";
    _useWrapper.append(_use);

    example.use.forEach((use, idx) => {
      const _link = a.cloneNode();
      _link.href = use.url;
      _link.className = "snake card-link";
      _link.target = "_blank";
      _link.innerHTML = `${use.label}${
        idx === example.use.length - 1 ? "" : ","
      }`;
      _link.style.display = "inline-flex";
      _link.style.flexWrap = "wrap";
      _useWrapper.append(_link);
    });

    // _cardDescription.innerHTML = example.description

    const _cardMedia = exampleListItemMedia.cloneNode(true);
    const _img = img.cloneNode(true);
    _img.src = `./img/examples/${example.img}`;

    // const pageShape = img.cloneNode(true)
    // pageShape.src = '/img/page-shape.jpg'

    const _pageShapeUrl = pageShapeUrl.cloneNode();
    _pageShapeUrl.innerHTML = example.url;

    const _pageShape = pageShape.cloneNode(true);
    _pageShape.append(_pageShapeUrl);

    _cardMedia.append(_img);

    const _cardContent = exampleListItemContent.cloneNode(true);

    _cardContent.append(_strong);
    _cardContent.append(_useWrapper);
    _cardContent.append(_cardDescription);

    const _exampleListItem = exampleListItem.cloneNode(true);
    _exampleListItem.dataset.sort = example.sortKey;

    _exampleListItem.append(_pageShape);
    _exampleListItem.append(_cardMedia);
    _exampleListItem.append(_cardContent);

    exampleList.append(_exampleListItem);
  });

  const checkSort = sortKey => {
    exampleList.querySelectorAll(".card").forEach(card => {
      // console.log(card, card.dataset.sort)
      if (
        card.dataset.sort.split(",").some(key => key === sortKey) ||
        sortKey === "all"
      ) {
        card.classList.add("show_scale");
        card.classList.remove("hide_scale");
      } else {
        card.classList.remove("show_scale");
        card.classList.add("hide_scale");
      }
      examplesNode
        .querySelectorAll("ul li button[data-sort]")
        .forEach(btn => btn.classList.remove("btn-primary"));
      examplesNode
        .querySelector(`ul li button[data-sort="${sortKey}"]`)
        .classList.add("btn-primary");
    });
  };
  data.sortKeys.forEach((sortKey, key) => {
    const _exampleNavigationControlButton = exampleNavigationControlButton.cloneNode(
      true
    );
    _exampleNavigationControlButton.innerHTML = sortKey;
    _exampleNavigationControlButton.dataset.sort = sortKey;
    if (!key) _exampleNavigationControlButton.classList.add("btn-primary");

    _exampleNavigationControlButton.addEventListener("click", function() {
      checkSort(sortKey);
    });
    const _exampleNavigationControlItem = exampleNavigationControlItem.cloneNode(
      true
    );
    _exampleNavigationControlItem.append(_exampleNavigationControlButton);
    exampleNavigationControl.append(_exampleNavigationControlItem);
  });

  examplesNode.append(exampleNavigationControl);
  examplesNode.append(exampleList);
};

_renderExamples(data);

// nav
// const _nav = document.getElementById("nav");
// const checkScroll = () => {
//   if (window.scrollY > _nav.offsetHeight) {
//     _nav.classList.remove("transform");
//     _nav.style.backgroundColor = 'rgba(5, 81, 84, 1);'
//   } else {
//     _nav.classList.add("transform");
//     _nav.style.backgroundColor = `rgba(5,81,84, ${window.scrollY /
//       _nav.offsetHeight +
//       0.4})`;
//   }
// };

// window.addEventListener("scroll", () => {
//   requestAnimationFrame(checkScroll);
// });


particlesJS("particles-js", {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: "#59DBD5"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#505050"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#505050",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
// bracket text

const TextBracket = class {
  constructor({ selector }) {
    if (!selector) return;
    this.selector = selector;
    const { keywords = [], duration = 4000 } = this.selector.dataset;
    this.duration = duration;
    this.words = keywords.split(",");

    this.current = 0;
    this.createNode();
  }
  createNode() {
    const bracket = div.cloneNode();
    const before = h3.cloneNode();
    const after = h3.cloneNode();
    const wordWrap = div.cloneNode();
    this.wordWrap = wordWrap;
    const word = h3.cloneNode();

    before.className = 'color-primary bold mr-10'
    after.className = 'color-primary bold ml-10'

    setStyle(word, {
      display: 'inline-flex',
      justifyContent: 'center',
      textTransform: 'uppercase',
      fontWeight: '400',
    })

    setStyle(bracket, {
      display: "inline-flex"
    });

    setStyle(wordWrap, {
      display: "flex",
      overflow: 'hidden',
    });

    before.innerHTML = "[";
    after.innerHTML = "]";

    bracket.append(before, wordWrap, after);

    let maxWidth = 0;
    let maxHeight = 0;
    this.wordsSelector = this.words.map(textWord => {
      const _word = word.cloneNode(true);
      _word.innerHTML = textWord;
      return _word;
    });
    const wordSlider = div.cloneNode()
    setStyle(wordSlider, {
      display: 'flex',
      flexDirection: 'column',
      transition: '0.4s'
    })
    wordSlider.append(...this.wordsSelector)
    this.wordWrap.append(wordSlider);

    this.selector.append(bracket);

    this.maxWidth = `${wordSlider.offsetWidth}px`
    this.maxHeight = this.wordsSelector[0].offsetHeight
    setStyle(this.wordWrap, {
      width: this.maxWidth,
      height: `${this.maxHeight}px`,
      position: "relative",
    });
    setStyle(wordSlider, {
      position: 'absolute',
      top: 0,
      left: 0,
    })
    this.wordSlider = wordSlider
    this.update();
  }
  update() {
    console.log(this.current, this.maxHeight)
    setStyle(this.wordSlider, {
      transform: `translateY(-${this.current * this.maxHeight}px)`
    })
    this.current =
    this.current >= this.wordsSelector.length - 1 ? 0 : this.current + 1;

    setTimeout(() => this.update(), this.duration);
  }
};
const textBracket = document.querySelector(".text-bracket");
new TextBracket({ selector: textBracket });
// lazy loading

const loadImages = document.querySelectorAll(".lazy-load") || [];

const LazyLoad = class {
  constructor({ images }) {
    this.images = images;

    console.log(this.images);
    window.addEventListener("scroll", () => this.checkPosition());
  }

  checkPosition() {
    this.images.length &&
      this.images.forEach(
        image => (this.isVisible(image) ? this.showImage(image) : undefined)
      );
  }

  isVisible(elem) {
    const coords = elem.getBoundingClientRect();

    const windowHeight = document.documentElement.clientHeight;

    const topVisible = (coords.top + windowHeight / 2) > 0 && coords.top < windowHeight;
    const bottomVisible = coords.bottom < windowHeight + windowHeight / 2 && coords.bottom > 0;

    return topVisible || bottomVisible;
  }

  showImage(elem) {
    const _src = elem.getAttribute("realsrc");
    elem.src = _src;
    this.images = Array.prototype.slice
      .call(this.images)
      .filter(image => image !== elem);
  }
};

const lazy = new LazyLoad({ images: loadImages });


const animationHandler = class {
  constructor({ selectors }) {
    this.selectors = selectors
    this.handle()
  }

  handle() {
    this.selectors.forEach(selector => {
      const { animate, start } = selector.dataset;
      switch (start) {
        case "load":
          document.addEventListener("DOMContentLoaded", () => {
            selector.classList.add(animate);
          });
        case "scroll":
          window.addEventListener("scroll", () => this.checkScroll(selector, animate));
          this.checkScroll(selector, animate)
          break;
    
        default:
          break;
      }
    });

  }

  checkScroll(selector, animate) {
    if (selector.getBoundingClientRect().top <= document.documentElement.clientHeight) {
      selector.classList.add(animate);
    }

  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  new animationHandler({ selectors: [...document.querySelectorAll(".animated")] })
})