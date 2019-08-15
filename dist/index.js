document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".upload__input"),t=document.querySelector(".upload__table"),n=document.querySelector(".upload__table-body");function i(){const e=document.querySelector(".upload__request-text");0===n.children.length?(t.setAttribute("hidden","hidden"),e.removeAttribute("hidden","hidden")):(t.removeAttribute("hidden","hidden"),e.setAttribute("hidden","hidden"))}e.addEventListener("change",function(){const t=document.createElement("tr");t.setAttribute("class","upload__table-item");const a=e.files,c=parseInt(.001*a[0].size);let s=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;const d=`<th> \n      <i class="fas fa-file-alt file-icon"></i>\n      ${a[0].name}\n      </th>\n      <td><i class="fas fa-trash remove-icon"></i></td>`,o=`\n        <th> \n        <i class="fas fa-file-alt file-icon"></i>\n        ${a[0].name}\n        </th>\n        <td>${c}kb</td>\n        <td>842</td>\n        <td><i class="fas fa-trash remove-icon"></i></td>`;t.innerHTML+=s>768?o:d,n.appendChild(t),i()}),t.addEventListener("click",e=>{const t=e.target,n=t.closest(".upload__table-item");t.classList.contains("fa-trash")&&n.remove(),i()}),$(".chosen-select").chosen({width:"100%"});const a=document.querySelector(".urgency__input");function c(){const e=event.target.value;let t,n;!function(e,t){const n=new XMLHttpRequest;n.overrideMimeType("application/json"),n.open("GET",e,!0),n.onreadystatechange=function(){4===n.readyState&&"200"==n.status&&t(n.responseText)},n.send(null)}("urgency.json",function(i){const a=JSON.parse(i).urgencyType[0];switch(e){case"0":n=a.gotTime,t="I got time";break;case"1":n=a.average,t="Average";break;case"2":n=a.yesterday,t="Yesterday"}!function(e,t){const n=document.querySelector(".input-description-text"),i=`With an <span class="urgency__input-value">${e}</span> timeline set up, ${t}`;n.innerHTML=i}(t,n)})}a.addEventListener("change",c),a.addEventListener("input",c)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlucHV0VXBsb2FkIiwicXVlcnlTZWxlY3RvciIsImZpbGVMaXN0UGFyZW50IiwiZmlsZUxpc3QiLCJpc0xpc3RFbXB0eSIsInJlcXVlc3RUZXh0IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsaXN0RWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmaWxlcyIsInNpemUiLCJwYXJzZUludCIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwiYm9keSIsImNoaWxkTW9iaWxlIiwibmFtZSIsImNoaWxkVGFibGV0IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJwYXJlbnQiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCIkIiwiY2hvc2VuIiwid2lkdGgiLCJ1cmdlbmN5SW5wdXQiLCJnZXRVcmdlbmN5VHlwZSIsInZhbHVlIiwidXJnZW5jeVR5cGUiLCJ1cmdlbmN5VGV4dCIsImNhbGxiYWNrIiwicmF3RmlsZSIsIlhNTEh0dHBSZXF1ZXN0Iiwib3ZlcnJpZGVNaW1lVHlwZSIsIm9wZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0Iiwic2VuZCIsInJlYWRKc29uRmlsZSIsInRleHQiLCJ1cmdlbmN5VGV4dHMiLCJKU09OIiwicGFyc2UiLCJnb3RUaW1lIiwiYXZlcmFnZSIsInllc3RlcmRheSIsInVyZ2VuY3lEZXNjcmlwdGlvbiIsImNoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQUEsU0FBU0MsaUJBQWlCLG1CQUFvQixXQUM1QyxNQUFNQyxFQUFjRixTQUFTRyxjQUFjLGtCQUNyQ0MsRUFBaUJKLFNBQVNHLGNBQWMsa0JBQ3hDRSxFQUFXTCxTQUFTRyxjQUFjLHVCQThCeEMsU0FBU0csSUFDUCxNQUFNQyxFQUFjUCxTQUFTRyxjQUFjLHlCQUNBLElBQTdCRSxFQUFTRyxTQUFTQyxRQUU5QkwsRUFBZU0sYUFBYSxTQUFVLFVBQ3RDSCxFQUFZSSxnQkFBZ0IsU0FBVSxZQUV0Q1AsRUFBZU8sZ0JBQWdCLFNBQVUsVUFDekNKLEVBQVlHLGFBQWEsU0FBVSxXQXBDdkNSLEVBQVlELGlCQUFpQixTQUU3QixXQUNFLE1BQU1XLEVBQWNaLFNBQVNhLGNBQWMsTUFDM0NELEVBQVlGLGFBQWEsUUFBUyxzQkFDbEMsTUFBTUksRUFBUVosRUFBWVksTUFFcEJDLEVBQU9DLFNBRFksS0FDSEYsRUFBTSxHQUFHQyxNQUUvQixJQUFJRSxFQUFjQyxPQUFPQyxZQUFjbkIsU0FBU29CLGdCQUFnQkMsYUFBZXJCLFNBQVNzQixLQUFLRCxZQUM3RixNQUFNRSxtRUFFRlQsRUFBTSxHQUFHVSw2RUFHUEMsaUZBR0FYLEVBQU0sR0FBR1Usb0NBRUxULDRGQUd3QkgsRUFBWWMsV0FBOUNULEVBZnlCLElBZWtDUSxFQUF5Q0YsRUFDcEdsQixFQUFTc0IsWUFBWWYsR0FDckJOLE1BZUZGLEVBQWVILGlCQUFpQixRQUFTMkIsSUFDdkMsTUFBTUMsRUFBT0QsRUFBTUUsT0FDYkMsRUFBU0YsRUFBS0csUUFBUSx1QkFDNUJILEVBQUtJLFVBQVVDLFNBQVMsYUFBY0gsRUFBT0ksU0FDN0M3QixNQUVGOEIsRUFBRSxrQkFBa0JDLE9BQU8sQ0FDdkJDLE1BQU8sU0FFWCxNQUFNQyxFQUFldkMsU0FBU0csY0FBYyxtQkFlNUMsU0FBU3FDLElBQ0wsTUFBTUMsRUFBUWIsTUFBTUUsT0FBT1csTUFDN0IsSUFBSUMsRUFDQUMsR0FoQk4sU0FBc0JkLEVBQU1lLEdBQzFCLE1BQU1DLEVBQVUsSUFBSUMsZUFFcEJELEVBQVFFLGlCQUFpQixvQkFDekJGLEVBQVFHLEtBQUssTUFBT25CLEdBQU0sR0FDMUJnQixFQUFRSSxtQkFBcUIsV0FITixJQUlqQkosRUFBUUssWUFBbUQsT0FBbEJMLEVBQVFNLFFBQ25EUCxFQUFTQyxFQUFRTyxlQUdyQlAsRUFBUVEsS0FBSyxNQVFiQyxDQUFhLGVBQWdCLFNBQVNDLEdBQ3BDLE1BRU1DLEVBRldDLEtBQUtDLE1BQU1ILEdBQ0hiLFlBQ0ksR0FDN0IsT0FBUUQsR0FDSixJQUFLLElBQ0xFLEVBQWNhLEVBQWFHLFFBQzNCakIsRUFBYyxhQUNkLE1BQ0YsSUFBSyxJQUNEQyxFQUFjYSxFQUFhSSxRQUMzQmxCLEVBQWMsVUFDZCxNQUNKLElBQUssSUFDSEMsRUFBY2EsRUFBYUssVUFDM0JuQixFQUFjLGFBT3RCLFNBQXVCQSxFQUFhQyxHQUNsQyxNQUFNbUIsRUFBcUI5RCxTQUFTRyxjQUFjLDJCQUM1QzRELGdEQUFzRHJCLDZCQUF1Q0MsSUFDbkdtQixFQUFtQnBDLFVBQVlxQyxFQVA3QmxELENBQWM2QixFQUFhQyxLQVUvQkosRUFBYXRDLGlCQUFpQixTQUFVdUMsR0FDeENELEVBQWF0QyxpQkFBaUIsUUFBU3VDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gIC8vPSBzcmMvY29tcG9uZW50cy9Gb3JtL3VwbG9hZC91cGxvYWQuanNcclxuICAvLz0gc3JjL2NvbXBvbmVudHMvRm9ybS9sYW5ndWFnZS9sYW5ndWFnZS5qc1xyXG4gIC8vPSBzcmMvY29tcG9uZW50cy9Gb3JtL3VyZ2VuY3kvdXJnZW5jeS5qc1xyXG59KTtcclxuIl19
