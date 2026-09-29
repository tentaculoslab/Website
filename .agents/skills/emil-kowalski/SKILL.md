---
name: emil-kowalski
description: Emil Kowalski's design engineering philosophy and motion guidelines. Use when implementing or reviewing animations, micro-interactions, layout transitions, spring physics, gesture feedback, and UI craft.
---

# Emil Kowalski: Design Engineering & Motion

This skill is the direct alias for Emil Kowalski's core design engineering philosophy ([emil-design-eng](../emil-design-eng/SKILL.md)) and animation skill suite ([animate](../animate/SKILL.md), [review-animations](../review-animations/SKILL.md)).

## Core Principles

1. **Taste is trained, not innate:** Study why great interfaces feel right. Reverse engineer micro-interactions.
2. **Unseen details compound:** The best interactions feel so natural that users barely register them.
3. **Never `transition: all`:** Explicitly animate only the properties that change (`transform`, `opacity`).
4. **Spring Physics Over Easing Curves:** Use physics-based springs (`type: 'spring'`, `stiffness`, `damping`) for organic, interruptible interaction.
5. **Contextual Scaling:** Modals scale down gently (`scale(0.95) -> scale(1)`); dropdowns scale from their trigger `transform-origin`.
6. **Press Feedback:** Interactive elements must have immediate `:active` tactile response (`transform: scale(0.98)`).

For detailed review formats and full guides, refer to:
- [emil-design-eng](../emil-design-eng/SKILL.md)
- [animate](../animate/SKILL.md)
- [review-animations](../review-animations/SKILL.md)
- [mobile-native](../mobile-native/SKILL.md)
- [apple-design](../apple-design/SKILL.md)
