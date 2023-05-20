<script lang="ts">
	import type { Education } from '../../../lib/resumes/v1';
	export let education: Education;
</script>

<div>{education.school}</div>
<div>{education.degree}</div>
<div>{education.concentration}</div>
<div>{education.date}</div>
