import React, { useEffect } from 'react';

const GoogleTranslateWidget = () => {
  useEffect(() => {
    // This function is called by the script we added in index.html
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en' }, // The default language of your site
        'google_translate_element' // The ID of the div where the widget will appear
      );
    };
  }, []);

  return (
    // This div is the target for the Google Translate widget
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslateWidget;