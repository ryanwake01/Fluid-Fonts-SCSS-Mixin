# Fluid Font SCSS Mixin
Fluid fonts are a great way to create a truly responsive display on the web for all screen sizes. Many times, developer receive designs that leave a lot of guess work in how a component or element is to behave at different breakpoints. This code is designed to help eliminate the guesswork when developing websites. At least with the font sizes.

This is a mixin that allows fonts size to be calculated based on the screen width. By creating a simple font map, which is very flexible, you can have all the typography on your site resizing fluidly without the need for a lot of scss declarations.

**Requirements:** You will need a .scss compiler. The example uses a simple gulp sass compiler.

## Font Map
When creating the font map, you have the flexibility to organize it according to your preference. Ensure it adheres to the provided format and includes all necessary values. *Remember that font sizes should be specified in 'px'.*

**Font Map Format**

    $fonts: (
      'KEY': (
        'VALUE': (
          'family': ,
          'font-size-desktop': ,
          'font-size-mobile': ,
          'letter-spacing': ,
          'line-height-desktop': ,
          'line-height-mobile': ,
        ),
      ),
    );
*Minimum requirements for mixin to function. It is possible to add additional declarations, however, it would require adding those to the mixin code as well*

### Here are two sample approaches:

**Descriptive Naming:** Naming based on font function. *( key = 'header, display, bodycopy, eyebrow' )*
**Advantages:** Makes it easy to add fonts based on what it's being applied to.
**Disadvantages:** May require additional familiarity with font styles from the design. Can be difficult for devs working after you to get up to speed.
**Implementation:** `@include font(display, _72);`

    $fonts: (
      'display': (
        '_72': (
          'family': $font-family-serif,
          'font-size-desktop': 72px ,
          'font-size-mobile': 60px,
          'letter-spacing': normal,
          'line-height-desktop': 1.25,
          'line-height-mobile': 1.5,
        ),
      ),
      'header': (
        '_32': (
          'family': $font-family-sans,
          'font-size-desktop': 32px ,
          'font-size-mobile': 24px,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.4,
        ),
      ),
      'bodycopy': (
        '_16': (
          'family': $$font-family-serif,
          'font-size-desktop': 16px ,
          'font-size-mobile': 14px,
          'letter-spacing': normal,
          'line-height-desktop': 1.6,
          'line-height-mobile': 1.475,
        ),
      ),
    );

**Function Naming:** Naming based on the style's function. *( key = 'sans', 'serif', 'mono' )*<br/>
**Advantages:** Offers clear understanding of the mixin's settings. Easier for dev's following you to get up to speed without requiring a lot of searching.<br/>
**Disadvantages:** Could make the font map a little more confusing or cluttered, depending on the number of declarations added.
**Implementation:** `@include font(sans, _48);`

    $fonts: (
      'sans': (
        '_48': (
          'family': $font-family-sans,
          'font-size-desktop': 48px ,
          'font-size-mobile': 32px,
          'letter-spacing': normal,
          'line-height-desktop': 1.25,
          'line-height-mobile': 1.5,
        ),
      ),
      'serif': (
        '_18': (
          'family': $font-family-serif,
          'font-size-desktop': 18px ,
          'font-size-mobile': 16px,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.4,
        ),
      ),
      'mono': (
        '_16': (
          'family': $font-family-mono,
          'font-size-desktop': 16px ,
          'font-size-mobile': 14px,
          'letter-spacing': normal,
          'line-height-desktop': 1.6,
          'line-height-mobile': 1.475,
        ),
      ),
    );
*This example uses 'sans', 'serif', and 'mono' as key names. This may not work if the project design calls for multiple sans-serif fonts for example. In a case like that, it is recommended using the font names as keys. For example, 'futura', 'open-sans', 'inter-sans'.*

Ultimately, the choice between these options rests with you. Select the one that aligns best with your workflow and preferences.
