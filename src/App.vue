<template>
  
  <nav>
    <div>
      <RouterLink to="/products">
        Overzicht van alle producten
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/products/create">
        <button type="button">Product toevoegen</button>
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/products/order">
        <button type="button">Producten bestellen</button>
      </RouterLink>
    </div>
  </nav>
  
  <main>
    <RouterView />
  </main>

</template>
