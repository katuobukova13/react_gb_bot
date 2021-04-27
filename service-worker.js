const doCache = true;
// Имя кэша
const CACHE_NAME = "react-chat-cache";
// Очищает старый кэш
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            console.log("Deleting cache: " + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});
// 'install' вызывается, как только пользователь впервые открывает PWA
self.addEventListener("install", (event) => {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        // Получаем данные из манифеста (они кэшируются)
        fetch("manifest.json")
          .then((response) => {
            response.json();
          })
          .then((assets) => {
            // Открываем и кэшируем нужные страницы и файлы
            const urlsToCache = ["/", "/chats/*"];
            cache.addAll(urlsToCache);
            console.log("cached");
          });
      })
    );
  }
});

// Когда приложение запущено, service worker перехватывает запросы и отвечает наних данными из кеша, если они есть
self.addEventListener("fetch", (event) => {
  console.log("fetch", event.request.url);
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
