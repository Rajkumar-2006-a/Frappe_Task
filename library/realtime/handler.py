from frappe.realtime import Socket, realtime


@realtime.on("project_subscribe")
def project_subscribe(socket: Socket, project: str) -> None:
    print("🔥 REALTIME HANDLER CALLED")
    print("User:", socket.user)
    print("Project:", project)

    socket.emit(
        "project_subscribed",
        {"project": project}
    )