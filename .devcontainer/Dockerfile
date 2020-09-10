# For information on the contents of the container image below, see following Dockerfile:
# https://github.com/microsoft/vscode-dev-containers/tree/v0.43.0/containers/javascript-node-12/.devcontainer/Dockerfile
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:14

ARG USER_UID=1000
ARG USER_GID=$USER_UID
ARG USERNAME=node

ADD .zshrc /home/$USERNAME/.zshrc

RUN if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then \
  groupmod --gid $USER_GID $USERNAME \
  && usermod --uid $USER_UID --gid $USER_GID $USERNAME \
  && chown -R $USER_UID:$USER_GID /home/$USERNAME; \
  fi \
  #
  # Avoid having to use "sudo" with "npm -g" when running as non-root user
  && SNIPPET='if [ "$(stat -c %U /usr/local/lib/node_modules)" != "$(id -u)" ]; then \
  sudo chown -R $(id -u):root /usr/local/lib/node_modules \
  && sudo chown -R $(id -u):root /usr/local/bin; \
  fi' \
  && echo $SNIPPET >> /home/$USERNAME/.bashrc \
  && echo $SNIPPET >> /home/$USERNAME/.zshrc \
  && chown $USERNAME /home/$USERNAME/.bashrc /home/$USERNAME/.zshrc \
  && mkdir -p /home/$USERNAME/.vscode-server/extensions \
  && mkdir -p /home/$USERNAME/.vscode-server/extensionsCache \
  && chown -R $USERNAME /home/$USERNAME/.vscode-server

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
  && apt-get -y install gawk \
  #
  # Clean up
  && apt-get autoremove -y \
  && apt-get clean -y \
  && rm -rf /var/lib/apt/lists/*
ENV DEBIAN_FRONTEND=dialog

USER $USER_UID
