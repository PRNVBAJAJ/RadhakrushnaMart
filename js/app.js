function myFunction(){
    var searchBar, searchForm, inputGroup, input, filter, container, row, plcard, panel, panelHeading, h3, i, txtValue;
    searchBar= document.getElementById("sb");
    // console.log(searchBar);
    searchForm = document.getElementById("search-form");
    // console.log(searchForm);
    inputGroup = document.getElementById("ig");
    // console.log(inputGroup);
    input = document.getElementById('myInput');
    // console.log(input);
    filter = input.value.toUpperCase();
    console.log(filter);
  
//accessing elemental value

    plcard= document.getElementsByClassName("plcard");
    panelHeading=document.getElementsByClassName("panel-heading");
    for(i=0;i<panelHeading.length;i++){
        h3 = panelHeading[i].getElementsByTagName("h3")[0];
        txtValue = h3.innerText ;
        console.log(txtValue);
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            plcard[i].style.display = "block";
          } else {
            plcard[i].style.display = "none";
          }

    }
    console.log(h3);
}