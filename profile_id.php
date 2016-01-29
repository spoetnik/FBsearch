<?php


function file_get_contents_curl($url)
{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.3) Gecko/20070309 Firefox/2.0.0.3");
    curl_setopt($ch, CURLOPT_REFERER, "http://www.facebook.com");

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}


function get_facebook_id($url)
{

    $html = file_get_contents_curl($url);
    //parsing begins here:
    $doc = new DOMDocument();

    @$doc->loadHTML($html);
    
    $metas = $doc->getElementsByTagName('meta');

    for ($i = 0; $i < $metas->length; $i++)
    {
        $meta = $metas->item($i);

        if($meta->getAttribute('name') == 'description')
            $description = $meta->getAttribute('content');

        if($meta->getAttribute('property') == 'al:android:url')
            preg_match('!\d+!', $meta->getAttribute('content'), $fbid);
    }
    return $fbid;
}

$fburl = "https://www.facebook.com/";
$username = $_GET["username"];

$url = $fburl . $username;

$fb_id = get_facebook_id($url);

print "{\"id\":\"$fb_id[0]\"}";
