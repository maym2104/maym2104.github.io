function createMenu()
{
  sections = document.getElementsByTagName("h2");
  
  div = document.createElement("div");
  div.id = 'menu';
  div.className = 'visible';
  
  h3 = document.createElement("h3");
  title = document.createTextNode("Sommaire");
  h3.appendChild(title);
  h3.onclick = toggleMenu;
  h3.title = 'Cliquer pour afficher/masquer';
  div.appendChild(h3);
  
  ul = document.createElement("ul");
  div.appendChild(ul);
  
  for(i=0; i<sections.length; i++)
  {
    /* --- Link Target --- */
    firstChild = sections[i].firstChild;
    sections[i].removeChild(firstChild);
    
    target = document.createElement("a");
    target.name = i;
    target.appendChild(firstChild);
    
    sections[i].appendChild(target);
    
    /* --- Menu Element --- */
    text = document.createTextNode(firstChild.data);
    
    a = document.createElement("a");
    a.href = '#' + i;
    a.appendChild(text);
    
    li = document.createElement("li");
    li.appendChild(a);
    
    ul.appendChild(li);
  }
  
  document.body.appendChild(div);
}

function toggleMenu()
{
  menu = document.getElementById('menu');
  if(menu)
  {
    className = 'visible';
    if(menu.className == 'visible')
    {
      className = 'hidden';
    }

    menu.className = className;
  }
}
