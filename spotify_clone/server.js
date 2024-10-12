window.addEventListener("load", async () => {
    const result = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization:
          "Bearer BQA1k0PdQqNceYZheVMe8krjl_YHlc4xO3JD5DAacpZwxMIWapF9G08W7WvM9j-FYrlx3bsKyaGGvbmABMkZYIiBE7t_uAiz4LjtfZIyR3TUXM4k_bM",
      },
    });
  
    console.log(result);
  });
  