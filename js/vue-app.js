Vue.component('navigation-bar', {
    data: function () {
        return {
            active: "Home"
        }
    },
    template: `
<div id="navbar" class="navbar navbar-default navbar-static-top" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="glyphicon glyphicon-chevron-down"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="active"><a href="index.html">{{ active }}</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">About <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="aboutjenni.html">About Jenni</a></li>
                        <li><a href="paediatricot.html">About Paediatric Occupational Therapy</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Checklists <b class="caret"></b></a>
                    <ul class="dropdown-menu">
                        <li><a href="checklist2-3.html">for 2 - 3 year olds</a></li>
                        <li><a href="checklist3-4.html">for 3 - 4 year olds (kindy)</a></li>
                        <li><a href="checklist5.html">for 5 year olds (prep)</a></li>
                    </ul>
                </li>
                <li><a href="aboutjenni.html#contact">Contact</a></li>
            </ul>
        </div>
    </div>
</div>`
})

var app = new Vue({ el: '#header' })