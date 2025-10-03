import React, { useEffect } from 'react';

const TranslateWidget = () => {
  useEffect(() => {
    // Check if the script has already been added to the page
    if (document.getElementById('google-translate-script')) {
      return;
    }

    // // Define the initialization function and attach it to the window object
    // window.googleTranslateElementInit = () => {
    //   new window.google.translate.TranslateElement(
    //     {
    //       pageLanguage: 'en', // The original language of your site
    //       layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
    //     },
    //     'google_translate_element' // The ID of the div where the widget will appear
    //   );
    // };

    // Define the initialization function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Default language of your site
          // MODIFICATION: Added the new language codes
          includedLanguages: 'en,es,pt,ar,fr,it,hi,zh-CN,de,ru,ja,ko',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
    };

    // Create a new script element for the Google Translate API
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // This is a cleanup function that will run when the component is removed
    return () => {
      const scriptElement = document.getElementById('google-translate-script');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  // This is the div where Google will render the language switcher
  return <div id="google_translate_element"></div>;
};

export default TranslateWidget;







// import React, { useEffect } from 'react';

// const TranslateWidget = () => {
//   useEffect(() => {
//     // Prevent adding the script multiple times
//     if (document.getElementById('google-translate-script')) {
//       return;
//     }

//     // Define the initialization function
//     window.googleTranslateElementInit = () => {
//       new window.google.translate.TranslateElement(
//         {
//           pageLanguage: 'en', // Default language of your site
//           includedLanguages: 'en,es,fr,de,it,ru', // Optional: restrict to specific languages
//           layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
//         },
//         'google_translate_element'
//       );
//     };

//     // Add the Google Translate script
//     const script = document.createElement('script');
//     script.id = 'google-translate-script';
//     script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//     script.async = true;
//     document.body.appendChild(script);

//     // Cleanup function
//     return () => {
//       const scriptElement = document.getElementById('google-translate-script');
//       if (scriptElement) {
//         document.body.removeChild(scriptElement);
//       }
//       delete window.googleTranslateElementInit;
//     };
//   }, []);

//   // Widget container
//   return (
//     <div id="google_translate_element" className="my-4"></div>
//   );
// };

// export default TranslateWidget;
