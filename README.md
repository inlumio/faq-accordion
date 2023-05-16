# Frontend Mentor - FAQ accordion card solution

This is a solution to the
[FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam).
Frontend Mentor challenges help you improve your coding skills by building
realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen
  size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Links

- Solution URL: [Github repo](https://github.com/inlumio/faq-accordion)
- Live Site URL: [GitHub Pages](https://inlumio.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Vanilla JS

### What I learned

On of the biggest challenge for me was to position images and background inside
the card. I've decided to insert them as html ellements and make them absolute
when it needed. In addition to this I realized that flex-basis not works on
collumn direction or I tried it wrong, because I tried to make all images
absolute position, but then block shrinks to 0.

Another challenge was to toggle attribute `aria-expanded` for items. I just
forget that non-empty string is still true, and using statement bellow I have
`isExpanded = 'true'('false')`

```js
let isExpanded = e.currentTarget.getAttribute('aria-expanded');
```

## Author Profiles

- GitHub - [Mordekai](https://github.com/inlumio)
- Frontend Mentor - [@inlumio](https://www.frontendmentor.io/profile/inlumio)
- Twitter - [@VPiatkivskyi](https://twitter.com/VPiatkivskyi)
