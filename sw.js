self.addEventListener('push', e => {
  const d = e.data ? e.data.json() : { title: 'SVE Parts', body: 'Update' };
  e.waitUntil(self.registration.showNotification(d.title, {
    body: d.body,
    icon: 'https://em-content.zobj.net/source/apple/391/wrench_1f527.png',
    vibrate: [200, 100, 200],
    tag: 'sve'
  }));
});
self.addEventListener('notificationclick', e => e.notification.close());
