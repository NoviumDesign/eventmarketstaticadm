$(document).foundation({accordion:{multi_expand:!0}}),$(function(){$("#jstree").jstree({core:{themes:{variant:"small"}},plugins:["checkbox"]}),$("#jstree").on("changed.jstree",function(e,t){console.log(t.selected)}),$("button").on("click",function(){$("#jstree").jstree(!0).select_node("child_node_1"),$("#jstree").jstree("select_node","child_node_1"),$.jstree.reference("#jstree").select_node("child_node_1")})}),$(function(){$("#jstree-profil").jstree({core:{themes:{variant:"small"}},plugins:["checkbox"]}),$("#jstree-profil").on("changed.jstree",function(e,t){console.log(t.selected)}),$("button").on("click",function(){$("#jstree-profil").jstree(!0).select_node("child_node_1"),$("#jstree-profil").jstree("select_node","child_node_1"),$.jstree.reference("#jstree-profil").select_node("child_node_1")})}),$.dynatableSetup({inputs:{paginationPrev:"Föregående",paginationNext:"Nästa",recordCountText:"Visar "},datasets:{perPageDefault:100}}),$("#my-table").dynatable({features:{search:!1,perPageSelect:!1,recordCount:!1,paginate:!1}}),$("#customer-table").dynatable({features:{perPageSelect:!1}}),$("#group-table").dynatable({features:{perPageSelect:!1},inputs:{queries:$("#search-group")}}),$("tbody").each(function(){$(this).find("tr").addClass("clickableRow")}),jQuery(document).ready(function(e){e(".clickableRow").click(function(){window.document.location=e(this).data("url")})}),$(document).ready(function(){$("#profile-period-start").Zebra_DatePicker({show_icon:!1,direction:!0,offset:[-160,-5],pair:$("#profile-period-end")}),$("#profile-period-end").Zebra_DatePicker({show_icon:!1,direction:!0,offset:[-160,-5]}),$("#top-placement-start").Zebra_DatePicker({show_icon:!1,direction:!0,offset:[-160,-5],pair:$("#top-placement-end")}),$("#top-placement-end").Zebra_DatePicker({show_icon:!1,direction:!0,offset:[-160,-5]}),$("#latest-answer-date").Zebra_DatePicker({show_icon:!1,direction:10,offset:[-160,-5]})});