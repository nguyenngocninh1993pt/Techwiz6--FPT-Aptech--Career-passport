// Thêm biến lưu vị trí chuột
let mouseX = 0, mouseY = 0;
let targetRotX = 0, targetRotY = 0;

document.addEventListener("mousemove", (event) => {
  const halfW = window.innerWidth / 2;
  const halfH = window.innerHeight / 2;

  // Giá trị -1 → 1
  mouseX = (event.clientX - halfW) / halfW;
  mouseY = (event.clientY - halfH) / halfH;

  // Góc nghiêng mục tiêu
  targetRotX = mouseY * 0.3; // xoay theo trục X
  targetRotY = mouseX * 0.3; // xoay theo trục Y
});

function animate(time) {
  uniforms.u_time.value = time * 0.001;

  // Hiệu ứng xoay theo chuột (lerp để mượt)
  mesh.rotation.x += (targetRotX - mesh.rotation.x) * 0.05;
  mesh.rotation.y += (targetRotY - mesh.rotation.y) * 0.05;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
