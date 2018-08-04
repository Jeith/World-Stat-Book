(function() {
    var $searchbutton = $('#searchbutton');
    $searchbutton.click( function(e) {
        var $searchbar = $('#searchbar')
        e.preventDefault();  
        var $country = $searchbar.val();
        var cc;
        switch($country){
            case "aruba":
                cc = "aa";
                break;
            case "antigua and barbuda":
                cc = "ac";
                break;
            case "united arab emirates":
                cc = "ae";
                break;
            case "afghanistan":
                cc = "af";
                break;
            case "algeria":
                cc = "ag";
                break;
            case "azerbanijan":
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
            case "bouvet island":
                cc = "bv";
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
            case "congo, republic of the":
                cc = "cf";
                break;
            case "democratic republic of the congo":
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
            case "gambia, the":
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
            cc = "kn";
                break;
            case "kiribati":
            cc = "kr";
                break;
            case "south korea":
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
            cc = "uk";
                break;
            case "united states pacific island wildlife refuges":
            cc = "um";
                break;
            case "ukraine":
            cc = "up";
                break;
            case "united states":
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
        console.log(response);
        var intro = response.Geography.Location.text;
        var head = document.getElementById('head');
        head.innerHTML = "<h4>" + intro + "</h4>";

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
            map = new google.maps.Map(document.getElementById('map'), {
                
            //   center: {lat: 45.25, lng: -75.42},
              center: {lat: lat, lng: long},
              zoom: 8
            });
        //   }

       var ctx = document.getElementById("chart1");
        var agegroup1 = response["People and Society"]["Age structure"]["0-14 years"].text;
        var agegroup2 = response["People and Society"]["Age structure"]["15-24 years"].text;
        var agegroup3 = response["People and Society"]["Age structure"]["25-54 years"].text;
        var agegroup4 = response["People and Society"]["Age structure"]["55-64 years"].text;
        var agegroup5 = response["People and Society"]["Age structure"]["65 years and over"].text;
        var age14 = agegroup1.split("", 2);
        var age24 = agegroup2.split("", 2);
        var age54 = agegroup3.split("", 2);
        var age64 = agegroup4.split("", 2);
        var age65 = agegroup5.split("", 2);
        console.log(age14.join(""));
        var ageChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["0-14 years", "15-24 years", "25-54 years", "55-64 years", "65 years and older"],
                datasets: [
                  {
                    label: "Population (millions)",
                    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                    data: [age14.join(""),age24.join(""),age54.join(""),age64.join(""),age65.join("")]
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
    function updateUIError(){
    }
}); 
})(); 