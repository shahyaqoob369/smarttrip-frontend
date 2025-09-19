import React, { useEffect } from "react";

const HostelsPage = () => {
  useEffect(() => {
    // Remove previous script if it exists
    const existingScript = document.getElementById("hotellook-widget");
    if (existingScript) {
      existingScript.remove();
    }

    // Create and inject the script
    const script = document.createElement("script");
    script.src =
      "https://tpwdg.com/content?currency=usd&trs=446991&shmarker=661841&show_hotels=true&powered_by=true&locale=en&searchUrl=search.hotellook.com/?f%5Bproperty_types%5D=hostel&primary_override=%23FF8E01&color_button=%23FF8E01&color_icons=%23FF8E01&secondary=%23FFFFFF&dark=%23262626&light=%23FFFFFF&special=%23C4C4C4&color_focused=%23FF8E01&border_radius=5&plain=false&promo_id=7873&campaign_id=101";
    script.async = true;
    script.charset = "utf-8";
    script.id = "hotellook-widget";

    document.getElementById("hotellook-widget-container").appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-xl font-bold text-center p-4">Find Hostels</h1>

      {/* Widget will render here */}
      <div
        id="hotellook-widget-container"
        className="w-full flex justify-center"
      />
    </div>
  );
};

export default HostelsPage;
