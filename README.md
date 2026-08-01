## Controller Task

1. Create a new DocType named **Test Document**.
2. Add a **Description** field (Data or Text).
3. Open the auto-generated Python controller file:
   - `test_document.py`
4. Add a `before_save(self)` method to the controller.
5. If `self.description` is empty, set it to `"Default Description"`.
6. Save the file and test the DocType.

### Output

<img width="755" height="450" alt="Controller Output" src="https://github.com/user-attachments/assets/1f44f178-4f48-4c3c-ac43-02120b6a043e" />

---

## Hook Task

1. Created an `api.py` file in your custom app.
2. Added a `before_save` hook function in `api.py`.
3. Configure the hook in `hooks.py`.
4. Restart the bench and test the hook by saving a **Test Document**.

### Output

<img width="951" height="549" alt="Hook Output" src="https://github.com/user-attachments/assets/0ba1b764-7b06-4eec-a0cf-d63e272c663a" />
