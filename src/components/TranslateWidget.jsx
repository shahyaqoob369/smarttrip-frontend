import React, { useEffect } from 'react';

const TranslateWidget = () => {
  useEffect(() => {
    if (document.getElementById('google-translate-script')) {
      return;
    }
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        'google_translate_element'
      );
    };
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      const scriptElement = document.getElementById('google-translate-script');
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
      delete window.googleTranslateElementInit;
    };
  }, []);

  // MODIFICATION: Added 'flex-shrink-0' to prevent the widget from shrinking
  return <div id="google_translate_element" className="flex-shrink-0"></div>;
};

export default TranslateWidget;