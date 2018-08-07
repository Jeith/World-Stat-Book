(function() {
    var $randombutton = $('#randombutton');
    $randombutton.click( function(e) {
        e.preventDefault();
        window.location.href = 'countryInfo.html';
        var cc = null;
        sessionStorage.setItem("cc", cc);
    });
    var $searchbutton = $('#searchbutton');
    $searchbutton.click( function(e) {
        var $searchbar = $('#searchbar')
        var $country = $searchbar.val();
        sessionStorage.setItem("country", $country);
        e.preventDefault();
        window.location.href = 'countryInfo.html';
        var cc;
        var url = 'https://raw.githubusercontent.com/Jeith/worldfactbookapi/master/countries/' + cc + ".json";
    
    $.get(url)
    .done(function(response) {
        
        // console.log(JSON.parse(response));
        // console.log(response);
        let responseObject = JSON.parse(response);
        updateUISuccess(responseObject)
    })

    .fail(function(error){
        console.log(error);

        updateUIError()
    });

    function updateUISuccess(response){
    }
    function updateUIError(){
    }
}); 
})(); 

// this function returns strings uppercased properly
function uppercase(str){
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}

// this function starts on countryinfo.html
function loadPage(){
    $country = sessionStorage.getItem("country");
    // DAY 6 CHANGE, added if null statment for random button not to execute that
    if ($country != null){
        var lowerCountry = $country.toLowerCase();
    }
        var cc;
        switch(lowerCountry){
            case "aruba":
                cc = "aa";
                break;
            case "antigua and barbuda":
                cc = "ac";
                break;
            case "united arab emirates":
            case "uae":
                cc = "ae";
                break;
            case "afghanistan":
                cc = "af";
                break;
            case "algeria":
                cc = "ag";
                break;
            case "azerbaijan":
                cc = "aj";
                break;
            case "albania":
                cc = "al";
                break;
            case "armenia":
                cc = "am";
                break;
            case "andorra":
                cc = "an";
                break;   
            case "angola":
                cc = "ao";
                break;
            case "american somoa":
            case "somoa":
                cc = "aq";
                break;
            case "argentina":
                cc = "ar";
                break;
            case "australia":
                cc = "as";
                break;
            case "ashmore and cartier islands":
                cc = "at";
                break;
            case "austria":
                cc = "au";
                break;
            case "anguilla":
                cc = "av";
                break;
            case "akrotiri":
                cc = "ax";
                break;  
            case "antarctica":
                cc = "ay";
                break;
            case "bahrain":
                cc = "ba";
                break;
            case "barbados":
                cc = "bb";
                break;
            case "botswana":
                cc = "bc";
                break;
            case "bermuda":
                cc = "bd";
                break;
            case "belgium":
                cc = "be";
                break;
            case "Bahamas":
                cc = "bf";
                break;
            case "bangladesh":
                cc = "bg";
                break;
            case "belize":
                cc = "bh";
                break;
            case "bosnia and herzegovina":
                cc = "bk";
                break;
            case "bolivia":
                cc = "bl";
                break;
            case "burma":
            case "myanmar":
                cc = "bm";
                break;
            case "benin":
                cc = "bn";
                break;
            case "belarus":
                cc = "bo";
                break;
            case "solomon islands":
                cc = "bp";
                break;
            case "navassa island":
                cc = "bq";
                break; 
            case "brazil":
                cc = "br";
                break;
            case "bhutan":
                cc = "bt";
                break;
            case "bulgaria":
                cc = "bu";
                break;
            case "brunei":
                cc = "bx";
                break;
            case "burundi":
                cc = "by";
                break;
            case "canada":
                cc = "ca";
                break;
            case "cambodia":
                cc = "cb";
                break;
            case "curacao":
                cc = "cc";
                break;
            case "chad":
                cc = "cd";
                break;
            case "sri lanka":
                cc = "ce";
                break;
            case "republic of the congo":
            case "republic of congo":
                cc = "cf";
                break;
            case "democratic republic of the congo":
            case "drc":
                cc = "cg";
                break;
            case "china":
                cc = "ch";
                break;
            case "chile":
                cc = "ci";
                break;
            case "cayman islands":
                cc = "cj";
                break;  
            case "cocos islands":
                cc = "ck";
                break; 
            case "cameroon":
                cc = "cm";
                break; 
            case "comoros":
                cc = "cn";
                break; 
            case "colombia":
                cc = "co";
                break;     
            case "northern mariana islands":
                cc = "cq";
                break; 
            case "coral sea islands":
                cc = "cr";
                break; 
            case "costa rica":
                cc = "cs";
                break; 
            case "central african republic":
            case "car":
                cc = "ct";
                break;  
            case "cuba":
                cc = "cu";
                break; 
            case "cabo verde":
                cc = "cv";
                break; 
            case "cook islands":
                cc = "cw";
                break; 
            case "cyprus":
                cc = "cy";
                break;     
            case "denmark":
                cc = "da";
                break; 
            case "djibouti":
                cc = "dj";
                break; 
            case "dominica":
                cc = "do";
                break; 
            case "dominican republic":
                cc = "dr";
                break; 
            case "dhekelia":
                cc = "dx";
                break; 
            case "ecuador":
                cc = "ec";
                break;     
            case "european union":
                cc = "ee";
                break; 
            case "egypt":
                cc = "eg";
                break; 
            case "ireland":
                cc = "ei";
                break; 
            case "equatorial guinea":
                cc = "ek";
                break;  
            case "estonia":
                cc = "en";
                break; 
            case "eritrea":
                cc = "er";
                break; 
            case "el salvador":
                cc = "es";
                break; 
            case "ethiopia":
                cc = "et";
                break;     
            case "czech republic":
                cc = "ez";
                break; 
            case "finland":
                cc = "fi";
                break; 
            case "fiji":
                cc = "fj";
                break; 
            case "falkland islands":
                cc = "fk";
                break;
            case "micronesia":
                cc = "fm";
                break; 
            case "faroe islands":
                cc = "fo";
                break;     
            case "french polynesia":
                cc = "fp";
                break; 
            case "france":
                cc = "fr";
                break; 
            case "french southern and antarctic lands":
                cc = "fs";
                break; 
            case "the gambia":
            case "gambia":
                cc = "ga";
                break;  
            case "gabon":
                cc = "gb";
                break; 
            case "georgia":
                cc = "gg";
                break; 
            case "ghana":
                cc = "gh";
                break; 
            case "gibralter":
                cc = "gi";
                break;     
            case "grenada":
                cc = "gj";
                break; 
            case "guernsey":
                cc = "gk";
                break; 
            case "greenland":
                cc = "gl";
                break; 
            case "germany":
                cc = "gm";
                break; 
            case "guam":
                cc = "gq";
                break; 
            case "greece":
                cc = "gr";
                break;     
            case "guatemala":
                cc = "gt";
                break; 
            case "guinea":
                cc = "gv";
                break; 
            case "guyana":
                cc = "gy";
                break; 
            case "gaza strip":
                cc = "gz";
                break;  
            case "haiti":
                cc = "ha";
                break; 
            case "hong kong":
                cc = "hk";
                break; 
            case "heard island and mcdonald islands":
                cc = "hm";
                break; 
            case "honduras":
                cc = "ho";
                break;     
            case "croatia":
                cc = "hr";
                break; 
            case "hungary":
                cc = "hu";
                break; 
            case "iceland":
                cc = "ic";
                break; 
            case "indonesia":
                cc = "id";
                break; 
            case "isle of man":
                cc = "im";
                break; 
            case "india":
                cc = "in";
                break;     
            case "british indian ocean territory":
                cc = "io";
                break; 
            case "clipperton island":
                cc = "ip";
                break; 
            case "iran":
                cc = "ir";
                break; 
            case "israel":
                cc = "is";
                break;  
            case "italy":
                cc = "it";
                break; 
            case "cote d'lvoire":
            case "ivory coast":
                cc = "iv";
                break; 
            case "iraq":
                cc = "iz";
                break; 
            case "japan":
                cc = "ja";
                break;     
            case "jersey":
                cc = "je";
                break; 
            case "jamaica":
                cc = "jm";
                break; 
            case "jan mayen":
                cc = "jn";
                break; 
            case "jordan":
                cc = "jo";
                break; 
            case "kenya":
            cc = "ke";
                break;
            case "kyrgyzstan":
            cc = "kg";
                break;
            case "north korea":
            case "drnk":
            cc = "kn";
                break;
            case "kiribati":
            cc = "kr";
                break;
            case "south korea":
            case "rok":
            cc = "ks";
                break;
            case "christmas island":
            cc = "kt";
                break;
            case "kuwait":
            cc = "ku";
                break;
            case "kosovo":
            cc = "kv";
                break;
            case "kazakhstan":
            cc = "kz";
                break;
            case "laos":
            cc = "la";
                break;
            case "lebanon":
            cc = "le";
                break;
            case "latvia":
            cc = "lg";
                break;
            case "lithuania":
            cc = "lh";
                break;
            case "liberia":
            cc = "li";
                break;
            case "slovakia":
            cc = "lo";
                break;
            case "liechtenstein":
            cc = "ls";
            break;
            case "lesotho":
            cc = "lt";
                break;
            case "luxembourg":
            cc = "lu";
                break;
            case "libya":
            cc = "ly";
                break;
            case "madagascar":
            cc = "ma";
                break;
            case "macau":
            cc = "mc";
                break;
            case "moldova":
            cc = "md";
                break;
            case "mongolia":
            cc = "mg";
                break;
            case "montserrat":
            cc = "mh";
                break;
            case "malawi":
            cc = "mi";
                break;
            case "montenegro":
            cc = "mj";
                break;
            case "macedonia":
            cc = "mk";
                break;
            case "mali":
            cc = "ml";
                break;
            case "monaco":
            cc = "mn";
                break;
            case "morocco":
            cc = "mo";
                break;
            case "mauritius":
            cc = "mp";
                break;
            case "mauritania":
            cc = "mr";
                break;
            case "malta":
            cc = "mt";
                break;
            case "oman":
            cc = "mu";
                break;
            case "maldives":
            cc = "mv";
                break;
            case "mexico":
            cc = "mx";
                break;
            case "malaysia":
            cc = "my";
                break;
            case "mozambique":
            cc = "mz";
                break;
            case "new caledonia":
            cc = "nc";
                break;
            case "niue":
            cc = "ne";
                break;
            case "norfolk island":
            cc = "nf";
                break;
            case "niger":
            cc = "ng";
                break;
            case "vanuatu":
            cc = "nh";
                break;
            case "nigeria":
            cc = "ng";
                break;
            case "netherlands":
            cc = "nl";
                break;
            case "no":
            cc = "norway";
                break;
            case "nepal":
            cc = "np";
                break;
            case "nauru":
            cc = "nr";
                break;
            case "suriname":
            cc = "ns";
                break;
            case "nicaragua":
            cc = "nu";
                break;
            case "new zealand":
            cc = "nz";
                break;
            case "south sudan":
            cc = "od";
                break;
            case "paraguay":
            cc = "pa";
                break;
            case "pitcairn islands":
            cc = "pc";
                break;
            case "peru":
            cc = "pe";
                break;
            case "paracel islands":
            cc = "pf";
                break;
            case "spratly islands":
            cc = "pg";
                break;
            case "pakistan":
            cc = "pk";
                break;
            case "poland":
            cc = "pl";
                break;
            case "panama":
            cc = "pm";
                break;
            case "portugal":
            cc = "po";
                break;
            case "papua new guinea":
            cc = "pp";
                break;
            case "palau":
            cc = "ps";
                break;
            case "guinea-bissau":
            cc = "pu";
                break;
            case "qatar":
            cc = "qa";
                break;
            case "serbia":
            cc = "ri";
                break;
            case "marshall islands":
            cc = "rm";
                break;
            case "saint martin":
            cc = "rn";
                break;
            case "romania":
            cc = "ro";
                break;
            case "philippines":
            cc = "rp";
                break;
            case "puerto rico":
            cc = "rq";
                break;
            case "russia":
            cc = "rs";
                break;
            case "rwanda":
            cc = "rw";
                break;
            case "saudi arabia":
            cc = "sa";
                break;
            case "saint pierre and miquelon":
            cc = "sb";
                break;
            case "saint kitts and nevis":
            cc = "sc";
                break;
            case "seychelles":
            cc = "se";
                break;
            case "south africa":
            cc = "sf";
                break;
            case "senegal":
            cc = "sg";
                break;
            case "saint helena":
            cc = "sh";
                break;
            case "slovenia":
            cc = "si";
                break;
            case "sint maarten":
            cc = "sk";
                break;
            case "sierra leone":
            cc = "sl";
                break;
            case "san marino":
            cc = "sm";
                break;
            case "singapore":
            cc = "sn";
                break;
            case "somalia":
            cc = "so";
                break;
            case "spain":
            cc = "sp";
                break;
            case "saint lucia":
            cc = "st";
                break;
            case "sudan":
            cc = "su";
                break;
            case "svalbard":
            cc = "sv";
                break;
            case "sweden":
            cc = "sw";
                break;
            case "south georgia and south sandwich islands":
            cc = "sx";
                break;
            case "syria":
            cc = "sy";
                break;
            case "switzerland":
            cc = "sz";
                break;
            case "saint barthlemy":
            cc = "tb";
                break;
            case "trinidad and tobago":
            cc = "td";
                break;
            case "thailand":
            cc = "th";
                break;
            case "tajikistan":
            cc = "ti";
                break;
            case "turks and caicos island":
            cc = "tk";
                break;
            case "togo":
            cc = "to";
                break;
            case "sao tome and principe":
            cc = "tp";
                break;
            case "tunisia":
            cc = "timor-leste";
                break;
            case "turkey":
            cc = "tu";
                break;
            case "tuvalu":
            cc = "tv";
                break;
            case "taiwan":
            cc = "tw";
                break;
            case "turkmenistan":
            cc = "tx";
                break;
            case "tanzania":
            cc = "tz";
                break;
            case "uganda":
            cc = "ug";
                break;
            case "united kingdom":
            case "uk":
            cc = "uk";
                break;
            case "united states pacific island wildlife refuges":
            cc = "um";
                break;
            case "ukraine":
            cc = "up";
                break;
            case "united states":
            case "us":
            case "usa":
            case "united states of america":
            cc = "us";
                break;
            case "burkina faso":
            cc = "uv";
                break;
            case "uruguay":
            cc = "uy";
                break;
            case "uzbekistan":
            cc = "uz";
                break;
            case "saint vincent and the grenadines":
            cc = "vc";
                break;
            case "venezuela":
            cc = "ve";
                break;
            case "british virgin islands":
            cc = "vi";
                break;
            case "vietnam":
            cc = "vm";
                break;
            case "virgin islands":
            cc = "vq";
                break;
            case "vatican city":
            cc = "vt";
                break;
            case "namibia":
            cc = "wa";
                break;
            case "west bank":
            cc = "we";
                break;
            case "wallis and futuna":
            cc = "wf";
                break;
            case "western sahara":
            cc = "wi";
                break;
            case "wake island":
            cc = "wq";
                break;
            case "samoa":
            case "american samoa":
            cc = "ws";
                break;
            case "swaziland":
            cc = "wz";
                break;
            case "yemen":
            cc = "ym";
                break;
            case "zambia":
            cc = "za";
                break;
            case "zimbabwe":
            cc = "zi";
                break;
        }
        // DAY 6 CHANGE, this handles returning a random country code if random is clicked
        sessionStorage.getItem("cc");
        if (cc != null){
            var url = 'https://raw.githubusercontent.com/Jeith/worldfactbookapi/master/countries/' + cc + ".json";
        } else {
            var countryArray = ['AF','AL','AS','AO','AQ','AG','AR','AM','AU','BH','BD','BB','BY','BE','BM','BT','BO','BA','BR','IO','BN','BG','BF','CM','CA','CV','CF','TD','CN','CR','HR','CU','CY','CD','DJ','DO','EC','EG','GQ','ER','EE','ET','FO','FJ','FR','GA','GM','GH','GI','GR','GL','RO','RW','BL','KN','PM','VC','WS','SM','ST','SA','SN','SC','SL','SG','SI','SO','ZA','KR','ES','SZ','SE','CH','SY','TW','TZ','TH','TK','TO','TT','TN','TV','UG','AE','GB','US','UY','UZ','VE']
            var lowerCountryArray = [];
            for (var i = 0; i < countryArray.length; i++){
                lowerCountryArray.push(countryArray[i].toLocaleLowerCase());
            }
            var cc = lowerCountryArray[Math.floor(Math.random() * lowerCountryArray.length)];        
            var url = 'https://raw.githubusercontent.com/Jeith/worldfactbookapi/master/countries/' + cc + ".json";
            console.log(url);
        }
    $.get(url)
    .done(function(response) {
        
        let responseObject = JSON.parse(response);
        updateUISuccess(responseObject)
    })

    // DAY 6 CHANGE, i have no idea why but i had to comment this out for it to work with the random button
    .fail(function(error){
        console.log(error);

        updateUIError()
    });
    function updateUIError(){
    }  

    function updateUISuccess(response){
        console.log(url)
        // Google map
        var location = response.Government.Capital["geographic coordinates"].text;
        console.log(location);
        location = location.replace(",", "");
        var location1 = location.split(" ");
        
        var customLocation = [];

        location1.forEach(function(e){ 
            if(e == "S" || e == "W"){ 
                customLocation.push("-");
            } else if(e == "N" || e == "E"){ 
                customLocation.push("");
            } else{ 
                customLocation.push(e); 
            } 
        });
        var latitude = customLocation[2] + customLocation[0] + "." + customLocation[1];
        var longitude = customLocation[5] + customLocation[3] + "." + customLocation[4];
        
        var lat = parseFloat(latitude);
        var long = parseFloat(longitude);

        
        var map;
        //   function initMap() {
            map = new google.maps.Map(document.getElementById('googleMap'), {
                
            //   center: {lat: 45.25, lng: -75.42},
                center: {lat: lat, lng: long},
                zoom: 8
            });

        //  //  LINE INFO  //  //
        //Geography
        var $climate = document.getElementById("climate");
        var $terrain = document.getElementById("terrain");
        var $elevation = document.getElementById("elevation");
        var $naturalHazzards = document.getElementById("naturalHazzards");
        var $area = document.getElementById("area");
        var $areaComparison = document.getElementById("areaComparison");
        var $MUA = document.getElementById("MUA");

        let arrMUA = response["People and Society"]["Major urban areas - population"].text.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").split(';');
        for(i = 0; i < arrMUA.length; i++){
            let city = document.createElement("li");
            city.textContent = arrMUA[i];
            $MUA.appendChild(city);
        }
        $climate.textContent = response["Geography"]["Climate"].text;
        $terrain.textContent = response["Geography"]["Terrain"].text;
        $elevation.textContent = response["Geography"]["Elevation"]["elevation extremes"].text;
        $naturalHazzards.textContent = response["Geography"]["Natural hazards"].text;
        $area.textContent = response["Geography"]["Area"]["total"].text;
        $areaComparison.textContent = response["Geography"]["Area - comparative"].text;

        var flag = document.getElementById("flag");
        var pic = "png1000px/" + cc + ".png"
        flag.setAttribute("src", pic)

       //Government 
        var $entemology = document.getElementById("entemology");
        var $governmentType = document.getElementById("governmentType");
        var $adminDivision = document.getElementById("adminDivision");
        var $independence = document.getElementById("independence");    
        var $legalSystem = document.getElementById("legalSystem");
        var $nationalAnthem = document.getElementById("nationalAnthem");

        if(typeof response["Government"]["Country name"]["etymology"] !== 'undefined' && typeof response["Government"]["Country name"]["etymology"].title !== 'undefined'){
            $entemology.textContent = response["Government"]["Country name"]["etymology"].text;
        }
        $governmentType.textContent = response["Government"]["Government type"].text;
        $adminDivision.textContent = response["Government"]["Administrative divisions"].text;
        $independence.textContent = response["Government"]["Independence"].text;
        $legalSystem.textContent = response["Government"]["Legal system"].text;
        $nationalAnthem.textContent = response["Government"]["National anthem"]["name"].text + ": " + response["Government"]["National anthem"]["lyrics/music"].text;

        //Economy
        var $exchangeRate = document.getElementById("exchangeRate");
        var $growthrate = document.getElementById("growthrate");
        $exchangeRate.textContent = response["Economy"]["GDP (official exchange rate)"].text.replace(/ ([^)]) */g, "").replace(/[++]/g, '-');
        $growthrate.textContent = response["Economy"]["GDP - real growth rate"].text.replace(/ ([^)]) */g, "").replace(/[++]/g, '-');

        var $unemployment = document.getElementById("unemployment");
        var $povertyLine = document.getElementById("povertyLine");
        var $gini = document.getElementById("gini");
        var $inflation = document.getElementById("inflation");  
        console.log(response["Economy"]["Unemployment rate"].text);
        $unemployment.textContent = response["Economy"]["Unemployment rate"].text.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").replace(/[++]/g, '-');
        $povertyLine.textContent = response["Economy"]["Population below poverty line"].text.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").replace(/[++]/g, '-');
        if(typeof response["Economy"]["Distribution of family income - Gini index"] !== 'undefined' && typeof response["Economy"]["Distribution of family income - Gini index"].title !== 'undefined'){
            $gini.textContent = response["Economy"]["Distribution of family income - Gini index"].text.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").replace(/[++]/g, '-');
        }
        $inflation.textContent = response["Economy"]["Inflation rate (consumer prices)"].text.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").replace(/[++]/g, '-');
        

        var $AP = document.getElementById("agProduction");

        let arrAP = response["Economy"]["Agriculture - products"].text.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").split(';').join(',').split(',');
        for(i = 0; i < arrAP.length; i++){
            let agricultureP = document.createElement("li");
            agricultureP.textContent = arrAP[i];
            $AP.appendChild(agricultureP);
        }
        
        var $IP = document.getElementById("indProduction");

        let arrIP = response["Economy"]["Industries"].text.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").split(';').join(',').split(',');
        for(i = 0; i < arrIP.length; i++){
            let industrialP = document.createElement("li");
            industrialP.textContent = arrIP[i];
            $IP.appendChild(industrialP);
        }

        var $EP = document.getElementById("exports");
        index = response["Economy"]["Exports"].text.indexOf("+");
        if (index > 0){}
        input = response["Economy"]["Exports"].text.substring(0, index);
        $EP.textContent = "Exports: (" + input.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").replace(/ *\([^)]*\) */g, "") + ")";

        let arrEP = response["Economy"]["Exports - commodities"].text.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").split(';').join(',').split(',');
        for(i = 0; i < arrEP.length; i++){
            let exportsC = document.createElement("li");
            exportsC.textContent = arrEP[i];
            $EP.appendChild(exportsC);
        }

        var $ImP = document.getElementById("imports");
        index = response["Economy"]["Imports"].text.indexOf("+");
        if (index > 0){}
        input = response["Economy"]["Imports"].text.substring(0, index);
        $ImP.textContent = "Imports: (" + input.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").replace(/ *\([^)]*\) */g, "") + ")";

        let arrImP = response["Economy"]["Imports - commodities"].text.replace(/ *\([^)(]*\) */g, " ").replace(/ *\([^)]*\) */g, "").split(';').join(',').split(',');
        for(i = 0; i < arrImP.length; i++){
            let importsC = document.createElement("li");
            importsC.textContent = arrImP[i];
            $ImP.appendChild(importsC);
        }

        // DAY 6 CHANGE, changed country name to conventional short form  instead of $country so it could still print it if random was clicked
        var countryName = document.getElementsByClassName("countryName");
        var countryDesc = document.getElementById("countryDesc");
        console.log(response['Government']['Capital']['name'].text);
        if (response['Government']['Capital']['name'].text == "Abu Dhabi"){
            var name = response['Government']['Country name']['conventional long form'].text
        } else {
            var name = response['Government']['Country name']['conventional short form'].text
        }
        for ( var i=0; i < countryName.length; ++i ){
            countryName[i].innerHTML = name;
        }
        countryDesc.innerHTML = response["Introduction"]["Background"].text

        var ctx1 = document.getElementById("chart1");
        var ctx2 = document.getElementById("chart2");
        var ctx3 = document.getElementById("chart3");
        var ctx4 = document.getElementById("chart4");
        var ctx5 = document.getElementById("chart5");
        var ctx6 = document.getElementById("chart6");
        var ctx7 = document.getElementById("chart7");
        var ctx8 = document.getElementById("chart8");
        var ctx9 = document.getElementById("chart9");
        var ctx10 = document.getElementById("chart10");
        function ageGroupG(){
            var agegroup1 = response["People and Society"]["Age structure"]["0-14 years"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[%]/g, '');
            var agegroup2 = response["People and Society"]["Age structure"]["15-24 years"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[%]/g, '');
            var agegroup3 = response["People and Society"]["Age structure"]["25-54 years"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[%]/g, '');
            var agegroup4 = response["People and Society"]["Age structure"]["55-64 years"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[%]/g, '');
            var agegroup5 = response["People and Society"]["Age structure"]["65 years and over"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[%]/g, '');
            new Chart(ctx1, {
                type: 'pie',
                data: {
                    labels: ["0-14 years", "15-24 years", "25-54 years", "55-64 years", "65 years and older"],
                    datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [agegroup1,agegroup2,agegroup3,agegroup4,agegroup5]
                    }
                    ]
                },
                options: {
                    title: {
                    display: true,
                    text: 'Age Structure'
                    }
                }
            });
        }
        ageGroupG();

        function religionG(){
            let l = response["People and Society"]["Religions"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[0-9]/g, '').replace(/[.]/g, '').replace(/[%]/g, '').split(',');
            let d = response["People and Society"]["Religions"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[a-z]/g, '').replace(/[A-Z]/g, '').replace(/[%]/g, '').replace(/[']/g, '').replace(/[/]/g, '').split(',');
        
            new Chart(ctx2, {
                type: 'doughnut',
                data: {
                    labels: l,
                    datasets: [
                    {
                        label: "Religions",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2"],
                        data: d,
                    }
                    ]
                },
                options: {
                    title: {
                    display: true,
                    text: 'Religions'
                    }
                }
            });
        }   
        religionG();

        function GDPConsumptionG(){
            let d = [];
            d.push(response["Economy"]["GDP - composition, by end use"]["household consumption"].text.replace(/[%]/g, '').replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, ""));
            d.push(response["Economy"]["GDP - composition, by end use"]["government consumption"].text.replace(/[%]/g, '').replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, ""));
            d.push(response["Economy"]["GDP - composition, by end use"]["investment in fixed capital"].text.replace(/[%]/g, '').replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, ""));
            d.push(response["Economy"]["GDP - composition, by end use"]["investment in inventories"].text.replace(/[%]/g, '').replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, ""));
            d.push(response["Economy"]["GDP - composition, by end use"]["exports of goods and services"].text.replace(/[%]/g, '').replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, ""));
            d.push(response["Economy"]["GDP - composition, by end use"]["imports of goods and services"].text.replace(/[%]/g, '').replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, ""));

            new Chart(ctx3, {
                type: 'horizontalBar',
                data: {
                labels: ["Household%", "Government%", "Fixed Capital %", "Inventories %", "Exports %", "Imports %"],
                datasets: [
                    {
                    label: "GDP: End-Use",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2"],
                    data: d,
                    }
                ]
                },
                options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'GDP: End-Use'
                }
                }
            });
            }
            GDPConsumptionG();

            function GDPOriginG(){
                let d = [];
                d.push(response["Economy"]["GDP - composition, by sector of origin"]["agriculture"].text.replace(/ *\([^)(]*\) */g, "").replace(/[%]/g, '').replace(/ *\([^)]*\) */g, "").replace(/[+]/g, '').replace(/[-]/g, ''));
                d.push(response["Economy"]["GDP - composition, by sector of origin"]["industry"].text.replace(/ *\([^)(]*\) */g, "").replace(/[%]/g, '').replace(/ *\([^)]*\) */g, "").replace(/[+]/g, '').replace(/[-]/g, ''));
                d.push(response["Economy"]["GDP - composition, by sector of origin"]["services"].text.replace(/ *\([^)(]*\) */g, "").replace(/[%]/g, '').replace(/ *\([^)]*\) */g, "").replace(/[+]/g, '').replace(/[-]/g, ''));
                new Chart(ctx4, {
                    type: 'pie',
                    data: {
                        labels: ["agriculture", "industry", "services"],
                        datasets: [
                        {
                            label: "GDP: by Origin",
                            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2"],
                            data: d,
                        }
                        ]
                    },
                    options: {
                        title: {
                        display: true,
                        text: 'GDP: by Origin'
                        }
                    }
                });
            }
            GDPOriginG();
        
            function laborForceG(){        
                var economy = response["Economy"]["Labor force - by occupation"];

                let d = [];
                for(e in economy){
                    if (e != "note"){
                        d.push(response["Economy"]["Labor force - by occupation"][e].text.replace(/[%]/g, '').replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, ""));
                    }
                }
                let l = [];
                for(e in economy){
                    if (e != "note"){
                        l.push(e)
                    }
                }
                console.log(d);
                console.log(l);
                new Chart(ctx5, {
                    type: 'polarArea',
                    data: {
                        labels: l,
                        datasets: [
                        {
                            label: "Labor Force",
                            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2"],
                            data: d,
                        }
                        ]
                    },
                    options: {
                        title: {
                        display: true,
                        text: 'Labor Force'
                        }
                    }
                });
            }
            laborForceG();

            function ethnicityG(){
                let l = response["People and Society"]["Ethnic groups"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[0-9]/g, '').replace(/[.]/g, '').replace(/[%]/g, '').split(',');
                let d = response["People and Society"]["Ethnic groups"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[a-z]/g, '').replace(/[A-Z]/g, '').replace(/[%]/g, '').replace(/[']/g, '').replace(/[/]/g, '').split(',');
            
                new Chart(ctx6, {
                    type: 'doughnut',
                    data: {
                        labels: l,
                        datasets: [
                        {
                            label: "Ethnicities",
                            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2"],
                            data: d,
                        }
                        ]
                    },
                    options: {
                        title: {
                        display: true,
                        text: 'Ethnicities'
                        }
                    }
                });
            }   
            ethnicityG();

            function languagesG(){
                let l = response["People and Society"]["Languages"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[0-9]/g, '').replace(/[.]/g, '').replace(/[%]/g, '').split(',');
                let d = response["People and Society"]["Languages"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[a-z]/g, '').replace(/[A-Z]/g, '').replace(/[%]/g, '').replace(/[']/g, '').replace(/[/]/g, '').split(',');
                new Chart(ctx7, {
                    type: 'pie',
                    data: {
                        labels: l,
                        datasets: [
                        {
                            label: "Languages",
                            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2"],
                            data: d,
                        }
                        ]
                    },
                    options: {
                        title: {
                        display: true,
                        text: 'Languages'
                        }
                    }
                });
            }
            languagesG();

            function urbanizationG(){
                let l = ["Urbanization"];
                let d = [];
                d.push(response["People and Society"]["Urbanization"]["urban population"].text.replace(/ *\([^)(]*\) */g, "").replace(/ *\([^)]*\) */g, "").replace(/[a-z]/g, '').replace(/[A-Z]/g, '').replace(/[%]/g, '').replace(/[']/g, '').replace(/[/]/g, ''));
                d.push(100-d[0]);
                new Chart(ctx8, {
                    type: 'pie',
                    data: {
                        labels: l,
                        datasets: [
                        {
                            label: "Urbanization",
                            backgroundColor: ["#3e95cd"],
                            data: d,
                        }
                        ]
                    },
                    options: {
                        title: {
                        display: true,
                        text: 'Urbanization'
                        }
                    }
                });
            }
            urbanizationG();

            function MFLifeG(){
                let d = [];
                d.push(response["People and Society"]["Life expectancy at birth"]["total population"].text.replace(/ *\([^)(]*\) */g, "").replace(/[%]/g, '').replace(/ *\([^)]*\) */g, "").replace(/[+]/g, '').replace(/[-]/g, '').replace(/[a-z]/g, '').replace(/[A-Z]/g, ''));
                d.push(response["People and Society"]["Life expectancy at birth"]["male"].text.replace(/ *\([^)(]*\) */g, "").replace(/[%]/g, '').replace(/ *\([^)]*\) */g, "").replace(/[+]/g, '').replace(/[-]/g, '').replace(/[a-z]/g, '').replace(/[A-Z]/g, ''));
                d.push(response["People and Society"]["Life expectancy at birth"]["female"].text.replace(/ *\([^)(]*\) */g, "").replace(/[%]/g, '').replace(/ *\([^)]*\) */g, "").replace(/[+]/g, '').replace(/[-]/g, '').replace(/[a-z]/g, '').replace(/[A-Z]/g, ''));
                new Chart(ctx9, {
                    type: 'bar',
                    data: {
                        labels: ["total population", "male", "female"],
                        datasets: [
                        {
                            label: "Life expectancy at birth",
                            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2"],
                            data: d,
                        }
                        ]
                    },
                    options: {
                        title: {
                        display: true,
                        text: 'Life expectancy at birth'
                        }
                    }
                });
                }
                MFLifeG();

    var $geography = document.getElementById("geography");
    var $PeopleAndSociety = document.getElementById("peopleAndSociety");
    var $Government = document.getElementById("government");
    var $Economy = document.getElementById("economy");
    var $geographyContent = document.getElementById("contentGE");
    var $PeopleAndSocietyContent = document.getElementById("contentPS");
    var $GovernmentContent = document.getElementById("contentGO");
    var $EconomyContent = document.getElementById("contentEC");
    var $content = document.getElementById("contentBG")
    
    $geography.onclick = function(){
        $geographyContent.setAttribute("style", "visibility: visible");
        $PeopleAndSocietyContent.setAttribute("style", "visibility: hidden");
        $GovernmentContent.setAttribute("style", "visibility: hidden");
        $EconomyContent.setAttribute("style", "visibility: hidden");
        $content.setAttribute("style", "visibility: hidden");
    }
    
    $PeopleAndSociety.onclick = function(){
        $geographyContent.setAttribute("style", "visibility: hidden");
        $PeopleAndSocietyContent.setAttribute("style", "visibility: visible");
        $GovernmentContent.setAttribute("style", "visibility: hidden");
        $EconomyContent.setAttribute("style", "visibility: hidden");
        $content.setAttribute("style", "visibility: hidden");  
    }
    
    $Government.onclick = function(){
        $geographyContent.setAttribute("style", "visibility: hidden");
        $PeopleAndSocietyContent.setAttribute("style", "visibility: hidden");
        $GovernmentContent.setAttribute("style", "visibility: visible");
        $EconomyContent.setAttribute("style", "visibility: hidden");
        $content.setAttribute("style", "visibility: hidden");
    }
    
    $Economy.onclick = function(){
        $geographyContent.setAttribute("style", "visibility: hidden");
        $PeopleAndSocietyContent.setAttribute("style", "visibility: hidden");
        $GovernmentContent.setAttribute("style", "visibility: hidden");
        $EconomyContent.setAttribute("style", "visibility: visible");
        $content.setAttribute("style", "visibility: hidden");
    }

    $geographyContent.setAttribute("style", "visibility: hidden");
    $PeopleAndSocietyContent.setAttribute("style", "visibility: hidden");
    $GovernmentContent.setAttribute("style", "visibility: hidden");
    $EconomyContent.setAttribute("style", "visibility: hidden;");
    $content.setAttribute("style", "visibility: visible");

    function updateUIError(){
    }  
    }}
    function clearit(){
        sessionStorage.clear();
    }