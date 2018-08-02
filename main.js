
(function() {
    var $searchbutton = $('#searchbutton');
    $searchbutton.click( function(e) {
        var $searchbar = $('#searchbar')
        e.preventDefault();  
        var $country = $searchbar.val();
        var cc;
        switch($country){
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
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
                break;
            case "":
            cc = "";
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
        head.innerHTML = "<h4>" + intro + "</h4>"
    }
    function updateUIError(){
    }
}); 
})(); 