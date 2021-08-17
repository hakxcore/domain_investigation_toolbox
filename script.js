function buttonOpen(buttonValue) {

    domain = document.getElementById("searchquery").value;
    const links = [];
    links["Centralops"] = "https://centralops.net/co/DomainDossier.aspx?addr=" + domain + "&dom_whois=true&dom_dns=true&net_whois=true";
    links["Dnslytics"] = "https://dnslytics.com/domain/"+domain;
    links["Domainbigdata"] = "https://domainbigdata.com/"+domain;
    links["Domaintools"] = "https://whois.domaintools.com/"+domain;
    links["Henet"] = "https://bgp.he.net/dns/"+domain+"#_dns";
    links["Domaintoolshistory"] = "https://research.domaintools.com/research/whois-history/search/?q="+domain;
    links["Easycounter"] = "https://whois.easycounter.com/"+domain;
    links["Whois"] = "https://who.is/domain-history/"+domain;
    links["Whoxy"] = "https://www.whoxy.com/"+domain+"#history";
    links["Viewdnsinfo"] = "https://viewdns.info/iphistory/?domain="+domain;
    links["Virustotal"] = "https://www.virustotal.com/gui/domain/"+domain+"/details";
    links["Threatminer"] = "https://www.threatminer.org/domain.php?q="+domain+"#gsc.tab=0&gsc.q="+domain+"&gsc.page=1";
    links["Securitytrails"] = "https://securitytrails.com/domain/"+domain+"/history/a";
    links["Netcraft"] = "https://sitereport.netcraft.com/?url="+domain;
    links["Googlesubdomains"] = "https://www.google.com/search?q=site:*"+domain+"%20-www";
    links["Hackertargetapi"] = "https://api.hackertarget.com/hostsearch/?q="+domain;
    links["Securitytrailssubdomains"] = "https://securitytrails.com/list/apex_domain/"+domain;
    links["Netcraftsubdomains"] = "https://searchdns.netcraft.com/?restriction=site+contains&host="+domain+"&lookup=wait..&position=limited";
    links["Robtex"] = "https://www.robtex.com/dns-lookup/"+domain+"#dnsrel";
    links["Robtexall"] = "https://www.robtex.com/dns-lookup/"+domain;
    links["Cookiepedia"] = "https://cookiepedia.co.uk/website/"+domain;
    links["Googlebackup"] = "https://www.google.com/search?q=site:"+domain+"+ext:bkf+|+ext:bkp+|+ext:bak+|+ext:old+|+ext:backup";
    links["Googleconfig"] = "https://www.google.com/search?q=site:"+domain+"+ext:xml+|+ext:conf+|+ext:cnf+|+ext:reg+|+ext:inf+|+ext:rdp+|+ext:cfg+|+ext:txt+|+ext:ora+|+ext:ini";
    links["Googledocuments"] = "https://www.google.com/search?q=site:"+domain+"+ext:doc+|+ext:docx+|+ext:odt+|+ext:pdf+|+ext:rtf+|+ext:sxw+|+ext:psw+|+ext:ppt+|+ext:pptx+|+ext:pps+|+ext:csv";
    links["Googledatabases"] = "https://www.google.com/search?q=site:"+domain+"+ext:sql+|+ext:dbf+|+ext:mdb";
    links["Hackertargerheaders"] = "http://api.hackertarget.com/httpheaders/?q=http://www."+domain;
    links["Googlelogin"] = "https://www.google.com/search?q=site:"+domain+"+inurl:login";
    links["Seositecheckup"] = "https://seositecheckup.com/seo-audit/"+domain;
    links["Robotstxt"] = "https://"+domain+"/robots.txt";
    links["Alexatraffic"] = "https://www.alexa.com/siteinfo/"+domain;
    links["Clearwebstats"] = "http://"+domain+".clearwebstats.com/";
    links["Similarweb"] = "https://www.similarweb.com/ru/website/"+domain;
    links["Sitemap"] = "https://"+domain+"/sitemap.xml";
    links["Builtwith"] = "https://builtwith.com/"+domain;
    links["W3tech"] = "https://w3techs.com/sites/info/"+domain;
    links["Hexometer"] = "https://hexometer.com/stack-checker/"+domain;
    links["Webtechsurvey"] = "https://webtechsurvey.com/website/"+domain;
    links["Awesometechstack"] = "https://awesometechstack.com/analysis/website/"+domain;
    links["Wappalyzer"] = "https://www.wappalyzer.com/lookup/"+domain;

    window.open(links[buttonValue]);
}