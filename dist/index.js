document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".upload__input"),t=document.querySelector(".upload__table"),n=document.querySelector(".upload__table-body");function i(){const e=document.querySelector(".upload__request-text");0===n.children.length?(t.setAttribute("hidden","hidden"),e.removeAttribute("hidden","hidden")):(t.removeAttribute("hidden","hidden"),e.setAttribute("hidden","hidden"))}e.addEventListener("change",function(){const t=document.createElement("tr");t.setAttribute("class","upload__table-item");const s=e.files,a=parseInt(.001*s[0].size),c=`\n        <th> \n        <i class="fas fa-file-alt file-icon"></i>\n        ${s[0].name}\n        </th>\n        <td>${a}kb</td>\n        <td>842</td>\n        <td><i class="fas fa-trash remove-icon"></i></td>`;t.innerHTML+=c,n.appendChild(t),i()}),t.addEventListener("click",e=>{const t=e.target,n=t.closest(".upload__table-item");t.classList.contains("fa-trash")&&n.remove(),i()}),$(".chosen-select").chosen({width:"100%"});const s=document.querySelector(".urgency__input");function a(){const e=event.target.value;let t,n;!function(e,t){const n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET",e,!0),n.onreadystatechange=function(){4===n.readyState&&"200"==n.status&&t(n.responseText)},n.send(null)}("urgency.json",function(i){const s=JSON.parse(i).urgencyType[0];switch(e){case"0":n=s.gotTime,t="I got time";break;case"1":n=s.average,t="Average";break;case"2":n=s.yesterday,t="Yesterday"}!function(e,t){const n=document.querySelector(".input-description-text"),i=`With an <span class="urgency__input-value">${e}</span> timeline set up, ${t}`;n.innerHTML=i}(t,n)})}s.addEventListener("change",a),s.addEventListener("input",a)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlucHV0VXBsb2FkIiwicXVlcnlTZWxlY3RvciIsImZpbGVMaXN0UGFyZW50IiwiZmlsZUxpc3QiLCJpc0xpc3RFbXB0eSIsInJlcXVlc3RUZXh0IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsaXN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmaWxlcyIsInNpemUiLCJwYXJzZUludCIsImNoaWxkIiwibmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZXZlbnQiLCJmaWxlIiwidGFyZ2V0IiwicGFyZW50IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiJCIsImNob3NlbiIsIndpZHRoIiwidXJnZW5jeUlucHV0IiwiZ2V0VXJnZW5jeVR5cGUiLCJ2YWx1ZSIsInVyZ2VuY3lUeXBlIiwidXJnZW5jeVRleHQiLCJjYWxsYmFjayIsInJhd0ZpbGUiLCJYTUxIdHRwUmVxdWVzdCIsIm92ZXJyaWRlTWltZVR5cGUiLCJvcGVuIiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsInNlbmQiLCJyZWFkSnNvbkZpbGUiLCJ0ZXh0IiwidXJnZW5jeVRleHRzIiwiSlNPTiIsInBhcnNlIiwiZ290VGltZSIsImF2ZXJhZ2UiLCJ5ZXN0ZXJkYXkiLCJ1cmdlbmN5RGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiJBQUFBQSxTQUFTQyxpQkFBaUIsbUJBQW9CLFdBRTFDLE1BQU1DLEVBQWNGLFNBQVNHLGNBQWMsa0JBQ3JDQyxFQUFpQkosU0FBU0csY0FBYyxrQkFDeENFLEVBQVdMLFNBQVNHLGNBQWMsdUJBdUJ4QyxTQUFTRyxJQUNQLE1BQU1DLEVBQWNQLFNBQVNHLGNBQWMseUJBQ0EsSUFBN0JFLEVBQVNHLFNBQVNDLFFBRTlCTCxFQUFlTSxhQUFhLFNBQVUsVUFDdENILEVBQVlJLGdCQUFnQixTQUFVLFlBRXRDUCxFQUFlTyxnQkFBZ0IsU0FBVSxVQUN6Q0osRUFBWUcsYUFBYSxTQUFVLFdBN0J2Q1IsRUFBWUQsaUJBQWlCLFNBRTdCLFdBQ0UsTUFBTVcsRUFBY1osU0FBU2EsY0FBYyxNQUMzQ0QsRUFBWUYsYUFBYSxRQUFTLHNCQUNsQyxNQUFNSSxFQUFRWixFQUFZWSxNQUVwQkMsRUFBT0MsU0FEWSxLQUNIRixFQUFNLEdBQUdDLE1BQ3pCRSxpRkFHRkgsRUFBTSxHQUFHSSxvQ0FFTEgsNEZBR1JILEVBQVlPLFdBQWFGLEVBQ3pCWixFQUFTZSxZQUFZUixHQUNyQk4sTUFlRkYsRUFBZUgsaUJBQWlCLFFBQVNvQixJQUN2QyxNQUFNQyxFQUFPRCxFQUFNRSxPQUNiQyxFQUFTRixFQUFLRyxRQUFRLHVCQUM1QkgsRUFBS0ksVUFBVUMsU0FBUyxhQUFjSCxFQUFPSSxTQUM3Q3RCLE1BRUp1QixFQUFFLGtCQUFrQkMsT0FBTyxDQUN2QkMsTUFBTyxTQUVYLE1BQU1DLEVBQWVoQyxTQUFTRyxjQUFjLG1CQWU1QyxTQUFTOEIsSUFDTCxNQUFNQyxFQUFRYixNQUFNRSxPQUFPVyxNQUM3QixJQUFJQyxFQUNBQyxHQWhCTixTQUFzQmQsRUFBTWUsR0FDMUIsTUFBTUMsRUFBVSxJQUFJQyxlQUVwQkQsRUFBUUUsaUJBQWlCLG9CQUN6QkYsRUFBUUcsS0FBSyxNQUFPbkIsR0FBTSxHQUMxQmdCLEVBQVFJLG1CQUFxQixXQUhOLElBSWpCSixFQUFRSyxZQUFtRCxPQUFsQkwsRUFBUU0sUUFDbkRQLEVBQVNDLEVBQVFPLGVBR3JCUCxFQUFRUSxLQUFLLE1BUWJDLENBQWEsZUFBZ0IsU0FBU0MsR0FDcEMsTUFFTUMsRUFGV0MsS0FBS0MsTUFBTUgsR0FDSGIsWUFDSSxHQUM3QixPQUFRRCxHQUNKLElBQUssSUFDTEUsRUFBY2EsRUFBYUcsUUFDM0JqQixFQUFjLGFBQ2QsTUFDRixJQUFLLElBQ0RDLEVBQWNhLEVBQWFJLFFBQzNCbEIsRUFBYyxVQUNkLE1BQ0osSUFBSyxJQUNIQyxFQUFjYSxFQUFhSyxVQUMzQm5CLEVBQWMsYUFPdEIsU0FBdUJBLEVBQWFDLEdBQ2xDLE1BQU1tQixFQUFxQnZELFNBQVNHLGNBQWMsMkJBQzVDYyxnREFBc0RrQiw2QkFBdUNDLElBQ25HbUIsRUFBbUJwQyxVQUFZRixFQVA3QkosQ0FBY3NCLEVBQWFDLEtBVS9CSixFQUFhL0IsaUJBQWlCLFNBQVVnQyxHQUN4Q0QsRUFBYS9CLGlCQUFpQixRQUFTZ0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgLy89IHNyYy9jb21wb25lbnRzL0Zvcm0vdXBsb2FkL3VwbG9hZC5qc1xyXG4gIC8vPSBzcmMvY29tcG9uZW50cy9Gb3JtL2xhbmd1YWdlL2xhbmd1YWdlLmpzXHJcbiAgLy89IHNyYy9jb21wb25lbnRzL0Zvcm0vdXJnZW5jeS91cmdlbmN5LmpzXHJcbn0pO1xyXG4iXX0=
