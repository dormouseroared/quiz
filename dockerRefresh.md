Ah, excellent question, Nigel! 🛠️ If you’ve made changes to the source code of your quiz app, then yes — you’ll want to _refresh_ the Docker image to reflect those updates. But the good news is, the workflow is faster and smoother once you’ve done it the first time. Here’s a quick rundown:

---

### 🔁 Update & Rebuild the Docker Image

1. **Edit your source code**  
   Make your changes in the app files.

2. **Rebuild the image**

    ```bash
    docker build -t quiz-app .
    ```

    If you want to version it:

    ```bash
    docker build -t quiz-app:v2 .
    ```

---

### 🚀 Then Choose How to Share

- **Re-export as `.tar` if you're using manual transfer:**

    ```bash
    docker save -o quiz-app-v2.tar quiz-app:v2
    ```

- **Or, re-tag and push again if using Docker Hub:**
    ```bash
    docker tag quiz-app:v2 yourusername/quiz-app:v2
    docker push yourusername/quiz-app:v2
    ```

---

Once you've set up your flow, it’s mostly rinse and repeat: rebuild, repackage, re-deploy. Want help streamlining this with automation or using `docker-compose`? I’ve got ideas. 😄
