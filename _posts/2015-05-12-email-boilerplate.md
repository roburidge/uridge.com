---
layout: post
title:  "Email Boilerplate"
date:   2015-05-12 22:49:20
category: projects
tags: html-emails
---
I created the Email Boilerplate back in 2012 and used it as a base for the HTML email templates I was working on at the time. Email clients are notorious for their inability to render much of the basic HTML and CSS we rely on in web development. This project set out to fix many of these bugs and consistencies between email clients.

[View on GitHub][1]

{% highlight html %}

<!-- ===================================================

Use these code examples as a guideline for formatting your HTML email. There are two main areas in the template: 1. The header (head) area of the document. You will find global CSS styles which should be moved inline where indicated. The first three sections of styles in the header should not be brought inline, the rest should. 2. The body section contains a skeleton table layout 600px wide and centred. Examples for how to implement headers, images and links correctly are also supplied.

DO NOT COPY OVER ANY HTML OR CSS COMMENTS / INSTRUCTIONS WITH THE CODE to your live email as some spam filters will block your email.

==================================================== -->
<!-- Using XHTML strict while building because it is used by Gmail and Hotmail. Must be removed before adding to PureResponse.
More info/Reference on doctypes in email: 
Campaign Monitor - http://www.campaignmonitor.com/blog/post/3317/correct-doctype-to-use-in-html-email/
Email on Acid - http://www.emailonacid.com/blog/details/C18/doctype_-_the_black_sheep_of_html_email_design
-->

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> 
  
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style type="text/css">
  
    /* =============================================================================
       Email client bug fixes and reset - Do not change or remove. Do not put inline
       ========================================================================== */

    /* "text-size-adjust:100%" prevents Webkit and Windows Mobile platforms from changing default font sizes, while not breaking desktop design. */
    /* Reset all body margins and padding to 0 for good measure */
    body{ width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0; }
    
    /* Force Hotmail to display emails at full width */
    .ExternalClass {width:100%;}
    
    /* Force Hotmail to display normal line spacing.  More on that: http://www.emailonacid.com/forum/viewthread/43/ */
    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div { line-height:100%; }
    
    /* sets up a full width background table with and removes margin / padding */
    #backgroundTable { margin:0; padding:0; width:100% !important; line-height: 100% !important; }

    /* This CSS will overwrite Hotmails default CSS and make your headings appear consistent with Gmail. From there, you can overwrite your styles inline if needed.  */
    h1, h2, h3, h4, h5, h6 { color:black !important; line-height:100%; }
    h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {color: blue !important;}

    /* This is the embedded CSS link colour for Gmail. This will overwrite Hotmail and Yahoo Beta's embedded link colours and make it consistent with Gmail. You must overwrite this color inline */
    a { color:#2A5DB0; text-decoration:underline; }

    /* This sets all clients to use the same layout as Gmail. Further changes should be made inline. */
    p { margin-top:1em; margin-left:0; margin-right:0; margin-bottom:1em; padding:0; }

    /* Stop Yahoo! from adding it's own styles to some links. Change these values to your default link style. Here's more info: http://www.emailonacid.com/blog/details/C13/yahoo_shortcuts_are_baaaaaaaack */
    span.yshortcuts { color:#2A5DB0; background-color:none; border:none;}
    span.yshortcuts:hover,
    span.yshortcuts:active,
    span.yshortcuts:focus {color:#2A5DB0; background-color:none; border:none;}
    

    
    /*** EMBEDDED CSS NOTES ***
                 
        1.) Be aware that Gmail will not read any of your embedded CSS
        
        5.) You must REMOVE ALL COMMENTS from the live version to avoid the spam box.
         
    *** END EMBEDDED CSS NOTES ***/

    
    /* =============================================================================
       Email client bug fixes - Do not change or remove - Put inline - http://beaker.mailchimp.com/inline-css
       ========================================================================== */
    
    /* This resolves the Outlook 07, 10, and Gmail td padding issue. Here's more info: http://www.ianhoar.com/2008/04/29/outlook-2007-borders-and-1px-padding-on-table-cells and: http://www.campaignmonitor.com/blog/post/3392/1px-borders-padding-on-table-cells-in-outlook-07 */
    table td { border-collapse:collapse; }
    
    h1, h2, h3, h4, h5, h6, p { margin-top:0; }
    
    /* Some sensible defaults for images */
    img { outline:none; text-decoration:none; }
    a img { border:none; } /* This removes border from link images */
    .image_fix { display:block; } /* Gmail and Hotmail add unwanted space below images when not using an IE browser. You may not want all images to be block so apply the "image_fix" class when yo need the fix */


    .empty { font-size:1px; line-height:1px; }
    
    /* =============================================================================
       Primary styles - Put inline - http://beaker.mailchimp.com/inline-css
       Author: 
       ========================================================================== */
    .defaultFont { color:#99cccc; font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif; } /* Use this class on every table cell containing text to you can control the default font globally. Override inline if needed. */
    
    /* Web safe font stacks ======

    font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-family:'Courier New', Courier, 'Lucida Sans Typewriter', 'Lucida Typewriter', monospace;
    font-family:Georgia, Times, 'Times New Roman', serif;
    font-family:Impact, Haettenschweiler, 'Franklin Gothic Bold', Charcoal, 'Helvetica Inserat', 'Bitstream Vera Sans Bold', "Arial Black", sans serif;
    font-family:Tahoma, Verdana, Segoe, sans-serif;
    font-family:TimesNewRoman, 'Times New Roman', Times, Baskerville, Georgia, serif;
    font-family:'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;
    font-family:Verdana, Geneva, sans-serif;

    ======================= */


    /* =============================================================================
       Media Queries
       Optional - Adaptive Mobile Styles - Keep in header and do not put inline or remove entirety.
       These will be applied to iOS mobile devices and Android mobile devices using the native mail app. It will not work in the Android Gmail app.
       Author: 
       ========================================================================== */
    @media only screen and (max-width: 480px) {
      body[yahoo] p {color:#00c;} /* Example using the yahoo-fix =====REMOVE BEFORE MAKING LIVE===== */
    }
    
    
    
  </style>
</head>
<body yahoo="fix">
  <!-- Wrapper/Container Table: Use a wrapper table to control the width and the background colour consistently of your email. Use this approach instead of setting attributes on the body tag. -->
  <table id="backgroundTable" cellpadding="0" cellspacing="0" border="0" style="width:100%;">
    <tr>
      <td> 
             
      <!-- Tables are the most common way to format your email consistently. Set your table widths inside cells and reset cellpadding, cellspacing, and border to zero. Use nested tables as a way to space effectively in your message. -->
        <table id="templateContainer" width="600" cellpadding="0" cellspacing="0" border="0" align="center">
          <tr>
            <td width="600" valign="top">
            
              <table id="templateHeader" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="600" valign="top">
                    Header
                  </td>
                </tr>
              </table>
            
            </td>
          </tr>
          <tr>
            <td width="600" valign="top">
            
              <table id="templateBody" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="600" valign="top">
                  
                    <!-- Yahoo Link colour and dotted underline fix: Bring your link styling inline and add a span with inline colour style. -->
                    <a href="http://example.com/" target="_blank" title="Styling Links" style="text-decoration:none; color:orange;">Colouring Links Example</a>

                    <!-- Gmail/Hotmail image display fix -->
                    <img class="image_fix" src="img/placeholder.jpg" alt="Your alt text" title="Your title text" width="300" height="200" />
                    
                  </td>
                </tr>
              </table>
            
            </td>
          </tr>
          <tr>
            <td width="600" valign="top">
            
              <table id="templateFooter" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td width="600" valign="top">
                    Footer
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
        </table>
        <!-- End example table -->
        
      </td>
    </tr>
  </table>
  <!-- End of wrapper table -->
</body>
</html>

{% endhighlight %}

[1]: https://github.com/roburidge/email-boilerplate
