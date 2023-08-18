# Fluid Font SCSS Mixin
This is a simple fluid font mixin that references a font map that could be designed any way you like. The advantage to using the map is in that it gives designers freedom to add a lot of different variations of font styles without over complicating the stylesheet. All font styles are stored in one place. 

**Requirements:** You will need a .scss compiler. The **_example** uses a simple gulp sass compiler. 

## Font Map
When creating the font map, you have the flexibility to organize it according to your preference. Ensure it adheres to the provided format and includes all necessary values. *Remember that font sizes should be specified in 'px'.*

**Font Map format**

    $fonts: (
      'KEY': (
        'VALUE': (
          'family': ,
          'font-size-desktop': ,
          'font-size-mobile': ,
          'font-weight': ,
          'letter-spacing': ,
          'line-height-desktop': ,
          'line-height-mobile': ,
          'text-transform': false,
        ),
      ),
    );


### Here are two sample approaches:

**Option 1:** Naming based on font characteristics.<br/>
**Advantages:** Provides descriptive insight into the font.<br/>
**Disadvantages:** May require additional familiarity with font characteristics.

    $fonts: (
      'serif': (
        'reg-72': (
          'family': $$font-family-serif,
          'font-size-desktop': 72px ,
          'font-size-mobile': 60px,
          'font-weight': 500,
          'letter-spacing': normal,
          'line-height-desktop': 1.25,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
        'reg-60': (
          'family': $$font-family-serif,
          'font-size-desktop': 60px ,
          'font-size-mobile': 48px,
          'font-weight': 500,
          'letter-spacing': normal,
          'line-height-desktop': 1.25,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
      ),
      'sans': (
        'bold-24': (
          'family': $$font-family-serif,
          'font-size-desktop': 24px ,
          'font-size-mobile': 20px,
          'font-weight': 700,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
        'reg-24': (
          'family': $$font-family-serif,
          'font-size-desktop': 24px ,
          'font-size-mobile': 20px,
          'font-weight': 400,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
        'bold-18': (
          'family': $$font-family-serif,
          'font-size-desktop': 18px,
          'font-size-mobile': 16px,
          'font-weight': 700,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
        'reg-18': (
          'family': $$font-family-serif,
          'font-size-desktop': 18px ,
          'font-size-mobile': 16px,
          'font-weight': 400,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
      ),
    );

**Option 2:** Naming based on the style's function.<br/>
**Advantages:** Offers clear understanding of the style's purpose.<br/>
**Disadvantages:** Might be less intuitive for fonts with multiple functions.

    $fonts: (
      'header': (
        'xl': (
          'family': $$font-family-serif,
          'font-size-desktop': 72px ,
          'font-size-mobile': 60px,
          'font-weight': 500,
          'letter-spacing': normal,
          'line-height-desktop': 1.25,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
        'lg': (
          'family': $$font-family-serif,
          'font-size-desktop': 60px ,
          'font-size-mobile': 48px,
          'font-weight': 500,
          'letter-spacing': normal,
          'line-height-desktop': 1.25,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
      ),
      'bodycopy': (
        'xl-bold': (
          'family': $$font-family-serif,
          'font-size-desktop': 24px ,
          'font-size-mobile': 20px,
          'font-weight': 700,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
        'xl': (
          'family': $$font-family-serif,
          'font-size-desktop': 24px ,
          'font-size-mobile': 20px,
          'font-weight': 400,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
        'lg-bold': (
          'family': $$font-family-serif,
          'font-size-desktop': 18px ,
          'font-size-mobile': 16px,
          'font-weight': 700,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
        'lg': (
          'family': $$font-family-serif,
          'font-size-desktop': 18px ,
          'font-size-mobile': 16px,
          'font-weight': 400,
          'letter-spacing': normal,
          'line-height-desktop': 1.5,
          'line-height-mobile': 1.5,
          'text-transform': false,
        ),
      ),
    );


Ultimately, the choice between these options rests with you. Select the one that aligns best with your workflow and preferences.

