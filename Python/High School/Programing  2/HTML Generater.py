#HTML Generater
#
#Thomas Wolf
#10/1/19
#Sources: NONE

def main():
     name=input("Enter your name:")
     description=input("Discribe yourself:")

     #create the file
     html_file=open('my_page.html','w')

     #write the html
     write_html(html_file,name,description)

     #close the file
     html_file.close()
     
def write_html(html_file,name,description):
    html_file.write('</html>\n')
    write_head(html_file)
    write_body(html_file,name,description)
    html_file.write('</html>\n')

def write_head(html_file):
    html_file.write('<html>\n')
    html_file.write('<title>My Personal Web Page</tital>\n')
    html_file.write('</html>\n')
    
def write_body(html_file,name,description):
    html_file.write('<body>\n')
    html_file.write('\t<center>\n')
    html_file.write('\t\t<h1>')
    html_file.write(name)
    html_file.write('<h1>\n')
    html_file.write('\t</center>\n')
    html_file.write(description)
    html_file.write('\n\t<hr/>\n')
    html_file.write('\t</body>\n')
main()
