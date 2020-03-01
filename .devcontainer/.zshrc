export LC_ALL=C.UTF-8
export LANGUAGE=C.UTF-8
export LANG=C.UTF-8

export PATH=$HOME/bin:/usr/local/bin:$PATH

export ZSH="$HOME/.oh-my-zsh"
export ZPLUG_HOME="$HOME/.zplug"
export ZSH_CACHE_DIR="$ZPLUG_HOME/cache"
export _Z_DATA="$ZPLUG_HOME/cache/z"

HISTFILE="$ZPLUG_HOME/.zsh_history"
HISTSIZE=50000
SAVEHIST=10000

# ===== History
setopt append_history         # Allow multiple terminal sessions to all append to one zsh command history
setopt extended_history       # save timestamp of command and duration
setopt inc_append_history     # Add comamnds as they are typed, don't wait until shell exit
setopt hist_expire_dups_first # when trimming history, lose oldest duplicates first
setopt hist_find_no_dups      # when searching history don't display results already cycled through twice
setopt hist_reduce_blanks     # remove extra blanks from each command line being added to history
setopt hist_verify            # don't execute, just expand history
setopt share_history          # imports new commands and appends typed commands to history
setopt hist_no_store          # remove the history (fc -l) command from the history list when invoked
setopt long_list_jobs         # list jobs in the long format by default

# ===== Completion
setopt always_to_end     # when completing from the middle of a word, move the cursor to the end of the word
setopt auto_menu         # show completion menu on successive tab press. needs unsetop menu_complete to work
setopt auto_name_dirs    # any parameter that is set to the absolute name of a directory immediately becomes a name for that directory
setopt complete_in_word  # allow completion from within a word/phrase
setopt auto_list         # automatically list choices on ambiguous completion.
unsetopt completealiases # an alias of a command should complete to the command completion
unsetopt menu_complete   # do not autoselect the first completion entry
unsetopt flowcontrol     # do not freezes output to the terminal until you type ^q

if [[ ( ! -d ~/.zplug ) || ( ! -e ~/.zplug/init.zsh ) ]];then
  git clone https://github.com/zplug/zplug $ZPLUG_HOME
fi

source $ZPLUG_HOME/init.zsh

zplug "plugins/common-aliases", from:oh-my-zsh
zplug "plugins/git", from:oh-my-zsh
zplug "plugins/cp", from:oh-my-zsh
zplug "plugins/z", from:oh-my-zsh
zplug "plugins/sudo", from:oh-my-zsh
zplug "plugins/command-not-found", from:oh-my-zsh
zplug "plugins/safe-paste", from:oh-my-zsh
zplug "plugins/last-working-dir", from:oh-my-zsh
zplug "plugins/compleat", from:oh-my-zsh
zplug "plugins/yarn", from:oh-my-zsh
zplug "plugins/npm", from:oh-my-zsh

zplug "zsh-users/zsh-autosuggestions"
zplug "zsh-users/zsh-syntax-highlighting", defer:2
zplug "zsh-users/zsh-history-substring-search", defer:3
zplug "zsh-users/zsh-completions"
zplug "supercrabtree/k"
zplug "psprint/zsh-navigation-tools"

zplug "mafredri/zsh-async", from:github
zplug "sindresorhus/pure", use:pure.zsh, from:github, as:theme

if ! zplug check --verbose; then
  zplug install
fi

DEFAULT_USER=`id -un`

bindkey  "^[[H"   beginning-of-line
bindkey  "^[[F"   end-of-line

ZSH_THEME=""

zplug load
