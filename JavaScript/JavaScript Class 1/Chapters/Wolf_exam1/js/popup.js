/*    JavaScript 7th Edition
      Exam 1

      Application to 
      Author: Thomas Wolf
      Date:   9/25/23

      Filename: purchasecontact.js
 */

function showInfo(index) {
    const description = descriptions[index];
    const imageUrl = images[index];

    const popupContent = `
        <div>
            <p>${description}</p>
            <img src="${imageUrl}" alt="Image of ${description}">
        </div>
    `;

    const popupWindow = window.open("", "InfoPopup", "width=300,height=200");
    popupWindow.document.write(popupContent);
    popupWindow.document.close();
}
