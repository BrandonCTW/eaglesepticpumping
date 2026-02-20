# Eagle Septic Pumping Site Files

Site-specific content, scripts, and data for eaglesepticpumping.com.

## Autonomous Agent — Directory Improvement

Fixes content quality, taxonomy errors, creates hub pages, and publishes informational content to make the site sellable.

**Run the agent:**
```bash
cd eaglesepticpumping/agents && ./run-agent.sh directory
```

**Options:**
```bash
./run-agent.sh directory                  # Default: sonnet model, 10 loops
./run-agent.sh directory sonnet 10        # Explicit: sonnet model, 10 loops
./run-agent.sh directory opus 5           # High quality, fewer loops
./run-agent.sh directory haiku 20         # Fast pass, more loops
```

**Or run directly via ENGINE:**
```bash
WORK=/Users/brandonhopkins/Projects/seo/eagleseptic/agents/ MODEL="sonnet" MAX_LOOPS=10 bash ~/Projects/claude-lab/ENGINE/run.sh
```

**Watch logs:**
```bash
tail -f eaglesepticpumping/agents/output/agent-log.md
```

**Stop the agent:**
```bash
touch eaglesepticpumping/agents/output/STOP
```

**Recommended config:** `sonnet` model, `10` loops. Each loop fixes one listing or creates one page. 10 loops = ~10 improvements per session.

## Models

| Model | Quality | Speed | Use when |
|-------|---------|-------|----------|
| `opus` | Best | Slowest | Complex content creation, hub pages |
| `sonnet` | Good | Medium | Listing rewrites, taxonomy fixes (default) |
| `haiku` | Basic | Fastest | Bulk simple fixes, audit passes |

## Loops

Each loop is one full agent run (pick task, execute, log). More loops = more pages improved.

- `5` — Quick session, targeted fixes
- `10` — Standard session (default)
- `20+` — Extended session, bulk improvements
